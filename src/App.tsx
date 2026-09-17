import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SaquaremaChurchSection } from './components/SaquaremaChurchSection';
import { BeachRadar } from './components/BeachRadar';
import { InteractiveFinder } from './components/InteractiveFinder';
import { KioskMarketplace } from './components/KioskMarketplace';
import { SurfCapitalWsl } from './components/SurfCapitalWsl';
import { MerchantConversion } from './components/MerchantConversion';
import { SocialProofAndFaq } from './components/SocialProofAndFaq';
import { Footer } from './components/Footer';
import { MerchantModal } from './components/MerchantModal';
import { UserExperienceModal } from './components/UserExperienceModal';
import { AudioPlayerPill } from './components/AudioPlayerPill';
import { MobileFloatingBar } from './components/MobileFloatingBar';

export default function App() {
  const [isMerchantModalOpen, setIsMerchantModalOpen] = useState<boolean>(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string>('Saqua Pro Destaque');
  const [isUserPreviewModalOpen, setIsUserPreviewModalOpen] = useState<boolean>(false);
  const [selectedRadarBeachId, setSelectedRadarBeachId] = useState<string>('itauna');
  const [filteredMarketplaceBeach, setFilteredMarketplaceBeach] = useState<string | undefined>(undefined);

  const handleOpenMerchantModal = (planName?: string) => {
    if (planName) {
      setSelectedPlanForModal(planName);
    }
    setIsMerchantModalOpen(true);
  };

  const handleSelectBeachFromHero = (beachId: string) => {
    setSelectedRadarBeachId(beachId);
    const element = document.getElementById('radar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterMarketplaceByBeach = (beachName: string) => {
    setFilteredMarketplaceBeach(beachName);
    const element = document.getElementById('marketplace');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoToMarketplaceFromFinder = () => {
    const element = document.getElementById('marketplace');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5EE] text-[#0A1E2F] font-sans selection:bg-[#4FA8D8]/30 selection:text-[#004F8A]">
      {/* Top sticky navigation */}
      <Navbar
        onOpenMerchantModal={() => handleOpenMerchantModal('Saqua Pro Destaque')}
        onOpenAppPreview={() => setIsUserPreviewModalOpen(true)}
      />

      {/* Main landing content */}
      <main className="flex-1">
        {/* 1. Immersive Hero Section */}
        <Hero
          onOpenMerchantModal={() => handleOpenMerchantModal('Saqua Pro Destaque')}
          onSelectBeach={handleSelectBeachFromHero}
        />

        {/* 2. Historic Cultural Landmark: Igreja de Nossa Senhora de Nazareth */}
        <SaquaremaChurchSection onSelectBeach={handleSelectBeachFromHero} />

        {/* 3. Real-time Marine & Weather Conditions (Radar Beira-Mar) */}
        <BeachRadar
          selectedBeachId={selectedRadarBeachId}
          onFilterMarketplaceByBeach={handleFilterMarketplaceByBeach}
        />

        {/* 3. Interactive Vibe & Spot Matcher ("Descubra Seu Ponto Ideal") */}
        <InteractiveFinder onGoToMarketplace={handleGoToMarketplaceFromFinder} />

        {/* 4. Local Kiosks & Merchants Marketplace */}
        <KioskMarketplace
          onOpenMerchantModal={() => handleOpenMerchantModal('Saqua Pro Destaque')}
          filteredBeach={filteredMarketplaceBeach}
          onClearBeachFilter={() => setFilteredMarketplaceBeach(undefined)}
        />

        {/* 5. WSL Saquarema Pro & Sporting/Cultural Events */}
        <SurfCapitalWsl onOpenAppPreview={() => setIsUserPreviewModalOpen(true)} />

        {/* 6. B2B Monetization & Merchant Conversion (ROI Simulator & Plans) */}
        <MerchantConversion onOpenMerchantModal={handleOpenMerchantModal} />

        {/* 7. Social Proof, Testimonials & FAQ */}
        <SocialProofAndFaq onOpenAppPreview={() => setIsUserPreviewModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenMerchantModal={() => handleOpenMerchantModal('Saqua Pro Destaque')}
        onOpenAppPreview={() => setIsUserPreviewModalOpen(true)}
      />

      {/* Floating Audio Atmosphere Controller */}
      <AudioPlayerPill variant="floating" />

      {/* Floating Navigation Bar for Mobile */}
      <MobileFloatingBar
        onOpenMerchantModal={() => handleOpenMerchantModal('Saqua Pro Destaque')}
        onOpenAppPreview={() => setIsUserPreviewModalOpen(true)}
      />

      {/* Merchant Registration Modal */}
      <MerchantModal
        isOpen={isMerchantModalOpen}
        onClose={() => setIsMerchantModalOpen(false)}
        defaultPlan={selectedPlanForModal}
      />

      {/* User Web App & Push Alert Preview Modal */}
      <UserExperienceModal
        isOpen={isUserPreviewModalOpen}
        onClose={() => setIsUserPreviewModalOpen(false)}
      />
    </div>
  );
}

