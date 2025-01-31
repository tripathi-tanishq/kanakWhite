import React from 'react';
import { Check } from 'lucide-react';

const products = [
  {
    name: 'Premium Wall Putty',
    image: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&q=80&w=600',
    description: 'Superior quality wall putty for perfect finishing',
  },
  {
    name: 'White Cement',
    image: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80&w=600',
    description: 'High-grade white cement for versatile applications',
  },
  {
    name: 'Weather Shield Putty',
    image: 'https://images.unsplash.com/photo-1604514628550-37477afdf4e3?auto=format&fit=crop&q=80&w=600',
    description: 'Weather-resistant putty for exterior walls',
  },
];

export default function ProductSection() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Product Specialties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Superior Bonding Strength',
              'Weather Resistant',
              'Crack Resistant',
              'Smooth Finish',
              'Extended Durability',
              'Eco-Friendly Formula'
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