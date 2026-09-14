import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Heart,
  MapPin,
  Sparkles,
  Share2,
  Coffee,
  CheckCircle2,
} from 'lucide-react';

export const MomentLightboxModal: React.FC = () => {
  const { activeLightboxMoment, setActiveLightboxMoment, toggleLikeMoment } = useApp();

  if (!activeLightboxMoment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-slate/80 backdrop-blur-md transition-opacity"
        onClick={() => setActiveLightboxMoment(null)}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-cream-border flex flex-col md:flex-row max-h-[90vh]">

        {/* Close Button */}
        <button
          onClick={() => setActiveLightboxMoment(null)}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image */}
        <div className="md:w-3/5 bg-black flex items-center justify-center relative overflow-hidden aspect-[4/3] md:aspect-auto">
          <img
            src={activeLightboxMoment.imageUrl}
            alt={activeLightboxMoment.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-pink-brand text-white text-xs font-black shadow-pink-glow">
            +{activeLightboxMoment.pointsEarned} Slate Points
          </div>
        </div>

        {/* Right Column: Details & Likes */}
        <div className="md:w-2/5 p-6 flex flex-col justify-between space-y-6 text-left overflow-y-auto">
          <div className="space-y-4">

            {/* Author Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-cream-border">
              <img
                src={activeLightboxMoment.authorAvatar}
                alt={activeLightboxMoment.authorName}
                className="w-10 h-10 rounded-full object-cover border border-cream-border"
              />
              <div>
                <h4 className="text-sm font-extrabold text-brand-slate">
                  {activeLightboxMoment.authorName}
                </h4>
                <span className="text-xs font-semibold text-brand-muted">
                  {activeLightboxMoment.authorHandle} · {activeLightboxMoment.timestamp}
                </span>
              </div>
            </div>

            {/* Café Location Card */}
            <div className="p-3 rounded-2xl bg-cream-100 border border-cream-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-pink-brand">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeLightboxMoment.cafeName}</span>
              </div>
              <p className="text-[11px] text-brand-muted">
                {activeLightboxMoment.cafeNeighborhood}, {activeLightboxMoment.cafeCity}
              </p>
            </div>

            {/* Caption */}
            <div className="space-y-1">
              <p className="text-sm font-semibold text-brand-charcoal leading-relaxed">
                "{activeLightboxMoment.caption}"
              </p>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-cream-200 text-brand-slate text-[10px] font-extrabold">
                #{activeLightboxMoment.tag}
              </span>
            </div>

          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-cream-border flex items-center justify-between">
            <button
              onClick={() => toggleLikeMoment(activeLightboxMoment.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-extrabold transition-all ${activeLightboxMoment.isLiked
                  ? 'bg-pink-brand text-white shadow-pink-glow'
                  : 'bg-pink-light text-pink-brand hover:bg-pink-brand hover:text-white'
                }`}
            >
              <Heart
                className={`w-4 h-4 ${activeLightboxMoment.isLiked ? 'fill-white' : 'fill-pink-brand'
                  }`}
              />
              <span>{activeLightboxMoment.likesCount} Likes</span>
            </button>

            <span className="text-xs text-brand-muted font-bold">
              Slate Verified UGC
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
