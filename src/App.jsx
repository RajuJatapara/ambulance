import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { siteConfig } from './data/siteConfig';
import Header from './components/Header';
import Hero from './components/Hero';
import Vehicles from './components/Vehicles';
import InteriorGallery from './components/InteriorGallery';
import Services from './components/Services';
import RouteEstimator from './components/RouteEstimator';
import FirstAidTips from './components/FirstAidTips';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyEmergencyBar from './components/StickyEmergencyBar';
import QuickBookingModal from './components/QuickBookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Automatically sync favicon from siteConfig so changing config instantly updates the URL/tab icon
  useEffect(() => {
    const faviconHref = siteConfig.brand.favicon || siteConfig.brand.logo || './favicon.png';
    const links = document.querySelectorAll("link[rel*='icon']");
    if (links.length > 0) {
      links.forEach((l) => {
        l.href = faviconHref;
      });
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = faviconHref;
      document.head.appendChild(link);
    }
  }, []);

  const handleOpenBooking = (vehicleOrService = null) => {
    if (vehicleOrService && typeof vehicleOrService === 'object') {
      setSelectedVehicle(vehicleOrService);
    } else {
      setSelectedVehicle(null);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedVehicle(null);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-red-500 selection:text-white">
        {/* Navigation & Emergency Bar */}
        <Header
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero
            onOpenBooking={() => handleOpenBooking()}
          />

          <Vehicles
            onSelectVehicle={(vehicle) => handleOpenBooking(vehicle)}
          />

          <InteriorGallery
            onOpenBooking={() => handleOpenBooking()}
          />

          <Services
            onOpenBooking={(serviceId) => handleOpenBooking()}
          />

          <RouteEstimator
            onOpenBooking={() => handleOpenBooking()}
          />

          <FirstAidTips />

          <WhyChooseUs />

          <FAQ />
        </main>

        {/* Footer */}
        <Footer
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Mobile Sticky Bar */}
        <StickyEmergencyBar
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Modals */}
        <QuickBookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          preselectedVehicle={selectedVehicle}
        />
      </div>
    </LanguageProvider>
  );
}
