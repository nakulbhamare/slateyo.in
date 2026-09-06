import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  MapPin,
  Star,
  Camera,
  Search,
  CheckCircle2,
  Coffee,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { CITIES } from '../../data/mockData';
import { BrandLogo } from '../common/BrandLogo';

export const ExploreCafesModal: React.FC = () => {
  const { isExploreOpen, setIsExploreOpen, cafes, setIsShareOpen } = useApp();
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isExploreOpen) return null;

  const filteredCafes = cafes.filter((c) => {
    const matchesCity = selectedCity === 'All' || c.city === selectedCity;
    const matchesQuery =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.neighborhood.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCity && matchesQuery;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="fixed inset-0 bg-brand-slate/75 backdrop-blur-sm"
        onClick={() => setIsExploreOpen(false)}
      />

      <div className="relative z-10 w-full max-w-4xl bg-cream-100 rounded-3xl overflow-hidden shadow-2xl border border-cream-border max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-brand-slate text-white border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white">Explore Living Cafés</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-pink-brand text-white shadow-pink-glow">
                  {filteredCafes.length} Spots
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium mt-0.5">
                Discover verified café communities powered by authentic visitor moments.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsExploreOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & City Filter Bar */}
        <div className="p-4 bg-cream-200/60 border-b border-cream-border flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-brand-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by café name, area, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white text-xs rounded-xl border border-cream-border font-medium text-brand-charcoal focus:outline-none focus:border-pink-brand"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCity('All')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCity === 'All'
                  ? 'bg-brand-slate text-white'
                  : 'bg-white text-brand-charcoal hover:bg-cream-100 border border-cream-border'
              }`}
            >
              All Cities
            </button>
            {CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCity === city
                    ? 'bg-pink-brand text-white shadow-pink-glow'
                    : 'bg-white text-brand-charcoal hover:bg-cream-100 border border-cream-border'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Cafés List Grid */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filteredCafes.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Coffee className="w-10 h-10 text-brand-muted mx-auto" />
              <p className="text-sm font-bold text-brand-charcoal">No matching cafés found.</p>
              <p className="text-xs text-brand-muted">Try clearing your search query or choosing another city.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredCafes.map((cafe) => (
                <div
                  key={cafe.id}
                  className="bg-white rounded-2xl overflow-hidden border border-cream-border shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between group text-left"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={cafe.coverImage}
                      alt={cafe.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-white/90 text-brand-slate text-xs font-black flex items-center gap-1 shadow-sm">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{cafe.rating}</span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <h4 className="text-base font-black truncate">{cafe.name}</h4>
                      <p className="text-xs text-white/80 font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-pink-brand" /> {cafe.neighborhood}, {cafe.city}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <p className="text-xs text-brand-charcoal/80 font-medium line-clamp-2">
                      {cafe.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {cafe.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-cream-200 text-brand-slate text-[10px] font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-cream-border flex items-center justify-between">
                      <span className="text-[11px] font-bold text-pink-brand flex items-center gap-1">
                        <Camera className="w-3 h-3" />
                        <span>{cafe.momentsCount} moments</span>
                      </span>

                      <button
                        onClick={() => {
                          setIsExploreOpen(false);
                          setIsShareOpen(true);
                        }}
                        className="px-3 py-1 rounded-full bg-brand-slate text-white text-[11px] font-extrabold hover:bg-brand-slateLight transition-colors"
                      >
                        Share Moment
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
