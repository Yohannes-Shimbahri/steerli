import React, { useState, useEffect } from 'react';
import { Car, Shield, Star, Clock, MapPin, DollarSign, CheckCircle, Users, Award, TrendingUp, Menu, X } from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.steerli.com';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Improved Sticky Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-3' 
          : 'bg-white border-b border-gray-200 py-3 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src="/images/steerly-logo.jpeg" alt="Steerly Logo" className="h-10 sm:h-15 w-auto" />
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Steerli</span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                About
              </a>
              <a href="/how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                How It Works
              </a>
              <a href="/faq" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                FAQ
              </a>
              <a href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                Contact
              </a>
              <a 
                href={`${APP_URL}/auth/login`} 
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Login
              </a>
              <a 
                href={`${APP_URL}/auth/sign-up`}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all font-medium transform hover:scale-105"
              >
                Sign Up
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-indigo-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fadeIn">
              <div className="flex flex-col space-y-4">
                <a href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  About
                </a>
                <a href="/how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  How It Works
                </a>
                <a href="/faq" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  FAQ
                </a>
                <a href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  Contact
                </a>
                <a href={`${APP_URL}/auth/login`} className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  Login
                </a>
                <a href={`${APP_URL}/auth/sign-up`} className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-center">
                  Sign Up
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Animation */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-200 to-white animate-fadeIn">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 animate-slideUp">
            Welcome
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
             Find your perfect Driving Instructor
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-900 mb-8 sm:mb-12 max-w-3xl mx-auto animate-slideUp" style={{animationDelay: '0.1s'}}>
            Connect with verified, professional driving instructors in your area. 
            Book lessons, track progress, and get your license with confidence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 animate-slideUp" style={{animationDelay: '0.2s'}}>
            <a 
              href={`${APP_URL}/auth/sign-up?type=student`} 
              className="bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-indigo-700 transition-all text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Sign Up as Student
            </a>
            <a 
              href={`${APP_URL}/auth/sign-up?type=instructor`} 
              className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-purple-700 transition-all text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Sign Up as Instructor
            </a>
          </div>
        </div>
      </section>

      

      {/* Features Grid with Images */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">Why Choose Steerli?</h2>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-16 max-w-2xl mx-auto">
            We're committed to making your driving education experience smooth, safe, and successful.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              { 
                image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=300&fit=crop&q=80",
                icon: MapPin, 
                color: "indigo", 
                title: "Find Local Instructors", 
                desc: "Connect with certified instructors in your area who know local roads and test routes." 
              },
              { 
                image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&h=300&fit=crop&q=80",
                icon: Clock, 
                color: "purple", 
                title: "Flexible Scheduling", 
                desc: "Book lessons that fit your schedule. Morning, evening, or weekend slots available." 
              },
              { 
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop&q=80",
                icon: Star, 
                color: "indigo", 
                title: "Verified Reviews", 
                desc: "Read authentic reviews from real students to find the perfect instructor match." 
              },
              { 
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&q=80",
                icon: DollarSign, 
                color: "purple", 
                title: "Transparent Pricing", 
                desc: "See upfront pricing with no hidden fees. Compare rates and choose what fits your budget." 
              },
              { 
                image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=500&h=300&fit=crop&q=80",
                icon: CheckCircle, 
                color: "indigo", 
                title: "Progress Tracking", 
                desc: "Monitor your learning journey with detailed progress reports and milestone tracking." 
              },
              { 
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=300&fit=crop&q=80",
                icon: Shield, 
                color: "purple", 
                title: "Safe & Secure", 
                desc: "All instructors are background-checked, insured, and certified professionals." 
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer">
                  {/* Image */}
                  <div className="relative h-32 sm:h-48 overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-3 bg-${feature.color}-600 rounded-lg`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works with Images */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">How It Works</h2>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-16 max-w-3xl mx-auto">
            Easily connect, book, and provide safe and trusted driving lessons in just a few simple steps.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { 
                num: 1, 
                title: "Create Your Account", 
                desc: "Sign up as a student in minutes. Tell us about your learning preferences and goals.",
                image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=300&fit=crop&q=80"
              },
              { 
                num: 2, 
                title: "Find Your Instructor", 
                desc: "Schedule lessons, track your progress, and communicate with your instructor all in one place.",
                image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop&q=80"
              },
              { 
                num: 3, 
                title: "Book & Learn", 
                desc: "Browse verified instructors by location, availability, price, and reviews. Filter by your preferences.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop&q=80"
              }
            ].map((step, idx) => (
              <div key={idx} className="text-center group">
                {/* Image */}
                <div className="relative mb-4 sm:mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Number Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg">
                    {step.num}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Students CTA */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 sm:p-12 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Ready to Start Learning?</h2>
                <p className="text-indigo-100 text-sm sm:text-lg mb-6 sm:mb-8">
                  Start your driving journey by connecting with trusted instructors on Steerli.
                </p>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="transform hover:scale-110 transition-transform">
                    <div className="text-2xl sm:text-4xl font-bold mb-1">?%</div>
                    <div className="text-indigo-200 text-xs sm:text-sm">Pass Rate</div>
                  </div>
                  <div className="transform hover:scale-110 transition-transform">
                    <div className="text-2xl sm:text-4xl font-bold mb-1">?</div>
                    <div className="text-indigo-200 text-xs sm:text-sm">Happy Students</div>
                  </div>
                  <div className="transform hover:scale-110 transition-transform">
                    <div className="text-2xl sm:text-4xl font-bold mb-1">?</div>
                    <div className="text-indigo-200 text-xs sm:text-sm">Instructors</div>
                  </div>
                  <div className="transform hover:scale-110 transition-transform">
                    <div className="text-2xl sm:text-4xl font-bold mb-1">?</div>
                    <div className="text-indigo-200 text-xs sm:text-sm">Average Rating</div>
                  </div>
                </div>
                
                <a 
                  href={`${APP_URL}/auth/sign-up?type=student`} 
                  className="inline-block bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-all text-base sm:text-lg font-semibold shadow-lg transform hover:scale-105"
                >
                  Get Started as Student →
                </a>
              </div>
              
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=600&fit=crop" 
                    alt="Happy student learning to drive"
                    className="w-96 h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Instructors CTA */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=600&fit=crop&q=80" 
                    alt="Driving instructor teaching student in car"
                    className="w-96 h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-2xl"></div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Become an Instructor</h2>
                <p className="text-gray-600 text-sm sm:text-lg mb-6 sm:mb-8">
                  Join our network of professional driving instructors. Set your own schedule, 
                  rates, and build your business with Steerli's platform.
                </p>
                
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    { title: "Earn $45-60/hour", subtitle: "Set your own competitive rates" },
                    { title: "Flexible Schedule", subtitle: "Work when you want, where you want" },
                    { title: "Grow Your Business", subtitle: "Access to thousands of potential students" },
                    { title: "Easy Management", subtitle: "Scheduling, payments, and communication in one place" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 sm:space-x-3 group">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</div>
                        <div className="text-gray-600 text-xs sm:text-sm">{item.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <a 
                  href={`${APP_URL}/auth/sign-up?type=instructor`} 
                  className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all text-base sm:text-lg font-semibold shadow-lg transform hover:scale-105"
                >
                  Join as Instructor →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <img src="/images/steerly-logo.jpeg" alt="Steerly Logo" className="h-10 sm:h-15 w-auto" />
                <span className="text-xl sm:text-2xl font-bold text-white">Steerli</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Connecting students with professional driving instructors for a safer, smarter way to learn.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">For Students</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href={`${APP_URL}/auth/sign-up?type=student`} className="hover:text-indigo-400 transition-colors">Sign Up</a></li>
                <li><a href="/how-it-works" className="hover:text-indigo-400 transition-colors">How It Works</a></li>
                <li><a href="/faq" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">For Instructors</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href={`${APP_URL}/auth/sign-up?type=instructor`} className="hover:text-indigo-400 transition-colors">Become an Instructor</a></li>
                <li><a href="/how-it-works#for-instructors" className="hover:text-indigo-400 transition-colors">Benefits</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="/about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2026 Steerli. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}