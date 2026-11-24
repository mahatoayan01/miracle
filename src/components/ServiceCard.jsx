import React from 'react';
import { useBooking } from '../context/BookingContext';
import { Clock, Plus, Check, Sparkles } from 'lucide-react';

export default function ServiceCard({ service }) {
  const { isServiceSelected, toggleService } = useBooking();
  const selected = isServiceSelected(service.id);

  return (
    <div className={`group flex flex-col bg-surface rounded-2xl border transition-all duration-300 overflow-hidden ${
      selected 
        ? 'border-primary shadow-card ring-2 ring-primary/20 bg-accent-soft/20' 
        : 'border-edge hover:border-secondary/60 hover:shadow-card'
    }`}>
      {/* Service Image with Category & Badge */}
      <div className="relative aspect-[16/10] overflow-hidden bg-bg">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity"></div>
        
        {/* Category Pill */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-md text-[11px] font-semibold tracking-wide text-primary shadow-sm uppercase">
          {service.categoryName || service.category}
        </span>

        {/* Feature/Popular Badge */}
        {service.badge && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-secondary text-ink text-[11px] font-bold shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>{service.badge}</span>
          </span>
        )}

        {/* Duration Chip at bottom right */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-ink/70 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1">
          <Clock className="w-3 h-3 text-secondary" />
          <span>{service.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-semibold text-lg text-ink group-hover:text-primary transition-colors leading-snug">
            {service.name}
          </h3>
          <p className="text-xs text-ink-muted mt-2 leading-relaxed line-clamp-2">
            {service.description}
          </p>

          {/* Key Inclusions */}
          {service.features && service.features.length > 0 && (
            <ul className="mt-3.5 space-y-1">
              {service.features.map((feat, i) => (
                <li key={i} className="text-[11px] text-ink-muted flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Price & Action Button */}
        <div className="mt-6 pt-4 border-t border-edge/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-ink-muted uppercase tracking-wider block font-medium">Pricing</span>
            <span className="text-base font-bold text-primary">
              {service.priceDisplay || `₹${service.price}`}
            </span>
          </div>

          <button
            onClick={() => toggleService(service)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 active:scale-95 ${
              selected
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-primary hover:bg-primary-hover text-white shadow-soft hover:shadow-plum'
            }`}
          >
            {selected ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added ✓</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 text-secondary" />
                <span>Add to Booking</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
