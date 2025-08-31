import React from "react";

// Import local images
import gallery_01 from "../../dist/assets/gallery/gallery_01.png";
import gallery_02 from "../../dist/assets/gallery/gallery_02.png";
import gallery_03 from "../../dist/assets/gallery/gallery_03.png";
import gallery_04 from "../../dist/assets/gallery/gallery_04.png";
import gallery_05 from "../../dist/assets/gallery/gallery_05.png";
import gallery_06 from "../../dist/assets/gallery/gallery_06.png";

const images = [
  { url: gallery_01, caption: "Premium Wall Finish" },
  { url: gallery_02, caption: "White Cement Application" },
  { url: gallery_03, caption: "Exterior Wall Protection" },
  { url: gallery_04, caption: "Smooth Surface Finish" },
  { url: gallery_05, caption: "Interior Wall Treatment" },
  { url: gallery_06, caption: "Professional Application" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
