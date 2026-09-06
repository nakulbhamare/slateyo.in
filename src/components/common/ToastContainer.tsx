import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, Gift, CheckCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => {
        const isPoints = toast.type === 'points';
        const isReward = toast.type === 'reward';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-2xl shadow-soft-xl border backdrop-blur-md flex items-start justify-between gap-3 animate-slide-up transition-all ${
              isReward
                ? 'bg-pink-brand text-white border-pink-brandHover shadow-pink-glow'
                : 'bg-brand-slate text-white border-white/15'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  isReward ? 'bg-white text-pink-brand' : 'bg-pink-light text-pink-brand'
                }`}
              >
                {isReward ? <Gift className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
              </div>

              <div className="text-left space-y-0.5">
                <h5 className="text-xs font-black">{toast.title}</h5>
                <p
                  className={`text-[11px] leading-tight font-medium ${
                    isReward ? 'text-white/90' : 'text-slate-300'
                  }`}
                >
                  {toast.message}
                </p>
              </div>
            </div>

            <button
              onClick={() => dismissToast(toast.id)}
              className="p-1 rounded-md hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
