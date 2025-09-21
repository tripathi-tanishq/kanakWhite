import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingImagesSection from "./components/ProductSpecialities";
import Introduction from "./components/Introduction"; // new page
// import MissionVision from "./components/MissionVision"; // new page
import { loadGA } from "./analytics"; // same directory
import MissionVision from "./components/missionAndVision";

// Home Page content (kept separate for clean routing)
function HomePage() {
  return (
    <main className="pt-16">
      <Hero />
      <ProductSection />
      <FloatingImagesSection />
      <Gallery />
      <FAQ />
    </main>
  );
}

function App() {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  useEffect(() => {
    loadGA();
    setShowWelcomePopup(true);
  }, []);

  const closePopup = () => setShowWelcomePopup(false);

  const handlePopupClick = (e: any) => e.stopPropagation();

  return (
    <Router>
      <div className="min-h-screen">
        {/* Welcome Popup */}
        {showWelcomePopup && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closePopup}
          >
            <div
              className="relative bg-white p-6 rounded shadow-lg max-w-sm text-center"
              onClick={handlePopupClick}
            >
              {/* Close (×) Button */}
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

        {/* Common Header */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/mission-vision" element={<MissionVision />} />
        </Routes>

        {/* Common Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
