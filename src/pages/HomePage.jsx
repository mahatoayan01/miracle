import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { salonData } from '../data/salonData';
import { useBooking } from '../context/BookingContext';
import TrustBadges from '../components/TrustBadges';
import ServiceCard from '../components/ServiceCard';
import ReviewsSection from '../components/ReviewsSection';
import InstagramFeed from '../components/InstagramFeed';
import FaqAccordion from '../components/FaqAccordion';
import { 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  Star, 
  Phone, 
  Clock, 
  CheckCircle, 
  ShieldCheck, 
  ChevronRight,
  Sliders,
  Scissors
} from 'lucide-react';

export default function HomePage() {
  const { toggleService, isServiceSelected } = useBooking();
  // State for interactive Before/After comparison slider
  const [sliderPosition, setSliderPosition] = useState(50);

  // Popular 4 services for Home
  const popularServices = salonData.services.filter(s => s.popular).slice(0, 4);

  return (
    <div className="min-h-screen">
      
      {/* ========================================================
          HERO SECTION: PRESTIGE EDITORIAL LAYOUT
          ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-bg to-bg pt-10 pb-20 lg:pt-16 lg:pb-28">
        
        {/* Soft luxury background ambient gradients */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 Columns: Editorial Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Partner Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-secondary/40 shadow-soft">
                <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                  {salonData.info.partnerBadge}
                </span>
                <span className="text-xs text-ink-muted hidden sm:inline">• Parel, Mumbai</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.12]">
                Where Every Strand &amp; Skin Finds Its{' '}
                <span className="gold-text-gradient italic font-normal">
                  Miracle Glow.
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed font-normal">
                Parel Village's established beauty sanctuary for professional L'Oréal hair therapies, restorative hydra facials, gentle waxing, and exquisite Maharashtrian &amp; Indian bridal makeovers.
              </p>

              {/* Verified Trust & Rating Strip */}
              <div className="flex flex-wrap items-center gap-4 py-2 border-y border-edge/80 text-xs sm:text-sm">
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="font-bold text-ink ml-1">{salonData.info.rating} / 5.0</span>
                </div>
                <span className="text-edge font-bold">•</span>
                <span className="text-ink font-medium">
                  {salonData.info.reviewCount}+ Google &amp; Local Reviews
                </span>
                <span className="text-edge font-bold">•</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  100% Genuine Branded Care
                </span>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-plum hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-secondary" />
                  <span>Book Online Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-surface hover:bg-bg border border-edge hover:border-primary text-primary font-semibold text-sm shadow-soft transition-all"
                >
                  <Scissors className="w-4 h-4 text-secondary" />
                  <span>Explore Rate Card</span>
                </Link>

                <a
                  href={`tel:${salonData.contact.primaryPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold text-ink-muted hover:text-primary"
                >
                  <Phone className="w-3.5 h-3.5 text-secondary" />
                  <span>Call {salonData.contact.primaryPhone}</span>
                </a>
              </div>

              {/* Location Tag */}
              <div className="flex items-center gap-2 text-xs text-ink-muted pt-2">
                <span className="font-semibold text-primary">Location:</span>
                <span>Opp. Abhyudaya Bank, Patel Wadi, Parel, Mumbai 400012</span>
              </div>

            </div>

            {/* Right 5 Columns: Visual Hero Showcase with Quick-Select Cards */}
            <div className="lg:col-span-5">
              <div className="relative">
                
                {/* Main Hero Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-surface aspect-[4/5] bg-bg">
                  <img
                    src="/images/hero-salon-ambience.jpg"
                    alt="Miracle Beauty & Hair Salon Ambience in Parel"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>

                  {/* Bottom Float Card inside Image */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-surface/90 backdrop-blur-md border border-edge shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-secondary">
                          Featured Treatment
                        </span>
                        <h4 className="font-display font-semibold text-sm text-primary">
                          L'Oréal Serie Expert Deep Hair Spa
                        </h4>
                        <span className="text-xs font-bold text-ink">
                          ₹850 onwards • 60 mins
                        </span>
                      </div>
                      <Link
                        to="/book"
                        className="px-3.5 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-soft"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute -top-4 -left-4 bg-surface p-3.5 rounded-2xl border border-edge shadow-card flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-primary font-bold">
                    <Sparkles className="w-5 h-5 text-secondary-dark" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-ink">L'Oréal Partner</p>
                    <p className="text-[10px] text-ink-muted">Parel Village</p>
                  </div>
                </div>

                {/* Floating Right Hours Badge */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-2xl border border-secondary/40 shadow-plum flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary" />
                  <div className="text-left text-[11px]">
                    <p className="font-semibold text-secondary">Open Today</p>
                    <p className="text-white/80">10:00 AM – 8:30 PM</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          TRUST BADGES STRIP
          ======================================================== */}
      <TrustBadges />

      {/* ========================================================
          ABOUT THE SALON & ATMOSPHERE
          ======================================================== */}
      <section className="py-20 bg-surface border-b border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Mosaic */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-soft">
                  <img
                    src="/images/salon-interior-stations.jpg"
                    alt="Miracle Beauty Salon Styling Stations"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 rounded-2xl bg-bg border border-edge">
                  <span className="font-display font-bold text-2xl text-primary">85+</span>
                  <p className="text-xs text-ink-muted mt-1">Verified reviews praising gentle staff and cleanliness.</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-4 rounded-2xl bg-primary text-white">
                  <p className="text-xs text-secondary font-semibold uppercase tracking-wider">Neighborhood Trust</p>
                  <p className="font-display font-semibold text-sm mt-1">Located in Patel Wadi, opposite Abhyudaya Bank.</p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-soft">
                  <img
                    src="/images/hair-spa-loreal.jpg"
                    alt="L'Oréal Hair Care Spa at Miracle Salon"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* About Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Heritage &amp; Care</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-snug">
                A Welcoming Sanctuary for Hair, Skin &amp; Bridal Artistry
              </h2>

              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                Miracle Beauty &amp; Hair Salon was established to bring high-end, genuine salon expertise directly to the families and working professionals of Parel, Lower Parel, and South-Central Mumbai.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/30 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-ink">Certified L'Oréal Professionnel Treatments</h4>
                    <p className="text-xs text-ink-muted">From Majirel &amp; Inoa ammonia-free coloring to X-Tenso smoothening and Serie Expert rituals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/30 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-ink">Gentle, Polite &amp; Courteous Staff</h4>
                    <p className="text-xs text-ink-muted">Our beauticians take the time to listen, ensuring relaxing facials, gentle waxing, and flattering haircuts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/30 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-ink">Spotless Sanitation &amp; Single-Use Disposables</h4>
                    <p className="text-xs text-ink-muted">Strict sterilization of all instruments, fresh linen, and single-use hygienic waxing strips.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-soft"
                >
                  <span>View All Services</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/location"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Get Directions to Patel Wadi →
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          POPULAR SERVICES SHOWCASE
          ======================================================== */}
      <section className="py-20 bg-bg border-b border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-ink text-xs font-semibold uppercase tracking-wider mb-3">
                <Scissors className="w-3.5 h-3.5 text-secondary" />
                <span>Client Favorites</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
                Popular Signature Services
              </h2>
              <p className="text-sm text-ink-muted mt-2 max-w-xl">
                Our most-requested hair and skin treatments, performed with authentic branded salon products.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover hover:underline"
            >
              <span>View Full Service Menu ({salonData.services.length} treatments)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          CURATED PACKAGES & OFFERS
          ======================================================== */}
      <section className="py-20 bg-surface border-b border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span>Value Suites</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
              Curated Packages &amp; Makeovers
            </h2>
            <p className="text-sm text-ink-muted mt-2">
              Comprehensive head-to-toe beauty rituals tailored for bridal countdowns, festive celebrations, and seasonal hair makeovers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salonData.packages.map((pkg) => (
              <div 
                key={pkg.id}
                className="bg-bg rounded-3xl border border-edge overflow-hidden shadow-soft hover:shadow-card hover:border-secondary transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-secondary text-ink text-xs font-bold shadow-md">
                      {pkg.discountText}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs text-ink-muted font-medium mb-1 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-secondary" />
                      <span>{pkg.duration}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-primary">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      <p className="text-[11px] font-bold text-ink uppercase tracking-wider">Package Inclusions:</p>
                      <ul className="space-y-1.5">
                        {pkg.inclusions.map((inc, i) => (
                          <li key={i} className="text-xs text-ink-muted flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-edge/60 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-ink-muted block line-through">₹{pkg.originalPrice}</span>
                    <span className="text-xl font-bold text-primary">₹{pkg.price}</span>
                  </div>

                  <Link
                    to="/book"
                    className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-soft hover:shadow-plum transition-all"
                  >
                    Select Package
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          BEFORE / AFTER TRANSFORMATION SLIDER
          ======================================================== */}
      <section className="py-20 bg-bg border-b border-edge">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-ink text-xs font-semibold uppercase tracking-wider mb-3">
              <Sliders className="w-3.5 h-3.5 text-secondary" />
              <span>Real Salon Results</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
              Interactive Transformation Spotlight
            </h2>
            <p className="text-sm text-ink-muted mt-2">
              Drag the slider to reveal the difference L'Oréal X-Tenso smoothening and professional hair treatment makes.
            </p>
          </div>

          <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-edge shadow-card">
            
            {/* The Before/After interactive comparison container */}
            <div className="relative aspect-[16/9] max-w-3xl mx-auto rounded-2xl overflow-hidden select-none shadow-md">
              
              {/* After Image (Full background) */}
              <img
                src="/images/transformation-after.jpg"
                alt="After Smoothening Treatment"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold tracking-wide backdrop-blur-sm">
                AFTER: Silky Gloss Finish
              </span>

              {/* Before Image (Clipped by slider position) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="/images/transformation-before.jpg"
                  alt="Before Treatment"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-ink/80 text-white text-xs font-bold tracking-wide backdrop-blur-sm">
                  BEFORE: Frizzy &amp; Dry
                </span>
              </div>

              {/* Slider Divider Line */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-ink flex items-center justify-center font-bold text-xs shadow-card border-2 border-white">
                  ⟷
                </div>
              </div>

              {/* Range input overlay for smooth interaction */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Comparison slider"
              />
            </div>

            <div className="mt-6 text-center text-xs text-ink-muted">
              <p className="font-semibold text-primary">Treatment: L'Oréal X-Tenso Nutri-Cationic Smoothening &amp; Hair Gloss</p>
              <p className="mt-1">Notice the elimination of humidity frizz, radiant shine, and effortless comb-through softness.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          MEET THE STYLISTS & SPECIALISTS
          (Neutral role profiles with certified specialties)
          ======================================================== */}
      <section className="py-20 bg-surface border-b border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Certified Team</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
              Meet Our Salon Specialists
            </h2>
            <p className="text-sm text-ink-muted mt-2">
              Experienced, polite, and dedicated professionals specializing in hair structure, skin radiance, and occasion styling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salonData.team.map((member) => (
              <div 
                key={member.id}
                className="bg-bg rounded-2xl p-6 border border-edge text-center flex flex-col items-center hover:border-secondary transition-all"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-surface shadow-card mb-4 bg-surface">
                  <img
                    src={member.image}
                    alt={member.role}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-secondary/20 text-ink text-[11px] font-semibold mb-2">
                  {member.experience}
                </span>

                <h3 className="font-display font-bold text-lg text-primary">
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-ink-muted">
                  {member.role}
                </p>

                <p className="text-xs text-ink-muted mt-3 leading-relaxed">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          REAL CUSTOMER REVIEWS (Google Maps & Justdial)
          ======================================================== */}
      <ReviewsSection />

      {/* ========================================================
          INSTAGRAM FEED & GALLERY
          ======================================================== */}
      <InstagramFeed />

      {/* ========================================================
          FAQ SECTION
          ======================================================== */}
      <FaqAccordion />

      {/* ========================================================
          FINAL CTA BANNER
          ======================================================== */}
      <section className="bg-primary-dark text-white py-16 border-t-2 border-secondary/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary text-ink font-bold text-xs uppercase tracking-wider">
            Ready for your transformation?
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Visit Miracle Beauty &amp; Hair Salon Today
          </h2>

          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Conveniently situated in Patel Wadi, opposite Abhyudaya Bank in Parel. Walk in or reserve your slot online to experience gentle care with authentic salon products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/book"
              className="px-8 py-3.5 rounded-full bg-secondary hover:bg-secondary-hover text-ink font-bold text-sm shadow-gold transition-all"
            >
              Book an Appointment Now
            </Link>
            <a
              href={`tel:${salonData.contact.primaryPhone.replace(/\s+/g, '')}`}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
            >
              Call Us: {salonData.contact.primaryPhone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
