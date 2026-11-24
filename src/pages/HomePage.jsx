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
  Sliders,
  Scissors,
  Crown,
  Heart,
  Smile,
  Compass,
  Check
} from 'lucide-react';

export default function HomePage() {
  const { toggleService, isServiceSelected, addService } = useBooking();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeHeroTab, setActiveHeroTab] = useState('hair');

  // Hero Quick-Concierge services lookup
  const heroQuickServices = {
    hair: salonData.services.find(s => s.id === 'srv-loreal-spa') || salonData.services[1],
    skin: salonData.services.find(s => s.id === 'srv-hydra-facial') || salonData.services[4],
    bridal: salonData.services.find(s => s.id === 'srv-bridal-traditional') || salonData.services[6],
    waxing: salonData.services.find(s => s.id === 'srv-rica-wax') || salonData.services[8],
  };

  const currentHeroService = heroQuickServices[activeHeroTab];
  const isHeroSelected = isServiceSelected(currentHeroService.id);

  // Top 4 popular services for the menu section
  const popularServices = salonData.services.filter(s => s.popular).slice(0, 4);

  return (
    <div className="min-h-screen bg-bg">
      
      {/* ========================================================
          HERO SECTION: HAUTE COIFFURE EDITORIAL COMPOSITION
          ======================================================== */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-edge">
        
        {/* Ambient atmospheric glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Top Editorial Kicker */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-secondary/50 shadow-soft text-primary text-xs font-semibold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span>L'Oréal Professionnel Paris Partner • Parel Village, Mumbai</span>
            </div>
          </div>

          {/* Main Headline & Subtitle */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-primary tracking-tight leading-[1.08]">
              Where Pure Glamour Meets{' '}
              <span className="italic font-normal gold-text-gradient">
                Gentle Mastery.
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Step into Patel Wadi's premier beauty parlour and hair sanctuary. Experience authentic L'Oréal Serie Expert hair spas, dewy glass-skin hydra rituals, and exquisite Indian bridal couture.
            </p>
          </div>

          {/* Layered Visual Composition & Quick Treatment Concierge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            
            {/* Left Layered Image Showcase (7 Cols) */}
            <div className="lg:col-span-7 relative">
              
              {/* Primary Warm Luxury Salon Photo */}
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-card border-2 border-edge bg-surface group">
                <img
                  src="/images/hero-luxury-salon.jpg"
                  alt="Miracle Beauty & Hair Salon Ambience"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent"></div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                      Salon Ambience • Patel Wadi, Parel
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg">
                      Warm Ambience &amp; Sanitized Stations
                    </h3>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
                    <span>4.7 / 5.0 (88 Reviews)</span>
                  </div>
                </div>
              </div>

              {/* Floating Overlapping Model Portrait Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-6 w-44 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-surface bg-surface group hidden sm:block">
                <img
                  src="/images/hero-model-glow.jpg"
                  alt="Radiant Balayage & Hydra Glow"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-secondary block">
                    Signature Transformation
                  </span>
                  <p className="font-display font-semibold text-xs leading-tight">
                    Dewy Glow &amp; Caramel Waves
                  </p>
                </div>
              </div>

              {/* Floating Verified Trust Pill */}
              <div className="absolute -top-4 -left-3 sm:-left-5 bg-surface/95 backdrop-blur-md p-3 rounded-2xl border border-edge shadow-card flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 text-primary flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-secondary-dark" />
                </div>
                <div className="text-left text-xs">
                  <p className="font-bold text-ink">100% Original</p>
                  <p className="text-[10px] text-ink-muted">L'Oréal Professionnel</p>
                </div>
              </div>

            </div>

            {/* Right Interactive VIP Concierge Box (5 Cols) */}
            <div className="lg:col-span-5 bg-surface rounded-3xl p-6 sm:p-7 border border-edge shadow-card space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-edge">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-secondary">
                    VIP Concierge
                  </span>
                  <h3 className="font-display font-bold text-xl text-primary">
                    Find Your Treatment
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-accent-soft text-primary text-[10px] font-bold">
                  Instant Booking
                </span>
              </div>

              {/* Category Selector Tabs */}
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-bg rounded-2xl border border-edge">
                {[
                  { id: 'hair', label: 'Hair Spa', icon: Scissors },
                  { id: 'skin', label: 'Facials', icon: Smile },
                  { id: 'bridal', label: 'Bridal', icon: Crown },
                  { id: 'waxing', label: 'Waxing', icon: Heart }
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeHeroTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveHeroTab(tab.id)}
                      className={`py-2 px-1 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                        isActive
                          ? 'bg-primary text-white shadow-soft'
                          : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-secondary' : ''}`} />
                      <span className="text-[11px]">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Service Spotlight Preview */}
              <div className="p-4 rounded-2xl bg-bg border border-edge flex items-center gap-4">
                <img
                  src={currentHeroService.image}
                  alt={currentHeroService.name}
                  className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 border border-edge"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-semibold text-secondary-dark uppercase tracking-wider block">
                    {currentHeroService.badge || currentHeroService.categoryName}
                  </span>
                  <h4 className="font-display font-bold text-sm text-ink truncate">
                    {currentHeroService.name}
                  </h4>
                  <p className="text-xs text-ink-muted line-clamp-1 mt-0.5">
                    {currentHeroService.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs">
                    <span className="font-bold text-primary text-sm">
                      {currentHeroService.priceDisplay || `₹${currentHeroService.price}`}
                    </span>
                    <span className="text-ink-muted text-[11px]">• {currentHeroService.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <button
                  onClick={() => toggleService(currentHeroService)}
                  className={`w-full py-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    isHeroSelected
                      ? 'bg-emerald-700 text-white'
                      : 'bg-primary hover:bg-primary-hover text-white shadow-plum'
                  }`}
                >
                  {isHeroSelected ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Booking ✓</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span>Add &amp; Reserve This Treatment</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-xs pt-1 px-1">
                  <Link
                    to="/services"
                    className="font-semibold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>View all {salonData.services.length} services</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <a
                    href={`tel:${salonData.contact.primaryPhone.replace(/\s+/g, '')}`}
                    className="text-ink-muted hover:text-primary flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-secondary" />
                    <span>{salonData.contact.primaryPhone}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          RUNWAY MARQUEE TICKER
          ======================================================== */}
      <div className="bg-primary text-white py-3 border-y border-secondary/40 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap text-xs font-semibold tracking-widest uppercase flex items-center gap-8">
          <span>✦ OFFICIAL L'ORÉAL PROFESSIONNEL PARIS PARTNER</span>
          <span>✦ SERIE EXPERT DEEP NOURISHING HAIR SPA</span>
          <span>✦ X-TENSO NUTRI-CATIONIC SMOOTHENING</span>
          <span>✦ HYDRA RADIANCE GLASS-SKIN FACIALS</span>
          <span>✦ BESPOKE MAHARASHTRIAN &amp; INDIAN BRIDAL ATELIER</span>
          <span>✦ 4.7★ VERIFIED NEIGHBOURHOOD SANCTUARY</span>
          <span>✦ PATEL WADI, PAREL VILLAGE • MUMBAI</span>
          <span>✦ 100% GENUINE PROFESSIONAL FORMULAS</span>
          {/* Duplicate set for seamless continuous marquee loop */}
          <span>✦ OFFICIAL L'ORÉAL PROFESSIONNEL PARIS PARTNER</span>
          <span>✦ SERIE EXPERT DEEP NOURISHING HAIR SPA</span>
          <span>✦ X-TENSO NUTRI-CATIONIC SMOOTHENING</span>
          <span>✦ HYDRA RADIANCE GLASS-SKIN FACIALS</span>
          <span>✦ BESPOKE MAHARASHTRIAN &amp; INDIAN BRIDAL ATELIER</span>
          <span>✦ 4.7★ VERIFIED NEIGHBOURHOOD SANCTUARY</span>
          <span>✦ PATEL WADI, PAREL VILLAGE • MUMBAI</span>
          <span>✦ 100% GENUINE PROFESSIONAL FORMULAS</span>
        </div>
      </div>

      {/* ========================================================
          THE 3 PILLARS OF MIRACLE ATELIER
          ======================================================== */}
      <TrustBadges />

      {/* ========================================================
          THE SALON ATMOSPHERE & NARRATIVE
          ======================================================== */}
      <section className="py-20 bg-surface border-b border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Lookbook Column */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-card border border-edge">
                  <img
                    src="/images/editorial-interior-ambience.jpg"
                    alt="Miracle Salon Styling Lounge"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 rounded-2xl bg-bg border border-edge">
                  <span className="font-display font-bold text-2xl text-primary">85+</span>
                  <p className="text-xs text-ink-muted mt-1 leading-snug">
                    Verified Google reviews praising courteous staff, polite hospitality, and gentle care.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-5 rounded-2xl bg-primary text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                    Neighborhood Sanctuary
                  </span>
                  <p className="font-display font-bold text-base leading-snug">
                    Located in Patel Wadi, right opposite Abhyudaya Bank.
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-card border border-edge">
                  <img
                    src="/images/editorial-haircut.jpg"
                    alt="Precision Haircut & Blowdry at Miracle Salon"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Editorial Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Philosophy</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Gentle Expertise. Genuine Products. Effortless Confidence.
              </h2>

              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                Founded with a mission to bring world-class French hair care and radiant skincare to Parel, Miracle Beauty &amp; Hair Salon has grown into South-Central Mumbai's trusted personal care haven.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/30 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-ink">Original L'Oréal Professionnel Formulations</h4>
                    <p className="text-xs text-ink-muted">From Majirel &amp; Inoa ammonia-free chromatic coloring to X-Tenso keratin smoothing and Serie Expert rituals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/30 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-ink">Polite, Attentive &amp; Non-Rushed Beauticians</h4>
                    <p className="text-xs text-ink-muted">We respect your time and comfort. Every haircut consultation, facial massage, and waxing session is performed with gentle patience.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/30 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-ink">Disinfected Tools &amp; Single-Use Disposables</h4>
                    <p className="text-xs text-ink-muted">Strict sterilization between clients, single-use wax strips, and fresh laundry ensure complete hygienic peace of mind.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-5">
                <Link
                  to="/services"
                  className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-soft transition-all"
                >
                  Explore Complete Rate Card →
                </Link>
                <Link
                  to="/location"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <Compass className="w-3.5 h-3.5 text-secondary" />
                  <span>Get Directions to Patel Wadi</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          CURATED POPULAR SERVICES SHOWCASE
          ======================================================== */}
      <section className="py-20 bg-bg border-b border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-ink text-xs font-bold uppercase tracking-wider mb-3">
                <Scissors className="w-3.5 h-3.5 text-secondary" />
                <span>Client Favorites</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
                Popular Signature Treatments
              </h2>
              <p className="text-sm text-ink-muted mt-2 max-w-xl">
                Our most frequently booked hair, facial, and grooming therapies in Parel.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              <span>View Full Menu ({salonData.services.length} services)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          HAUTE BRIDAL & OCCASION COUTURE ATELIER
          (Dramatic Dark Velvet Section)
          ======================================================== */}
      <section className="py-20 bg-primary-dark text-white border-y-2 border-secondary/40 relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Bridal Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary text-xs font-bold uppercase tracking-wider border border-secondary/30">
                <Crown className="w-3.5 h-3.5 text-secondary" />
                <span>Haute Bridal Atelier</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Traditional Maharashtrian &amp; Contemporary Bridal Makeovers
              </h2>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                From pre-bridal skin detox to the final ceremonial sindoor look, our bridal artists craft 16-hour sweatproof, flash-friendly HD magic. We specialize in Nauvari drape pinning, fresh gajra floral crowns, and intricate jewellery placement.
              </p>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/15 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-secondary pb-2 border-b border-white/10">
                  <span>Pre-Bridal 3-Day Countdown Schedule</span>
                  <span>₹4,999 All-Inclusive</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[11px] text-white/70">
                  <div>
                    <strong className="text-white block">Day -3:</strong>
                    <span>Full body Rica wax &amp; rose mani-pedi</span>
                  </div>
                  <div>
                    <strong className="text-white block">Day -2:</strong>
                    <span>Hydra Radiance Glow facial &amp; hair spa</span>
                  </div>
                  <div>
                    <strong className="text-white block">Day 0 (Wedding):</strong>
                    <span>HD base, saree drape &amp; floral updo</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/book"
                  className="px-7 py-3 rounded-full bg-secondary hover:bg-secondary-hover text-ink font-bold text-xs shadow-gold transition-all"
                >
                  Reserve Bridal Consultation
                </Link>
                <a
                  href={salonData.contact.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all"
                >
                  WhatsApp Bridal Artist
                </a>
              </div>
            </div>

            {/* Right Column: High-Impact Bridal Photos */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl border-2 border-secondary/40">
                <img
                  src="/images/editorial-bridal.jpg"
                  alt="Traditional Indian Bridal Makeover"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl border-2 border-secondary/40">
                  <img
                    src="/images/editorial-glam.jpg"
                    alt="Reception & Party Glam Makeover"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <span className="text-xs text-secondary font-bold block">16-Hour Longevity</span>
                  <span className="text-[11px] text-white/70">Tested for Mumbai humidity</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          INTERACTIVE BEFORE & AFTER SLIDER (Vibrant Edition)
          ======================================================== */}
      <section className="py-20 bg-bg border-b border-edge">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-ink text-xs font-bold uppercase tracking-wider mb-3">
              <Sliders className="w-3.5 h-3.5 text-secondary" />
              <span>Real Salon Transformations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
              Frizz-to-Glass Hair Transformation
            </h2>
            <p className="text-sm text-ink-muted mt-2">
              Drag the interactive slider to reveal the difference L'Oréal X-Tenso Nutri-Cationic smoothening makes on humidity-prone locks.
            </p>
          </div>

          <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-edge shadow-card">
            
            <div className="relative aspect-[16/9] max-w-3xl mx-auto rounded-2xl overflow-hidden select-none shadow-md">
              {/* After Image */}
              <img
                src="/images/trans-after-new.jpg"
                alt="After L'Oréal X-Tenso Smoothening"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold tracking-wide backdrop-blur-sm shadow-md">
                AFTER: Glass-Gloss Straight
              </span>

              {/* Before Image */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="/images/trans-before-new.jpg"
                  alt="Before Treatment"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-ink/80 text-white text-xs font-bold tracking-wide backdrop-blur-sm shadow-md">
                  BEFORE: Humidity Frizz
                </span>
              </div>

              {/* Divider handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-ink flex items-center justify-center font-bold text-xs shadow-card border-2 border-white">
                  ⟷
                </div>
              </div>

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
              <p className="font-semibold text-primary">Treatment: L'Oréal Professionnel X-Tenso Moisturist &amp; Keratin Bond Seal</p>
              <p className="mt-1">Maintains effortless comb-through softness and mirror shine for up to 6 months.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          REAL VERIFIED CUSTOMER REVIEWS
          ======================================================== */}
      <ReviewsSection />

      {/* ========================================================
          VIBRANT FRESH INSTAGRAM WALL
          ======================================================== */}
      <InstagramFeed />

      {/* ========================================================
          FREQUENTLY ASKED QUESTIONS
          ======================================================== */}
      <FaqAccordion />

      {/* ========================================================
          BOTTOM APPOINTMENT BANNER
          ======================================================== */}
      <section className="bg-primary-dark text-white py-16 border-t-2 border-secondary/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary text-ink font-bold text-xs uppercase tracking-wider">
            Ready for your transformation?
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Experience Miracle Beauty &amp; Hair Salon
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
