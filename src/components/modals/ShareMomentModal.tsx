import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Camera,
  Upload,
  Sparkles,
  MapPin,
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';

export const ShareMomentModal: React.FC = () => {
  const { isShareOpen, setIsShareOpen, addNewMoment, cafes } = useApp();
  const [selectedCafeId, setSelectedCafeId] = useState<string>('third-wave');
  const [caption, setCaption] = useState<string>('Catching the evening golden hour with an iced aero-press ☕✨');
  const [tag, setTag] = useState<string>('Pour Over');
  const [category, setCategory] = useState<'Morning Brew' | 'Ambience' | 'Work & Study' | 'Sweet Treats' | 'Specialty' | 'Vibes'>('Specialty');
  const [selectedImage, setSelectedImage] = useState<string>('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80');

  if (!isShareOpen) return null;

  const sampleImages = [
    { url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80', label: 'Latte Art' },
    { url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80', label: 'Window Table' },
    { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80', label: 'Fresh Pastry' },
    { url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80', label: 'Matcha Brew' },
    { url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80', label: 'Cafe Ambiance' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentCafe = cafes.find((c) => c.id === selectedCafeId) || cafes[0];

    addNewMoment({
      cafeId: currentCafe.id,
      cafeName: currentCafe.name,
      cafeNeighborhood: currentCafe.neighborhood,
      cafeCity: currentCafe.city,
      caption,
      imageUrl: selectedImage,
      tag,
      category,
    });

    setIsShareOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="fixed inset-0 bg-brand-slate/80 backdrop-blur-sm"
        onClick={() => setIsShareOpen(false)}
      />

      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-cream-border max-h-[92vh] flex flex-col text-left">

        {/* Header */}
        <div className="p-6 bg-cream-100 border-b border-cream-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-pink-brand text-white flex items-center justify-center font-bold shadow-pink-glow">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-brand-slate">Share a Café Moment</h3>
              <p className="text-xs text-pink-brand font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> +20 Slate Points on publish
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsShareOpen(false)}
            className="p-2 rounded-full hover:bg-cream-200 text-brand-slate transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto flex-1">

          {/* Café Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-brand-slate">Select Café Location</label>
            <select
              value={selectedCafeId}
              onChange={(e) => setSelectedCafeId(e.target.value)}
              className="w-full text-xs p-3 rounded-xl bg-cream-100 border border-cream-border font-bold text-brand-slate focus:outline-none focus:border-pink-brand"
            >
              {cafes.map((cafe) => (
                <option key={cafe.id} value={cafe.id}>
                  {cafe.name} ({cafe.neighborhood}, {cafe.city})
                </option>
              ))}
            </select>
          </div>

          {/* Photo Picker */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-slate">Choose Moment Photo</label>
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black shadow-soft-sm">
              <img
                src={selectedImage}
                alt="Selected moment"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-pink-brand" /> Ready
              </div>
            </div>

            {/* Photo Swatches */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {sampleImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImage(img.url)}
                  className={`w-14 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${selectedImage === img.url
                      ? 'border-pink-brand ring-2 ring-pink-brand/30 scale-105'
                      : 'border-cream-border opacity-70 hover:opacity-100'
                    }`}
                >
                  <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Caption Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-brand-slate">Your Caption / Vibe</label>
            <textarea
              rows={2}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="What made this coffee or visit special?"
              className="w-full text-xs p-3 rounded-xl bg-cream-100 border border-cream-border font-medium text-brand-charcoal focus:outline-none focus:border-pink-brand resize-none"
              required
            />
          </div>

          {/* Tag & Category */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-slate">Tag</label>
              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl bg-cream-100 border border-cream-border font-semibold text-brand-slate focus:outline-none focus:border-pink-brand"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-slate">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full text-xs p-2.5 rounded-xl bg-cream-100 border border-cream-border font-semibold text-brand-slate focus:outline-none focus:border-pink-brand"
              >
                <option value="Morning Brew">Morning Brew</option>
                <option value="Ambience">Ambience</option>
                <option value="Work & Study">Work & Study</option>
                <option value="Sweet Treats">Sweet Treats</option>
                <option value="Specialty">Specialty</option>
                <option value="Vibes">Vibes</option>
              </select>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-pink-brand hover:bg-pink-brandHover text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-pink-glow transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Publish Moment & Earn +20 Points</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
