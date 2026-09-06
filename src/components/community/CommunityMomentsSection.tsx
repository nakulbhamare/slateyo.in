import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Moment } from '../../types';
import {
  Heart,
  MapPin,
  Sparkles,
  Camera,
  Plus,
  ArrowUpRight,
  Filter,
} from 'lucide-react';

export const CommunityMomentsSection: React.FC = () => {
  const { moments, toggleLikeMoment, setActiveLightboxMoment, setIsShareOpen } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Morning Brew', 'Ambience', 'Work & Study', 'Sweet Treats', 'Specialty'];

  const filteredMoments = activeCategory === 'All'
    ? moments
    : moments.filter((m) => m.category === activeCategory);

  return (
    <section id="community" className="py-20 lg:py-28 bg-cream-50/60 border-t border-cream-border/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-brand-slate text-xs font-bold uppercase tracking-wider border border-cream-border">
              <Camera className="w-3.5 h-3.5 text-pink-brand" />
              <span>Community Feed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Made by the people who were{' '}
              <span className="font-editorial-italic font-normal text-pink-brand">
                actually there.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-brand-charcoal/70 font-medium leading-relaxed">
              Real experiences from the cafés people love. Filter through daily coffee rituals, workspace ambience, and fresh treats.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsShareOpen(true)}
              className="px-5 py-2.5 rounded-full bg-pink-brand hover:bg-pink-brandHover text-white text-xs font-extrabold flex items-center gap-2 shadow-pink-glow transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Share Your Moment (+20 pts)</span>
            </button>
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-brand-slate text-white shadow-soft-sm'
                  : 'bg-white text-brand-charcoal/80 border border-cream-border hover:border-pink-brand/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMoments.map((moment, index) => {
            const isTall = index % 3 === 0;

            return (
              <div
                key={moment.id}
                className={`bg-white rounded-3xl overflow-hidden border border-cream-border/80 shadow-soft-md hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isTall ? 'sm:row-span-2' : ''
                }`}
                onClick={() => setActiveLightboxMoment(moment)}
              >
                {/* Moment Photo with Image Hover Zoom */}
                <div className={`relative overflow-hidden w-full ${isTall ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                  <img
                    src={moment.imageUrl}
                    alt={moment.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Top Badge: Category Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-extrabold text-white">
                    #{moment.tag}
                  </div>

                  {/* Top Right: Points Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-pink-brand text-white text-[10px] font-black shadow-pink-glow">
                    +{moment.pointsEarned} pts
                  </div>

                  {/* Expand Hint on Hover */}
                  <div className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 text-brand-slate opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5 text-left">
                  
                  {/* Café & Neighborhood Location */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-[11px] font-extrabold text-pink-brand">
                      <MapPin className="w-3 h-3" />
                      <span>{moment.cafeName}</span>
                    </div>
                    <p className="text-[10px] text-brand-muted font-medium">
                      {moment.cafeNeighborhood}, {moment.cafeCity}
                    </p>
                  </div>

                  {/* Caption */}
                  <p className="text-xs font-semibold text-brand-charcoal leading-relaxed line-clamp-3">
                    "{moment.caption}"
                  </p>

                  {/* Author & Like Heart Interaction */}
                  <div className="pt-3 border-t border-cream-border/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={moment.authorAvatar}
                        alt={moment.authorName}
                        className="w-6 h-6 rounded-full object-cover border border-cream-border"
                      />
                      <div className="leading-none">
                        <span className="text-[11px] font-bold text-brand-slate">
                          {moment.authorHandle}
                        </span>
                        <span className="block text-[9px] text-brand-muted mt-0.5">
                          {moment.timestamp}
                        </span>
                      </div>
                    </div>

                    {/* Interactive Heart Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLikeMoment(moment.id);
                      }}
                      className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full transition-all ${
                        moment.isLiked
                          ? 'bg-pink-light text-pink-brand'
                          : 'bg-cream-100 text-brand-muted hover:text-pink-brand hover:bg-pink-light/50'
                      }`}
                      aria-label="Like this moment"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          moment.isLiked ? 'fill-pink-brand text-pink-brand' : ''
                        }`}
                      />
                      <span>{moment.likesCount}</span>
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
