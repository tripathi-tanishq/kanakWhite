import React from "react";
import { Target, Eye, Leaf, Award } from "lucide-react"; // icons

export default function MissionVision() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center text-[#a7800a] mb-12">
          Our Mission & Vision
        </h1>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
            <Target className="w-12 h-12 text-[#a7800a] mb-4" />
            <h2 className="text-2xl font-semibold text-[#a7800a] mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide high-quality, eco-friendly paints and wall solutions
              that enhance living spaces while protecting the environment. We
              aim to empower households, contractors, and professionals with
              durable and sustainable products proudly made in India.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
            <Eye className="w-12 h-12 text-[#a7800a] mb-4" />
            <h2 className="text-2xl font-semibold text-[#a7800a] mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become a trusted and innovative paint brand, recognized for
              ISO-certified quality, sustainable practices, and advanced
              technology — building a brighter, stronger, and more colorful
              tomorrow for every home in India.
            </p>
          </div>
        </div>

        {/* Our Promise / Extra Section */}
        <div className="py-16 px-6 mt-16 bg-gray-100 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold text-center text-[#a7800a] mb-10">
            Our Promise
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="w-10 h-10 text-[#a7800a] mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Certified Quality</h3>
              <p className="text-gray-600 text-sm">
                ISO standards that ensure durability and reliability.
              </p>
            </div>
            <div>
              <Leaf className="w-10 h-10 text-[#a7800a] mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm">
                Sustainable production for a greener future.
              </p>
            </div>
            <div>
              <Target className="w-10 h-10 text-[#a7800a] mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Customer First</h3>
              <p className="text-gray-600 text-sm">
                Focused on long-lasting value and satisfaction.
              </p>
            </div>
            <div>
              <Eye className="w-10 h-10 text-[#a7800a] mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Modern technology for premium paint solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
