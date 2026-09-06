import React from 'react';
import { useApp } from '../../context/AppContext';
import { Compass, ArrowRight, Sparkles } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  const { setIsExploreOpen, setIsOwnerModalOpen } = useApp();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-cream-100">
      {/* Editorial Café Glow & Background Layer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-cream-card via-white to-cream-200 border border-cream-border p-10 sm:p-16 lg:p-20 text-center shadow-soft-xl">
          
          {/* Subtle Pink Ambient Blur Inside Card */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-pink-light rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-10 w-80 h-80 bg-soft-blue/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-border text-xs font-bold text-brand-slate shadow-soft-sm">
              <Sparkles className="w-3.5 h-3.5 text-pink-brand" />
              <span>Join the Café Culture Movement</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              Your next favorite café is{' '}
              <span className="font-editorial-italic font-normal text-pink-brand underline decoration-pink-brand/30 underline-offset-8">
                waiting.
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-brand-charcoal/70 font-medium max-w-lg mx-auto leading-relaxed">
              Discover places. Share moments. Earn rewards.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setIsExploreOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-pink-brand hover:bg-pink-brandHover text-white font-extrabold text-sm shadow-pink-glow active:scale-95 transition-all flex items-center justify-center gap-2.5"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Slateyo</span>
              </button>

              <button
                onClick={() => setIsOwnerModalOpen(true)}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white hover:bg-cream-100 text-brand-slate font-extrabold text-sm border border-cream-border shadow-soft-sm active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Own a café? Get started →</span>
              </button>
            </div>

            <p className="text-xs text-brand-muted font-medium pt-2">
              Free for café visitors. Instant QR setup for café partners.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
