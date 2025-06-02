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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Trusted by n+ companies worldwide</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  here a 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> CTA</span>
                  <br />text will come
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum suscipit deleniti officia aperiam corporis excepturi sit at itaque,
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                  'some text will come',
                  'some text will come',
                  'some text will come'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group border-2 border-gray-200 hover:border-blue-200 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-md flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5 text-blue-600" />
                  <span>Watch Demo</span>
                </button>
              </div>
              
              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-4">Trusted by leading companies</p>
                <div className="flex items-center space-x-8 opacity-60">
                  {['W', 'X', 'Y', 'Z'].map((company, index) => (
                    <span key={index} className="text-gray-400 font-medium">{company}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-500">
                      dashboard.ciphersolution.com
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-600">Active Users</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mt-1">12,847</p>
                      <p className="text-sm text-green-600">+23% this month</p>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-indigo-600" />
                        <span className="text-sm text-gray-600">Revenue</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mt-1">$89.2k</p>
                      <p className="text-sm text-green-600">+18% this month</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 h-32 flex items-end space-x-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((height, index) => (
                      <div 
                        key={index}
                        className="bg-blue-500 rounded-t flex-1 opacity-80 hover:opacity-100 transition-opacity"
                        style={{height: `${height}%`}}
                      ></div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {['Complete onboarding flow', 'Review analytics report', 'Update team settings'].map((task, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                ✓ Live
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg p-3 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">3 new notifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}