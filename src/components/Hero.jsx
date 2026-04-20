import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Clock } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: 'easeOut' },
});

export default function Hero() {
  const handleCTA = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(rgba(0, 26, 61, 0.5), rgba(0, 45, 95, 0.8)), url("/banner.webp") center/cover no-repeat',
        padding: '120px 24px 80px',
      }}
    >
      {/* Background decorative elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Gold orbs */}
        <div style={{
          position: 'absolute', width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197,160,89,0.12) 0%, transparent 70%)',
          top: '-200px', right: '-100px',
        }} />
        <div style={{
          position: 'absolute', width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197,160,89,0.08) 0%, transparent 70%)',
          bottom: '-100px', left: '-50px',
        }} />
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(197,160,89,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(197,160,89,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        {/* Diagonal accent */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '200px',
          background: 'linear-gradient(to top right, rgba(0,45,95,0.8) 0%, transparent 100%)',
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', width: '100%', textAlign: 'center' }}>
        {/* Location badge */}
        <motion.div {...fadeUp(0.1)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(197,160,89,0.15)', border: '1px solid rgba(197,160,89,0.4)',
            borderRadius: '40px', padding: '8px 20px',
            color: '#C5A059', fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em',
          }}>
            <MapPin size={14} />
            HẠ LONG, QUẢNG NINH — VIỆT NAM
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1 {...fadeUp(0.25)} style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1.15,
          margin: '0 0 16px',
          letterSpacing: '-0.01em',
        }}>
          Vinhomes Global Gate
          <br />
          <span style={{
            background: 'linear-gradient(90deg, #C5A059, #e0c47e, #C5A059)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Hạ Long</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p {...fadeUp(0.35)} style={{
          fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
          color: '#C5A059',
          margin: '0 0 16px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.15em'
        }}>
          Chủ Đầu Tư: Tập Đoàn Vingroup
        </motion.p>

        <motion.p {...fadeUp(0.4)} style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
          color: 'rgba(255,255,255,0.7)',
          margin: '0 0 40px',
          fontWeight: 300,
          lineHeight: 1.6,
          letterSpacing: '0.02em',
        }}>
          Thành Phố Kỳ Quan Kết Nối Toàn Cầu
        </motion.p>

        {/* 23min badge */}
        <motion.div {...fadeUp(0.5)} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '44px' }}>
          {[
            { icon: <Clock size={15} />, text: '23 phút đến Hà Nội' },
            { icon: null, text: '6.206 ha siêu đô thị' },
            { icon: null, text: '18 tỷ USD đầu tư' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '6px', padding: '8px 18px',
              color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 500,
            }}>
              {item.icon}
              {item.text}
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.65)} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            id="hero-cta-btn"
            onClick={handleCTA}
            style={{
              background: 'linear-gradient(135deg, #C5A059, #e0c47e)',
              color: '#002D5F',
              border: 'none',
              padding: '16px 40px',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.04em',
              boxShadow: '0 8px 32px rgba(197,160,89,0.4)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(197,160,89,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(197,160,89,0.4)'; }}
          >
            Nhận Báo Giá Ngay
          </button>
          <button
            onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'transparent',
              color: '#ffffff',
              border: '1.5px solid rgba(255,255,255,0.35)',
              padding: '16px 36px',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: 500,
              cursor: 'pointer',
              letterSpacing: '0.04em',
              transition: 'border-color 0.3s, color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C5A059'; e.currentTarget.style.color = '#C5A059'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = '#ffffff'; }}
          >
            Khám Phá Dự Án
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ marginTop: '64px', display: 'flex', justifyContent: 'center', color: 'rgba(197,160,89,0.6)' }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </div>
    </section>
  );
}
