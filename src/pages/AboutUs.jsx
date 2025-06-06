import React from 'react';
import { 
  Rocket, 
  Users, 
  Globe, 
  Award, 
  HeartHandshake, 
  Lightbulb,
  ArrowRight
} from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former Google PM with 10+ years in tech innovation",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "AI specialist from MIT, built systems at Amazon",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Lee",
      role: "Head of Product",
      bio: "Product leader with 3 successful startup exits",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      role: "Growth Lead",
      bio: "Scaled 2 startups from 0 to 1M+ users",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const milestones = [
    { year: "2021", event: "Company founded in San Francisco" },
    { year: "2022", event: "Seed round ($2M) led by Sequoia" },
    { year: "2023", event: "Launched v1.0 with 100+ customers" },
    { year: "2024", event: "Expanded to 10+ countries" }
  ];

  return (
    <div id="about" className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100 opacity-20 rounded-l-full"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center lg:text-left lg:w-1/2">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Building the future of <span className="text-blue-600">work</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl">
              We're on a mission to revolutionize how teams collaborate and get work done. 
              Founded in 2021, we've grown from a garage startup to serving thousands of 
              customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                Meet our team <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
                See open roles
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:flex gap-16 items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                To empower every team to work smarter, not harder by creating intuitive 
                tools that remove friction from collaboration.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation</h3>
                    <p className="text-gray-600">
                      We challenge the status quo to build better solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <HeartHandshake className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Customer First</h3>
                    <p className="text-gray-600">
                      We obsess over delivering real value to our users
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Impact</h3>
                    <p className="text-gray-600">
                      We build tools that transcend borders and cultures
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80" 
                alt="Team collaborating" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate people building the future of work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key moments in our company history
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-1/2 p-6 rounded-xl ${index % 2 === 0 ? 'bg-blue-50 text-left' : 'bg-gray-50 text-right'}`}>
                    <div className="absolute top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" 
                      style={index % 2 === 0 ? {right: '-2rem'} : {left: '-2rem'}}></div>
                    <div className={`text-sm font-medium ${index % 2 === 0 ? 'text-blue-600' : 'text-gray-600'}`}>
                      {milestone.year}
                    </div>
                    <div className="mt-1 text-lg font-semibold text-gray-900">
                      {milestone.event}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our values</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <Users className="w-10 h-10 mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-3">People First</h3>
              <p className="opacity-90">
                We invest in our team and customers above all else. Happy people build great products.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <Award className="w-10 h-10 mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="opacity-90">
                We pursue mastery in our craft and take pride in delivering exceptional quality.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <Globe className="w-10 h-10 mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-3">Global Thinking</h3>
              <p className="opacity-90">
                We build for diverse teams worldwide with inclusive, accessible solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to join our journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented, passionate people to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              See open positions
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;