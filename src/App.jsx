import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import OwnerLoginPage from './pages/OwnerLoginPage';
import OwnerDashboardPage from './pages/OwnerDashboardPage';

// Scroll to top helper on route transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/owner/dashboard');

  return (
    <div className="flex flex-col min-h-screen text-ink bg-bg selection:bg-secondary/30 selection:text-primary">
      <ScrollToTop />
      
      {/* Hide standard navbar on owner dashboard for dedicated administrative chrome */}
      {!isDashboardRoute && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/owner/login" element={<OwnerLoginPage />} />
          <Route path="/owner/dashboard" element={<OwnerDashboardPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Floating Call & WhatsApp & Sticky Book CTA on public routes */}
      {!isDashboardRoute && <FloatingActions />}

      {/* Hide standard footer on owner dashboard */}
      {!isDashboardRoute && <Footer />}
    </div>
  );
}
