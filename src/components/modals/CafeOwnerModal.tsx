import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Store,
  CheckCircle2,
  Sparkles,
  QrCode,
  ArrowRight,
  MapPin,
  Mail,
  Building,
} from 'lucide-react';
import { triggerConfetti } from '../common/ConfettiEffect';

export const CafeOwnerModal: React.FC = () => {
  const { isOwnerModalOpen, setIsOwnerModalOpen } = useApp();
  const [cafeName, setCafeName] = useState('');
  const [city, setCity] = useState('Bengaluru');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOwnerModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    triggerConfetti();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="fixed inset-0 bg-brand-slate/85 backdrop-blur-md"
        onClick={() => setIsOwnerModalOpen(false)}
      />

      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-cream-border text-left">
        
        {/* Header */}
        <div className="p-6 bg-brand-slate text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-pink-brand text-white flex items-center justify-center font-bold shadow-pink-glow">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">Bring Your Café to Slateyo</h3>
              <p className="text-xs text-slate-300 font-medium">
                Free table QR kit · 5-minute setup
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOwnerModalOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-black text-brand-slate">Welcome to Slateyo!</h4>
            <p className="text-xs text-brand-charcoal/80 max-w-sm mx-auto leading-relaxed">
              We’ve received your request for <strong>{cafeName || 'Your Café'}</strong> ({city}). Our team will email you at <strong>{email || 'your email'}</strong> within 24 hours with your verified dashboard credentials and dispatch your physical QR stand kit!
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setIsOwnerModalOpen(false);
              }}
              className="px-6 py-2.5 rounded-full bg-brand-slate text-white text-xs font-bold hover:bg-brand-slateLight transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-slate">Café / Roastery Name</label>
              <div className="relative">
                <Building className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Subko Specialty Bakehouse"
                  value={cafeName}
                  onChange={(e) => setCafeName(e.target.value)}
                  className="w-full text-xs pl-10 pr-4 py-3 rounded-xl bg-cream-100 border border-cream-border font-medium text-brand-slate focus:outline-none focus:border-pink-brand"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-brand-slate">City Location</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-brand-muted absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-xs pl-9 pr-3 py-3 rounded-xl bg-cream-100 border border-cream-border font-semibold text-brand-slate focus:outline-none focus:border-pink-brand"
                  >
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Goa">Goa</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-brand-slate">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-brand-muted absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="manager@cafe.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs pl-9 pr-3 py-3 rounded-xl bg-cream-100 border border-cream-border font-medium text-brand-slate focus:outline-none focus:border-pink-brand"
                  />
                </div>
              </div>
            </div>

            {/* Perks included */}
            <div className="p-3.5 rounded-2xl bg-cream-100 border border-cream-border space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-pink-brand">
                What’s Included in Free Partner Plan
              </span>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-brand-charcoal">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-brand shrink-0" />
                  <span>Custom Table QR Kit</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-brand shrink-0" />
                  <span>Customer UGC Feed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-brand shrink-0" />
                  <span>Loyalty & Points Engine</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-brand shrink-0" />
                  <span>1-Click Instagram UGC</span>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-pink-brand hover:bg-pink-brandHover text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-pink-glow active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Claim Your Free Café QR Stand Kit</span>
            </button>

            <p className="text-[10px] text-center text-brand-muted">
              Zero upfront commitment · Free hardware delivery across India
            </p>

          </form>
        )}

      </div>
    </div>
  );
};
