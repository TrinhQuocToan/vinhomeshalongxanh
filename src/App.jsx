import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Amenities from './components/Amenities';
import Products from './components/Products';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PhanKhuDetail from './pages/PhanKhuDetail';
import FloatingContact from './components/FloatingContact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Overview />
      <Amenities />
      <Products />
      <ContactForm />
    </main>
  );
};

export default function App() {
  const location = useLocation();

  // Scroll to hash when navigating back to Home
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phan-khu/:id" element={<PhanKhuDetail />} />
      </Routes>
      <Footer />
      <FloatingContact />
    </div>
  );
}
