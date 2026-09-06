import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  QrCode,
  Compass,
  Camera,
  Gift,
  RotateCcw,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Heart,
  ChevronRight,
  Star,
} from 'lucide-react';

interface LoopStep {
  id: string;
  stepNumber: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: any;
  screenTitle: string;
  screenSubtitle: string;
  screenImage: string;
  screenBadge: string;
  pointsHighlight?: string;
}

const LOOP_STEPS: LoopStep[] = [
  {
    id: 'scan',
    stepNumber: '01',
    title: 'SCAN',
    shortDesc: 'Find the Slateyo QR at your table.',
    fullDesc: 'Find the unique Slateyo QR code at any participating café table, counter, or menu to step directly into their digital home.',
    icon: QrCode,
    screenTitle: 'Table 04 · Third Wave Coffee',
    screenSubtitle: 'QR scanned · Seamless entry',
    screenImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    screenBadge: 'Table QR Verified',
  },
  {
    id: 'discover',
    stepNumber: '02',
    title: 'DISCOVER',
    shortDesc: 'Enter the café’s living social space.',
    fullDesc: 'See real photos and recommendations from fellow customers who are visiting today. No influencer ads or stale reviews.',
    icon: Compass,
    screenTitle: 'Live Café Feed & Ambience',
    screenSubtitle: '1,284 moments · 4.9 Rating',
    screenImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    screenBadge: 'Living Profile Active',
  },
  {
    id: 'share',
    stepNumber: '03',
    title: 'SHARE',
    shortDesc: 'Post a candid photo or moment from your visit.',
    fullDesc: 'Snap your specialty pour-over, breakfast sourdough, workspace nook, or laughter with friends and add your mood tag.',
    icon: Camera,
    screenTitle: 'New Moment Uploaded',
    screenSubtitle: '@you.discover · Just now',
    screenImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    screenBadge: 'Moment Published',
    pointsHighlight: '+20 Slate Points',
  },
  {
    id: 'earn',
    stepNumber: '04',
    title: 'EARN',
    shortDesc: 'Receive Slate Points and unlock rewards.',
    fullDesc: 'Earn +20 points immediately. Watch your balance grow and unlock free specialty coffees, bakery treats, and secret discounts.',
    icon: Gift,
    screenTitle: 'Reward Milestone Reached',
    screenSubtitle: '100 pts · Free Beverage Ready',
    screenImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    screenBadge: 'Free Flat White Unlocked',
    pointsHighlight: 'Reward Active',
  },
  {
    id: 'return',
    stepNumber: '05',
    title: 'RETURN',
    shortDesc: 'Become part of the café’s loyal community.',
    fullDesc: 'Come back, connect with fellow regulars, unlock higher status perks, and see your moments featured on the café wall.',
    icon: RotateCcw,
    screenTitle: 'Café Regular Status',
    screenSubtitle: 'VIP Member · 12 Visits',
    screenImage: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
    screenBadge: 'Community Regular',
  },
];

