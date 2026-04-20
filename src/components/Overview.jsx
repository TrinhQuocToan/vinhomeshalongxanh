import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Navigation, CheckCircle2 } from 'lucide-react';

const locationHighlights = [
  { icon: <Clock size={20} />, title: '23 Phút', desc: 'Kết nối trực tiếp tới thủ đô Hà Nội thông qua hệ thống cao tốc và đường sắt tốc độ cao VinSpeed.' },
  { icon: <Navigation size={20} />, title: 'Trung Tâm', desc: 'Sở hữu vị trí trái tim của vịnh kỳ quan, dễ dàng kết nối đến các điểm du lịch nổi tiếng.' },
  { icon: <CheckCircle2 size={20} />, title: 'Đồng Bộ', desc: 'Hạ tầng giao thông hoàn chỉnh gồm đường bộ, đường biển và hàng không (sân bay Vân Đồn).' },
];

export default function Overview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="overview" style={{
      padding: 'clamp(60px, 8vw, 100px) 24px',
      background: 'linear-gradient(180deg, #f9f7f4 0%, #fff 100%)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(197,160,89,0.12)',
            border: '1px solid rgba(197,160,89,0.35)',
            borderRadius: '40px',
            padding: '6px 20px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#C5A059',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Vị Trí Dự Án
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#002D5F',
            margin: '0 0 16px',
          }}>
            Tọa Độ Hoàng Kim - Kết Nối Toàn Cầu
          </h2>
          <p style={{ color: '#666', fontSize: '16px', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            Vinhomes Global Gate sở hữu vị trí đắc địa bật nhất bên bờ Vịnh Hạ Long, mang lại lợi thế giao thương và giá trị sinh lời bền vững.
          </p>
          <div style={{
            width: '60px', height: '3px',
            background: 'linear-gradient(90deg, #C5A059, #e0c47e)',
            margin: '24px auto 0',
            borderRadius: '2px',
          }} />
        </motion.div>

        {/* Content Split */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '56px',
          alignItems: 'center',
        }}>
          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              width: '100%',
              height: '450px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,45,95,0.08)',
              border: '4px solid #fff',
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Vinhomes%20H%E1%BA%A1%20Long%20Xanh&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vị trí Vinhomes Hạ Long Xanh trên bản đồ"
            />
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#002D5F', marginBottom: '24px', fontFamily: "'Playfair Display', serif" }}>
              Trung tâm mới của Hạ Long
            </h3>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.8, marginBottom: '36px' }}>
              Với quỹ đất siêu lớn ven biển, dự án không chỉ thừa hưởng trọn vẹn cảnh quan thiên nhiên tuyệt mỹ mà còn chiếm lĩnh vị trí chiến lược trong việc phát triển kinh tế, du lịch của tỉnh Quảng Ninh.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {locationHighlights.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '48px', height: '48px',
                    background: 'linear-gradient(135deg, rgba(197,160,89,0.15), rgba(197,160,89,0.05))',
                    border: '1px solid rgba(197,160,89,0.2)',
                    color: '#C5A059',
                    borderRadius: '50%',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#002D5F', margin: '0 0 6px' }}>{item.title}</h4>
                    <p style={{ margin: 0, fontSize: '14px', color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
