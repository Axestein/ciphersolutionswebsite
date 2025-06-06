"use client";
import React, { useState, useEffect } from 'react';
import { 
  Play, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  BarChart3, 
  Users, 
  Upload,
  Settings,
  Rocket,
  Clock,
  TrendingUp,
  Eye,
  MousePointer,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function DemoPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Connect Your Data",
      subtitle: "Import from anywhere in seconds",
      description: "Simply connect your existing tools and data sources. Our platform integrates with 200+ popular business applications with one-click setup.",
      features: [
        "One-click integrations",
        "Secure data sync",
        "No technical setup required"
      ],
      demo: "connect"
    },
    {
      number: "02", 
      title: "Configure Workflows",
      subtitle: "Drag, drop, and automate",
      description: "Use our visual workflow builder to create custom automation rules. No coding required - just drag, drop, and watch your processes run automatically.",
      features: [
        "Visual workflow builder",
        "Pre-built templates",
        "Smart automation rules"
      ],
      demo: "configure"
    },
    {
      number: "03",
      title: "Monitor & Optimize",
      subtitle: "Real-time insights and growth",
      description: "Track performance with live dashboards and AI-powered insights. Get recommendations to optimize your workflows and accelerate business growth.",
      features: [
        "Real-time dashboards",
        "AI-powered insights",
        "Performance optimization"
      ],
      demo: "monitor"
    }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveStep((current) => (current + 1) % steps.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setProgress(0);
    }
  };

  const handleStepClick = (index) => {
    setActiveStep(index);
    setProgress(0);
    setIsPlaying(false);
  };

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
    setProgress(0);
    setIsPlaying(false);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    setProgress(0);
    setIsPlaying(false);
  };

  return (
    <div id="demo" className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Play className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Interactive Demo</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            See How It
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Works</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            Watch our platform transform your business operations in just 3 simple steps. 
            No technical expertise required.
          </p>

          <button 
            onClick={handlePlayDemo}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 sm:space-x-3 mx-auto text-sm sm:text-base"
          >
            {isPlaying ? (
              <>
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
                <span>Playing Demo...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span>Start Interactive Demo</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-8 sm:mb-12 md:mb-16">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className={`relative cursor-pointer transition-all ${
                    activeStep === index ? 'transform scale-110' : 'hover:scale-105'
                  }`}
                  onClick={() => handleStepClick(index)}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 transition-all ${
                    activeStep === index 
                      ? 'bg-blue-600 border-blue-600 text-white shadow-lg' 
                      : 'bg-white border-gray-300 text-gray-600 hover:border-blue-300'
                  }`}>
                    <span className="font-bold text-sm sm:text-base">{step.number}</span>
                  </div>
                  
                  {activeStep === index && isPlaying && (
                    <div className="absolute inset-0 rounded-full">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 transform -rotate-90">
                        <circle
                          cx={isMobile ? "24" : "32"}
                          cy={isMobile ? "24" : "32"}
                          r={isMobile ? "22" : "30"}
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * (isMobile ? 22 : 30)}`}
                          strokeDashoffset={`${2 * Math.PI * (isMobile ? 22 : 30) * (1 - progress / 100)}`}
                          className="text-white opacity-80"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                
                {index < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 ml-2 sm:ml-4 hidden lg:block" />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                  <span>Step {activeStep + 1} of 3</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  {steps[activeStep].title}
                </h2>
                
                <p className="text-base sm:text-lg text-blue-600 font-medium">
                  {steps[activeStep].subtitle}
                </p>
                
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                {steps[activeStep].features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex lg:hidden justify-between pt-4">
                <button 
                  onClick={prevStep}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-1 text-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                
                {activeStep < steps.length - 1 ? (
                  <button 
                    onClick={nextStep}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1 text-sm"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-1 text-sm">
                    <Rocket className="w-4 h-4" />
                    <span>Get Started</span>
                  </button>
                )}
              </div>
              
              <div className="hidden lg:flex space-x-4 pt-4">
                {activeStep > 0 && (
                  <button 
                    onClick={prevStep}
                    className="px-5 py-2.5 sm:px-6 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  >
                    Previous Step
                  </button>
                )}
                
                {activeStep < steps.length - 1 ? (
                  <button 
                    onClick={nextStep}
                    className="px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base">
                    <Rocket className="w-4 h-4" />
                    <span>Get Started</span>
                  </button>
                )}
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="flex space-x-1 sm:space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm text-gray-500 truncate">
                      app.startupname.com/{steps[activeStep].demo}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 md:p-8 min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                  {activeStep === 0 && (
                    <div className="space-y-4 sm:space-y-6 animate-fadeIn">
                      <div className="text-center mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Connect Your Tools</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Choose from 200+ integrations</p>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                        {['Slack', 'Gmail', 'Salesforce', 'Shopify', 'Stripe', 'Zoom'].map((tool, index) => (
                          <div key={index} className={`p-2 sm:p-3 md:p-4 border rounded-lg text-center cursor-pointer transition-all ${
                            index < 3 ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:border-blue-200'
                          }`}>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded mx-auto mb-1 sm:mb-2"></div>
                            <span className="text-xs sm:text-sm font-medium text-gray-700">{tool}</span>
                            {index < 3 && <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mx-auto mt-0.5 sm:mt-1" />}
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-3 md:p-4">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                          <span className="text-xs sm:text-sm text-blue-900 font-medium">3 integrations connected successfully!</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeStep === 1 && (
                    <div className="space-y-4 sm:space-y-6 animate-fadeIn">
                      <div className="text-center mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Build Your Workflow</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Drag and drop to create automation</p>
                      </div>
                      
                      <div className="space-y-2 sm:space-y-4">
                        <div className="flex items-center justify-between p-2 sm:p-3 md:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-gray-900">When: New customer signs up</span>
                          </div>
                          <MousePointer className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        </div>
                        
                        <div className="ml-4 sm:ml-6 border-l-2 border-gray-200 pl-4 sm:pl-6 space-y-1 sm:space-y-3">
                          <div className="flex items-center justify-between p-2 sm:p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <span className="text-xs sm:text-sm text-gray-900">Send welcome email</span>
                            <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                          </div>
                          
                          <div className="flex items-center justify-between p-2 sm:p-3 bg-green-50 border border-green-200 rounded-lg">
                            <span className="text-xs sm:text-sm text-gray-900">Add to CRM</span>
                            <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                          </div>
                          
                          <div className="flex items-center justify-between p-2 sm:p-3 bg-purple-50 border border-purple-200 rounded-lg">
                            <span className="text-xs sm:text-sm text-gray-900">Create Slack notification</span>
                            <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-2 sm:p-3 md:p-4">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                          <span className="text-xs sm:text-sm text-green-900 font-medium">Workflow configured and ready to deploy!</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeStep === 2 && (
                    <div className="space-y-4 sm:space-y-6 animate-fadeIn">
                      <div className="text-center mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Monitor Performance</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Real-time insights and optimization</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <div className="bg-blue-50 p-2 sm:p-3 md:p-4 rounded-lg text-center">
                          <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-1 sm:mb-2" />
                          <div className="text-xl sm:text-2xl font-bold text-blue-600">847</div>
                          <div className="text-xs sm:text-sm text-gray-600">Tasks Automated</div>
                        </div>
                        
                        <div className="bg-green-50 p-2 sm:p-3 md:p-4 rounded-lg text-center">
                          <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mx-auto mb-1 sm:mb-2" />
                          <div className="text-xl sm:text-2xl font-bold text-green-600">23h</div>
                          <div className="text-xs sm:text-sm text-gray-600">Time Saved</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-2 sm:p-3 md:p-4">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <span className="text-xs sm:text-sm font-medium text-gray-700">Workflow Performance</span>
                          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                        </div>
                        <div className="h-16 sm:h-20 flex items-end space-x-0.5 sm:space-x-1">
                          {[65, 78, 85, 92, 88, 95, 89, 97].map((height, index) => (
                            <div 
                              key={index}
                              className="bg-blue-500 rounded-t flex-1 transition-all duration-500"
                              style={{height: `${height}%`}}
                            ></div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-2 sm:p-3 md:p-4">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mt-0.5" />
                          <div>
                            <div className="text-xs sm:text-sm font-medium text-purple-900 mb-0.5 sm:mb-1">AI Insight</div>
                            <div className="text-xs sm:text-sm text-purple-800">Your email automation is 35% more effective than industry average. Consider scaling this workflow.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {isPlaying && (
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-green-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium animate-bounce">
                  ✓ Live Demo
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}