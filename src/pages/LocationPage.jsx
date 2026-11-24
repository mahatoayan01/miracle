import React from 'react';
import { salonData } from '../data/salonData';
import { 
  MapPin, 
  Clock, 
  Navigation, 
  ExternalLink, 
  Train, 
  Car, 
  CheckCircle,
  Phone
} from 'lucide-react';

export default function LocationPage() {
  const currentDayIndex = new Date().getDay(); // 0 is Sunday
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = dayNames[currentDayIndex];

  return (
    <div className="min-h-screen bg-bg pb-24">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-14 border-b-2 border-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Salon Location</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Find Miracle Beauty &amp; Hair Salon
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Situated in Patel Wadi, right opposite Abhyudaya Co-operative Bank, in the heart of Parel Village, Mumbai.
          </p>
        </div>
      </section>

      {/* Main Grid: Location Details & Embedded Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols): Address Cards & Operating Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Address Box */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-edge shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-soft text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-xl text-primary">
                    {salonData.info.name}
                  </h2>
                  <p className="text-xs font-semibold text-secondary-dark mt-0.5">
                    Official L'Oréal Professionnel Partner
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm text-ink border-t border-edge pt-4">
                <p className="font-semibold">
                  {salonData.contact.address.shopNo}
                </p>
                <p>{salonData.contact.address.premise}</p>
                <p>{salonData.contact.address.road}</p>
                <div className="p-3 rounded-xl bg-secondary/15 border border-secondary/40 text-xs font-semibold text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span>Landmark: {salonData.contact.address.landmark}</span>
                </div>
                <p className="text-xs text-ink-muted">
                  {salonData.contact.address.area}, {salonData.contact.address.city} - {salonData.contact.address.pincode}, {salonData.contact.address.country}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-edge flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={salonData.info.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-soft hover:shadow-plum transition-all"
                >
                  <Navigation className="w-4 h-4 text-secondary" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Proximity & Transit Tips */}
            <div className="bg-surface rounded-3xl p-6 border border-edge shadow-soft space-y-4">
              <h3 className="font-display font-bold text-base text-primary flex items-center gap-2">
                <Train className="w-4 h-4 text-secondary" />
                <span>How to Reach Us</span>
              </h3>
              
              <div className="space-y-3 text-xs text-ink-muted">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                  <p>
                    <strong className="text-ink">By Train:</strong> 6 to 8 minutes walking distance or 3 minutes by taxi/auto from <strong>Parel Railway Station</strong> (Central Railway) and <strong>Currey Road Station</strong>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                  <p>
                    <strong className="text-ink">By Road:</strong> Located on G.D. Ambekar Marg / Parel Tank Road. Direct landmark opposite Abhyudaya Co-op Bank.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                  <p>
                    <strong className="text-ink">Parking:</strong> Two-wheeler street parking available right in Patel Wadi lane. Four-wheelers can park along the main Ambekar Marg as permitted.
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-surface rounded-3xl p-6 border border-edge shadow-soft">
              <h3 className="font-display font-bold text-base text-primary mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Weekly Hours Schedule</span>
              </h3>
              <ul className="space-y-2 text-xs">
                {salonData.openingHours.map((item) => {
                  const isToday = item.day.toLowerCase() === todayName.toLowerCase();
                  return (
                    <li 
                      key={item.day}
                      className={`flex items-center justify-between py-1.5 px-3 rounded-lg ${
                        isToday ? 'bg-secondary/20 font-bold text-primary border border-secondary/40' : 'text-ink-muted'
                      }`}
                    >
                      <span>{item.day} {isToday && '(Today)'}</span>
                      <span className={item.status === 'closed' ? 'text-rose-600 font-semibold' : 'text-ink'}>
                        {item.hours}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>

          {/* Right Column (7 Cols): Embedded Interactive Map */}
          <div className="lg:col-span-7 bg-surface rounded-3xl p-4 sm:p-6 border border-edge shadow-card">
            
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-display font-bold text-lg text-primary">
                  Interactive Google Map
                </h3>
                <p className="text-xs text-ink-muted">
                  Drag, zoom, and inspect nearby landmarks around Patel Wadi
                </p>
              </div>
              <a
                href={salonData.info.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3 text-secondary" />
              </a>
            </div>

            {/* Map Frame */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-edge bg-bg relative">
              <iframe
                title="Miracle Beauty & Hair Salon Google Map"
                src="https://maps.google.com/maps?q=Miracle%20beauty%20%26%20hair%20salon,%20Patel%20Wadi,%20Parel,%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Quick Contact hotline bar below map */}
            <div className="mt-4 p-4 rounded-2xl bg-bg border border-edge flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-ink font-medium">Need immediate directions? Call:</span>
                <a href={`tel:${salonData.contact.primaryPhone.replace(/\s+/g, '')}`} className="font-bold text-primary hover:underline">
                  {salonData.contact.primaryPhone}
                </a>
              </div>
              <a
                href={salonData.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-emerald-700 hover:underline"
              >
                WhatsApp Us for Directions →
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
