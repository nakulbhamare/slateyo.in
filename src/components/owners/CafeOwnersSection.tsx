import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  Camera,
  ArrowRight,
  BarChart3,
  Heart,
  QrCode,
} from 'lucide-react';
import { GradientWaves } from '../ui/GradientWaves';

export const CafeOwnersSection: React.FC = () => {
  const { setIsOwnerModalOpen } = useApp();
  const [featuredPostIndex] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const ownerMoments = [
    {
      author: '@arjun.creates',
      caption: 'Filter cold brew under the shaded bamboo canopy 🍃',
      img: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=400&q=80',
      likes: 182,
      time: '18m ago',
    },
    {
      author: '@maya.and.lee',
      caption: 'Best corner seating in Koramangala! ✨',
      img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=400&q=80',
      likes: 241,
      time: '1h ago',
    },
    {
      author: '@sarahbakes',
      caption: 'Warm chocolate babka toast & flat white ☕',
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80',
      likes: 94,
      time: '2h ago',
    },
  ];

  const handleExportInstagram = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="for-cafes" className="py-20 lg:py-28 bg-brand-slate text-white relative overflow-hidden">
      {/* Background WebGL Gradient Waves from React Bits */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <GradientWaves
          horizonColor="#0E1726"
          waveColor="#ED1B77"
          crestColor="#FCE7F1"
          speed={0.35}
          amplitude={2.0}
          waveScale={0.5}
          waveRatio={0.8}
          swell={25}
          turbulence={15}
          tilt={1.15}
          zoom={1.05}
          height={5.2}
          fogDepth={18}
          detail="medium"
          brightness={1.05}
          opacity={0.8}
          mouseInteraction={true}
          parallaxStrength={0.35}
          grain={true}
          grainIntensity={0.03}
        />
      </div>

      {/* Subtle Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-navy rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-pink-light text-xs font-bold uppercase tracking-wider border border-white/15">
            <Users className="w-3.5 h-3.5 text-pink-brand" />
            <span>For Café Owners & Roasters</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your customers are already{' '}
            <span className="font-editorial-italic font-normal text-pink-brand">
              creating your content.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            Slateyo turns those moments into a community that helps your café grow. Keep tables buzzing, collect authentic UGC, and reward regulars.
          </p>
        </div>

        {/* Two Column Layout: Benefits on Left, Clean Owner Dashboard Mockup on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: 3 Benefits (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Benefit 1 */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-pink-brand/40 transition-all space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-brand/20 text-pink-brand flex items-center justify-center font-bold">
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-white">CUSTOMER CONTENT</h3>
              </div>
              <p className="text-sm text-slate-300 font-medium pl-13 leading-relaxed">
                Collect authentic photos and experiences created by your customers without hiring expensive media agencies.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-pink-brand/40 transition-all space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-brand/20 text-pink-brand flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-white">LOYAL COMMUNITY</h3>
              </div>
              <p className="text-sm text-slate-300 font-medium pl-13 leading-relaxed">
                Give people reasons to return, participate and become regulars with automated Slate Point rewards.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-pink-brand/40 transition-all space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-brand/20 text-pink-brand flex items-center justify-center font-bold">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-white">SIMPLE INSIGHTS</h3>
              </div>
              <p className="text-sm text-slate-300 font-medium pl-13 leading-relaxed">
                Understand what people are sharing, popular menu items, and how your community is growing week over week.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => setIsOwnerModalOpen(true)}
                className="px-8 py-4 rounded-full bg-pink-brand hover:bg-pink-brandHover text-white font-extrabold text-sm flex items-center gap-3 shadow-pink-glow active:scale-95 transition-all"
              >
                <span>Bring your café to Slateyo →</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Clean Slateyo Café Dashboard Mockup (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-brand-navy/90 rounded-[2.5rem] p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6 text-left backdrop-blur-xl">
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-black text-pink-brand border border-white/10">
                    ☕
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-brand">
                      YOUR CAFÉ DASHBOARD
                    </span>
                    <h3 className="text-base font-extrabold text-white">Third Wave Coffee · Koramangala</h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>

              {/* 4 Metric Counters (Grid 2x2) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold text-slate-400 block">Community Moments</span>
                  <span className="text-xl font-black text-white mt-1 block">1,284</span>
                  <span className="text-[10px] text-emerald-400 font-bold">+18 today</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold text-slate-400 block">Active Members</span>
                  <span className="text-xl font-black text-white mt-1 block">628</span>
                  <span className="text-[10px] text-emerald-400 font-bold">+12 this wk</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold text-slate-400 block">Rewards Claimed</span>
                  <span className="text-xl font-black text-white mt-1 block">342</span>
                  <span className="text-[10px] text-pink-brand font-bold">Coffee & Bakes</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold text-slate-400 block">Monthly Growth</span>
                  <span className="text-xl font-black text-emerald-400 mt-1 block">+24%</span>
                  <span className="text-[10px] text-slate-400 font-bold">MoM Growth</span>
                </div>
              </div>

              {/* Customer Photo Moderation & 1-Click Feature Queue */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span>Live Customer UGC Queue</span>
                  <span className="text-pink-brand">Ready for Instagram Feature</span>
                </div>

                {/* Active Highlight Card */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={ownerMoments[featuredPostIndex].img}
                      alt="Customer UGC"
                      className="w-14 h-14 rounded-xl object-cover border border-white/15"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">
                          {ownerMoments[featuredPostIndex].author}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {ownerMoments[featuredPostIndex].time}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 truncate max-w-[200px] sm:max-w-xs mt-0.5">
                        "{ownerMoments[featuredPostIndex].caption}"
                      </p>
                      <span className="text-[10px] text-pink-brand font-bold flex items-center gap-1 mt-1">
                        <Heart className="w-2.5 h-2.5 fill-pink-brand" /> {ownerMoments[featuredPostIndex].likes} community likes
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleExportInstagram}
                    className="px-3 py-2 rounded-xl bg-pink-brand hover:bg-pink-brandHover text-white text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-sm transition-all"
                  >
                    <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>{copiedLink ? 'Saved to Story!' : 'Feature UGC'}</span>
                  </button>
                </div>
              </div>

              {/* QR Stand Table Kit Preview */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-brand/20 to-brand-slate/40 border border-pink-brand/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-brand-slate flex items-center justify-center font-bold">
                    <QrCode className="w-5 h-5 text-pink-brand" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">Slateyo QR Table Kit Included</h4>
                    <p className="text-[11px] text-slate-300">Custom wooden/acrylic stands delivered to your café.</p>
                  </div>
                </div>
                <span className="text-xs font-black text-pink-brand">Free Setup</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
