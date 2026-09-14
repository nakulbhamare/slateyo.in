import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { triggerConfetti } from '../common/ConfettiEffect';
import {
  Gift,
  Coffee,
  Sparkles,
  Percent,
  CakeSlice,
  Award,
  CheckCircle2,
  Lock,
  ArrowRight,
  Plus,
} from 'lucide-react';
import { ClickSpark } from '../ui/ClickSpark';

export const RewardsSection: React.FC = () => {
  const { userPoints, addPoints, setIsShareOpen } = useApp();
  const [selectedRewardId, setSelectedRewardId] = useState<string>('rew-1');

  const rewardsList = [
    {
      id: 'rew-1',
      title: 'Free Specialty Coffee',
      desc: 'Any handcrafted latte, pourover, flat white, or iced cold brew of your choice.',
      points: 100,
      icon: Coffee,
      badge: 'Most Popular',
      category: 'Beverage',
    },
    {
      id: 'rew-2',
      title: 'Free Artisan Dessert',
      desc: 'Fresh butter croissant, almond swirl, or warm chocolate babka slice.',
      points: 140,
      icon: CakeSlice,
      badge: 'Fresh Daily',
      category: 'Bakehouse',
    },
    {
      id: 'rew-3',
      title: '15% Off Total Bill',
      desc: 'Valid for your full table order including food items and seasonal beans.',
      points: 80,
      icon: Percent,
      badge: 'Table Perk',
      category: 'Discount',
    },
    {
      id: 'rew-4',
      title: 'Free Size Upgrade & Oat Milk',
      desc: 'Complimentary size upgrade with barista-grade oat or almond milk.',
      points: 40,
      icon: Sparkles,
      badge: 'Quick Perk',
      category: 'Customization',
    },
    {
      id: 'rew-5',
      title: 'Exclusive Cupping & Tasting',
      desc: 'Private tasting session for two with head roasters exploring seasonal micro-lots.',
      points: 250,
      icon: Award,
      badge: 'VIP Event',
      category: 'Experience',
    },
  ];

  const targetPoints = 100;
  const progressPercent = Math.min(100, Math.round((userPoints / targetPoints) * 100));
  const pointsRemaining = Math.max(0, targetPoints - userPoints);
  const isUnlocked = userPoints >= targetPoints;

  const handleClaim = (rewardTitle: string, pointsNeeded: number) => {
    if (userPoints >= pointsNeeded) {
      triggerConfetti();
      alert(`🎉 Reward Claimed: "${rewardTitle}"! Show this confirmation code [SLATE-${Math.floor(1000 + Math.random() * 9000)}] at the café counter.`);
    } else {
      alert(`You need ${pointsNeeded - userPoints} more points to claim ${rewardTitle}. Tap "+20 Points" to simulate earning!`);
    }
  };

  return (
    <section id="rewards" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Pink Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-pink-light/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-light text-pink-brand text-xs font-bold uppercase tracking-wider border border-pink-subtle shadow-soft-sm">
            <Gift className="w-3.5 h-3.5" />
            <span>Slate Points & Perks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Good moments should{' '}
            <span className="font-editorial-italic font-normal text-pink-brand">
              give something back.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/70 font-medium leading-relaxed">
            Every photo shared, every table checked-in brings you closer to your next free coffee and VIP café perks.
          </p>
        </div>

        {/* Live Points Progress & Rewards Cards Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Interactive Slate Points Progress Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-[2.5rem] p-7 sm:p-8 border border-cream-border shadow-soft-xl relative overflow-hidden">

              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-cream-border/70">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-brand-muted">
                    YOUR REWARD STATUS
                  </span>
                  <h3 className="text-2xl font-black text-brand-slate mt-0.5">Slate Points</h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-pink-light text-pink-brand font-black text-sm border border-pink-subtle shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-pink-brand" />
                  <span>{userPoints} PTS</span>
                </div>
              </div>

              {/* Progress Meter */}
              <div className="py-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-extrabold">
                  <span className="text-brand-slate">Progress to Free Coffee</span>
                  <span className="text-pink-brand">{userPoints} / 100 PTS ({progressPercent}%)</span>
                </div>

                {/* Styled Bar */}
                <div className="w-full h-4 rounded-full bg-cream-200 p-0.5 relative overflow-hidden border border-cream-border/80">
                  <div
                    className="h-full bg-gradient-to-r from-pink-brand to-[#FF4B9B] rounded-full transition-all duration-700 shadow-pink-glow"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-bold text-brand-muted">
                  <span>0 pts</span>
                  <span>50 pts</span>
                  <span className="text-pink-brand font-extrabold">100 pts (Unlock)</span>
                </div>
              </div>

              {/* Target Reward Banner */}
              <div
                className={`p-4 rounded-2xl border transition-all ${isUnlocked
                    ? 'bg-pink-light/70 border-pink-brand/40 shadow-soft-md'
                    : 'bg-cream-100 border-cream-border'
                  }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isUnlocked ? 'bg-pink-brand text-white shadow-pink-glow' : 'bg-cream-300 text-brand-slate'
                      }`}
                  >
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-extrabold text-brand-slate">NEXT REWARD: FREE COFFEE</h4>
                      {isUnlocked && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-pink-brand text-white">
                          READY
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-brand-charcoal/70 font-medium mt-1">
                      {isUnlocked
                        ? '🎉 Reward ready! Claim any handcrafted pour-over or latte.'
                        : `${pointsRemaining} more points to unlock your free coffee.`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Simulator Button */}
              <div className="pt-6 border-t border-cream-border/70 flex flex-col gap-2.5">
                <ClickSpark sparkColor="#ED1B77" sparkCount={12} sparkRadius={22} className="w-full">
                  <button
                    onClick={() => addPoints(20, 'Photo shared at Subko Coffee')}
                    className="w-full py-3.5 rounded-xl bg-pink-brand hover:bg-pink-brandHover text-white text-xs font-black flex items-center justify-center gap-2 shadow-pink-glow active:scale-95 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Simulate Sharing a Moment (+20 Points)</span>
                  </button>
                </ClickSpark>

                <p className="text-[10px] text-center text-brand-muted font-medium">
                  Tap to test the real-time progress & reward unlock effect!
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Reward Tier Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center justify-between px-1 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Available Café Rewards
              </span>
              <span className="text-xs text-pink-brand font-extrabold">
                Claimable at all 50+ Partner Cafés
              </span>
            </div>

            <div className="space-y-3">
              {rewardsList.map((reward) => {
                const Icon = reward.icon;
                const canAfford = userPoints >= reward.points;

                return (
                  <div
                    key={reward.id}
                    onClick={() => setSelectedRewardId(reward.id)}
                    className={`p-4 sm:p-5 rounded-2xl bg-white border transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer ${selectedRewardId === reward.id
                        ? 'border-pink-brand shadow-soft-lg ring-1 ring-pink-brand/30'
                        : 'border-cream-border/80 shadow-soft-sm hover:border-cream-border hover:shadow-soft-md'
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${canAfford
                            ? 'bg-pink-light text-pink-brand'
                            : 'bg-cream-200 text-brand-muted'
                          }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="space-y-1 text-left">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm font-extrabold text-brand-slate">
                            {reward.title}
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cream-200 text-brand-slate">
                            {reward.badge}
                          </span>
                        </div>
                        <p className="text-xs text-brand-charcoal/70 font-medium">
                          {reward.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 gap-2 border-t sm:border-t-0 pt-2 sm:pt-0 border-cream-border/60">
                      <span className="text-sm font-black text-pink-brand">
                        {reward.points} PTS
                      </span>

                      <ClickSpark sparkColor={canAfford ? '#ED1B77' : '#F59E0B'} sparkCount={10} sparkRadius={20}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleClaim(reward.title, reward.points);
                          }}
                          className={`px-4 py-1.5 rounded-full text-xs font-black transition-all ${canAfford
                              ? 'bg-pink-brand text-white shadow-pink-glow hover:bg-pink-brandHover active:scale-95'
                              : 'bg-cream-200 text-brand-muted hover:bg-cream-300'
                            }`}
                        >
                          {canAfford ? 'Claim Reward' : `${reward.points - userPoints} pts left`}
                        </button>
                      </ClickSpark>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
