import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is wall putty and why is it important?',
    answer: 'Wall putty is a white cement-based powder that provides a smooth finish to walls. It\'s important because it fills minor cracks and holes, providing a perfect base for paint application.'
  },
  {
    question: 'How long does it take for wall putty to dry?',
    answer: 'Generally, wall putty takes 2-3 hours to dry between coats. However, it\'s recommended to wait 6-8 hours before painting.'
  },
  {
    question: 'What makes Kanak White putty different from others?',
    answer: 'Kanak White putty is formulated with premium quality materials, offering superior adhesion, better coverage, and longer durability compared to standard putties.'
  },
  {
    question: 'Can your putty be used on exterior walls?',
    answer: 'Yes, we offer specially formulated exterior wall putty that is weather-resistant and provides excellent protection against harsh environmental conditions.'
  },
  {
    question: 'How many coats of putty are recommended?',
    answer: 'We recommend applying 2 coats of putty for the best results. The first coat fills gaps and levels the surface, while the second coat ensures a smooth finish.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#a7800a]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#a7800a]" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-gray-50 rounded-b-lg mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}