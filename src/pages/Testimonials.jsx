import React from 'react';
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO at TechFlow",
    company: "TechFlow",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face",
    content: "This platform transformed our workflow completely. We've seen a 300% increase in productivity since implementing their solution.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CTO at InnovateLabs",
    company: "InnovateLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    content: "The best investment we've made for our startup. The ROI was evident within the first month of usage.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Product Manager at ScaleUp",
    company: "ScaleUp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    content: "Incredible support team and a product that actually delivers on its promises. Highly recommended!",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder at StartupX",
    company: "StartupX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    content: "Game-changer for our business operations. The intuitive interface and powerful features are unmatched.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "VP of Operations at GrowthCo",
    company: "GrowthCo",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    content: "We've tried many solutions, but this one stands out. The results speak for themselves.",
    rating: 5
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Director at NextGen",
    company: "NextGen",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    content: "Exceptional value and performance. Our team productivity has never been higher.",
    rating: 5
  }
];

// Card component defined within the same file
const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`rounded-xl border bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <Card className={`p-6 bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1 ${
      index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'
    }`} style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex items-start gap-4">
        <div className="relative">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-200"
          />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <Quote className="w-2 h-2 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.content}</p>
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-blue-600">{testimonial.role}</p>
            <p className="text-xs text-gray-500">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              Trusted by 10,000+ companies
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent mb-6">
              What our customers say
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it. See what industry leaders and growing startups have to say about our platform.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
                <div className="text-blue-200">Happy Customers</div>
              </div>
              <div className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-200">Uptime</div>
              </div>
              <div className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-blue-200">Customer Rating</div>
              </div>
              <div className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 px-6">
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
    </div>
  );
};

export default Testimonials;