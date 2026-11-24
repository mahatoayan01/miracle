import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { salonData } from '../data/salonData';
import { Phone, Calendar, Menu, X, Sparkles, User, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { selectedServices } = useBooking();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-edge transition-all duration-300">
      {/* Top micro bar for L'Oreal Partnership & Quick Call */}
      <div className="bg-primary text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-medium tracking-wide">
              Official L'Oréal Professionnel Partner Salon • Parel, Mumbai
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href={`tel:${salonData.contact.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-secondary hover:underline font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{salonData.contact.primaryPhone}</span>
            </a>
            <span className="text-white/40">|</span>
            <Link to="/owner/login" className="text-white/80 hover:text-white flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>Owner Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.svg" 
              alt={salonData.info.name} 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-ink-muted hover:text-primary'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Booking summary */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/book"
              className="relative flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white font-medium text-sm transition-all duration-200 shadow-soft hover:shadow-plum hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-secondary" />
              <span>Book Appointment</span>
              {selectedServices.length > 0 && (
                <span className="ml-1 px-2 py-0.5 text-xs font-bold rounded-full bg-secondary text-ink">
                  {selectedServices.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            {selectedServices.length > 0 && (
              <Link
                to="/book"
                className="relative p-2 text-primary"
                aria-label="View booking cart"
              >
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-secondary text-ink font-bold text-[10px] flex items-center justify-center">
                  {selectedServices.length}
                </span>
              </Link>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-edge px-4 pt-2 pb-6 space-y-3 shadow-card animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive(link.path)
                  ? 'bg-accent-soft text-primary font-bold'
                  : 'text-ink hover:bg-bg'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-edge flex flex-col gap-3">
            <Link
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-soft"
            >
              <Calendar className="w-4 h-4 text-secondary" />
              <span>Book Appointment {selectedServices.length > 0 ? `(${selectedServices.length})` : ''}</span>
            </Link>

            <div className="flex items-center justify-between text-xs text-ink-muted px-2 pt-2">
              <a 
                href={`tel:${salonData.contact.primaryPhone.replace(/\s+/g, '')}`} 
                className="flex items-center gap-1.5 text-primary font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>{salonData.contact.primaryPhone}</span>
              </a>
              <Link 
                to="/owner/login" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:underline flex items-center gap-1"
              >
                <User className="w-3.5 h-3.5" />
                <span>Owner Portal</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
