import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Map, Star, Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const phanKhuData = {
  'chau-my': {
    name: 'Phân Khu Châu Mỹ',
    slogan: 'Tâm Điểm Giải Trí Sôi Động & Nghỉ Dưỡng Đẳng Cấp',
    image: '/phan-khu/chauMy/chauMy.jpg',
    area: '6.206 ha (Siêu Đô Thị)',
    style: 'Sôi động, Phóng khoáng, Vui chơi 24/7',
    products: 'Biệt thự, Shophouse, Dinh thự',
    precincts: ["Vịnh Ngọc Trai", "Vịnh Nhiệt Đới", "Vịnh Thiên Đường", "Vịnh Biển Xanh", "Vịnh Hải Đăng", "Vịnh Lam Ngọc", "Vịnh Nắng Hạ", "Vịnh San Hô", "Vịnh Ánh Dương"],
    amenities: ["Hệ thống biển Lagoon tỷ đô lớn nhất khu vực", "Sân Golf 18 hố ven biển độc bản", "Phố thương mại Outlet sầm uất đa trải nghiệm", "Trục cảnh quan trung tâm & Công viên phức hợp"],
    desc: "Thuộc siêu dự án Vinhomes Global Gate Hạ Long quy mô 6.206ha, Phân Khu Châu Mỹ (America Wonder) là trái tim chiến lược được quy hoạch trở thành đại trung tâm giải trí và nghỉ dưỡng đỉnh cao. Sở hữu tầm nhìn bao trọn Vịnh, phân khu tập trung toàn bộ hệ thống tiện ích đồ sộ giúp cư dân tinh hoa tận hưởng một 'kỳ nghỉ không bao giờ kết thúc'."
  },
  'chau-au': {
    name: 'Phân Khu Châu Âu',
    slogan: 'Không Gian Sống Nghệ Thuật Lãng Mạn',
    image: '/phankhu.jpg',
    area: 'Đang cập nhật',
    style: 'Cổ điển, Sang trọng, Lãng mạn phương Tây',
    products: 'Biệt thự Lâu Đài, Liền kề, Nhà phố',
    precincts: ["Tiểu khu Làng Pháp", "Tiểu khu Venice", "Tiểu khu Monaco", "Tiểu khu Athen"],
    amenities: ["Quảng trường Hoàng Gia tráng lệ", "Kênh đào Venice chạy quanh phân khu", "Công viên điêu khắc nghệ thuật Châu Âu", "Nhà hát Opera & Trung tâm tiệc cưới"],
    desc: "Lấy cảm hứng từ những thành phố tráng lệ bậc nhất phương Tây, Phân Khu Châu Âu kiến tạo một không gian sống đậm chất nghệ thuật, phác họa lại kiến trúc Phục Hưng kinh điển. Từng dãy phố, khu biệt thự đều được tinh chỉnh hoàn mỹ với những điểm nhấn kiến trúc sang trọng, vươn mình kiêu hãnh bên mặt nước xanh ngát của kỳ quan thiên nhiên thế giới."
  },
  'chau-a': {
    name: 'Phân Khu Châu Á',
    slogan: 'Tinh Hoa Văn Hóa & Bản Sắc Á Đông',
    image: '/phankhu.jpg',
    area: '1.550 ha',
    style: 'Tĩnh tại, Hài hòa thiên nhiên, An yên',
    products: 'Biệt thự Vườn, Shophouse, Căn hộ',
    precincts: ["Tiểu khu Kyoto", "Tiểu khu Đông Dương", "Tiểu khu Seoul"],
    amenities: ["Vườn Nhật Bản Zen Garden", "Bảo tàng giao lưu văn hóa Á Đông", "Khu tắm khoáng nóng Onsen cao cấp", "Hệ thống đền tự và tháp biểu tượng"],
    desc: "Phân khu Châu Á là phân khu lớn nhất trong toàn bộ dự án với tỷ lệ không gian cảnh quan mặt nước và không gian mở chiếm ưu thế tuyệt đối. Nơi đây mang đến sự an yên, dung dị nhưng không kém phần đương đại, cực kỳ phù hợp với những người tiên phong theo đuổi phong cách sống nghỉ dưỡng trọn vẹn, tìm về sự cân bằng Tâm - Thân - Trí."
  },
  'chau-uc': {
    name: 'Phân Khu Châu Úc',
    slogan: 'Cuộc Sống Phóng Khoáng Cùng Thiên Nhiên',
    image: '/phankhu.jpg',
    area: 'Đang cập nhật',
    style: 'Sinh thái, Năng động, Gần gũi',
    products: 'Biệt thự sinh thái, Shophouse',
    precincts: ["Tiểu khu Sydney", "Tiểu khu Gold Coast", "Tiểu khu Melbourne"],
    amenities: ["Công viên sinh thái hoang dã thu nhỏ", "Khu thể thao mạo hiểm dưới nước mặt biển", "Khu dã ngoại thảm cỏ khổng lồ", "Sân Tennis chuẩn thiết kế quốc tế"],
    desc: "Mang hơi thở của nước Úc tự do và khoáng đạt, Phân Khu Châu Úc được bao phủ bởi mảng xanh tự nhiên đồ sộ và những cung đường dạo bộ uốn lượn ven biển. Nơi đây hứa hẹn trở thành không gian sống cực kỳ thân thiện với thiên nhiên, dành cho những gia đình tìm kiếm lối sống năng động và tràn đầy năng lượng tươi sáng."
  },
  'ky-quan-moi': {
    name: 'Phân Khu Kỳ Quan Mới',
    slogan: 'Biểu Tượng Của Tương Lai Đô Thị',
    image: '/phankhu.jpg',
    area: '788 ha',
    style: 'Hiện đại, Tiên phong công nghệ số',
    products: 'Căn hộ Smart Home, Shophouse siêu đô thị',
    precincts: ["Tiểu khu Tương Lai", "Tiểu khu Ánh Sáng", "Tiểu khu Công Nghệ"],
    amenities: ["Trung tâm điều hành Smart City 24/7", "Biểu tượng Tháp đôi công nghệ", "Công viên ánh sáng Laser phức hợp", "Khu đại cửu hàng thương mại miễn thuế"],
    desc: "Chiếm giữ vị trí hạt nhân với quy mô 788 ha, phân khu Kỳ Quan Mới mang trong mình khát vọng vươn tới mô hình đô thị của tương lai. Quy hoạch nổi bật với sự tích hợp trí tuệ nhân tạo (AI) vào quản lý phân khu, tiện nghi Smart Home và mạng lưới ánh sáng công nghệ vô cùng rực rỡ biến nơi đây trở thành thành phố không bao giờ ngủ."
  }
};

