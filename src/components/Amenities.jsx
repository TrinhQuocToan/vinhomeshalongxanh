import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Waves, HeartPulse, GraduationCap, Trees, Leaf, Ticket } from 'lucide-react';

const featuredAmenities = [
  {
    image: '/vinSpeed.png',
    title: 'Đường Sắt Tốc Độ Cao VinSpeed',
    subtitle: 'TỐC ĐỘ 350 KM/H • KẾT NỐI HÀ NỘI - HẠ LONG',
    desc: 'Tuyến đường sắt tốc độ cao VinSpeed mang tính cách mạng với vận tốc thiết kế lên tới 350 km/h. Hạ tầng chiến lược này rút ngắn toàn bộ quãng đường kết nối trực tiếp từ Thủ đô Hà Nội đến tâm điểm Vịnh Hạ Long chỉ mất đúng 23 phút di chuyển. VinSpeed phá vỡ mọi giới hạn về không gian, biến siêu đô thị nghỉ dưỡng biển trở thành điểm đến làm việc và tận hưởng cuối tuần nhanh chóng, thuận tiện chưa từng có.'
  },
  {
    image: '/sanGolf.png',
    title: 'Quần Thể Liên Hoàn Sân Golf',
    subtitle: '12 SÂN GOLF • QUY MÔ 660HA LỚN NHẤT VIỆT NAM',
    desc: 'Quần thể 12 sân golf quy mô hơn 660ha - chính thức ghi danh là điểm đến và thiên đường golf lớn nhất Việt Nam. Được bao bọc bởi cảnh quan vịnh biển tuyệt mỹ cùng thảm cỏ xanh ngút ngàn, đây là nơi hội tụ tinh hoa thiết kế đỉnh cao, mang đến những vòng golf thử thách và trải nghiệm thể thao nghỉ dưỡng độc quyền xứng tầm giới thượng lưu.'
  },
  {
    image: '/ga.png',
    title: 'Biểu Tượng Giao Thương',
    subtitle: 'TOD GA DEPOT & PHỐ OUTLET 73HA',
    desc: 'Phát triển theo mô hình Đô thị giao thông sáng tạo (TOD), trung tâm Ga Depot kết hợp khu phố mua sắm Outlet quy mô 73ha kiến tạo một tam giác giao thương phồn hoa sầm uất. Tại đây, cư dân dễ dàng tiếp cận hệ thống kết nối di chuyển tốc độ cao, cùng lúc tận hưởng chuỗi dịch vụ mua sắm hàng hiệu quốc tế đẳng cấp suốt 365 ngày.'
  },
  {
    image: '/congvien.png',
    title: 'Lá Phổi Sinh Thái Khổng Lồ',
    subtitle: 'HỆ THỐNG TRẠM CÔNG VIÊN & LAGOON QUỐC TẾ',
    desc: 'Thừa hưởng kỳ quan tạo hóa thiên nhiên, dự án được bao bọc bởi hàng nghìn héc-ta mặt nước trong xanh trải dài từ biển hồ Lagoon cho tới hệ thống các công viên chủ đề đan xen linh hoạt. Kiến tạo một không gian sống hoàn toàn tách biệt khỏi ồn ào bụi bặm thành thị, đem lại nhịp đập nghỉ dưỡng thanh bình vĩnh cửu.'
  }
];

const smallAmenities = [
  { id: 'lagoon', icon: <Waves size={30} />, title: 'Biển Hồ 680 ha', desc: 'Sinh thái mặt nước khép kín đẳng cấp.', color: '#0077b6', accent: 'rgba(0,119,182,0.1)' },
  { id: 'mangrove', icon: <Trees size={30} />, title: 'Rừng Ngập Mặn 800 ha', desc: 'Bảo tồn Wonder Mangrove nguyên sinh.', color: '#166534', accent: 'rgba(22,101,52,0.08)' },
  { id: 'green-parks', icon: <Leaf size={30} />, title: 'Mảng Xanh Đa Tầng', desc: 'Phủ xanh từng tiểu khu nghỉ dưỡng.', color: '#16a34a', accent: 'rgba(22,163,74,0.08)' },
  { id: 'vinschool', icon: <GraduationCap size={30} />, title: 'Trường Vinschool', desc: 'Hệ thống giáo dục chuẩn quốc tế.', color: '#d35400', accent: 'rgba(211,84,0,0.08)' },
  { id: 'vinmec', icon: <HeartPulse size={30} />, title: 'Bệnh Viện Vinmec', desc: '14 ha Trung tâm y tế toàn diện.', color: '#c0392b', accent: 'rgba(192,57,43,0.08)' },
  { id: 'vinwonders', icon: <Ticket size={30} />, title: 'VinWonders & Safari', desc: '81 ha công viên và thú nuôi bán hoang dã.', color: '#8e44ad', accent: 'rgba(142,68,173,0.08)' },
];

