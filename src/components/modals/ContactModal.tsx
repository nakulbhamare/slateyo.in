import React, { useEffect, useState, useCallback } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Mail,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  MessageSquare,
  Briefcase,
  User,
  Layers,
  Globe,
  FileText,
} from 'lucide-react';

const CONTACT_EMAIL = 'slateyo.us@gmail.com';

export const ContactModal: React.FC = () => {
  const { isContactModalOpen, setIsContactModalOpen } = useApp();
  const [copied, setCopied] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle opening and closing transitions
  useEffect(() => {
    if (isContactModalOpen) {
      setIsRendered(true);
      // Small timeout to allow render before applying transition classes
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isContactModalOpen]);

  // Lock background scroll when open
  useEffect(() => {
    if (isContactModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isContactModalOpen]);

  const handleClose = useCallback(() => {
    setIsContactModalOpen(false);
  }, [setIsContactModalOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (isContactModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isContactModalOpen, handleClose]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={handleClose}
    >
      {/* Dark Blurred Backdrop */}
      <div
        className={`fixed inset-0 bg-[#070C14]/80 backdrop-blur-md transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
      />

      {/* Main Glass Modal Card */}
      <div
        className={`relative z-10 w-full max-w-xl sm:max-w-2xl bg-[#0E1726]/95 backdrop-blur-2xl text-white rounded-[24px] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[90vh] transition-all duration-300 ease-out transform ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-3 opacity-0'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Pink/Purple Gradient Glow Background Effects */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(237,27,119,0.12),rgba(255,255,255,0))] pointer-events-none" />

        {/* Modal Header */}
        <div className="relative z-10 px-6 sm:px-8 pt-7 pb-5 border-b border-white/10 flex items-start justify-between">
          <div className="space-y-1.5 pr-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-400 text-[11px] font-bold tracking-wide uppercase">
              <Sparkles className="w-3 h-3 text-pink-400" />
              <span>Get In Touch</span>
            </div>
            <h2 id="contact-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Let's Talk 👋
            </h2>
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-0.5">
              <p>Have a question, idea, partnership opportunity, or just want to say hello?</p>
              <p className="text-slate-400">We'd love to hear from you.</p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="shrink-0 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500/50"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="relative z-10 overflow-y-auto dark-modal-scrollbar px-6 sm:px-8 py-6 space-y-6 text-left text-white">

          {/* Section 1: General Enquiries */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 transition-colors space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/30">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                General Enquiries
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center gap-2 text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0 text-pink-400 group-hover:scale-110 transition-transform" />
                <span className="underline underline-offset-4 decoration-pink-500/40 group-hover:decoration-pink-400">
                  {CONTACT_EMAIL}
                </span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold border border-white/10 transition-all active:scale-95 shrink-0"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Section 2: Build Slateyo With Us */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-white/10">
              <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 border border-purple-500/30">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Build Slateyo With Us
              </h3>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <p>
                We're building something new around how people discover places, share experiences, and connect with their communities.
              </p>
              <p className="text-slate-300">
                We're always interested in meeting people who are excited about technology, design, communities, data, and building meaningful products.
              </p>
            </div>

            {/* Subheading: Want to Work With Us? */}
            <div className="pt-2 space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-brand" />
                Want to Work With Us?
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Even if you don't see an opening that matches your skills, we'd still love to hear from you.
              </p>

              {/* Send Us Checklist */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-pink-400">
                  Send us:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-200">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span>Your Name</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span>Your Role / Skills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span>Portfolio or LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span>A short introduction</span>
                  </div>
                </div>
              </div>

              {/* Direct email link */}
              <div className="pt-1 flex items-center gap-2">
                <span className="text-xs text-slate-400">Email:</span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-xs font-bold text-pink-400 hover:text-pink-300 underline underline-offset-2 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer / Bottom Action Bar */}
        <div className="relative z-10 px-6 sm:px-8 py-4 sm:py-5 bg-black/25 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] sm:text-xs text-slate-400 text-center sm:text-left hidden sm:block">
            We respond promptly to all messages & inquiries.
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-extrabold text-xs sm:text-sm shadow-pink-glow hover:shadow-pink-glow-lg active:scale-95 transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />
            <Mail className="w-4 h-4 group-hover:-rotate-12 transition-transform duration-300" />
            <span className="tracking-wide">Email Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </div>
  );
};
