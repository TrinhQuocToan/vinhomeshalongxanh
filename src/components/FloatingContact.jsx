import { Phone, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FloatingContact() {
  const navigate = useNavigate();

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      left: '30px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'flex-start'
    }}>
      {/* Nhận Báo Giá Button */}
      <button
        onClick={() => {
          navigate('/#contact');
          setTimeout(() => {
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        style={{
          background: '#00b4d8',
          color: '#ffffff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: '0 6px 15px rgba(0, 180, 216, 0.4)',
          transition: 'transform 0.2s',
          fontSize: '14px',
          letterSpacing: '0.02em'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <FileText size={18} /> NHẬN BÁO GIÁ
      </button>

      {/* Hotline Button */}
      <a
        href="tel:0904536822"
        style={{
          background: '#d90429',
          color: '#ffffff',
          textDecoration: 'none',
          padding: '10px 20px',
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontWeight: 700,
          boxShadow: '0 6px 15px rgba(217, 4, 41, 0.4)',
          transition: 'transform 0.2s',
          fontSize: '14px',
          letterSpacing: '0.02em'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Hotline: 0972733234
      </a>
    </div>
  );
}
