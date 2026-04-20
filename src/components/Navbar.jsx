import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const categories = [
  { label: 'CHÂU MỸ', path: '/phan-khu/chau-my' },
  { label: 'CHÂU ÂU', path: '/phan-khu/chau-au' },
  { label: 'CHÂU Á', path: '/phan-khu/chau-a' },
  { label: 'CHÂU ÚC', path: '/phan-khu/chau-uc' },
  { label: 'KỲ QUAN MỚI', path: '/phan-khu/ky-quan-moi' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleHashNav = (e, hash) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavItemStyles = {
    color: scrolled ? '#333' : 'rgba(255,255,255,0.9)',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: 700,
    transition: 'color 0.25s',
    textTransform: 'uppercase',
    cursor: 'pointer',
    padding: '24px 0',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <header
      id="navbar"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.04)' : 'none',
        padding: '0 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* Logo */}
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo(0, 0); }} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/logo-vinhomes.png" alt="Vinhomes" style={{ width: '130px', height: 'auto', transform: 'scale(1.15)', transformOrigin: 'left center' }} />
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center', height: '100%' }} className="desktop-nav">
          <a href="#hero" onClick={(e) => handleHashNav(e, '#hero')} style={NavItemStyles} className="nav-link">VINHOMES</a>
          <a href="#overview" onClick={(e) => handleHashNav(e, '#overview')} style={NavItemStyles} className="nav-link">VỊ TRÍ</a>
          <a href="#amenities" onClick={(e) => handleHashNav(e, '#amenities')} style={NavItemStyles} className="nav-link">TIỆN ÍCH</a>

          {/* Dropdown Container */}
          <div 
            style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#products" onClick={(e) => handleHashNav(e, '#products')} style={{...NavItemStyles, gap: '4px'}} className="nav-link dropdown-parent">
              PHÂN KHU <ChevronDown size={14} style={{ marginTop: '0px' }} />
            </a>
            
            {/* Dropdown Menu */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '75px', 
                    left: '-20px',
                    background: '#f7f7f7',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    borderRadius: '4px',
                    padding: '8px 0',
                    minWidth: '200px',
                    border: '1px solid #eaeaea',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {categories.map((cat, i) => (
                    <div 
                      key={i} 
                      onClick={() => { setDropdownOpen(false); navigate(cat.path); }}
                      style={{
                        padding: '12px 24px',
                        color: '#333',
                        fontSize: '13px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'background 0.2s, color 0.2s'
                      }}
                      className="dropdown-item"
                    >
                      {cat.label}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#products" onClick={(e) => handleHashNav(e, '#products')} style={NavItemStyles} className="nav-link">SẢN PHẨM</a>
          <a href="#contact" onClick={(e) => handleHashNav(e, '#contact')} style={NavItemStyles} className="nav-link">LIÊN HỆ</a>
          
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={{ background: 'none', border: 'none', color: scrolled ? '#333' : '#fff', cursor: 'pointer', padding: '8px', display: 'none' }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <style>{`
        .nav-link:hover, .dropdown-parent:hover {
          color: #c0392b !important;
        }
        .dropdown-item:hover {
          background: #fff;
          color: #c0392b !important;
        }
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
