import React from 'react';
import { salonData } from '../data/salonData';
import { Instagram, ExternalLink, Heart } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-surface border-b border-edge overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Instagram className="w-3.5 h-3.5" />
            <span>Salon Studio Gallery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
            Fresh Looks & Studio Moments
          </h2>
          <p className="text-sm text-ink-muted mt-2">
            A glimpse into everyday transformations, precision hair cuts, hydra glow rituals, and relaxing studio sessions in Parel.
          </p>
        </div>

        {/* 6-Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {salonData.instagramFeed.map((item) => (
            <div 
              key={item.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-bg border border-edge shadow-soft"
            >
              <img
                src={item.image}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-white">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-[11px] leading-snug line-clamp-3 text-white/90">
                  {item.caption}
                </p>
                <div className="flex items-center gap-1 text-[10px] text-secondary font-medium">
                  <Heart className="w-3 h-3 fill-secondary" />
                  <span>Miracle Parel</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href={salonData.contact.socials.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-soft hover:shadow-plum transition-all"
          >
            <Instagram className="w-4 h-4 text-secondary" />
            <span>Follow {salonData.contact.socials.instagram.handle}</span>
            <ExternalLink className="w-3 h-3 text-white/70" />
          </a>
          <span className="text-xs text-ink-muted">
            {salonData.contact.socials.instagram.note}
          </span>
        </div>

      </div>
    </section>
  );
}
