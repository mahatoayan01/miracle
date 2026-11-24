import React from 'react';
import { ShieldCheck, Award, Sparkles, MapPin } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Award,
      title: "L'Oréal Professionnel Partner",
      description: "Original salon formulas, Serie Expert hair spas & Majirel / Inoa colors."
    },
    {
      icon: Sparkles,
      title: "100% Genuine Branded Care",
      description: "No diluted or local imitation cosmetics. Only verified salon formulations."
    },
    {
      icon: ShieldCheck,
      title: "Sterilized Hygiene Standards",
      description: "Single-use disposables, freshly sanitized combs, scissors, and clean stations."
    },
    {
      icon: MapPin,
      title: "Parel Landmark Sanctuary",
      description: "Conveniently situated opposite Abhyudaya Bank in Patel Wadi, Parel Village."
    }
  ];

  return (
    <section className="bg-surface border-y border-edge py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-bg/50 border border-edge/60 hover:border-secondary/50 hover:bg-surface transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-accent-soft text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink text-sm sm:text-base group-hover:text-primary transition-colors">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
