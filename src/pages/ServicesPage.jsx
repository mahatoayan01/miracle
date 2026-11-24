import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { salonData } from '../data/salonData';
import { useBooking } from '../context/BookingContext';
import ServiceCard from '../components/ServiceCard';
import { 
  Sparkles, 
  Search, 
  Scissors, 
  Smile, 
  Crown, 
  Zap, 
  Heart, 
  Calendar, 
  ArrowRight,
  ShoppingBag
} from 'lucide-react';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { selectedServices, clearSelectedServices } = useBooking();

  // Category Icon Resolver
  const getCategoryIcon = (id) => {
    switch(id) {
      case 'hair': return Scissors;
      case 'skin': return Smile;
      case 'bridal': return Crown;
      case 'waxing': return Zap;
      case 'nails': return Heart;
      default: return Sparkles;
    }
  };

  // Filtered Services List
  const filteredServices = useMemo(() => {
    return salonData.services.filter((srv) => {
      const matchCat = selectedCategory === 'all' || srv.category === selectedCategory;
      const matchSearch = srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          srv.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (srv.badge && srv.badge.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Total cart calculation
  const totalAmount = selectedServices.reduce((sum, s) => sum + s.price, 0);

  return (
    <div className="min-h-screen bg-bg pb-24">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-14 border-b-2 border-secondary/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Salon Menu</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Our Services &amp; Rate Card
          </h1>

          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Transparent pricing for hair therapies, skin rituals, bridal artistry, gentle waxing, and nail care. All performed with authentic salon formulations.
          </p>

          {/* Search bar inside header */}
          <div className="max-w-md mx-auto mt-8 relative">
            <Search className="w-5 h-5 text-white/50 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. Hair Spa, Hydra Facial, Waxing)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:bg-white/20 focus:border-secondary text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/70 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Category Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {salonData.serviceCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-primary text-white shadow-soft ring-2 ring-secondary/50'
                    : 'bg-surface text-ink hover:bg-bg-alt border border-edge'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-secondary' : 'text-primary'}`} />
                <span>{cat.name}</span>
                {cat.id !== 'all' && (
                  <span className="text-[10px] opacity-70">
                    ({salonData.services.filter(s => s.category === cat.id).length})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Services Sticky Notification (if user added items) */}
        {selectedServices.length > 0 && (
          <div className="mt-4 mb-6 p-4 rounded-2xl bg-secondary/15 border border-secondary/50 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary text-secondary">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-ink">
                  {selectedServices.length} Service{selectedServices.length > 1 ? 's' : ''} Selected
                </p>
                <p className="text-xs text-ink-muted">
                  Estimated Total: <span className="font-bold text-primary">₹{totalAmount}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={clearSelectedServices}
                className="text-xs text-ink-muted hover:text-rose-700 underline px-2 py-1"
              >
                Clear all
              </button>
              <Link
                to="/book"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-soft"
              >
                <Calendar className="w-4 h-4 text-secondary" />
                <span>Proceed to Booking ({selectedServices.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="mt-6">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="bg-surface rounded-2xl p-12 text-center border border-edge">
              <Search className="w-10 h-10 text-ink-muted mx-auto mb-3" />
              <h3 className="font-display font-semibold text-lg text-ink">
                No matching services found
              </h3>
              <p className="text-xs text-ink-muted mt-1">
                Try searching for different keywords like 'Hair Spa', 'Facial', or reset category filters.
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
