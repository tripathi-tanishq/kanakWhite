import React from "react";
import { Award, Leaf, Lightbulb, Handshake } from "lucide-react";
import introImage from "../assets/images/introductionImage.jpg";

export default function Introduction() {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-r from-[#a7800a] to-yellow-600 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to GodrejShine Paints
        </h1>
        <p className="text-xl">Strength, Smoothness & Shine for Every Wall</p>
      </div>

      {/* About Us */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={introImage}
          alt="About GodrejShine"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-[#a7800a] mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            GodrejShine Paints is built on trust, innovation, and excellence. We
            take pride in delivering high-quality paints, primers, wall putty,
            and coatings designed to bring durability, beauty, and protection to
            walls.
          </p>
          <p className="text-lg text-gray-700">
            With state-of-the-art technology and eco-friendly processes, we
            redefine the painting experience for households, professionals, and
            industries alike.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#a7800a] mb-10">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 shadow-md rounded-lg bg-gray-50">
            <Award className="mx-auto text-[#a7800a] w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg">Quality First</h3>
            <p className="text-gray-600 text-sm">
              Premium finishes with certified durability.
            </p>
          </div>
          <div className="text-center p-6 shadow-md rounded-lg bg-gray-50">
            <Leaf className="mx-auto text-[#a7800a] w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg">Eco-Friendly</h3>
            <p className="text-gray-600 text-sm">
              Sustainable paints with environment care.
            </p>
          </div>
          <div className="text-center p-6 shadow-md rounded-lg bg-gray-50">
            <Lightbulb className="mx-auto text-[#a7800a] w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg">Innovation</h3>
            <p className="text-gray-600 text-sm">
              Advanced technology for lasting results.
            </p>
          </div>
          <div className="text-center p-6 shadow-md rounded-lg bg-gray-50">
            <Handshake className="mx-auto text-[#a7800a] w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg">Trust</h3>
            <p className="text-gray-600 text-sm">
              Trusted by professionals & households.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      {/* Achievements */}
      <div className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-[#a7800a] mb-10">
          What Defines Us
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <h3 className="text-4xl font-bold text-[#a7800a]">🇮🇳</h3>
            <p className="text-gray-600">Made in India</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#a7800a]">✔️</h3>
            <p className="text-gray-600">ISO Certified Quality</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#a7800a]">🌱</h3>
            <p className="text-gray-600">Eco-Friendly Process</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#a7800a]">⚙️</h3>
            <p className="text-gray-600">Advanced Technology</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#a7800a] to-yellow-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Discover Our Products</h2>
        <p className="mb-6">
          Bring strength, smoothness, and shine to your walls today.
        </p>
        <a
          href="/#products"
          className="px-6 py-3 bg-white text-[#a7800a] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
}
