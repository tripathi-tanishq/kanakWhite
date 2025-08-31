import React from "react";
import { Check } from "lucide-react";

// Import images from src/assets (replace with your actual filenames)
// import paintImg from "../../assets/products/wall-putty.jpg";
import distemper from "../../dist/assets/products/distemper.jpeg";
import emulsionImg from "../../dist/assets/products/emulsions.jpeg";
// import wallPuttyImg from "../../assets/products/interior-emulsion.jpg";
import primerImg from "../../dist/assets/products/primer.jpeg";
// import enamelImg from "../../assets/products/enamel.jpg";
// import stainerImg from "../../assets/products/primer.jpg";

const products = [
  {
    name: "Paints",
    // image: paintImg,
    description:
      "High-quality paints offering vibrant shades and smooth finish for every wall",
  },
  {
    name: "Distemper",
    image: distemper,
    description:
      "Affordable and durable wall finish with a soft, matte texture.",
  },
  {
    name: "Emulsions",
    image: emulsionImg,
    description:
      " Premium water-based paint providing rich colors, long-lasting shine, and easy washability.",
  },
  {
    name: "Enamel",
    // image: enamelImg,
    description:
      "Glossy and protective enamel paint ideal for wood, metal, and household surfaces.",
  },
  {
    name: "Primer",
    image: primerImg,
    description:
      "Superior wall primer that ensures strong adhesion and a flawless topcoat finish.",
  },
  {
    name: "Wall Putty",
    // image: wallPuttyImg,
    description:
      "Smoothens wall surfaces, covers cracks, and provides a perfect base for painting.",
  },
  {
    name: "Universal Stainer",
    // image: stainerImg,
    description: "Strong bonding primer for improved paint adhesion.",
  },
];

export default function ProductSection() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain bg-white pt-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Specialties */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Product Specialties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Superior Bonding Strength",
              "Weather Resistant",
              "Crack Resistant",
              "Smooth Finish",
              "Extended Durability",
              "Eco-Friendly Formula",
              "Premium Quality Standards",
            ].map((specialty) => (
              <div key={specialty} className="flex items-center">
                <Check className="w-5 h-5 text-[#a7800a] mr-2" />
                <span>{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
