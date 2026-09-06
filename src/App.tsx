import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { WhatIsSection } from './components/whatIs/WhatIsSection';
import { SlateyoLoopSection } from './components/loop/SlateyoLoopSection';
import { ProductExperienceSection } from './components/product/ProductExperienceSection';
import { CommunityMomentsSection } from './components/community/CommunityMomentsSection';
import { RewardsSection } from './components/rewards/RewardsSection';
import { CafeOwnersSection } from './components/owners/CafeOwnersSection';
import { FinalCtaSection } from './components/cta/FinalCtaSection';
import { Footer } from './components/footer/Footer';

// Modals & Overlays
import { MomentLightboxModal } from './components/community/MomentLightboxModal';
import { ExploreCafesModal } from './components/modals/ExploreCafesModal';
import { ShareMomentModal } from './components/modals/ShareMomentModal';
import { CafeOwnerModal } from './components/modals/CafeOwnerModal';
import { QRScanModal } from './components/modals/QRScanModal';
import { ToastContainer } from './components/common/ToastContainer';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-cream-100 text-brand-charcoal flex flex-col selection:bg-pink-subtle selection:text-pink-brand">
        
        {/* Section 01: Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Section 02: Hero */}
          <HeroSection />

          {/* Section 03: What is Slateyo? */}
          <WhatIsSection />

          {/* Section 04: The Slateyo Loop */}
          <SlateyoLoopSection />

          {/* Section 05: Product Experience */}
          <ProductExperienceSection />

          {/* Section 06: Community Moments */}
          <CommunityMomentsSection />

          {/* Section 07: Rewards */}
          <RewardsSection />

          {/* Section 08: For Café Owners */}
          <CafeOwnersSection />

          {/* Section 09: Final CTA */}
          <FinalCtaSection />
        </main>

        {/* Section 10: Footer */}
        <Footer />

        {/* Interactive Modals & Toast System */}
        <MomentLightboxModal />
        <ExploreCafesModal />
        <ShareMomentModal />
        <CafeOwnerModal />
        <QRScanModal />
        <ToastContainer />

      </div>
    </AppProvider>
  );
};

export default App;
