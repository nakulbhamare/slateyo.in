import React from 'react';
import { useApp } from '../../context/AppContext';
import { FloatingBadge } from './FloatingBadge';
import {
  Sparkles,
  ArrowRight,
  Heart,
  QrCode,
  CheckCircle2,
  Camera,
  Coffee,
  Gift,
  Compass,
  Star,
} from 'lucide-react';
import { ShinyText } from '../ui/ShinyText';

export const HeroSection: React.FC = () => {
  const {
    setIsExploreOpen,
    setIsOwnerModalOpen,
    setIsQRScanModalOpen,
    setIsShareOpen,
    addPoints,
  } = useApp();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-pink-light/40 via-soft-blue/30 to-cream-300/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Copy & CTAs (7 cols on desktop) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Top Eyebrow Section: Coming Soon above The Digital Social Space for Cafés */}
            <div className="space-y-3.5 flex flex-col items-center lg:items-start">
              {/* Coming Soon - Larger Size, Borderless & Prominent */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-pink-light text-pink-brand text-base sm:text-lg font-black tracking-wider uppercase shadow-pink-glow/25 hover:scale-105 transition-all cursor-default">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-brand opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-brand" />
                </span>
                <Sparkles className="w-5 h-5 text-pink-brand animate-pulse" />
                <span className="font-black tracking-wide">Coming Soon !</span>
              </div>

              {/* Brand Concept Pill: The Digital Social Space for Cafés */}
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-cream-200 text-brand-slate text-sm sm:text-base font-bold shadow-soft-sm">
                <ShinyText
                  text="The Digital Social Space for Cafés"
                  speed={2.5}
                  color="#0E1726"
                  shineColor="#ED1B77"
                  spread={120}
                  className="font-extrabold"
                />
              </div>
            </div>

            {/* Main Headline with Editorial Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-[1.12]">
              Your café.{' '}
              <span className="font-editorial-italic font-normal text-pink-brand underline decoration-pink-brand/30 underline-offset-8">
                Your people.
              </span>{' '}
              Your moments.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-brand-charcoal/75 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Slateyo gives every café its own social space — where people discover, share and get rewarded.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => setIsExploreOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-brand-slate hover:bg-brand-slateLight active:scale-95 text-white font-extrabold text-sm shadow-soft-md hover:shadow-soft-lg transition-all flex items-center justify-center gap-2.5 group"
              >
                <Compass className="w-4 h-4 text-pink-brand group-hover:rotate-45 transition-transform" />
                <span>Explore Slateyo</span>
                <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('for-cafes')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-cream-card hover:bg-cream-200/90 active:scale-95 text-brand-charcoal font-bold text-sm border border-cream-border shadow-soft-sm transition-all flex items-center justify-center gap-2"
              >
                <span>For Café Owners</span>
              </button>
            </div>

            {/* Core Loop Summary Badges */}
            <div className="pt-4 sm:pt-6 border-t border-cream-border/70 grid grid-cols-4 gap-2 text-center max-w-md mx-auto lg:mx-0">
              <div className="space-y-1">
                <span className="text-[11px] font-extrabold tracking-wider uppercase text-pink-brand">
                  01. SCAN
                </span>
                <p className="text-xs font-bold text-brand-slate">Table QR</p>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-extrabold tracking-wider uppercase text-brand-muted">
                  02. DISCOVER
                </span>
                <p className="text-xs font-bold text-brand-slate">Real Vibe</p>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-extrabold tracking-wider uppercase text-brand-muted">
                  03. SHARE
                </span>
                <p className="text-xs font-bold text-brand-slate">Photos</p>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-extrabold tracking-wider uppercase text-pink-brand">
                  04. EARN
                </span>
                <p className="text-xs font-bold text-brand-slate">Free Treats</p>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Mobile UI Matching Reference Screenshot & Floating Badges (6 cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-2 lg:pt-0">

            {/* Ambient Image Backdrop Card & iPhone Wrapper */}
            <div className="relative w-full max-w-[325px] sm:max-w-[345px]">

              {/* iPhone Hardware Shell */}
              <div className="relative z-10 bg-slate-950 rounded-[3rem] p-2.5 shadow-[0_30px_90px_-20px_rgba(15,23,42,0.55),0_0_0_1px_rgba(255,255,255,0.2)] ring-1 ring-slate-800 border-[3px] border-slate-900 overflow-hidden">

                {/* iPhone Screen */}
                <div className="bg-white rounded-[2.4rem] overflow-hidden flex flex-col relative select-none">

                  {/* Top Half: Landscape Hero Atmosphere Image with iOS Status & Floating Circular Glass Buttons */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                      alt="Third Wave Coffee Atmosphere"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20" />

                    {/* iOS Status Bar with Dynamic Island */}
                    <div className="absolute top-0 left-0 right-0 pt-2.5 px-6 flex items-center justify-between text-white z-20">
                      {/* Time */}
                      <span className="text-[11px] font-bold tracking-tight text-white/95">9:41</span>

                      {/* Dynamic Island Pill */}
                      <div className="w-20 h-4.5 bg-black rounded-full flex items-center justify-center gap-1 shadow-inner">
                        <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                      </div>

                      {/* Signal & Battery Icons */}
                      <div className="flex items-center gap-1.5 text-white/90">
                        {/* Signal Bars */}
                        <div className="flex items-end gap-0.5 h-2">
                          <span className="w-0.5 h-1 bg-white rounded-full" />
                          <span className="w-0.5 h-1.5 bg-white rounded-full" />
                          <span className="w-0.5 h-2 bg-white rounded-full" />
                        </div>
                        {/* Battery */}
                        <div className="w-4 h-2 border border-white/90 rounded-[3px] p-0.5 flex items-center">
                          <div className="h-full w-3/4 bg-white rounded-[1px]" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Circular Action Buttons (Back & Like) */}
                    <div className="absolute top-10 left-3.5 right-3.5 flex items-center justify-between z-20">
                      {/* Back Button */}
                      <button
                        onClick={() => setIsExploreOpen(true)}
                        className="w-9 h-9 rounded-full bg-white/90 hover:bg-white backdrop-blur-md text-brand-slate shadow-soft-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                        aria-label="Back"
                      >
                        <svg className="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Heart Button */}
                      <button
                        onClick={() => addPoints(20, 'Liked Third Wave Coffee')}
                        className="w-9 h-9 rounded-full bg-white/90 hover:bg-white backdrop-blur-md text-pink-brand shadow-soft-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95 group"
                        aria-label="Favorite"
                      >
                        <Heart className="w-4 h-4 fill-pink-brand group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Half: Sliding White Card Sheet Overlapping the Hero Image */}
                  <div className="relative -mt-8 z-10 bg-white rounded-t-[2rem] px-4 pt-2.5 pb-3 flex-1 flex flex-col justify-between shadow-[0_-8px_25px_rgba(0,0,0,0.12)]">

                    {/* Top Sheet Pull Handle Pill */}
                    <div className="w-8 h-1 bg-slate-200 rounded-full mx-auto mb-2" />

                    {/* Main Title & Rating Row */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                          Third Wave Coffee
                        </h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          {/* Green Leaf / Verified Badge Icon */}
                          <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-black">
                            ✓
                          </div>
                          <span className="text-xs font-bold text-slate-600">
                            Koramangala, Bengaluru
                          </span>
                        </div>
                      </div>

                      {/* Star Rating & Review Count */}
                      <div className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span className="text-xs font-black text-slate-900">5.0</span>
                        </div>
                        <button
                          onClick={() => setIsShareOpen(true)}
                          className="text-[10px] text-slate-400 font-semibold underline underline-offset-2 hover:text-pink-brand transition-colors block mt-0.5"
                        >
                          1,284 moments
                        </button>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <div className="mt-2 text-[11px] text-slate-500 leading-relaxed font-medium">
                      Third Wave Coffee, often simply called TWC, is one of Bengaluru's most iconic specialty cafés, renowned for...{' '}
                      <button
                        onClick={() => setIsExploreOpen(true)}
                        className="text-slate-900 font-bold hover:text-pink-brand transition-colors underline underline-offset-2"
                      >
                        Read more
                      </button>
                    </div>

                    {/* Upcoming Moments / Highlights Section Header */}
                    <div className="mt-3 flex items-center justify-between">
                      <h4 className="text-xs font-extrabold text-slate-900 tracking-tight">
                        Popular moments
                      </h4>
                      <button
                        onClick={() => setIsShareOpen(true)}
                        className="text-[10px] font-bold text-slate-400 hover:text-pink-brand transition-colors"
                      >
                        See all
                      </button>
                    </div>

                    {/* Horizontal Moments Carousel Cards */}
                    <div className="mt-2 flex gap-2.5 overflow-hidden">

                      {/* Main Featured Card 1 */}
                      <div className="w-[74%] shrink-0 bg-slate-50/80 rounded-2xl p-2 border border-slate-100 shadow-soft-sm flex flex-col justify-between">
                        {/* Image Container with Floating Heart */}
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80"
                            alt="Signature Pour-Over"
                            className="w-full h-full object-cover"
                          />
                          {/* Mini Floating Heart on Card */}
                          <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-pink-brand shadow-sm">
                            <Heart className="w-3 h-3 fill-pink-brand" />
                          </div>
                        </div>

                        {/* Card Info & Dark Circular Arrow Button */}
                        <div className="pt-2">
                          <p className="text-[11px] font-black text-slate-900 truncate">
                            Artisan Pour-Over
                          </p>
                          <p className="text-[9px] text-slate-500 font-medium">
                            Table 04 · Earn +20 pts
                          </p>
                          <div className="pt-1.5 flex items-center justify-between">
                            <div className="flex items-center gap-1 text-[10px] text-slate-600 font-bold">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              <span>4.9</span>
                              <span className="text-[9px] text-slate-400 font-normal">· 56 moments</span>
                            </div>

                            <button
                              onClick={() => addPoints(20, 'Instant Table Moment')}
                              className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-pink-brand active:scale-95 transition-all shadow-sm"
                              title="Check In"
                            >
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Peeking Card 2 on the right edge */}
                      <div className="w-[42%] shrink-0 bg-slate-50/80 rounded-2xl p-2 border border-slate-100 shadow-soft-sm opacity-90 flex flex-col justify-between">
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80"
                            alt="Fresh Bakes"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="pt-2">
                          <p className="text-[11px] font-black text-slate-900 truncate">
                            Almond Croissant
                          </p>
                          <div className="pt-1.5 flex items-center gap-1 text-[10px] text-slate-600 font-bold">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            <span>4.8</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* iOS Home Indicator Bar */}
                    <div className="pt-2 pb-0.5 flex justify-center">
                      <div className="w-24 h-1 bg-slate-900/30 rounded-full" />
                    </div>

                  </div>

                </div>
              </div>

              {/* Floating UI Badges Around Phone */}

              {/* Badge 1: New Moment Shared (Top Left) */}
              <div className="absolute -top-5 -left-6 sm:-left-12 z-20">
                <FloatingBadge
                  icon={<Camera className="w-4 h-4" />}
                  title="New moment shared"
                  subtitle="@arjun.creates · 2m ago"
                  delay="0s"
                />
              </div>

              {/* Badge 2: +20 Slate Points (Top Right) */}
              <div className="absolute top-14 -right-6 sm:-right-12 z-20">
                <FloatingBadge
                  icon={<Sparkles className="w-4 h-4" />}
                  title="+20 Slate Points"
                  subtitle="Table 04 checked in"
                  points="Earned"
                  delay="1.5s"
                />
              </div>

              {/* Badge 3: 182 Community Moments (Bottom Left) */}
              <div className="absolute bottom-20 -left-6 sm:-left-12 z-20">
                <FloatingBadge
                  icon={<Coffee className="w-4 h-4" />}
                  title="Third Wave Coffee"
                  subtitle="1,284 moments"
                  delay="3s"
                />
              </div>

              {/* Badge 4: Reward Unlocked (Bottom Right) */}
              <div className="absolute -bottom-4 -right-4 sm:-right-8 z-20">
                <FloatingBadge
                  icon={<Gift className="w-4 h-4" />}
                  title="Reward Unlocked"
                  subtitle="Free Specialty Flat White ☕"
                  points="Claimed"
                  delay="4.5s"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