function FeaturedRow({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      style={{
        display: 'flex',
        flexDirection: isReversed ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: '60px',
        marginBottom: '100px'
      }}
      className="featured-row"
    >
      {/* Huge Image Side */}
      <div style={{ flex: '2', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 30px 60px rgba(0,0,0,0.08)', position: 'relative', background: '#fff' }}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }}
          className="featured-img"
        />
      </div>

      {/* Text Side */}
      <div style={{ flex: '1', padding: '0 20px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#C5A059', letterSpacing: '0.1em', marginBottom: '16px' }}>
          {item.subtitle}
        </div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#002D5F', margin: '0 0 24px', lineHeight: 1.2 }}>
          {item.title}
        </h3>
        <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9, textAlign: 'justify' }}>
          {item.desc}
        </p>
        <div style={{ marginTop: '32px', width: '60px', height: '2px', background: '#e0c47e' }} />
      </div>

      <style>{`
        .featured-row:hover .featured-img {
          transform: scale(1.03);
        }
        @media (max-width: 992px) {
          .featured-row {
            flex-direction: column !important;
            gap: 32px !important;
            margin-bottom: 80px !important;
          }
          .featured-row > div {
            width: 100% !important;
            flex: none !important;
            padding: 0 !important;
          }
          .featured-img { min-height: auto !important; }
        }
      `}</style>
    </motion.div>
  );
}

export default function Amenities() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="amenities" style={{
      padding: 'clamp(80px, 10vw, 120px) 24px',
      background: '#fff',
    }}>
      {/* Header Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px' }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(197,160,89,0.12)',
            border: '1px solid rgba(197,160,89,0.3)',
            borderRadius: '40px', padding: '6px 20px',
            fontSize: '12px', fontWeight: 600, color: '#C5A059',
            letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px',
          }}>
            Chuỗi Đặc Quyền Tinh Hoa
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 700, color: '#c0392b',
            margin: '0 0 24px', textTransform: 'uppercase'
          }}>
            Tiện Ích Vinhomes Hạ Long Xanh
          </h2>
          <p style={{ color: '#555', fontSize: '16px', maxWidth: '850px', margin: '0 auto', lineHeight: 1.8, textAlign: 'center' }}>
            Vinhomes Hạ Long Xanh tích hợp toàn bộ tiện ích sống – từ biển hồ, rừng ngập mặn, trường học, bệnh viện đến sân golf và tàu cao tốc – trong một khuôn viên duy nhất quy mô khổng lồ. Mặt bằng tiện ích ảnh hưởng trực tiếp đến việc bạn chọn phân khu nào để ở, loại hình nào để kinh doanh, và vị trí nào để khai thác cho thuê sinh lời bền vững.
          </p>
        </motion.div>
      </div>

      {/* Massive Featured Images Section */}
      <div style={{ maxWidth: '1600px', margin: '0 auto 100px' }}>
        {featuredAmenities.map((item, i) => (
          <FeaturedRow key={i} item={item} index={i} />
        ))}
      </div>

      {/* Quick 6 Grid Summary (Icons) */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #f0f0f0', paddingTop: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#002D5F' }}>
            Tổng Hợp Thông Số Sinh Thái
          </h3>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {smallAmenities.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: 'flex', gap: '20px', alignItems: 'center',
                padding: '24px', background: '#faf9f7', borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: item.accent, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#002D5F', margin: '0 0 6px' }}>{item.title}</h4>
                <p style={{ fontSize: '13.5px', color: '#666', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
