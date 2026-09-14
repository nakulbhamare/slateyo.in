import React from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { useApp } from '../../context/AppContext';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setIsExploreOpen, setIsOwnerModalOpen, setIsContactModalOpen } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-slate text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <BrandLogo size="lg" />
            <p className="font-editorial-italic italic text-base font-semibold text-slate-200">
              "Every café has a story."
            </p>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed font-medium">
              Slateyo gives cafés their own digital social layer where customers discover, share authentic moments, and get rewarded.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 hover:border-pink-brand/60 text-slate-200 hover:text-white text-xs font-bold transition-all shadow-soft-sm active:scale-95 cursor-pointer"
                title="Open Contact Modal"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                <span>Let's Talk</span>
                <span className="text-xs group-hover:rotate-12 group-hover:scale-110 transition-transform">👋</span>
              </button>

              <a
                href="mailto:slateyo.us@gmail.com"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:text-pink-brand hover:border-pink-brand transition-colors"
                aria-label="Email Slateyo"
                title="slateyo.us@gmail.com"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-300">
              Product & Exploration
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>
                <button
                  onClick={() => setIsExploreOpen(true)}
                  className="hover:text-pink-brand transition-colors text-left"
                >
                  Discover Living Cafés
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('the-loop')}
                  className="hover:text-pink-brand transition-colors text-left"
                >
                  How it Works (The Loop)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('community')}
                  className="hover:text-pink-brand transition-colors text-left"
                >
                  Community Moments
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('rewards')}
                  className="hover:text-pink-brand transition-colors text-left"
                >
                  Slate Points & Rewards
                </button>
              </li>
            </ul>
          </div>

          {/* Café Partners & Legal Column (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-300">
              For Businesses
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>
                <button
                  onClick={() => setIsOwnerModalOpen(true)}
                  className="text-pink-brand font-bold hover:underline text-left"
                >
                  Claim Your Café QR Kit
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('for-cafes')}
                  className="hover:text-pink-brand transition-colors text-left"
                >
                  Café Owner Dashboard
                </button>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('what-is-slateyo'); }} className="hover:text-pink-brand transition-colors">
                  About Slateyo
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="hover:text-pink-brand transition-colors text-left"
                  aria-haspopup="dialog"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Slateyo. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white">Privacy</a>
            <span>·</span>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white">Terms</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-pink-brand text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
