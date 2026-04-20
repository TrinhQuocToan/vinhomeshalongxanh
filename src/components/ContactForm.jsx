import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, MessageSquare, CheckCircle, Send, AlertCircle } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/maqabboj';

function InputField({ id, label, icon, type = 'text', placeholder, value, onChange, required }) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label htmlFor={id} style={{ fontSize: '13px', fontWeight: 600, color: '#002D5F', letterSpacing: '0.04em' }}>
        {label} {required && <span style={{ color: '#C5A059' }}>*</span>}
      </label>
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
          color: focused ? '#C5A059' : '#999', transition: 'color 0.2s',
          display: 'flex', alignItems: 'center',
          pointerEvents: 'none',
        }}>
          {icon}
        </div>
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            padding: '14px 16px 14px 44px',
            border: `1.5px solid ${focused ? '#C5A059' : '#e5e1d8'}`,
            borderRadius: '8px',
            fontSize: '15px',
            color: '#002D5F',
            background: '#fafaf9',
            outline: 'none',
            transition: 'border-color 0.25s, box-shadow 0.25s',
            boxShadow: focused ? '0 0 0 3px rgba(197,160,89,0.15)' : 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>
    </div>
  );
}

function TextareaField({ id, label, icon, placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label htmlFor={id} style={{ fontSize: '13px', fontWeight: 600, color: '#002D5F', letterSpacing: '0.04em' }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', left: '14px', top: '16px',
          color: focused ? '#C5A059' : '#999', transition: 'color 0.2s',
          display: 'flex', alignItems: 'center', pointerEvents: 'none',
        }}>
          {icon}
        </div>
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            padding: '14px 16px 14px 44px',
            border: `1.5px solid ${focused ? '#C5A059' : '#e5e1d8'}`,
            borderRadius: '8px',
            fontSize: '15px',
            color: '#002D5F',
            background: '#fafaf9',
            outline: 'none',
            resize: 'vertical',
            fontFamily: 'inherit',
            transition: 'border-color 0.25s, box-shadow 0.25s',
            boxShadow: focused ? '0 0 0 3px rgba(197,160,89,0.15)' : 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', note: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  const handleChange = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name: form.name, phone: form.phone, note: form.note }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{
      padding: 'clamp(60px, 8vw, 100px) 24px',
      background: 'linear-gradient(135deg, #001a3d 0%, #002D5F 60%, #003d7a 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decorative */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197,160,89,0.1) 0%, transparent 70%)',
          top: '-150px', right: '-100px',
        }} />
        <div style={{
          position: 'absolute', width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197,160,89,0.07) 0%, transparent 70%)',
          bottom: '-100px', left: '-50px',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(197,160,89,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(197,160,89,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}>
          {/* Left side info */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -30 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              display: 'inline-block',
              background: 'rgba(197,160,89,0.15)',
              border: '1px solid rgba(197,160,89,0.35)',
              borderRadius: '40px',
              padding: '6px 20px',
              fontSize: '12px', fontWeight: 600,
              color: '#C5A059', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: '20px',
            }}>
              Liên Hệ Tư Vấn
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700, color: '#ffffff',
              margin: '0 0 20px', lineHeight: 1.2,
            }}>
              Nhận Tư Vấn<br />
              <span style={{ color: '#C5A059' }}>Miễn Phí Ngay</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: 1.7, margin: '0 0 40px' }}>
              Để lại thông tin, chuyên viên sẽ liên hệ trong vòng <strong style={{ color: '#C5A059' }}>15 phút</strong> với đầy đủ thông tin và báo giá chi tiết nhất.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                '✓ Thông tin chính xác, cập nhật nhất',
                '✓ Tư vấn 1-1 với chuyên gia',
                '✓ Hỗ trợ thủ tục và pháp lý',
                '✓ Không bất kỳ chi phí ẩn',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
                  <span style={{ color: '#C5A059', fontWeight: 700 }}>{item.split(' ')[0]}</span>
                  <span>{item.slice(2)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: 'clamp(28px, 4vw, 44px)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
            }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ textAlign: 'center', padding: '40px 20px' }}
                >
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '80px', height: '80px', borderRadius: '50%',
                    background: 'rgba(22,163,74,0.1)', color: '#16a34a',
                    marginBottom: '24px',
                  }}>
                    <CheckCircle size={40} />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', color: '#002D5F', margin: '0 0 12px' }}>
                    Cảm Ơn Bạn!
                  </h3>
                  <p style={{ color: '#666', lineHeight: 1.7 }}>
                    Chúng tôi đã nhận được thông tin. Chuyên viên sẽ liên hệ bạn trong <strong>15 phút</strong>.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  id="contact-form"
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <div style={{ marginBottom: '8px' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#002D5F', margin: '0 0 4px' }}>
                      Đăng Ký Tư Vấn
                    </h3>
                    <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>Điền thông tin để nhận báo giá ưu đãi</p>
                  </div>

                  <InputField id="name" label="Họ và Tên" icon={<User size={16} />} placeholder="Nguyễn Văn A" value={form.name} onChange={handleChange('name')} required />
                  <InputField id="phone" label="Số Điện Thoại" icon={<Phone size={16} />} type="tel" placeholder="0901 234 567" value={form.phone} onChange={handleChange('phone')} required />

                  <TextareaField id="note" label="Ghi Chú" icon={<MessageSquare size={16} />} placeholder="Loại hình bất động sản quan tâm, ngân sách dự kiến..." value={form.note} onChange={handleChange('note')} />

                  {status === 'error' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dc2626', fontSize: '14px', background: '#fee2e2', padding: '12px 16px', borderRadius: '8px' }}>
                      <AlertCircle size={16} />
                      Đã có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ hotline.
                    </div>
                  )}

                  <button
                    id="submit-contact-btn"
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      background: status === 'loading' ? '#d4b97a' : 'linear-gradient(135deg, #C5A059, #e0c47e)',
                      color: '#002D5F',
                      border: 'none',
                      padding: '16px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 700,
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      boxShadow: '0 6px 20px rgba(197,160,89,0.4)',
                      transition: 'transform 0.25s, box-shadow 0.25s',
                      letterSpacing: '0.04em',
                    }}
                    onMouseEnter={e => { if (status !== 'loading') { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(197,160,89,0.5)'; } }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(197,160,89,0.4)'; }}
                  >
                    {status === 'loading' ? (
                      <>
                        <span style={{ width: '18px', height: '18px', border: '2px solid #002D5F', borderTopColor: 'transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Gửi Đăng Ký Ngay
                      </>
                    )}
                  </button>
                  <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
