import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Compass,
  Camera,
  Gift,
  Heart,
  Sparkles,
  MapPin,
  ArrowRight,
  Plus,
  Coffee,
  Smile,
} from 'lucide-react';
import { BorderGlow } from '../ui/BorderGlow';

export const WhatIsSection: React.FC = () => {
  const { setIsExploreOpen, setIsShareOpen, userPoints, addPoints } = useApp();
  const [activeCardTab, setActiveCardTab] = useState<'discover' | 'share' | 'earn'>('discover');
  const [likedCard, setLikedCard] = useState(false);
  const [shareInput, setShareInput] = useState('Chilling with iced nitro cold brew & friends ☕✨');

  return (
    <section id="what-is-slateyo" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-brand-slate text-xs font-bold uppercase tracking-wider border border-cream-border">
            <span>The Concept</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Slateyo makes café visits{' '}
            <span className="font-editorial-italic font-normal text-pink-brand">more social.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/70 font-medium leading-relaxed">
            Discover the places people love, share the moments that matter, and get rewarded for being part of the community.
          </p>
        </div>

        {/* Three Large Visual Cards with Unique Interactive Treatments & Border Glow */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 01: DISCOVER */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="335 85 65"
            backgroundColor="#FFFFFF"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1.0}
            coneSpread={25}
            colors={['#ED1B77', '#F59E0B', '#38BDF8']}
            fillOpacity={0.4}
            className="h-full group"
          >
            <div className="p-7 sm:p-8 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-brand-slate/15 group-hover:text-pink-brand/30 transition-colors">
                    01
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-cream-200 text-brand-slate flex items-center justify-center font-bold shadow-inner">
                    <Compass className="w-5 h-5 text-pink-brand" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-brand-charcoal mb-2">DISCOVER</h3>
                  <p className="text-sm text-brand-charcoal/70 font-medium leading-relaxed">
                    Find cafés through the people and moments that make them special.
                  </p>
                </div>

                {/* Unique Visual Treatment: Discovery Feed Simulator */}
                <div className="rounded-2xl bg-cream-100 p-3.5 border border-cream-border/80 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-brand-muted">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-pink-brand" /> Near Indiranagar
                    </span>
                    <span className="text-pink-brand">4.9 ★</span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
                      alt="Blue Tokai discovery"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-2.5 text-white">
                      <span className="font-bold text-xs">Blue Tokai Coffee</span>
                      <span className="text-[10px] text-white/80">946 real customer moments</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-brand-slate font-semibold px-1">
                    <span className="truncate">"Best estate pour-over in town"</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-cream-300 font-bold">
                      Garden Vibe
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-cream-border/60 mt-6">
                <button
                  onClick={() => setIsExploreOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-cream-100 hover:bg-pink-light text-brand-slate hover:text-pink-brand text-xs font-extrabold flex items-center justify-center gap-2 border border-cream-border hover:border-pink-subtle transition-all"
                >
                  <span>Browse Neighborhood Cafés</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </BorderGlow>

          {/* Card 02: SHARE */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="335 85 65"
            backgroundColor="#FFFFFF"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1.0}
            coneSpread={25}
            colors={['#ED1B77', '#FF6B6B', '#EC4899']}
            fillOpacity={0.4}
            className="h-full group"
          >
            <div className="p-7 sm:p-8 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-brand-slate/15 group-hover:text-pink-brand/30 transition-colors">
                    02
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-cream-200 text-brand-slate flex items-center justify-center font-bold shadow-inner">
                    <Camera className="w-5 h-5 text-pink-brand" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-brand-charcoal mb-2">SHARE</h3>
                  <p className="text-sm text-brand-charcoal/70 font-medium leading-relaxed">
                    Capture your coffee, food, friends, mood or favorite corner.
                  </p>
                </div>

                {/* Unique Visual Treatment: Live Moment Creator Card */}
                <div className="rounded-2xl bg-cream-100 p-3.5 border border-cream-border/80 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      alt="Author avatar"
                      className="w-7 h-7 rounded-full object-cover border border-cream-border"
                    />
                    <div className="leading-tight">
                      <p className="text-xs font-bold text-brand-slate">Posting at Subko Coffee</p>
                      <p className="text-[10px] text-pink-brand font-semibold">+20 Slate Points</p>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-cream-200 border border-cream-border flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
                      alt="Coffee sharing preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white">
                      Live Preview
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="text"
                      value={shareInput}
                      onChange={(e) => setShareInput(e.target.value)}
                      className="w-full text-[11px] bg-white border border-cream-border rounded-lg px-2.5 py-1.5 font-medium text-brand-charcoal focus:outline-none focus:border-pink-brand"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-cream-border/60 mt-6">
                <button
                  onClick={() => setIsShareOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-pink-brand text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-pink-glow hover:bg-pink-brandHover active:scale-95 transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Try Sharing a Moment</span>
                </button>
              </div>
            </div>
          </BorderGlow>

          {/* Card 03: EARN */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 90 60"
            backgroundColor="#FFFFFF"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1.0}
            coneSpread={25}
            colors={['#F59E0B', '#ED1B77', '#10B981']}
            fillOpacity={0.4}
            className="h-full group"
          >
            <div className="p-7 sm:p-8 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-brand-slate/15 group-hover:text-pink-brand/30 transition-colors">
                    03
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-cream-200 text-brand-slate flex items-center justify-center font-bold shadow-inner">
                    <Gift className="w-5 h-5 text-pink-brand" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-brand-charcoal mb-2">EARN</h3>
                  <p className="text-sm text-brand-charcoal/70 font-medium leading-relaxed">
                    Collect Slate Points and unlock rewards from cafés you love.
                  </p>
                </div>

                {/* Unique Visual Treatment: Live Slate Points & Perks Widget */}
                <div className="rounded-2xl bg-cream-100 p-3.5 border border-cream-border/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-pink-brand" />
                      <span className="text-xs font-bold text-brand-slate">Slate Balance</span>
                    </div>
                    <span className="text-xs font-black text-pink-brand">{userPoints} / 100 pts</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2.5 rounded-full bg-cream-300 overflow-hidden relative">
                    <div
                      className="h-full bg-pink-brand rounded-full transition-all duration-500 shadow-pink-glow"
                      style={{ width: `${Math.min(100, (userPoints / 100) * 100)}%` }}
                    />
                  </div>

                  {/* Next Unlocked Reward Banner */}
                  <div className="p-2.5 rounded-xl bg-white border border-cream-border flex items-center justify-between shadow-soft-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-pink-light flex items-center justify-center text-pink-brand">
                        <Coffee className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-brand-slate">Free Specialty Coffee</p>
                        <p className="text-[10px] text-brand-muted">
                          {userPoints >= 100 ? '✅ Ready to claim at counter' : `${100 - userPoints} more pts needed`}
                        </p>
                      </div>
                    </div>
                    {userPoints >= 100 ? (
                      <span className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        Claim
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md bg-cream-200 text-brand-slate text-[10px] font-bold">
                        100 pts
                      </span>
                    )}
                  </div>

                  <div className="text-[10px] text-center text-brand-muted font-medium">
                    +20 pts for every photo moment shared
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-cream-border/60 mt-6">
                <button
                  onClick={() => addPoints(20, 'Card Points Simulator')}
                  className="w-full py-2.5 rounded-xl bg-brand-slate hover:bg-brand-slateLight active:scale-95 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-soft-sm transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-pink-brand" />
                  <span>Simulate +20 Points</span>
                </button>
              </div>
            </div>
          </BorderGlow>

        </div>
      </div>
    </section>
  );
};
