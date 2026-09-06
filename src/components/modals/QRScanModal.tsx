import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  QrCode,
  Sparkles,
  Camera,
  CheckCircle2,
  Coffee,
  MapPin,
} from 'lucide-react';

export const QRScanModal: React.FC = () => {
  const { isQRScanModalOpen, setIsQRScanModalOpen, addPoints, setIsShareOpen } = useApp();
  const [isScanning, setIsScanning] = useState(true);

  if (!isQRScanModalOpen) return null;

  const handleSimulateScan = () => {
    setIsScanning(false);
    addPoints(20, 'Table QR Verified at Third Wave Coffee');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="fixed inset-0 bg-brand-slate/85 backdrop-blur-md"
        onClick={() => setIsQRScanModalOpen(false)}
      />

      <div className="relative z-10 w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl border border-cream-border text-center">
        
        {/* Header */}
        <div className="p-5 bg-cream-100 border-b border-cream-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-pink-brand" />
            <h3 className="text-sm font-black text-brand-slate">Table QR Scanner</h3>
          </div>
          <button
            onClick={() => setIsQRScanModalOpen(false)}
            className="p-1.5 rounded-full hover:bg-cream-200 text-brand-slate transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {isScanning ? (
            <>
              {/* Camera Viewfinder Mockup */}
              <div className="relative w-60 h-60 mx-auto rounded-2xl bg-brand-slate overflow-hidden flex items-center justify-center border-2 border-pink-brand/40 shadow-inner">
                
                {/* Background Atmosphere Image */}
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80"
                  alt="Camera view"
                  className="w-full h-full object-cover opacity-30"
                />

                {/* Laser scan animation line */}
                <div className="absolute left-4 right-4 h-0.5 bg-pink-brand shadow-pink-glow-lg animate-laser-scan z-10" />

                {/* Center QR Mark */}
                <div className="absolute z-10 p-4 bg-white rounded-2xl shadow-2xl flex flex-col items-center gap-1.5">
                  <div className="w-24 h-24 bg-brand-slate rounded-xl p-2 flex items-center justify-center">
                    <QrCode className="w-20 h-20 text-white" />
                  </div>
                  <span className="text-[10px] font-black text-pink-brand uppercase tracking-wider">
                    SLATEYO · TABLE 04
                  </span>
                </div>

                {/* Corner markers */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-pink-brand" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-pink-brand" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-pink-brand" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-pink-brand" />
              </div>

              <div className="space-y-1">
                <p className="text-xs font-extrabold text-brand-slate">
                  Point camera at the Slateyo QR stand
                </p>
                <p className="text-[11px] text-brand-muted">
                  Instantly enter the café's digital home and earn +20 points.
                </p>
              </div>

              <button
                onClick={handleSimulateScan}
                className="w-full py-3 rounded-xl bg-pink-brand hover:bg-pink-brandHover text-white font-extrabold text-xs shadow-pink-glow transition-all active:scale-95"
              >
                Tap to Simulate Instant Scan (+20 pts)
              </button>
            </>
          ) : (
            <div className="space-y-4 py-2 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-soft-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="text-base font-black text-brand-slate">
                  Checked in at Table 04!
                </h4>
                <p className="text-xs text-brand-muted flex items-center justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-pink-brand" />
                  Third Wave Coffee, Koramangala
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-pink-light border border-pink-subtle text-xs font-extrabold text-pink-brand flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>+20 Slate Points Added to Your Balance</span>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    setIsQRScanModalOpen(false);
                    setIsShareOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-pink-brand text-white font-extrabold text-xs shadow-pink-glow"
                >
                  Share Photo of Your Visit (+20 more pts)
                </button>

                <button
                  onClick={() => {
                    setIsQRScanModalOpen(false);
                    setIsScanning(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-cream-200 text-brand-slate font-bold text-xs hover:bg-cream-300"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
