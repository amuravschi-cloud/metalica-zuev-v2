import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import CompanyOverview from './components/CompanyOverview';
import Capabilities from './components/Capabilities';
import BasesMap from './components/BasesMap';
import DirectContactSection from './components/DirectContactSection';
import Footer from './components/Footer';
import FloatingBar from './components/FloatingBar';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <Header />
      <main>
        {/* 01. Hero (1st Screen) */}
        <Hero />

        {/* 02. Catalog IMMEDIATELY after Hero */}
        <ProductCatalog />

        {/* 03. Company Overview */}
        <CompanyOverview />

        {/* 04. Capabilities & Services */}
        <Capabilities />

        {/* 05. Bases Locations Map */}
        <BasesMap />

        {/* 06. Direct Contact CTA */}
        <DirectContactSection />
      </main>
      <Footer />
      <FloatingBar />
    </div>
  );
}
