"use client";
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  { 
    question: 'What is x?', 
    answer: 'y is a cutting-edge solution that transforms how businesses operate, leveraging AI and automation to streamline workflows and boost productivity.' 
  },
  { 
    question: 'Is x free?', 
    answer: 'Yes, we offer a generous free tier with essential features. Our premium plans unlock advanced capabilities with flexible pricing options.' 
  },
  { 
    question: 'Does it work offline?', 
    answer: 'Absolutely. Our offline mode allows full functionality, syncing seamlessly when you reconnect.' 
  },
  { 
    question: 'Is my data secure?', 
    answer: 'Security is our top priority. We use end-to-end encryption, regular audits, and comply with global data protection standards.' 
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            FAQs
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our premium platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200/70 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}`}
            >
              <button
                onClick={() => toggle(index)}
                className={`w-full text-left px-8 py-6 bg-white hover:bg-gray-50 transition-all duration-200 flex justify-between items-center ${openIndex === index ? 'border-b border-gray-100' : ''}`}
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <span className={`ml-4 text-blue-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? (
                    <FiChevronUp className="w-5 h-5" />
                  ) : (
                    <FiChevronDown className="w-5 h-5" />
                  )}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 py-6 bg-white text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-0 mt-18 px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to join them?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Start your free trial today and see why thousands of companies trust our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:shadow-lg hover:shadow-blue-200">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}