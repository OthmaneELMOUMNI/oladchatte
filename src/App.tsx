import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { AncestrySection } from './components/Ancestry/AncestrySection';
import { GallerySection } from './components/Gallery/GallerySection';
import { QuoteSection } from './components/Quote/QuoteSection';
import { GlobalRepresentationSection } from './components/GlobalRepresentation/GlobalRepresentationSection';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>
      <div className="grain-overlay" />
      <Navigation />
      <main id="main-content">
        <Hero />
        <AncestrySection />
        <GallerySection />
        <QuoteSection />
        <GlobalRepresentationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
