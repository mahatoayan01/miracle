import React, { useState } from 'react';
import { salonData } from '../data/salonData';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'Hair Treatment / Spa',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-bg pb-24">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-14 border-b-2 border-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with Us</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Contact Miracle Beauty Salon
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Have questions about chemical hair treatments, bridal packages, or timing? We are here to assist you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (5 Cols): Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-surface rounded-3xl p-6 border border-edge shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-soft text-primary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-primary">
                    Call Salon Directly
                  </h3>
                  <p className="text-xs text-ink-muted">Available Tuesday through Sunday</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-edge text-sm">
                <a 
                  href={`tel:${salonData.contact.primaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-bg hover:bg-secondary/15 transition-colors font-semibold text-primary"
                >
                  <span>Primary: {salonData.contact.primaryPhone}</span>
                  <span className="text-xs text-secondary-dark font-bold">Call →</span>
                </a>
                <a 
                  href={`tel:${salonData.contact.secondaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-bg hover:bg-secondary/15 transition-colors text-xs font-semibold text-ink"
                >
                  <span>Landline: {salonData.contact.secondaryPhone}</span>
                  <span className="text-xs text-ink-muted">Call →</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-surface rounded-3xl p-6 border border-edge shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-primary">
                    WhatsApp Concierge
                  </h3>
                  <p className="text-xs text-ink-muted">Instant replies for appointments & inquiries</p>
                </div>
              </div>

              <a
                href={salonData.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-soft transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Salon on WhatsApp</span>
              </a>
            </div>

            {/* Address & Hours Summary */}
            <div className="bg-surface rounded-3xl p-6 border border-edge shadow-soft space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink">Address:</strong>
                  <p className="text-ink-muted mt-0.5">
                    {salonData.contact.address.shopNo}, {salonData.contact.address.premise}, Opp. {salonData.contact.address.landmark}, {salonData.contact.address.road}, Parel, Mumbai 400012
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-edge">
                <Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink">Email:</strong>
                  <p className="text-ink-muted mt-0.5">{salonData.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-edge">
                <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink">Hours:</strong>
                  <p className="text-ink-muted mt-0.5">Tue - Sun: 10:00 AM – 8:30 PM (Mon: Bridal bookings only)</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (7 Cols): Interactive Demo Contact Form */}
          <div className="lg:col-span-7 bg-surface rounded-3xl p-6 sm:p-10 border border-edge shadow-card">
            
            <div className="mb-6">
              <h2 className="font-display font-bold text-2xl text-primary">
                Send an Inquiry Message
              </h2>
              <p className="text-xs text-ink-muted mt-1">
                Fill out the details below. (Demo form — automatically generates a confirmation preview).
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-secondary/20 border border-secondary text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary">
                  Inquiry Received!
                </h3>
                <p className="text-xs sm:text-sm text-ink max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formState.name}</strong>. Your inquiry regarding <strong>{formState.serviceInterest}</strong> has been logged. Our salon team will contact you at <strong>{formState.phone}</strong> shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', phone: '', email: '', serviceInterest: 'Hair Treatment / Spa', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-soft"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sneha Kulkarni"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-edge text-ink text-xs focus:outline-none focus:border-secondary focus:bg-surface transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98200 12345"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-edge text-ink text-xs focus:outline-none focus:border-secondary focus:bg-surface transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. sneha@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-edge text-ink text-xs focus:outline-none focus:border-secondary focus:bg-surface transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      value={formState.serviceInterest}
                      onChange={(e) => setFormState({ ...formState, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-edge text-ink text-xs focus:outline-none focus:border-secondary focus:bg-surface transition-all"
                    >
                      <option value="Hair Treatment / Spa">L'Oréal Hair Spa &amp; Treatment</option>
                      <option value="Precision Haircut & Styling">Precision Haircut &amp; Styling</option>
                      <option value="Hydra Radiance Facial">Hydra Radiance Facial / Skincare</option>
                      <option value="Bridal Makeover Consultation">Bridal Makeover Consultation</option>
                      <option value="Hair Smoothening / Color">X-Tenso Smoothening / Hair Color</option>
                      <option value="Waxing & Grooming">Rica Waxing &amp; Threading</option>
                      <option value="Other Inquiries">General Salon Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink mb-1.5">
                    Your Message / Desired Date or Timing
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us about your hair/skin requirements or preferred appointment day..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-edge text-ink text-xs focus:outline-none focus:border-secondary focus:bg-surface transition-all"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-soft hover:shadow-plum transition-all"
                  >
                    <Send className="w-4 h-4 text-secondary" />
                    <span>Send Message (Demo)</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
