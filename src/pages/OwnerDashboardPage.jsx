import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { salonData } from '../data/salonData';
import { 
  Users, 
  Calendar, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  TrendingUp, 
  Search, 
  Filter, 
  LogOut, 
  ShieldCheck, 
  Sparkles, 
  Eye, 
  RotateCcw,
  Check,
  X,
  Plus
} from 'lucide-react';

export default function OwnerDashboardPage() {
  const { 
    ownerUser, 
    logoutOwner, 
    bookings, 
    updateBookingStatus, 
    resetBookingsToDemo,
    createBooking 
  } = useBooking();

  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalBooking, setActiveModalBooking] = useState(null);

  // Protected route check
  if (!ownerUser) {
    return <Navigate to="/owner/login" replace />;
  }

  // Calculate Metrics
  const totalBookingsCount = bookings.length;
  const pendingCount = bookings.filter(b => b.status === 'Pending').length;
  const confirmedCount = bookings.filter(b => b.status === 'Confirmed').length;
  const completedCount = bookings.filter(b => b.status === 'Completed').length;
  
  // Total Revenue from all non-cancelled bookings
  const totalRevenue = bookings
    .filter(b => b.status !== 'Cancelled')
    .reduce((sum, b) => sum + (b.totalAmount || 0), 0);

  // Filter Bookings Table
  const filteredBookings = bookings.filter((b) => {
    const matchStatus = statusFilter === 'All' || b.status === statusFilter;
    const matchSearch = b.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.phone.includes(searchQuery) ||
                        b.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchStatus && matchSearch;
  });

  // Simulator helper: Quick add a demo customer
  const simulateNewCustomer = () => {
    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const names = ["Meera Joshi", "Gauri Salunkhe", "Divya Nair", "Tanvi Sawant"];
    const chosenName = names[Math.floor(Math.random() * names.length)];
    const chosenService = salonData.services[Math.floor(Math.random() * salonData.services.length)];

    createBooking({
      customerName: `${chosenName} (${randomSuffix})`,
      phone: `+91 98200 ${randomSuffix}`,
      email: `${chosenName.toLowerCase().replace(/\s+/g, '')}@example.com`,
      date: new Date().toISOString().split('T')[0],
      timeSlot: "03:00 PM",
      services: [{ name: chosenService.name, price: chosenService.price }],
      totalAmount: chosenService.price,
      stylist: "Senior Hair Design Lead",
      status: "Pending",
      paymentStatus: "Pay at Salon",
      paymentMethod: "Cash / UPI at Salon",
      notes: "Simulated live walk-in / online reservation"
    });
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Confirmed':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Pending':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Cancelled':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-bg pb-24">
      
      {/* Dashboard Top Header Bar */}
      <header className="bg-primary text-white border-b border-secondary/30 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/images/logo.svg" 
                alt={salonData.info.name} 
                className="h-10 w-auto brightness-0 invert" 
              />
            </Link>
            <div className="hidden sm:block border-l border-white/20 pl-4">
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider block">
                Management Portal
              </span>
              <span className="text-xs text-white/70">
                Parel Village • Logged in as: <strong>{ownerUser.role}</strong>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-xs text-white/80 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10 hidden md:block"
            >
              View Live Website →
            </Link>

            <button
              onClick={logoutOwner}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
            >
              <LogOut className="w-3.5 h-3.5 text-secondary" />
              <span>Sign Out</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Welcome & Simulator Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface p-6 rounded-3xl border border-edge shadow-soft">
          <div>
            <h1 className="font-display font-bold text-2xl text-primary">
              Salon Appointment Overview
            </h1>
            <p className="text-xs text-ink-muted mt-1">
              Live dashboard for Miracle beauty &amp; hair salon. State is synchronized in your browser's localStorage.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={simulateNewCustomer}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-soft"
              title="Add a sample booking into the system"
            >
              <Plus className="w-3.5 h-3.5 text-secondary" />
              <span>Simulate New Booking</span>
            </button>

            <button
              onClick={resetBookingsToDemo}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-bg hover:bg-bg-alt border border-edge text-xs font-medium text-ink-muted"
              title="Reset records to default demo data"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Demo Data</span>
            </button>
          </div>
        </div>

        {/* 4 Analytics Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Total Revenue */}
          <div className="bg-surface rounded-2xl p-5 border border-edge shadow-soft flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider">Demo Revenue</p>
              <p className="font-display font-bold text-2xl text-primary mt-1">
                ₹{totalRevenue.toLocaleString('en-IN')}
              </p>
              <span className="text-[11px] text-emerald-700 font-medium">From {totalBookingsCount} bookings</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-secondary/20 text-secondary-dark flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>

          {/* Card 2: Total Bookings */}
          <div className="bg-surface rounded-2xl p-5 border border-edge shadow-soft flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider">Total Bookings</p>
              <p className="font-display font-bold text-2xl text-ink mt-1">
                {totalBookingsCount}
              </p>
              <span className="text-[11px] text-ink-muted">All active &amp; historical</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-accent-soft text-primary flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
          </div>

          {/* Card 3: Pending Approvals */}
          <div className="bg-surface rounded-2xl p-5 border border-edge shadow-soft flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider">Pending Action</p>
              <p className="font-display font-bold text-2xl text-amber-700 mt-1">
                {pendingCount}
              </p>
              <span className="text-[11px] text-amber-700 font-medium">Awaiting salon confirmation</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          {/* Card 4: Confirmed & Completed */}
          <div className="bg-surface rounded-2xl p-5 border border-edge shadow-soft flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider">Confirmed Slots</p>
              <p className="font-display font-bold text-2xl text-emerald-700 mt-1">
                {confirmedCount}
              </p>
              <span className="text-[11px] text-emerald-700 font-medium">{completedCount} completed sessions</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* Bookings Table with Search & Status Filters */}
        <div className="bg-surface rounded-3xl border border-edge shadow-card overflow-hidden">
          
          {/* Table Controls Header */}
          <div className="p-6 border-b border-edge flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Status Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    statusFilter === status
                      ? 'bg-primary text-white shadow-soft'
                      : 'bg-bg text-ink hover:bg-bg-alt border border-edge'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by client or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-bg border border-edge text-xs text-ink focus:outline-none focus:border-secondary"
              />
            </div>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-ink">
              <thead className="bg-bg text-ink-muted uppercase font-semibold text-[10px] tracking-wider border-b border-edge">
                <tr>
                  <th className="py-3.5 px-6">Booking ID</th>
                  <th className="py-3.5 px-6">Client Info</th>
                  <th className="py-3.5 px-6">Date &amp; Slot</th>
                  <th className="py-3.5 px-6">Services &amp; Amount</th>
                  <th className="py-3.5 px-6">Payment Mode</th>
                  <th className="py-3.5 px-6">Status Change</th>
                  <th className="py-3.5 px-6 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-edge/70">
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-bg/40 transition-colors">
                      
                      {/* ID */}
                      <td className="py-4 px-6 font-mono font-bold text-primary">
                        {b.id}
                      </td>

                      {/* Client */}
                      <td className="py-4 px-6">
                        <p className="font-semibold text-ink">{b.customerName}</p>
                        <p className="text-ink-muted text-[11px]">{b.phone}</p>
                      </td>

                      {/* Date & Time */}
                      <td className="py-4 px-6 whitespace-nowrap">
                        <p className="font-semibold text-ink">{b.date}</p>
                        <p className="text-ink-muted text-[11px]">{b.timeSlot}</p>
                      </td>

                      {/* Services & Amount */}
                      <td className="py-4 px-6">
                        <div className="font-medium text-ink line-clamp-1 max-w-xs">
                          {b.services.map(s => s.name).join(', ')}
                        </div>
                        <p className="font-bold text-primary text-xs mt-0.5">
                          ₹{b.totalAmount}
                        </p>
                      </td>

                      {/* Payment */}
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className="text-[11px] font-medium text-ink block">
                          {b.paymentMethod || "Counter Pay"}
                        </span>
                        <span className="text-[10px] text-ink-muted">
                          {b.paymentStatus}
                        </span>
                      </td>

                      {/* Status Dropdown */}
                      <td className="py-4 px-6 whitespace-nowrap">
                        <select
                          value={b.status}
                          onChange={(e) => updateBookingStatus(b.id, e.target.value)}
                          className={`px-3 py-1 rounded-full text-[11px] font-bold border focus:outline-none cursor-pointer ${getStatusBadge(b.status)}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <button
                          onClick={() => setActiveModalBooking(b)}
                          className="px-3 py-1.5 rounded-lg bg-bg hover:bg-secondary/20 text-primary font-semibold text-xs border border-edge transition-colors"
                        >
                          Details
                        </button>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-12 text-center text-ink-muted">
                      No appointments matching the selected status or query.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>

        {/* Payment History / Financial Ledger Section */}
        <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-edge shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-edge">
            <div>
              <h3 className="font-display font-bold text-lg text-primary">
                Demo Financial Ledger &amp; Settlement Log
              </h3>
              <p className="text-xs text-ink-muted">
                Audit trail for simulated card/UPI authorizations and pending counter settlements.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-secondary/20 text-ink text-xs font-bold">
              Demo Audit Clean
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-bg border border-edge">
              <span className="text-xs text-ink-muted block">Simulated Online Payments</span>
              <span className="font-bold text-lg text-primary mt-1 block">
                ₹{bookings
                  .filter(b => b.paymentStatus && b.paymentStatus.includes('Paid'))
                  .reduce((sum, b) => sum + b.totalAmount, 0)
                  .toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-emerald-700">Ready for daily bank payout</span>
            </div>

            <div className="p-4 rounded-2xl bg-bg border border-edge">
              <span className="text-xs text-ink-muted block">Pending Reception Collections</span>
              <span className="font-bold text-lg text-amber-700 mt-1 block">
                ₹{bookings
                  .filter(b => b.status === 'Confirmed' && (!b.paymentStatus || !b.paymentStatus.includes('Paid')))
                  .reduce((sum, b) => sum + b.totalAmount, 0)
                  .toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-ink-muted">To be collected upon client arrival</span>
            </div>

            <div className="p-4 rounded-2xl bg-bg border border-edge">
              <span className="text-xs text-ink-muted block">Cancelled / Forfeited Volume</span>
              <span className="font-bold text-lg text-rose-700 mt-1 block">
                ₹{bookings
                  .filter(b => b.status === 'Cancelled')
                  .reduce((sum, b) => sum + b.totalAmount, 0)
                  .toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-ink-muted">Slots reopened for walk-ins</span>
            </div>
          </div>
        </div>

      </main>

      {/* Booking Details Modal */}
      {activeModalBooking && (
        <div className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-edge shadow-2xl space-y-6 animate-fadeIn">
            
            <div className="flex items-center justify-between pb-3 border-b border-edge">
              <div>
                <span className="text-[11px] font-mono text-secondary-dark font-bold">
                  {activeModalBooking.id}
                </span>
                <h3 className="font-display font-bold text-xl text-primary">
                  Appointment Details
                </h3>
              </div>
              <button
                onClick={() => setActiveModalBooking(null)}
                className="p-1.5 rounded-full hover:bg-bg text-ink-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-ink-muted block">Client Name</span>
                  <span className="font-bold text-ink text-sm">{activeModalBooking.customerName}</span>
                </div>
                <div>
                  <span className="text-ink-muted block">Phone Contact</span>
                  <a href={`tel:${activeModalBooking.phone}`} className="font-bold text-primary hover:underline">
                    {activeModalBooking.phone}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-edge">
                <div>
                  <span className="text-ink-muted block">Scheduled Date</span>
                  <span className="font-semibold text-ink">{activeModalBooking.date}</span>
                </div>
                <div>
                  <span className="text-ink-muted block">Time Slot</span>
                  <span className="font-semibold text-primary">{activeModalBooking.timeSlot}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-edge">
                <span className="text-ink-muted block mb-1">Booked Services:</span>
                <ul className="space-y-1 bg-bg p-3 rounded-xl border border-edge">
                  {activeModalBooking.services.map((s, i) => (
                    <li key={i} className="flex justify-between font-medium">
                      <span>• {s.name}</span>
                      <span>₹{s.price}</span>
                    </li>
                  ))}
                  <li className="flex justify-between font-bold pt-2 border-t border-edge text-primary">
                    <span>Total Amount:</span>
                    <span>₹{activeModalBooking.totalAmount}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-edge">
                <span className="text-ink-muted block">Special Client Notes:</span>
                <p className="mt-1 p-2.5 rounded-xl bg-bg border border-edge italic text-ink">
                  "{activeModalBooking.notes || 'No notes'}"
                </p>
              </div>

              <div className="pt-2 border-t border-edge flex items-center justify-between">
                <div>
                  <span className="text-ink-muted block">Current Status:</span>
                  <span className={`inline-block mt-1 px-3 py-1 rounded-full font-bold text-[11px] border ${getStatusBadge(activeModalBooking.status)}`}>
                    {activeModalBooking.status}
                  </span>
                </div>

                <div className="flex gap-2">
                  {activeModalBooking.status !== 'Confirmed' && (
                    <button
                      onClick={() => {
                        updateBookingStatus(activeModalBooking.id, 'Confirmed');
                        setActiveModalBooking(prev => ({ ...prev, status: 'Confirmed' }));
                      }}
                      className="px-3 py-1.5 rounded-xl bg-emerald-700 text-white font-semibold text-xs"
                    >
                      Confirm Slot
                    </button>
                  )}
                  {activeModalBooking.status !== 'Completed' && (
                    <button
                      onClick={() => {
                        updateBookingStatus(activeModalBooking.id, 'Completed');
                        setActiveModalBooking(prev => ({ ...prev, status: 'Completed' }));
                      }}
                      className="px-3 py-1.5 rounded-xl bg-blue-700 text-white font-semibold text-xs"
                    >
                      Complete
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-edge text-right">
              <button
                onClick={() => setActiveModalBooking(null)}
                className="px-5 py-2 rounded-xl bg-bg hover:bg-bg-alt text-ink font-semibold text-xs border border-edge"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
