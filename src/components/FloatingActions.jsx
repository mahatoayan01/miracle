import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { salonData } from '../data/salonData';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';

export default function FloatingActions() {
  const { selectedServices } = useBooking();

  return (
    <>
      {/* Floating Action Buttons (Desktop & Tablet: Bottom Right) */}
      <div className="fixed bottom-20 md:bottom-8 right-5 z-40 flex flex-col gap-3">
        {/* WhatsApp direct chat */}
        <a
          href={salonData.contact.whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-600 text-white shadow-card hover:bg-emerald-500 hover:scale-105 transition-all duration-200 p-3.5"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-ink text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
            Chat on WhatsApp
          </span>
        </a>

        {/* Direct phone call */}
        <a
          href={`tel:${salonData.contact.primaryPhone.replace(/\s+/g, '')}`}
          aria-label="Call salon now"
          className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-primary text-secondary shadow-card hover:bg-primary-hover hover:scale-105 transition-all duration-200 p-3.5 border border-secondary/40"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-ink text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
            Call: {salonData.contact.primaryPhone}
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Booking Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-edge px-4 py-3 flex items-center justify-between shadow-2xl">
        <div className="flex flex-col">
          <span className="text-xs font-medium text-ink-muted">
            {selectedServices.length > 0 
              ? `${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''} chosen` 
              : "Walk-ins & Appointments"}
          </span>
          <span className="text-sm font-bold text-primary">
            {selectedServices.length > 0
              ? `₹${selectedServices.reduce((sum, s) => sum + s.price, 0)} total`
              : "Miracle Beauty • Parel"}
          </span>
        </div>

        <Link
          to="/book"
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-soft hover:shadow-plum active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 text-secondary" />
          <span>{selectedServices.length > 0 ? "Book Now" : "Book Appointment"}</span>
        </Link>
      </div>
    </>
  );
}
