import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />
        <ProductSection />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;