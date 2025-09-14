import React, { useEffect, useState } from "react";

import image1 from "../assets/images/productSpeciality/ps01.jpeg";
import image2 from "../assets/images/productSpeciality/ps02.jpeg";
import image3 from "../assets/images/productSpeciality/ps03.jpeg";
import image4 from "../assets/images/productSpeciality/ps04.jpeg";
import image5 from "../assets/images/productSpeciality/ps05.jpeg";
import image6 from "../assets/images/productSpeciality/ps06.jpeg";
import image7 from "../assets/images/productSpeciality/ps07.jpeg";
import image8 from "../assets/images/productSpeciality/ps08.jpeg";
import image9 from "../assets/images/productSpeciality/ps09.jpeg";

const images = [
  { src: image1, caption: "Weather Proof" },
  { src: image2, caption: "Eco-friendly Process" },
  { src: image3, caption: "Sustainable Material" },
  { src: image4, caption: "Premium Quality" },
  { src: image5, caption: "Certified Quality" },
  { src: image6, caption: "Trusted by Experts" },
  { src: image7, caption: "Easy Application" },
  { src: image8, caption: "ISO Certified" },
  { src: image9, caption: "Made in India" },
];

export default function CircularImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <section className="carousel-container">
      <style>{`
        .carousel-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 5rem 1rem;
          min-height: 350px;
        }

        .carousel {
          display: flex;
          align-items: center;
          gap: 5rem;
          transition: transform 0.5s ease-in-out;
        }

        .carousel-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .carousel img {
          border-radius: 50%;
          object-fit: contain;
          background-color: #ffffff;
          border: 4px solid #0070f3;
          transition: transform 0.5s ease, box-shadow 0.5s ease, opacity 0.5s ease;
        }

        .carousel img.main {
          width: 180px;
          height: 180px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          transform: scale(1.1);
        }

        .carousel img.side {
          width: 120px;
          height: 120px;
          opacity: 0.7;
        }

        .carousel-item:hover img.side {
          transform: scale(1.05);
          opacity: 1;
        }

        .caption {
          margin-top: 0.75rem;
          font-size: 1.15rem;
          font-weight: 600;
          text-align: center;
          color: #1f2937;
        }

        /* Arrows */
        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0,0,0,0.5);
          color: #fff;
          border: none;
          padding: 0.75rem 1rem;
          cursor: pointer;
          border-radius: 50%;
          font-size: 1.25rem;
          transition: background-color 0.3s ease;
        }

        .arrow:hover {
          background-color: rgba(0,0,0,0.7);
        }

        .arrow-left {
          left: 1rem;
        }

        .arrow-right {
          right: 1rem;
        }

        @media (max-width: 768px) {
          .carousel {
            gap: 2.5rem;
          }

          .carousel img.main {
            width: 140px;
            height: 140px;
          }

          .carousel img.side {
            width: 100px;
            height: 100px;
          }

          .caption {
            font-size: 1rem;
          }

          .arrow {
            padding: 0.5rem 0.75rem;
            font-size: 1rem;
          }
        }
      `}</style>

      <button className="arrow arrow-left" onClick={handlePrev}>
        &#8249;
      </button>

      <div className="carousel">
        <div className="carousel-item">
          <img src={images[prevIndex].src} alt="Previous" className="side" />
          <div className="caption">{images[prevIndex].caption}</div>
        </div>

        <div className="carousel-item">
          <img src={images[currentIndex].src} alt="Current" className="main" />
          <div className="caption">{images[currentIndex].caption}</div>
        </div>

        <div className="carousel-item">
          <img src={images[nextIndex].src} alt="Next" className="side" />
          <div className="caption">{images[nextIndex].caption}</div>
        </div>
      </div>

      <button className="arrow arrow-right" onClick={handleNext}>
        &#8250;
      </button>
    </section>
  );
}
