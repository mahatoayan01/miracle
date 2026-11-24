import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { salonData } from '../data/salonData';
import { useBooking } from '../context/BookingContext';
import confetti from 'canvas-confetti';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  Check, 
  X, 
  CreditCard, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle,
  CheckCircle,
  Plus,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

export default function BookingPage() {
  const navigate = useNavigate();
  const { 
    selectedServices, 
    removeService, 
    addService, 
    createBooking 
  } = useBooking();

  // Form State
  const todayStr = new Date().toISOString().split('T')[0];
  const [appointmentDate, setAppointmentDate] = useState(todayStr);
  const [selectedSlot, setSelectedSlot] = useState(salonData.timeSlots[1] || '11:00 AM');
  const [selectedStylist, setSelectedStylist] = useState(salonData.stylists[0].name);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('salon_counter');
  
  // UI states
  const [isProcessing, setIsProcessing] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [validationError, setValidationError] = useState('');

  // Cart total
  const totalAmount = selectedServices.reduce((sum, s) => sum + s.price, 0);

  // Quick add helpers if cart is empty
  const quickAddServices = salonData.services.slice(0, 3);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setValidationError('');

    if (selectedServices.length === 0) {
      setValidationError('Please select at least one service before confirming.');
      return;
    }

    if (!customerName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }

    if (!customerPhone.trim() || customerPhone.trim().length < 8) {
      setValidationError('Please provide a valid phone number so we can confirm your slot.');
      return;
    }

    setIsProcessing(true);

    // Simulate realistic payment / network booking delay
    setTimeout(() => {
      let payStatus = "Pending (Counter Pay)";
      let payMethodLabel = "Cash / UPI at Salon";

      if (paymentMethod === 'demo_card') {
        payStatus = "Paid (Demo Card)";
        payMethodLabel = "Credit Card (Demo)";
      } else if (paymentMethod === 'demo_upi') {
        payStatus = "Paid (Demo UPI)";
        payMethodLabel = "UPI GPay/PhonePe (Demo)";
      }

      const newBookingObj = createBooking({
        customerName: customerName.trim(),
        phone: customerPhone.trim(),
        email: customerEmail.trim() || "N/A",
        date: appointmentDate,
        timeSlot: selectedSlot,
        services: selectedServices.map(s => ({ name: s.name, price: s.price })),
        totalAmount,
        stylist: selectedStylist,
        status: "Confirmed",
        paymentStatus: payStatus,
        paymentMethod: payMethodLabel,
        notes: notes.trim() || "No special notes provided."
      });

      setIsProcessing(false);
      setConfirmedBooking(newBookingObj);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-bg pb-28">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-12 border-b-2 border-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Instant Reservation</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Book Your Salon Appointment
          </h1>
          <p className="text-white/80 text-xs sm:text-sm max-w-xl mx-auto mt-2">
            Select your preferred time slot and treatments. All online demo payments are strictly simulated with zero charges.
          </p>
        </div>
      </section>

      {/* Confirmation Screen Overlay */}
      {confirmedBooking ? (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 animate-fadeIn">
          <div className="bg-surface rounded-3xl p-8 sm:p-10 border-2 border-secondary shadow-card text-center space-y-6">
            
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-soft">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-secondary/20 text-ink text-xs font-bold uppercase tracking-wider">
                Booking Confirmed
              </span>
              <h2 className="font-display font-bold text-3xl text-primary mt-2">
                We're Excited to Welcome You!
              </h2>
              <p className="text-xs text-ink-muted mt-1">
                Your reservation has been added to our live salon calendar and saved in your browser.
              </p>
            </div>

            {/* Booking Card Breakdown */}
            <div className="bg-bg rounded-2xl p-6 border border-edge text-left space-y-4 max-w-lg mx-auto text-xs">
              
              <div className="flex items-center justify-between pb-3 border-b border-edge">
                <span className="text-ink-muted">Booking Reference:</span>
                <span className="font-bold font-mono text-sm text-primary">{confirmedBooking.id}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-ink-muted">Client Name:</span>
                <span className="font-semibold text-ink">{confirmedBooking.customerName}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-ink-muted">Date &amp; Time:</span>
                <span className="font-semibold text-primary">{confirmedBooking.date} at {confirmedBooking.timeSlot}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-ink-muted">Assigned Stylist:</span>
                <span className="font-semibold text-ink">{confirmedBooking.stylist}</span>
              </div>

              <div className="pt-2 border-t border-edge">
                <span className="text-ink-muted block mb-1">Services Booked:</span>
                <ul className="space-y-1">
                  {confirmedBooking.services.map((s, i) => (
                    <li key={i} className="flex justify-between font-medium text-ink">
                      <span>• {s.name}</span>
                      <span>₹{s.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-edge text-sm font-bold text-primary">
                <span>Total Amount:</span>
                <span>₹{confirmedBooking.totalAmount}</span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-edge text-[11px]">
                <span className="text-ink-muted">Payment Status:</span>
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {confirmedBooking.paymentStatus}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/owner/dashboard"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-secondary hover:bg-secondary-hover text-ink font-bold text-xs shadow-gold transition-all"
              >
                View Live in Owner Dashboard →
              </Link>

              <button
                onClick={() => {
                  setConfirmedBooking(null);
                  setCustomerName('');
                  setCustomerPhone('');
                  setNotes('');
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-xs transition-all shadow-soft"
              >
                Book Another Appointment
              </button>

              <Link
                to="/"
                className="text-xs text-ink-muted hover:text-primary font-medium"
              >
                Back to Home
              </Link>
            </div>

            <p className="text-[11px] text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200">
              📌 <strong>Demonstration Notice:</strong> This appointment was automatically written to your browser's local state. You can log into the Owner Portal using <strong>admin / miracle2024</strong> to inspect or update its status!
            </p>

          </div>
        </div>
      ) : (

        /* Active Booking Form Grid */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <form onSubmit={handleBookingSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column (7 Cols): Step-by-Step Selection Form */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* STEP 1: Selected Services Summary */}
                <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-edge shadow-card">
                  <div className="flex items-center justify-between pb-4 border-b border-edge">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <h2 className="font-display font-bold text-xl text-primary">
                        Selected Services
                      </h2>
                    </div>

                    <Link
                      to="/services"
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5 text-secondary" />
                      <span>Browse More Services</span>
                    </Link>
                  </div>

                  {selectedServices.length > 0 ? (
                    <div className="divide-y divide-edge/60 mt-2">
                      {selectedServices.map((srv) => (
                        <div key={srv.id} className="py-3 flex items-center justify-between gap-4">
                          <div>
                            <h4 className="text-sm font-semibold text-ink">{srv.name}</h4>
                            <p className="text-xs text-ink-muted">{srv.duration} • {srv.categoryName || srv.category}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-bold text-sm text-primary">
                              {srv.priceDisplay || `₹${srv.price}`}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeService(srv.id)}
                              className="p-1 rounded-full hover:bg-rose-100 text-ink-muted hover:text-rose-700 transition-colors"
                              title="Remove service"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-6 text-center space-y-3">
                      <ShoppingBag className="w-8 h-8 text-ink-muted mx-auto" />
                      <p className="text-xs text-ink-muted">
                        No service currently selected in your cart.
                      </p>
                      
                      {/* Quick Add Suggestions */}
                      <div className="pt-2">
                        <p className="text-[11px] font-semibold text-ink uppercase tracking-wider mb-2">
                          Quick Add Popular Choices:
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                          {quickAddServices.map((qs) => (
                            <button
                              key={qs.id}
                              type="button"
                              onClick={() => addService(qs)}
                              className="px-3 py-1.5 rounded-full bg-bg hover:bg-secondary/20 border border-edge text-xs font-medium text-ink transition-colors flex items-center gap-1"
                            >
                              <Plus className="w-3 h-3 text-secondary" />
                              <span>{qs.name} (₹{qs.price})</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* STEP 2: Choose Date & Time Slot */}
                <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-edge shadow-card space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-edge">
                    <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <h2 className="font-display font-bold text-xl text-primary">
                      Date &amp; Time Slot
                    </h2>
                  </div>

                  {/* Date Input */}
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      Select Appointment Date
                    </label>
                    <input
                      type="date"
                      min={todayStr}
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      className="w-full sm:w-64 px-4 py-2.5 rounded-xl bg-bg border border-edge text-sm font-medium text-ink focus:outline-none focus:border-secondary"
                    />
                  </div>

                  {/* Slot selector chips */}
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-2">
                      Available Time Slots (Tuesday – Sunday)
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {salonData.timeSlots.map((slot) => {
                        const isChosen = selectedSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                              isChosen
                                ? 'bg-primary text-white shadow-soft ring-2 ring-secondary'
                                : 'bg-bg text-ink hover:bg-secondary/15 border border-edge'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Stylist Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      Stylist Preference
                    </label>
                    <select
                      value={selectedStylist}
                      onChange={(e) => setSelectedStylist(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-bg border border-edge text-xs font-medium text-ink focus:outline-none focus:border-secondary"
                    >
                      {salonData.stylists.map((st) => (
                        <option key={st.id} value={st.name}>
                          {st.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* STEP 3: Client Details */}
                <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-edge shadow-card space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-edge">
                    <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <h2 className="font-display font-bold text-xl text-primary">
                      Your Contact Details
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Radhika Varma"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-bg border border-edge text-xs text-ink focus:outline-none focus:border-secondary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98201 12345"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-bg border border-edge text-xs text-ink focus:outline-none focus:border-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. radhika@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-bg border border-edge text-xs text-ink focus:outline-none focus:border-secondary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1">
                      Special Notes / Hair Length / Allergies
                    </label>
                    <textarea
                      rows="2"
                      placeholder="e.g. Very sensitive skin, or bridal saree draping requirements..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-bg border border-edge text-xs text-ink focus:outline-none focus:border-secondary"
                    ></textarea>
                  </div>
                </div>

                {/* STEP 4: Demo Payment Selection */}
                <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-edge shadow-card space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-edge">
                    <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-xl text-primary">
                        Demo Payment Selection
                      </h2>
                      <p className="text-[11px] text-amber-700 font-semibold">
                        DEMO MODE: No real card or bank charge is processed.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <label className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'salon_counter' 
                        ? 'border-primary bg-accent-soft/30 ring-1 ring-primary' 
                        : 'border-edge bg-bg'
                    }`}>
                      <input
                        type="radio"
                        name="payment"
                        value="salon_counter"
                        checked={paymentMethod === 'salon_counter'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mt-1"
                      />
                      <div>
                        <span className="font-semibold text-xs text-ink block">Pay at Salon Counter (Cash / UPI)</span>
                        <span className="text-[11px] text-ink-muted">Settle your payment directly at the reception in Patel Wadi after your service.</span>
                      </div>
                    </label>

                    <label className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'demo_card' 
                        ? 'border-primary bg-accent-soft/30 ring-1 ring-primary' 
                        : 'border-edge bg-bg'
                    }`}>
                      <input
                        type="radio"
                        name="payment"
                        value="demo_card"
                        checked={paymentMethod === 'demo_card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mt-1"
                      />
                      <div>
                        <span className="font-semibold text-xs text-ink block">Demo Credit / Debit Card (Simulated)</span>
                        <span className="text-[11px] text-ink-muted">Simulates instant online payment authorization.</span>
                      </div>
                    </label>

                    <label className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'demo_upi' 
                        ? 'border-primary bg-accent-soft/30 ring-1 ring-primary' 
                        : 'border-edge bg-bg'
                    }`}>
                      <input
                        type="radio"
                        name="payment"
                        value="demo_upi"
                        checked={paymentMethod === 'demo_upi'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mt-1"
                      />
                      <div>
                        <span className="font-semibold text-xs text-ink block">Demo UPI (GPay / PhonePe simulated)</span>
                        <span className="text-[11px] text-ink-muted">Simulates seamless UPI intent checkout with instant confirmation.</span>
                      </div>
                    </label>
                  </div>
                </div>

              </div>

              {/* Right Column (5 Cols): Order Summary & Confirm Action */}
              <div className="lg:col-span-5 sticky top-28 space-y-6">
                
                <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-edge shadow-card space-y-6">
                  
                  <h3 className="font-display font-bold text-xl text-primary pb-3 border-b border-edge">
                    Appointment Summary
                  </h3>

                  {/* Summary Details */}
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between text-ink-muted">
                      <span>Date:</span>
                      <span className="font-semibold text-ink">{appointmentDate}</span>
                    </div>

                    <div className="flex justify-between text-ink-muted">
                      <span>Time:</span>
                      <span className="font-semibold text-primary">{selectedSlot}</span>
                    </div>

                    <div className="flex justify-between text-ink-muted">
                      <span>Stylist:</span>
                      <span className="font-semibold text-ink">{selectedStylist}</span>
                    </div>

                    <div className="flex justify-between text-ink-muted">
                      <span>Services Count:</span>
                      <span className="font-semibold text-ink">{selectedServices.length} item(s)</span>
                    </div>
                  </div>

                  {/* Price Calculation */}
                  <div className="pt-4 border-t border-edge space-y-2 text-xs">
                    <div className="flex justify-between text-ink-muted">
                      <span>Subtotal:</span>
                      <span>₹{totalAmount}</span>
                    </div>
                    <div className="flex justify-between text-ink-muted">
                      <span>Taxes &amp; GST:</span>
                      <span className="text-emerald-700 font-medium">Included</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-primary pt-2 border-t border-edge">
                      <span>Total Amount:</span>
                      <span>₹{totalAmount}</span>
                    </div>
                  </div>

                  {/* Error Message if any */}
                  {validationError && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  {/* Confirm CTA */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-plum hover:shadow-card transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-75"
                  >
                    {isProcessing ? (
                      <>
                        <span className="w-4 h-4 border-2 border-secondary border-t-transparent rounded-full animate-spin"></span>
                        <span>Confirming Reservation...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4 text-secondary" />
                        <span>Confirm Appointment (Demo ₹{totalAmount})</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-[11px] text-ink-muted text-center space-y-1">
                    <p className="flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                      <span>100% Free Demo Booking • No Real Charge</span>
                    </p>
                    <p>Salon: Shop No. 8/A, Patel Wadi, Parel, Mumbai</p>
                  </div>

                </div>

              </div>

            </div>
          </form>
        </div>
      )}

    </div>
  );
}
