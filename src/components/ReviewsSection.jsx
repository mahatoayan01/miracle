import React from 'react';
import { salonData } from '../data/salonData';
import { Star, CheckCircle, ExternalLink, MessageCircle } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-bg-alt/40 border-b border-edge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Real Rating Score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-ink text-xs font-semibold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
              <span>Real Customer Testimonials</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
              Loved by Parel's Neighborhood
            </h2>
            <p className="text-sm text-ink-muted mt-2 max-w-xl">
              Authentic verified customer feedback collected directly from Google Maps and local listings. We take pride in gentle care and genuine salon results.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 bg-surface p-4 rounded-2xl border border-edge shadow-soft shrink-0">
            <div className="text-center px-2">
              <div className="font-display text-4xl font-bold text-primary leading-none">
                {salonData.info.rating}
              </div>
              <div className="flex items-center justify-center gap-0.5 text-secondary mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <div className="border-l border-edge pl-4 text-xs">
              <p className="font-semibold text-ink">
                {salonData.info.reviewCount}+ Verified Reviews
              </p>
              <p className="text-ink-muted">Google Maps & Justdial</p>
              <a
                href={salonData.info.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline font-medium mt-1"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3 text-secondary" />
              </a>
            </div>
          </div>
        </div>

        {/* Grid of Real Customer Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salonData.reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-surface rounded-2xl p-6 border border-edge hover:border-secondary/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-soft text-primary font-display font-bold text-base flex items-center justify-center border border-edge">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink text-sm">
                        {rev.author}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-emerald-700">
                        <CheckCircle className="w-3 h-3" />
                        <span>{rev.date}</span>
                      </div>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-bg text-ink-muted border border-edge">
                    {rev.source}
                  </span>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 text-secondary mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review text */}
                <blockquote className="text-xs sm:text-sm text-ink-muted leading-relaxed italic">
                  "{rev.comment}"
                </blockquote>
              </div>

              {/* Tag for service mentioned */}
              {rev.serviceMentioned && (
                <div className="mt-5 pt-3 border-t border-edge text-[11px] text-primary font-medium flex items-center justify-between">
                  <span>Service: {rev.serviceMentioned}</span>
                  <span className="text-[10px] text-ink-muted">Verified Client</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Direct Link to Google Maps */}
        <div className="mt-10 text-center">
          <a
            href={salonData.info.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-edge text-primary hover:border-primary font-medium text-xs shadow-soft hover:shadow-card transition-all"
          >
            <span>Read all reviews and photos on Google Maps</span>
            <ExternalLink className="w-4 h-4 text-secondary" />
          </a>
        </div>

      </div>
    </section>
  );
}