export default function PhanKhuDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = phanKhuData[id] || {
    name: `Phân Khu ${id}`,
    slogan: 'Đang cập nhật thông tin chi tiết',
    image: '/phankhu.jpg',
    area: 'CHƯA CÔNG BỐ', style: 'CHƯA CÔNG BỐ', products: 'CHƯA CÔNG BỐ',
    precincts: [], amenities: [], desc: "Cùng tận hưởng trải nghiệm sống tinh hoa bậc nhất với chuỗi tiện ích bất tận sắp được ra mắt tại dự án Vinhomes Global Gate Hạ Long..."
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#fdfdfc' }}>
      
      {/* Hero Header Line */}
      <div style={{ background: '#00254d', color: '#fff', padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#C5A059', textDecoration: 'none', fontWeight: 600, marginBottom: '32px' }}>
            <ArrowLeft size={18} /> Quay Lại Trang Chủ
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 16px' }}
          >
            {data.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', margin: 0, fontWeight: 400, letterSpacing: '0.02em', maxWidth: '800px' }}
          >
            {data.slogan}
          </motion.p>
        </div>
      </div>

      {/* Main Image Banner */}
      <div style={{ maxWidth: '1350px', margin: '-50px auto 60px', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            boxShadow: '0 30px 60px rgba(0,37,77,0.15)',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#fff',
            border: '8px solid #fff'
          }}
        >
          <img 
            src={data.image} 
            alt={data.name} 
            style={{ width: '100%', height: 'auto', maxHeight: '750px', objectFit: 'cover', display: 'block' }} 
          />
        </motion.div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 100px' }}>
        
        {/* Quick Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          {[
            { icon: <Map size={24} />, label: 'Quy Mô / Diện Tích', value: data.area },
            { icon: <Star size={24} />, label: 'Ngôn Ngữ Thiết Kế', value: data.style },
            { icon: <Target size={24} />, label: 'Sản Phẩm Đầu Tư', value: data.products },
          ].map((stat, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid #f0e8d6', borderRadius: '16px', padding: '28px',
              display: 'flex', gap: '20px', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
            }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(197,160,89,0.15), rgba(197,160,89,0.05))', color: '#C5A059', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: '13px', color: '#888', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#00254d' }}>{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Information Split */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '60px', alignItems: 'start' }} className="details-grid">
          
          {/* Left Column: Description & Precints */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', background: '#C5A059' }}></div>
              <h3 style={{ fontSize: '1.8rem', color: '#00254d', margin: 0, fontFamily: "'Playfair Display', serif" }}>
                Tổng Quan & Tọa Độ Vàng
              </h3>
            </div>
            
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#555', marginBottom: '48px', textAlign: 'justify' }}>
              {data.desc}
            </p>

            <h3 style={{ fontSize: '1.4rem', color: '#00254d', marginBottom: '24px', fontFamily: "'Playfair Display', serif" }}>
              Danh Sách Các Tiểu Khu Vệ Tinh
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {data.precincts.length > 0 ? data.precincts.map((pk, idx) => (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #fefdfe, #f6f3eb)',
                  border: '1px solid #e8dcbf', 
                  padding: '12px 24px', borderRadius: '30px',
                  fontSize: '14px', fontWeight: 600, color: '#aa8640',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
                }}>
                  {pk}
                </div>
              )) : <span style={{ color: '#888' }}>Chủ đầu tư đang cập nhật cơ cấu tiểu khu...</span>}
            </div>
          </div>

          {/* Right Column: Amenities & Call to Action */}
          <div style={{
            background: 'linear-gradient(180deg, #00254d 0%, #001833 100%)', 
            borderRadius: '16px', padding: '40px', color: '#fff',
            boxShadow: '0 20px 40px rgba(0,37,77,0.15)',
            position: 'sticky', top: '120px'
          }}>
            <h3 style={{ fontSize: '1.6rem', margin: '0 0 32px', fontFamily: "'Playfair Display', serif", color: '#e0c47e' }}>
              Đặc Quyền Tiện Ích
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {data.amenities.length > 0 ? data.amenities.map((am, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <CheckCircle2 size={20} color="#C5A059" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '15px', lineHeight: 1.5, color: 'rgba(255,255,255,0.85)' }}>{am}</span>
                </div>
              )) : <span style={{ color: '#888' }}>Chủ đầu tư đang cập nhật tiện ích...</span>}
            </div>

            <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', lineHeight: 1.6 }}>Đăng ký nhận thông tin mặt bằng 1/500 chi tiết và trọn bộ chính sách bán hàng mới nhất.</p>
              <button
                onClick={() => navigate('/#contact')}
                style={{
                  width: '100%', background: 'linear-gradient(135deg, #C5A059, #e0c47e)',
                  color: '#001833', padding: '16px', border: 'none', borderRadius: '8px',
                  fontSize: '15px', fontWeight: 700, cursor: 'pointer',
                  transition: 'opacity 0.2s', letterSpacing: '0.02em',
                  boxShadow: '0 8px 20px rgba(197,160,89,0.2)'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Nhận Báo Giá & Tài Liệu
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .details-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