export const SlateyoLoopSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const { setIsQRScanModalOpen, addPoints } = useApp();

  const currentStep = LOOP_STEPS[activeStepIndex];

  // Subtle auto-progression through the loop unless user interacted
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % LOOP_STEPS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section id="the-loop" className="py-20 lg:py-28 bg-cream-200/50 relative border-y border-cream-border/70 overflow-hidden">
      
      {/* Background Decorative Flow Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-pink-brand text-xs font-bold uppercase tracking-wider border border-pink-subtle shadow-soft-sm">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>The Social Flywheel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            One scan.{' '}
            <span className="font-editorial-italic font-normal text-pink-brand">
              A whole new café experience.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/70 font-medium leading-relaxed">
            The frictionless loop that turns a casual coffee run into a rewarding community ritual.
          </p>
        </div>

        {/* Interactive Loop Display: Left Steps Flow + Right Dynamic Mobile Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Step Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {LOOP_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStepIndex;

              return (
                <div
                  key={step.id}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveStepIndex(index);
                  }}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border text-left ${
                    isActive
                      ? 'bg-white border-pink-brand/40 shadow-soft-lg ring-1 ring-pink-brand/20 scale-[1.01]'
                      : 'bg-white/60 hover:bg-white border-cream-border/70 shadow-soft-sm'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Icon & Number */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                        isActive
                          ? 'bg-pink-brand text-white shadow-pink-glow'
                          : 'bg-cream-200 text-brand-slate'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-black uppercase tracking-wider ${
                              isActive ? 'text-pink-brand' : 'text-brand-muted'
                            }`}
                          >
                            STEP {step.stepNumber} · {step.title}
                          </span>
                        </div>
                        {isActive && (
                          <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-pink-light text-pink-brand animate-pulse">
                            Active Step
                          </span>
                        )}
                      </div>

                      <h3
                        className={`text-base font-extrabold mt-0.5 ${
                          isActive ? 'text-brand-charcoal' : 'text-brand-charcoal/80'
                        }`}
                      >
                        {step.shortDesc}
                      </h3>

                      {isActive && (
                        <p className="text-xs text-brand-charcoal/70 font-medium mt-2 leading-relaxed animate-fade-in">
                          {step.fullDesc}
                        </p>
                      )}
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 mt-1 transition-transform ${
                        isActive ? 'text-pink-brand translate-x-1' : 'text-brand-muted/40'
                      }`}
                    />
                  </div>
                </div>
              );
            })}

            {/* Quick Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsQRScanModalOpen(true)}
                className="px-5 py-2.5 rounded-full bg-brand-slate text-white text-xs font-extrabold flex items-center gap-2 shadow-soft-sm hover:bg-brand-slateLight transition-all"
              >
                <QrCode className="w-3.5 h-3.5 text-pink-brand" />
                <span>Test Interactive QR Scanner</span>
              </button>
              <button
                onClick={() => addPoints(20, 'Loop Demonstration')}
                className="px-4 py-2.5 rounded-full bg-white text-pink-brand text-xs font-bold border border-pink-subtle hover:bg-pink-light transition-all"
              >
                <span>+20 Pts Demo</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Mobile Preview Matching Reference Screenshot (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[325px] sm:max-w-[345px]">
              
              {/* iPhone Hardware Shell */}
              <div className="relative z-10 bg-slate-950 rounded-[3rem] p-2.5 shadow-[0_30px_90px_-20px_rgba(15,23,42,0.55),0_0_0_1px_rgba(255,255,255,0.2)] ring-1 ring-slate-800 border-[3px] border-slate-900 overflow-hidden">
                
                {/* iPhone Screen */}
                <div className="bg-white rounded-[2.4rem] overflow-hidden flex flex-col relative select-none">
                  
                  {/* Top Half: Landscape Step Atmosphere Image with iOS Status & Floating Circular Glass Buttons */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      key={currentStep.screenImage}
                      src={currentStep.screenImage}
                      alt={currentStep.title}
                      className="w-full h-full object-cover animate-fade-in transition-all duration-500"
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

                    {/* Floating Circular Action Buttons (Prev Step & Like) */}
                    <div className="absolute top-10 left-3.5 right-3.5 flex items-center justify-between z-20">
                      {/* Back / Prev Step Button */}
                      <button
                        onClick={() => {
                          setIsAutoPlaying(false);
                          setActiveStepIndex((prev) => (prev - 1 + LOOP_STEPS.length) % LOOP_STEPS.length);
                        }}
                        className="w-9 h-9 rounded-full bg-white/90 hover:bg-white backdrop-blur-md text-brand-slate shadow-soft-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                        aria-label="Previous Step"
                      >
                        <svg className="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Step Tag / Heart Button */}
                      <button
                        onClick={() => {
                          setIsAutoPlaying(false);
                          setActiveStepIndex((prev) => (prev + 1) % LOOP_STEPS.length);
                        }}
                        className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-md text-pink-brand shadow-soft-md flex items-center gap-1.5 text-[10px] font-extrabold transition-transform hover:scale-105 active:scale-95"
                        aria-label="Next Step"
                      >
                        <Heart className="w-3.5 h-3.5 fill-pink-brand" />
                        <span>{currentStep.pointsHighlight || 'Step ' + currentStep.stepNumber}</span>
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
                          {currentStep.screenTitle}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          {/* Green Leaf / Verified Badge Icon */}
                          <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-black">
                            ✓
                          </div>
                          <span className="text-xs font-bold text-slate-600">
                            {currentStep.screenSubtitle}
                          </span>
                        </div>
                      </div>

                      {/* Star Rating & Review Count */}
                      <div className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span className="text-xs font-black text-slate-900">5.0</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold underline underline-offset-2 block mt-0.5">
                          Step {activeStepIndex + 1} of {LOOP_STEPS.length}
                        </span>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <div className="mt-2 text-[11px] text-slate-500 leading-relaxed font-medium">
                      {currentStep.fullDesc}{' '}
                      <button
                        onClick={() => {
                          setIsAutoPlaying(false);
                          setActiveStepIndex((prev) => (prev + 1) % LOOP_STEPS.length);
                        }}
                        className="text-slate-900 font-bold hover:text-pink-brand transition-colors underline underline-offset-2"
                      >
                        Next step →
                      </button>
                    </div>

                    {/* Upcoming Moments / Next Steps Section Header */}
                    <div className="mt-3 flex items-center justify-between">
                      <h4 className="text-xs font-extrabold text-slate-900 tracking-tight">
                        Next in the loop
                      </h4>
                      <div className="flex gap-1">
                        {LOOP_STEPS.map((_, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setIsAutoPlaying(false);
                              setActiveStepIndex(i);
                            }}
                            className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                              i === activeStepIndex ? 'w-4 bg-pink-brand' : 'w-1.5 bg-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Horizontal Moments Carousel Cards */}
                    <div className="mt-2 flex gap-2.5 overflow-hidden">
                      
                      {/* Next Step Preview Card 1 */}
                      {(() => {
                        const nextStep = LOOP_STEPS[(activeStepIndex + 1) % LOOP_STEPS.length];
                        return (
                          <div
                            onClick={() => {
                              setIsAutoPlaying(false);
                              setActiveStepIndex((activeStepIndex + 1) % LOOP_STEPS.length);
                            }}
                            className="w-[74%] shrink-0 bg-slate-50/80 rounded-2xl p-2 border border-slate-100 shadow-soft-sm flex flex-col justify-between cursor-pointer hover:border-pink-brand/40 transition-all"
                          >
                            {/* Image Container with Floating Heart */}
                            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                              <img
                                src={nextStep.screenImage}
                                alt={nextStep.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-pink-brand shadow-sm">
                                <Heart className="w-3 h-3 fill-pink-brand" />
                              </div>
                            </div>

                            {/* Card Info & Dark Circular Arrow Button */}
                            <div className="pt-2">
                              <p className="text-[11px] font-black text-slate-900 truncate">
                                STEP {nextStep.stepNumber} · {nextStep.title}
                              </p>
                              <p className="text-[9px] text-slate-500 font-medium line-clamp-1">
                                {nextStep.shortDesc}
                              </p>
                              <div className="pt-1.5 flex items-center justify-between">
                                <div className="flex items-center gap-1 text-[10px] text-slate-600 font-bold">
                                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                  <span>4.9</span>
                                  <span className="text-[9px] text-slate-400 font-normal">· +20 pts</span>
                                </div>

                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsAutoPlaying(false);
                                    setActiveStepIndex((activeStepIndex + 1) % LOOP_STEPS.length);
                                  }}
                                  className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-pink-brand active:scale-95 transition-all shadow-sm"
                                  title="Advance Step"
                                >
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })()}

                      {/* Peeking Card 2 on the right edge */}
                      {(() => {
                        const nextNextStep = LOOP_STEPS[(activeStepIndex + 2) % LOOP_STEPS.length];
                        return (
                          <div
                            onClick={() => {
                              setIsAutoPlaying(false);
                              setActiveStepIndex((activeStepIndex + 2) % LOOP_STEPS.length);
                            }}
                            className="w-[42%] shrink-0 bg-slate-50/80 rounded-2xl p-2 border border-slate-100 shadow-soft-sm opacity-90 flex flex-col justify-between cursor-pointer"
                          >
                            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                              <img
                                src={nextNextStep.screenImage}
                                alt={nextNextStep.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="pt-2">
                              <p className="text-[11px] font-black text-slate-900 truncate">
                                {nextNextStep.title}
                              </p>
                              <div className="pt-1.5 flex items-center gap-1 text-[10px] text-slate-600 font-bold">
                                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                <span>5.0</span>
                              </div>
                            </div>
                          </div>
                        );
                      })()}

                    </div>

                    {/* iOS Home Indicator Bar */}
                    <div className="pt-2 pb-0.5 flex justify-center">
                      <div className="w-24 h-1 bg-slate-900/30 rounded-full" />
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
