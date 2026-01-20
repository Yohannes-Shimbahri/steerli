import React, { useState, useEffect } from 'react';
import { Car, Target, Heart, Users, Shield, TrendingUp, Menu, X } from 'lucide-react';

const APP_URL = 'https://app.steerli.com';

export default function AboutPage() {
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
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src="/images/steerly-logo.jpeg" alt="Steerly Logo" className="h-10 sm:h-15 w-auto" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Steerli</span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/about" className="text-indigo-600 font-medium">About</a>
              <a href="/how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">How It Works</a>
              <a href="/faq" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">FAQ</a>
              <a href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Contact</a>
              <a href={`${APP_URL}/auth/login`} className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Login</a>
              <a href={`${APP_URL}/auth/sign-up`} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all font-medium transform hover:scale-105">Sign Up</a>
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
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="/about" className="text-indigo-600 font-medium">About</a>
                <a href="/how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">How It Works</a>
                <a href="/faq" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">FAQ</a>
                <a href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Contact</a>
                <a href={`${APP_URL}/auth/login`} className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Login</a>
                <a href={`${APP_URL}/auth/sign-up`} className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-center">Sign Up</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-slideUp">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Steerli</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 animate-slideUp" style={{animationDelay: '0.1s'}}>
            We're on a mission to make quality driving education accessible, 
            affordable, and effective for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <Target className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-600 mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">
                Learning to drive is one of life's most important milestones. At Steerli, 
                we believe everyone deserves access to quality instruction from verified, 
                professional driving instructors.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                We're building a platform that connects students with the perfect instructor 
                for their learning style, schedule, and budget while providing instructors 
                with the tools they need to grow their business.
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/about-us.png" 
                alt="About Steerli"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">Our Values</h2>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-16 max-w-2xl mx-auto">
            These principles guide everything we do at Steerli.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Shield, color: "indigo", title: "Safety First", desc: "Every instructor is thoroughly vetted, background-checked, and certified. Student safety is our top priority in everything we do." },
              { icon: Users, color: "purple", title: "Student Success", desc: "We're committed to helping every student achieve their goal of becoming a confident, skilled driver through quality education." },
              { icon: TrendingUp, color: "indigo", title: "Instructor Growth", desc: "We provide instructors with powerful tools to manage their business, reach more students, and increase their earnings." }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <Icon className={`w-10 h-10 sm:w-12 sm:h-12 text-${value.color}-600 mb-3 sm:mb-4`} />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-3 sm:space-y-4 text-sm sm:text-base">
            <p>
              Steerli was born from a simple observation: finding a great driving instructor 
              shouldn't be difficult. Too many students settle for whoever is available or 
              affordable, rather than finding an instructor who truly matches their needs.
            </p>
            <p>
              At the same time, talented driving instructors often struggle to reach students 
              and manage the administrative side of their business. They spend more time on 
              paperwork than teaching.
            </p>
            <p>
              We built Steerli to solve both problems. Our platform makes it easy for students 
              to find verified, reviewed instructors who match their preferences while giving 
              instructors powerful tools to grow their business and focus on what they do best: teaching.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16">Steerli by the Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { num: "15,000+", label: "Students Trained" },
              { num: "2,500+", label: "Verified Instructors" },
              { num: "94%", label: "Pass Rate" },
              { num: "4.8★", label: "Average Rating" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">{stat.num}</div>
                <div className="text-indigo-200 text-xs sm:text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Join the Steerli Community</h2>
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Whether you're learning to drive or teaching others, we'd love to have you with us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href={`${APP_URL}/auth/sign-up?type=student`} className="bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-indigo-700 transition-all text-base sm:text-lg font-semibold shadow-lg transform hover:scale-105">
              Sign Up as Student
            </a>
            <a href={`${APP_URL}/auth/sign-up?type=instructor`} className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-purple-700 transition-all text-base sm:text-lg font-semibold shadow-lg transform hover:scale-105">
              Become an Instructor
            </a>
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
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}