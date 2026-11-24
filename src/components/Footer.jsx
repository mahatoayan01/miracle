import React from 'react';
import { Link } from 'react-router-dom';
import { salonData } from '../data/salonData';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const currentDayIndex = new Date().getDay(); // 0 is Sunday
  // salonData.openingHours: Mon(0), Tue(1), Wed(2), Thu(3), Fri(4), Sat(5), Sun(6)
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = dayNames[currentDayIndex];

  return (
    <footer className="bg-primary-dark text-white border-t-2 border-secondary/30 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Salon Identity & Partner */}
          <div className="space-y-4">
            <img 
              src="/images/logo.svg" 
              alt={salonData.info.name} 
              className="h-12 w-auto brightness-0 invert" 
            />
            <p className="text-white/70 text-sm leading-relaxed">
              {salonData.info.description}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-secondary/30 text-secondary text-xs font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>{salonData.info.partnerBadge}</span>
            </div>
            <div className="pt-2 text-xs text-white/50 space-y-1">
              <p>Ratings: <span className="text-secondary font-bold">4.7 / 5.0</span> from 85+ Google & Directory Reviews</p>
              <p>Caters to: {salonData.info.catersTo}</p>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-secondary mb-4 tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">Home & Salon Story</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary transition-colors">Services & Pricing</Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-secondary transition-colors">Salon Location & Map</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">Contact & Enquiries</Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-secondary transition-colors">Book Online Appointment</Link>
              </li>
              <li>
                <Link to="/owner/login" className="hover:text-secondary transition-colors text-secondary/80">Owner Dashboard (Demo)</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Weekly Timings */}
          <div>
            <h4 className="font-display text-lg font-semibold text-secondary mb-4 tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Salon Timings</span>
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              {salonData.openingHours.map((item) => {
                const isToday = item.day.toLowerCase() === todayName.toLowerCase();
                return (
                  <li 
                    key={item.day}
                    className={`flex items-center justify-between py-1 px-2 rounded ${
                      isToday ? 'bg-secondary/20 text-white font-semibold' : ''
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {isToday && <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>}
                      {item.day}
                    </span>
                    <span className={item.status === 'closed' ? 'text-rose-300' : 'text-white/90'}>
                      {item.hours}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-[11px] text-white/50 italic">
              *Mondays reserved for prior bridal appointments.
            </p>
          </div>

          {/* Column 4: Location & Direct Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-secondary mb-4 tracking-wide flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>Find Us in Parel</span>
            </h4>
            <address className="not-italic text-sm text-white/75 space-y-2">
              <p className="font-medium text-white">
                {salonData.contact.address.shopNo}, {salonData.contact.address.premise}
              </p>
              <p>{salonData.contact.address.road}</p>
              <p className="text-secondary text-xs font-semibold">
                Landmark: {salonData.contact.address.landmark}
              </p>
              <p>{salonData.contact.address.area}, {salonData.contact.address.city} - {salonData.contact.address.pincode}</p>
            </address>

            <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs">
              <a 
                href={`tel:${salonData.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-white/80 hover:text-secondary"
              >
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>{salonData.contact.primaryPhone}</span>
              </a>
              <a 
                href={salonData.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
              <a 
                href={salonData.info.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-secondary hover:underline mt-2 text-xs font-medium"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & demo disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>
            © {new Date().getFullYear()} {salonData.info.name}. All rights reserved.
          </p>
          <div className="p-2 rounded bg-white/5 border border-white/10 text-center max-w-xl text-[11px] text-amber-200/80">
            <strong>DEMO NOTICE:</strong> This website is an interactive portfolio demonstration build for Miracle beauty & hair salon. Online bookings simulate real workflow with zero monetary charges.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/owner/login" className="hover:text-secondary">Owner Login</Link>
            <span>•</span>
            <span className="text-white/40">Made with care for Mumbai Salons</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
