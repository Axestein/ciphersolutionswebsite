"use client";
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  { question: 'What is x?', answer: 'y' },
  { question: 'Is x free?', answer: 'Yes, it has a free tier. Premium features are optional.' },
  { question: 'Does it work offline?', answer: 'Yes, you can take and blah blah.' },
  { question: 'Is my data secure?', answer: 'Your data is encrypted and securely stored.' },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-blue-600 mb-10">Answers to the most common questions about Our Product.</p>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-blue-200 rounded-lg">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 bg-white hover:bg-blue-100 transition-colors flex justify-between items-center"
              >
                <span className="text-blue-800 font-medium">{faq.question}</span>
                <span className="text-blue-500 text-xl">
                  {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-blue-50 text-blue-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
