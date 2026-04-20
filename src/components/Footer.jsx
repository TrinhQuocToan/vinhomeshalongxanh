import { Phone, MapPin, Mail } from 'lucide-react';

const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#000d1a',
      color: 'rgba(255,255,255,0.65)',
      padding: 'clamp(48px, 6vw, 80px) 24px 0',
      borderTop: '1px solid rgba(197,160,89,0.2)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '56px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <img src="/logo-vinhomes.png" alt="Vinhomes Global Gate" style={{ width: '140px', height: 'auto', transform: 'scale(1.15)', transformOrigin: 'left center' }} />
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.8, margin: '0 0 24px', color: 'rgba(255,255,255,0.55)', maxWidth: '240px' }}>
              Đơn vị phân phối chiến lược dự án Vinhomes Global Gate Hạ Long, cam kết minh bạch và chuyên nghiệp.
            </p>

          </div>

          {/* Nav links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, marginBottom: '20px', marginTop: 0, letterSpacing: '0.04em' }}>Điều Hướng</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Vị Trí', href: '#overview' },
                { label: 'Tiện Ích', href: '#amenities' },
                { label: 'Sản Phẩm', href: '#products' },
                { label: 'Liên Hệ Tư Vấn', href: '#contact' },
              ].map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.2s',
                      display: 'flex', alignItems: 'center', gap: '8px',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C5A059'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    <span style={{ color: '#C5A059', fontSize: '12px' }}>›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, marginBottom: '20px', marginTop: 0, letterSpacing: '0.04em' }}>Liên Hệ</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: <Phone size={15} />, text: '097 2733 234', href: 'tel:0901234567' },
                { icon: <Mail size={15} />, text: 'info@vinhomeshalongxanh.vn', href: 'mailto:info@vinhomeshalongxanh.vn' },
                { icon: <MapPin size={15} />, text: 'Hạ Long, Quảng Ninh, Việt Nam', href: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none', fontSize: '14px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C5A059'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  <span style={{ color: '#C5A059', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(197,160,89,0.15), rgba(197,160,89,0.05))',
              border: '1px solid rgba(197,160,89,0.3)',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <h4 style={{ color: '#C5A059', fontSize: '16px', fontWeight: 700, margin: '0 0 10px', fontFamily: "'Playfair Display', serif" }}>
                Nhận Tư Vấn Miễn Phí
              </h4>
              <p style={{ fontSize: '13px', lineHeight: 1.7, margin: '0 0 20px', color: 'rgba(255,255,255,0.55)' }}>
                Chuyên viên phản hồi trong 15 phút vào giờ hành chính.
              </p>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                style={{
                  display: 'block', textAlign: 'center',
                  background: 'linear-gradient(135deg, #C5A059, #e0c47e)',
                  color: '#002D5F', padding: '12px',
                  borderRadius: '6px', fontSize: '14px',
                  fontWeight: 700, textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'opacity 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Đăng Ký Ngay
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '24px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>

        </div>
      </div>
    </footer>
  );
}
