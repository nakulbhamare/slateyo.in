import React from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { useApp } from '../../context/AppContext';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setIsExploreOpen, setIsOwnerModalOpen } = useApp();

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

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:text-pink-brand hover:border-pink-brand transition-colors"
                aria-label="Slateyo Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
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
                  onClick={() => setIsOwnerModalOpen(true)}
                  className="hover:text-pink-brand transition-colors text-left"
                >
                  Contact Team
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
