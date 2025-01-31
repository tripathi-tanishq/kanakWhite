import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://i0.wp.com/samhouseplans.com/wp-content/uploads/2021/12/15x10-Modern-House-Design-4-Bedrooms-3d-Front-View-1.jpg?fit=1920%2C1080&ssl=1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Building Tomorrow with Quality Today
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Premium cement and wall putty solutions for lasting construction
            excellence
          </p>
          <button className="bg-[#a7800a] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#8e6c08] transition-colors">
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
}
