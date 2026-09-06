import React, { useState, useEffect } from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { useApp } from '../../context/AppContext';
import { Menu, X, ArrowUpRight, Plus, QrCode } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { userPoints, setIsExploreOpen, setIsShareOpen, setIsOwnerModalOpen, setIsQRScanModalOpen } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-slate/95 backdrop-blur-md py-2 shadow-soft-xl border-b border-white/10'
            : 'bg-brand-slate/90 backdrop-blur-md py-2.5 sm:py-3.5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Official Slateyo Logo on Dark Theme */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center group cursor-pointer focus:outline-none"
              aria-label="Slateyo Home"
            >
              <BrandLogo size={isScrolled ? 'sm' : 'md'} />
            </a>

            {/* Center: Clean Nav Links in Crisp Light/White */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-200">
              <button
                onClick={() => setIsExploreOpen(true)}
                className="hover:text-pink-brand transition-colors flex items-center gap-1.5 focus:outline-none"
              >
                <span>Discover</span>
                <span className="w-1.5 h-1.5 rounded-full bg-pink-brand animate-pulse" />
              </button>
              <button
                onClick={() => scrollToSection('the-loop')}
                className="hover:text-pink-brand transition-colors focus:outline-none"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection('community')}
                className="hover:text-pink-brand transition-colors focus:outline-none"
              >
                Moments
              </button>
              <button
                onClick={() => scrollToSection('rewards')}
                className="hover:text-pink-brand transition-colors focus:outline-none"
              >
                Rewards
              </button>
              <button
                onClick={() => scrollToSection('for-cafes')}
                className="hover:text-pink-brand transition-colors text-white font-bold focus:outline-none"
              >
                For Cafés
              </button>
            </nav>

            {/* Right Actions: CTA Buttons */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {/* Quick Share Moment CTA */}
              <button
                onClick={() => setIsShareOpen(true)}
                className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white border border-white/15 hover:border-pink-brand hover:text-pink-brand transition-all shadow-soft-sm"
              >
                <Plus className="w-3.5 h-3.5 text-pink-brand" />
                <span>Share Moment</span>
              </button>

              {/* Get Started / Join CTA */}
              <button
                onClick={() => setIsOwnerModalOpen(true)}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-extrabold text-brand-slate bg-white hover:bg-cream-200 active:scale-95 shadow-soft-sm transition-all"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden animate-fade-in">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 bottom-0 w-4/5 max-w-sm bg-brand-slate text-white border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Menu
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-pink-brand text-white shadow-pink-glow">
                  {userPoints} Slate Points
                </span>
              </div>

              <div className="flex flex-col space-y-4 text-base font-bold text-white">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsExploreOpen(true);
                  }}
                  className="flex items-center justify-between text-left py-2 hover:text-pink-brand"
                >
                  <span>Discover Cafés</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-pink-brand text-white">
                    Live
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('the-loop')}
                  className="text-left py-2 hover:text-pink-brand text-slate-200"
                >
                  How it Works (The Loop)
                </button>
                <button
                  onClick={() => scrollToSection('product-experience')}
                  className="text-left py-2 hover:text-pink-brand text-slate-200"
                >
                  Product Experience
                </button>
                <button
                  onClick={() => scrollToSection('community')}
                  className="text-left py-2 hover:text-pink-brand text-slate-200"
                >
                  Community Moments
                </button>
                <button
                  onClick={() => scrollToSection('rewards')}
                  className="text-left py-2 hover:text-pink-brand text-slate-200"
                >
                  Rewards & Points
                </button>
                <button
                  onClick={() => scrollToSection('for-cafes')}
                  className="text-left py-2 text-pink-brand"
                >
                  For Café Owners
                </button>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsQRScanModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white font-bold text-sm border border-white/10"
                >
                  <QrCode className="w-4 h-4 text-pink-brand" />
                  <span>Scan Table QR</span>
                </button>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsShareOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-pink-brand text-white font-bold text-sm shadow-pink-glow"
                >
                  <Plus className="w-4 h-4" />
                  <span>Share a Moment (+20 pts)</span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsOwnerModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-white text-brand-slate font-extrabold text-sm hover:bg-cream-200 transition-colors"
              >
                Bring Your Café to Slateyo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
