import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingImagesSection from "./components/ProductSpecialities";
import { loadGA } from "./analytics"; // same directory

function App() {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  useEffect(() => {
    // Always show the popup when the page loads or refreshes
    loadGA();
    setShowWelcomePopup(true);
  }, []);

  const closePopup = () => {
    setShowWelcomePopup(false);
  };

  const handlePopupClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div className="min-h-screen">
      {showWelcomePopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="relative bg-white p-6 rounded shadow-lg max-w-sm text-center"
            onClick={handlePopupClick}
          >
            {/* Cross (×) Button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4">
              Welcome to GodrejShine
            </h2>
            <p>
              Our products are designed to give your walls lasting strength,
              smooth finish, and vibrant colors that stand the test of time.
              From wall putty to emulsions, distempers, and primers — we bring
              quality and durability together to beautify every space.
            </p>
          </div>
        </div>
      )}

      <Header />
      <main className="pt-16">
        <Hero />
        <ProductSection />
        <FloatingImagesSection />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
