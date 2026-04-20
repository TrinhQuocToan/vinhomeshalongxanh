import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, Map, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const subdivisions = [
  {
    id: "chau-my",
    name: "Phân Khu Châu Mỹ",
    desc: "Kỳ quan Châu Mỹ - Tâm điểm giải trí sôi động và nghỉ dưỡng đẳng cấp.",
    precincts: ["Vịnh Ngọc Trai", "Vịnh Nhiệt Đới", "Vịnh Thiên Đường", "Vịnh Biển Xanh", "Vịnh Hải Đăng", "Vịnh Lam Ngọc", "Vịnh Nắng Hạ", "Vịnh San Hô", "Vịnh Ánh Dương"]
  },
  {
    id: "chau-au",
    name: "Phân Khu Châu Âu",
    desc: "Kỳ quan Châu Âu - Không gian sống nghệ thuật, lãng mạn mang đậm kiến trúc hoàng gia.",
    precincts: ["Tiểu khu Làng Pháp", "Tiểu khu Venice", "Tiểu khu Monaco", "Tiểu khu Athen"]
  },
  {
    id: "chau-a",
    name: "Phân Khu Châu Á",
    desc: "Kỳ quan Châu Á - Nơi hội tụ tinh hoa văn hóa và vẻ đẹp truyền thống phương Đông.",
    precincts: ["Tiểu khu Kyoto", "Tiểu khu Đông Dương", "Tiểu khu Seoul"]
  },
  {
    id: "chau-uc",
    name: "Phân Khu Châu Úc",
    desc: "Kỳ quan Châu Úc - Cuộc sống phóng khoáng, hòa mình trọn vẹn vào thiên nhiên ven biển.",
    precincts: ["Tiểu khu Sydney", "Tiểu khu Gold Coast", "Tiểu khu Melbourne"]
  },
  {
    id: "ky-quan-moi",
    name: "Phân Khu Thế Giới Mới",
    desc: "Kỳ quan Thế giới mới - Biểu tượng đô thị tương lai với công nghệ và trải nghiệm sống thông minh.",
    precincts: ["Tiểu khu Tương Lai", "Tiểu khu Ánh Sáng", "Tiểu khu Hiện Đại"]
  }
];

function AccordionItem({ data, isOpen, onClick }) {
  const navigate = useNavigate();

  return (
    <div style={{
      borderBottom: '1px solid rgba(197,160,89,0.2)',
      overflow: 'hidden',
    }}>
      <button
        onClick={onClick}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: isOpen ? 'rgba(197,160,89,0.05)' : 'transparent',
          border: 'none', padding: '20px 24px', cursor: 'pointer',
          textAlign: 'left', transition: 'background 0.3s',
        }}
      >
        <div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.4rem', fontWeight: 700,
            color: isOpen ? '#C5A059' : '#002D5F',
            margin: '0 0 4px', transition: 'color 0.3s',
          }}>{data.name}</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{data.desc}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: isOpen ? '#C5A059' : '#002D5F', flexShrink: 0, marginLeft: '16px' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ padding: '0 24px 24px' }}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: '12px', marginTop: '16px'
              }}>
                {data.precincts.map((tkhu, idx) => (
                  <div key={idx} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: '#fff', border: '1px solid #eee',
                    padding: '8px 12px', borderRadius: '6px',
                    fontSize: '13px', color: '#444', fontWeight: 500,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                  }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C5A059', flexShrink: 0 }} />
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tkhu}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '24px' }}>
                <button
                  onClick={(e) => { e.stopPropagation(); window.scrollTo(0, 0); navigate(`/phan-khu/${data.id}`); }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: 'linear-gradient(135deg, #C5A059, #e0c47e)',
                    color: '#002D5F', border: 'none',
                    padding: '10px 20px', borderRadius: '6px',
                    fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                    transition: 'opacity 0.25s', letterSpacing: '0.04em'
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Xem Trang Chi Tiết Phân Khu <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Products() {
  const [openId, setOpenId] = useState(subdivisions[0].id);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-50px' });

  return (
    <section id="products" style={{
      padding: 'clamp(60px, 8vw, 100px) 24px',
      background: '#f9f7f4',
    }}>
      <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(197,160,89,0.12)',
            border: '1px solid rgba(197,160,89,0.35)',
            borderRadius: '40px', padding: '6px 20px',
            fontSize: '12px', fontWeight: 600,
            color: '#C5A059', letterSpacing: '0.15em',
            textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Các Phân Khu
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700, color: '#002D5F',
            margin: '0 0 16px',
          }}>
            Quy Hoạch Tổ Hợp Đại Dự Án
          </h2>
          <p style={{ color: '#666', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Khám phá 5 phân khu kỳ quan mang tầm vóc quốc tế, mỗi phân khu là một kiệt tác nghỉ dưỡng với hàng loạt tiểu khu đa dạng.
          </p>
          <div style={{
            width: '60px', height: '3px',
            background: 'linear-gradient(90deg, #C5A059, #e0c47e)',
            margin: '24px auto 0', borderRadius: '2px',
          }} />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '48px',
          alignItems: 'start',
        }} className="products-grid">
          {/* Left: Map Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: 'sticky', top: '100px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,45,95,0.08)',
              border: '4px solid #fff',
              background: '#fff',
            }}
          >
            <div style={{
              position: 'absolute', top: '16px', left: '16px',
              background: 'rgba(0, 29, 61, 0.85)', backdropFilter: 'blur(8px)',
              padding: '8px 16px', borderRadius: '30px',
              display: 'flex', alignItems: 'center', gap: '8px',
              color: '#fff', fontSize: '13px', fontWeight: 600,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              zIndex: 10,
            }}>
              <Map size={16} color="#C5A059" /> BẢN ĐỒ PHÂN KHU
            </div>
            <img 
              src="/phankhu.jpg" 
              alt="Bản đồ các phân khu và tiểu khu Vinhomes Hạ Long" 
              style={{ width: '100%', height: 'auto', display: 'block', minHeight: '300px', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
              border: '1px solid #f0e8d6',
              overflow: 'hidden'
            }}
          >
            {subdivisions.map((phankhu) => (
              <AccordionItem 
                key={phankhu.id} 
                data={phankhu} 
                isOpen={openId === phankhu.id} 
                onClick={() => setOpenId(openId === phankhu.id ? null : phankhu.id)} 
              />
            ))}
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
          .products-grid > div:first-child {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
