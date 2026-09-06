import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import {
  Sparkles,
  Heart,
  Camera,
  MapPin,
  Star,
  Plus,
  Share2,
  CheckCircle2,
  Coffee,
  Award,
  Upload,
  Layers,
  SlidersHorizontal,
} from 'lucide-react';

export const ProductExperienceSection: React.FC = () => {
  const { userPoints, addPoints, setIsShareOpen, setIsExploreOpen } = useApp();
  const [activeTab, setActiveTab] = useState<'profile' | 'share' | 'rewards'>('profile');
  const [demoCaption, setDemoCaption] = useState('Morning pourover with Ethiopia Yirgacheffe beans ☕✨');
  const [demoTag, setDemoTag] = useState('Pour Over');
  const [postSuccess, setPostSuccess] = useState(false);

  const handleDemoPost = (e: React.FormEvent) => {
    e.preventDefault();
    setPostSuccess(true);
    addPoints(20, 'Product Demo Moment Posted');
    setTimeout(() => {
      setPostSuccess(false);
      setActiveTab('profile');
    }, 2000);
  };

  return (
    <section id="product-experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-brand-slate text-xs font-bold uppercase tracking-wider border border-cream-border">
            <Layers className="w-3.5 h-3.5 text-pink-brand" />
            <span>Interactive Mobile Product</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Every café gets its own{' '}
            <span className="font-editorial-italic font-normal text-pink-brand">
              digital home.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/70 font-medium leading-relaxed">
            Social discovery, authentic moments, live community interaction, and loyalty rewards bundled into a gorgeous mobile interface.
          </p>

          {/* Interactive Screen Switcher Tabs */}
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-cream-200 border border-cream-border shadow-soft-sm mt-4">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all ${
                activeTab === 'profile'
                  ? 'bg-brand-slate text-white shadow-sm'
                  : 'text-brand-charcoal/70 hover:text-brand-slate'
              }`}
            >
              1. Living Café Profile
            </button>
            <button
              onClick={() => setActiveTab('share')}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                activeTab === 'share'
                  ? 'bg-pink-brand text-white shadow-pink-glow'
                  : 'text-brand-charcoal/70 hover:text-pink-brand'
              }`}
            >
              <span>2. Share Moment Modal</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 font-black">+20 pts</span>
            </button>
            <button
              onClick={() => setActiveTab('rewards')}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all ${
                activeTab === 'rewards'
                  ? 'bg-brand-slate text-white shadow-sm'
                  : 'text-brand-charcoal/70 hover:text-brand-slate'
              }`}
            >
              3. Loyalty Perks
            </button>
          </div>
        </div>

        {/* Big Dual Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Large Mobile Frame (7 cols) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-lg bg-white rounded-[2.8rem] p-4 sm:p-5 shadow-soft-xl border border-cream-border ring-1 ring-black/5">
              
              {/* Screen Top Header */}
              <div className="bg-cream-100 rounded-[2.2rem] overflow-hidden border border-cream-border/80">
                
                {/* Simulated App Topbar */}
                <div className="px-5 py-3.5 bg-brand-slate text-white border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BrandLogo size="sm" />
                    <span className="text-xs font-bold text-slate-300">/ thirdwavecoffee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-pink-brand text-white shadow-pink-glow">
                      {userPoints} pts
                    </span>
                  </div>
                </div>

                {/* View Mode 1: Living Café Profile */}
                {activeTab === 'profile' && (
                  <div className="p-4 sm:p-5 space-y-4 animate-fade-in">
                    
                    {/* Café Banner Header */}
                    <div className="relative rounded-2xl overflow-hidden h-44 shadow-soft-sm">
                      <img
                        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                        alt="Third Wave Coffee Header"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-brand-slate/30 to-transparent" />
                      
                      <div className="absolute bottom-3 left-4 right-4 text-white flex items-end justify-between">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-lg font-black text-white">Third Wave Coffee</h3>
                            <CheckCircle2 className="w-4 h-4 text-pink-brand fill-white" />
                          </div>
                          <p className="text-xs text-white/80 font-medium flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3.5 h-3.5 text-pink-brand" />
                            Koramangala, Bengaluru
                          </p>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center gap-1 justify-end">
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            <span className="text-xs font-black text-white">4.9</span>
                          </div>
                          <span className="text-[11px] text-white/80 font-medium">1,284 moments</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Profile Actions */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() => setActiveTab('share')}
                        className="py-3 px-4 rounded-xl bg-pink-brand text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-pink-glow hover:bg-pink-brandHover transition-all"
                      >
                        <Camera className="w-4 h-4" />
                        <span>Share a Moment (+20 pts)</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('rewards')}
                        className="py-3 px-4 rounded-xl bg-white text-brand-slate text-xs font-extrabold flex items-center justify-center gap-2 border border-cream-border hover:bg-cream-100 transition-all shadow-soft-sm"
                      >
                        <Award className="w-4 h-4 text-pink-brand" />
                        <span>View Café Perks</span>
                      </button>
                    </div>

                    {/* Community Moments Grid */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-bold text-brand-slate px-1">
                        <span>Community Moments (Live Feed)</span>
                        <span className="text-pink-brand text-[11px] font-extrabold">All 1,284 Moments →</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80', user: '@maya.and.lee', likes: 241 },
                          { img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=400&q=80', user: '@arjun.creates', likes: 182 },
                          { img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80', user: '@sarahbakes', likes: 94 },
                          { img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80', user: '@rohanonfilm', likes: 156 },
                          { img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=400&q=80', user: '@kavyatravels', likes: 310 },
                          { img: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=400&q=80', user: '@neilfocus', likes: 128 },
                        ].map((item, idx) => (
                          <div key={idx} className="relative rounded-xl overflow-hidden aspect-square group shadow-soft-sm">
                            <img src={item.img} alt={item.user} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-1.5 text-white">
                              <span className="text-[9px] font-bold truncate">{item.user}</span>
                              <span className="text-[9px] flex items-center gap-0.5"><Heart className="w-2.5 h-2.5 fill-pink-brand text-pink-brand" /> {item.likes}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* View Mode 2: Share Moment Flow */}
                {activeTab === 'share' && (
                  <form onSubmit={handleDemoPost} className="p-4 sm:p-5 space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between pb-2 border-b border-cream-border">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-pink-brand text-white flex items-center justify-center font-bold">
                          <Camera className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-extrabold text-brand-slate">Share a Moment</h4>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-pink-light text-pink-brand text-xs font-black">
                        Earn +20 Slate Points
                      </span>
                    </div>

                    {/* Simulated Photo Upload Area */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-cream-200 border-2 border-dashed border-pink-brand/40 flex flex-col items-center justify-center p-4 text-center cursor-pointer group">
                      <img
                        src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80"
                        alt="Uploaded preview"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                        <Upload className="w-6 h-6 mb-1 text-pink-brand" />
                        <span className="text-xs font-extrabold">Photo Selected · Ready to Post</span>
                        <span className="text-[10px] text-white/80">Tap to swap photo</span>
                      </div>
                    </div>

                    {/* Caption Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-slate">Caption & Thoughts</label>
                      <textarea
                        value={demoCaption}
                        onChange={(e) => setDemoCaption(e.target.value)}
                        rows={2}
                        className="w-full text-xs p-3 rounded-xl bg-white border border-cream-border font-medium text-brand-charcoal focus:outline-none focus:border-pink-brand resize-none"
                      />
                    </div>

                    {/* Mood Tag Selector */}
                    <div className="flex gap-2">
                      {['Pour Over', 'Quiet Work', 'Morning Routine', 'Sweet Treat'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setDemoTag(t)}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                            demoTag === t
                              ? 'bg-brand-slate text-white'
                              : 'bg-cream-200 text-brand-slate hover:bg-cream-300'
                          }`}
                        >
                          #{t}
                        </button>
                      ))}
                    </div>

                    {/* Post Submit */}
                    <button
                      type="submit"
                      disabled={postSuccess}
                      className="w-full py-3 rounded-xl bg-pink-brand hover:bg-pink-brandHover text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-pink-glow transition-all"
                    >
                      {postSuccess ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Moment Posted! +20 Points Added 🎉</span>
                        </>
                      ) : (
                        <>
                          <span>Post Moment & Collect +20 Points</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* View Mode 3: Rewards Screen */}
                {activeTab === 'rewards' && (
                  <div className="p-4 sm:p-5 space-y-4 animate-fade-in">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-slate to-brand-navy text-white space-y-3 shadow-soft-md">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-pink-brand">
                          Slate Points Balance
                        </span>
                        <span className="text-lg font-black text-white">{userPoints} pts</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
                        <div
                          className="h-full bg-pink-brand rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, (userPoints / 100) * 100)}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-white/80 font-medium">
                        {userPoints >= 100
                          ? '🎉 You unlocked a Free Specialty Coffee at Third Wave!'
                          : `${100 - userPoints} more points to unlock your Free Specialty Coffee.`}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="text-xs font-extrabold text-brand-slate">Available Café Perks</h5>
                      <div className="p-3 rounded-xl bg-white border border-cream-border flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-pink-light text-pink-brand flex items-center justify-center font-black">
                            ☕
                          </div>
                          <div>
                            <p className="text-xs font-bold text-brand-slate">Free Specialty Coffee</p>
                            <p className="text-[10px] text-brand-muted">100 Slate Points</p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-pink-brand text-white">
                          Unlock
                        </span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Right Column: Explanatory Product Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-pink-brand">
                Product Experience
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal leading-snug">
                Designed for real people sitting at real tables.
              </h3>
              <p className="text-sm text-brand-charcoal/70 font-medium leading-relaxed">
                No clunky app downloads required to browse. Customers scan a table QR, instantly access the café’s living social space, and share photos in under 10 seconds.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-cream-border shadow-soft-sm">
                <div className="w-9 h-9 rounded-xl bg-cream-200 text-brand-slate flex items-center justify-center font-bold shrink-0">
                  <Camera className="w-4 h-4 text-pink-brand" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-brand-slate">Instant Moment Capture</h4>
                  <p className="text-[11px] text-brand-muted font-medium mt-0.5">
                    Upload photos of latte art, food, seating, or friends with smart auto-tagging.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-cream-border shadow-soft-sm">
                <div className="w-9 h-9 rounded-xl bg-cream-200 text-brand-slate flex items-center justify-center font-bold shrink-0">
                  <Sparkles className="w-4 h-4 text-pink-brand" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-brand-slate">Automatic Slate Points</h4>
                  <p className="text-[11px] text-brand-muted font-medium mt-0.5">
                    Every contribution immediately adds +20 points toward free coffees and secret treats.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-cream-border shadow-soft-sm">
                <div className="w-9 h-9 rounded-xl bg-cream-200 text-brand-slate flex items-center justify-center font-bold shrink-0">
                  <Heart className="w-4 h-4 text-pink-brand" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-brand-slate">Authentic Customer Community</h4>
                  <p className="text-[11px] text-brand-muted font-medium mt-0.5">
                    No sponsored bots or fake reviews — 100% real moments from real café visitors.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsShareOpen(true)}
                className="px-6 py-3 rounded-full bg-pink-brand hover:bg-pink-brandHover text-white text-xs font-extrabold flex items-center gap-2 shadow-pink-glow transition-all"
              >
                <Camera className="w-4 h-4" />
                <span>Launch Interactive Share Studio</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
