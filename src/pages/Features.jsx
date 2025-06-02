"use client";
import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  Globe,
  Workflow,
  Brain,
  Lock,
  Smartphone,
  TrendingUp,
  AlertTriangle,
  X,
  Headphones,
  Star
} from 'lucide-react';

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const problems = [
    {
      icon: AlertTriangle,
      title: "Manual processes eating your time",
      description: "Teams spend 40% of their day on repetitive tasks instead of strategic work"
    },
    {
      icon: X,
      title: "Disconnected tools causing chaos",
      description: "Data scattered across multiple platforms leads to confusion and errors"
    },
    {
      icon: TrendingUp,
      title: "No visibility into performance",
      description: "Making decisions without real-time insights hurts growth potential"
    }
  ];

  const coreFeatures = [
    {
      icon: Workflow,
      title: "Smart Workflow Automation",
      description: "Automate repetitive tasks and complex workflows with drag-and-drop simplicity",
      benefits: ["Save 15+ hours per week", "Reduce human errors by 90%", "Scale operations effortlessly"],
      visual: "automation"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics Dashboard",
      description: "Get instant insights into your business performance with interactive dashboards",
      benefits: ["Make data-driven decisions", "Track KPIs in real-time", "Custom reporting tools"],
      visual: "analytics"
    },
    {
      icon: Users,
      title: "Team Collaboration Hub",
      description: "Centralize communication and project management in one powerful platform",
      benefits: ["Boost team productivity", "Streamline communication", "Track project progress"],
      visual: "collaboration"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Leverage machine learning to predict trends and optimize performance",
      benefits: ["Predictive analytics", "Smart recommendations", "Automated optimization"],
      visual: "ai"
    }
  ];

  const additionalFeatures = [
    { icon: Shield, title: "Enterprise Security", description: "Bank-level encryption and compliance" },
    { icon: Smartphone, title: "Mobile Access", description: "Work from anywhere with native apps" },
    { icon: Globe, title: "Global Scale", description: "Deploy worldwide with 99.9% uptime" },
    { icon: Headphones, title: "24/7 Support", description: "Expert help whenever you need it" },
    { icon: Lock, title: "Data Privacy", description: "GDPR compliant with full data control" },
    { icon: Zap, title: "Fast Performance", description: "Lightning-fast responses under 100ms" }
  ];

  return (
    <div id="features" className="bg-white"> {/* Removed min-h-screen to prevent extra space */}
      {/* Additional Features Grid */}
      <div className="pb-14"> {/* Changed py-14 to pb-14 to remove top padding */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Features we provide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Additional features that make our platform the complete solution for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-lg flex items-center justify-center mb-4 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}