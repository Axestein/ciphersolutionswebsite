import React from 'react';
import { ArrowRight, Play, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';

export default function HeroPage() {
  return (
    <div className="min-h-screen mt-14 bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:px-12 lg:py-16">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 fill-current" />
              <span>Trusted by 10,000+ companies worldwide</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Here a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> CTA </span>
                will come
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Our platform helps teams design, prototype and ship products with AI-powered tools and components.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 my-10">
              {[
                'Drag-and-drop interface',
                'AI-generated templates',
                'Real-time collaboration'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-gray-200 hover:border-blue-200 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-md flex items-center justify-center space-x-2">
                <Play className="w-5 h-5 text-blue-600" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Company Logos 
            <div className="pt-12 border-t border-gray-100 mt-12">
              <p className="text-sm text-gray-500 mb-6">Trusted by leading companies</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {['Google', 'Microsoft', 'Amazon', 'Netflix', 'Spotify', 'Airbnb'].map((company, index) => (
                  <span key={index} className="text-gray-400 font-medium text-lg">{company}</span>
                ))}
              </div>
            </div>
            */}
          </div>
          
          <div className="relative max-w-6xl mx-auto mt-20">
            <div className="relative z-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="w-full overflow-hidden rounded-2xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Dashboard preview"
                  className="aspect-[16/10] h-auto w-full object-cover"
                  height={1000}
                  width={1600}
                />
              </div>
              
              {/* tags on big img */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Live preview</span>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                New Feature
              </div>
              
              <div className="absolute top-8 -left-6 bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-lg text-sm font-medium shadow-md">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>24k+ users</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 -right-6 bg-purple-50 border border-purple-200 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium shadow-md">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>↑ 127% growth</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-blue-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-indigo-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute top-1/2 -right-16 w-24 h-24 bg-purple-100 rounded-full opacity-15 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}