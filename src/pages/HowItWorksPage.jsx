import React, { useState, useEffect } from 'react';
import { Car, UserPlus, Search, Calendar, CreditCard, MapPin, BookOpen, Trophy, MessageCircle, Star, CheckCircle, ArrowRight, Menu, X, TrendingUp, ChevronRight } from 'lucide-react';

const APP_URL = 'https://app.steerli.com';

const studentSteps = [
  {
    icon: UserPlus,
    title: "Create Your Account",
    description: "Sign up in minutes with your basic information. Tell us about your learning goals and preferences.",
    details: [
      "Provide your name, email, and location",
      "Set your learning preferences (automatic/manual, language, etc.)",
      "Add your availability and schedule",
      "Choose your preferred learning pace"
    ]
  },
  {
    icon: Search,
    title: "Browse Instructors",
    description: "Search for verified instructors in your area. Filter by price, availability, reviews, and specialties.",
    details: [
      "View instructor profiles with photos and bios",
      "Read reviews from other students",
      "Compare prices and packages",
      "Check instructor availability in real-time"
    ]
  },
  {
    icon: Calendar,
    title: "Book Your Lessons",
    description: "Choose your preferred time slots and book lessons directly through the platform.",
    details: [
      "Select date and time that works for you",
      "Choose lesson duration (1-2 hours)",
      "Add pickup location",
      "Receive instant confirmation"
    ]
  },
  {
    icon: CreditCard,
    title: "Make Secure Payment",
    description: "Pay safely through our platform. Support multiple payment methods with buyer protection.",
    details: [
      "All major credit/debit cards accepted",
      "Secure payment processing",
      "Purchase single lessons or packages",
      "Get receipts automatically"
    ]
  },
  {
    icon: BookOpen,
    title: "Start Learning",
    description: "Meet your instructor and begin your driving journey. Track your progress after each lesson.",
    details: [
      "Instructor arrives at your location",
      "Practice with dual-control vehicle",
      "Learn at your own pace",
      "Get real-time feedback"
    ]
  },
  {
    icon: Trophy,
    title: "Pass Your Test",
    description: "With consistent practice and professional guidance, you'll be ready to ace your driving test!",
    details: [
      "Progress tracking dashboard",
      "Test preparation lessons",
      "Mock test practice",
      "Continued support until you pass"
    ]
  }
];

const instructorSteps = [
  {
    icon: UserPlus,
    title: "Apply to Join",
    description: "Complete our simple application form with your credentials and experience.",
    details: [
      "Submit your driving instructor license",
      "Provide insurance documentation",
      "Share your teaching experience",
      "Complete background check"
    ]
  },
  {
    icon: CheckCircle,
    title: "Get Verified",
    description: "We'll review your application and verify your credentials within 3-5 business days.",
    details: [
      "License verification",
      "Background check processing",
      "Insurance confirmation",
      "Profile review and approval"
    ]
  },
  {
    icon: Star,
    title: "Create Your Profile",
    description: "Set up your professional profile to attract students. Add photos, bio, and set your rates.",
    details: [
      "Upload profile photo and vehicle pictures",
      "Write compelling bio",
      "Set your hourly rates",
      "List your specialties and languages"
    ]
  },
  {
    icon: Calendar,
    title: "Set Your Schedule",
    description: "Control your availability. Set working hours and accept bookings that fit your schedule.",
    details: [
      "Define your working hours",
      "Block off personal time",
      "Set service areas",
      "Accept or decline requests"
    ]
  },
  {
    icon: BookOpen,
    title: "Teach & Earn",
    description: "Start accepting students and teaching lessons. Focus on what you do best - teaching!",
    details: [
      "Receive booking notifications",
      "Manage your calendar",
      "Teach great lessons",
      "Build your reputation"
    ]
  },
  {
    icon: CreditCard,
    title: "Get Paid Automatically",
    description: "Receive weekly payments directly to your bank account. Track all earnings in your dashboard.",
    details: [
      "Automatic payment processing",
      "Weekly direct deposits",
      "Detailed earnings reports",
      "Tax documentation provided"
    ]
  }
];

const featureCards = [
  {
    icon: MapPin,
    title: "Local Search",
    description: "Find instructors right in your neighborhood. Our smart search filters by location and availability."
  },
  {
    icon: MessageCircle,
    title: "In-App Chat",
    description: "Communicate directly with your instructor or student before and after lessons for seamless coordination."
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description: "Build trust with a transparent rating and review system. Only verified students can leave feedback."
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Students can track their skills and instructors can log lesson progress directly in the app."
  }
];

const StepCard = ({ step, index, isStudent }) => {
  const Icon = step.icon;
  const delay = 0.1 * index;
  const color = isStudent ? 'indigo' : 'purple';

  return (
    <div 
      className="group bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/50 border border-gray-800 transition-all duration-300 hover-lift animate-slide-in-up"
      style={{animationDelay: `${delay}s`}}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className={`text-3xl font-extrabold text-${color}-400`}>{index + 1}</div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">{step.title}</h3>
      </div>
      <p className="text-gray-400 mb-6">{step.description}</p>
      
      <ul className="space-y-2 sm:space-y-3">
        {step.details.map((detail, idx) => (
          <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
            <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5`} />
            <span className="text-gray-400 text-sm sm:text-base">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function HowItWorksPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header (Dark Theme) */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg py-2 sm:py-3 border-b border-purple-900' 
          : 'bg-transparent py-3 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src="/images/steerly-logo.jpeg" alt="Steerli Logo" className="h-10 sm:h-15 w-auto" />
              <span className="text-xl sm:text-2xl font-bold text-white">Steerli</span>
            </a>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">About</a>
              <a href="/how-it-works" className="text-purple-400 font-medium">How It Works</a>
              <a href="/faq" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">FAQ</a>
              <a href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Contact</a>
              <a href={`${APP_URL}/auth/login`} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Login</a>
              <a href={`${APP_URL}/auth/sign-up`} className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all font-medium transform hover:scale-105">Sign Up</a>
            </nav>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-300 hover:text-purple-400">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-700 bg-black/90 animate-fadeIn">
              <div className="flex flex-col space-y-4">
                <a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">About</a>
                <a href="/how-it-works" className="text-purple-400 font-medium">How It Works</a>
                <a href="/faq" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">FAQ</a>
                <a href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Contact</a>
                <a href={`${APP_URL}/auth/login`} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Login</a>
                <a href={`${APP_URL}/auth/sign-up`} className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center">Sign Up</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section (Dark Theme) */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 animate-slide-in-up">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Steerli</span> Works
          </h1>
          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            Getting started is simple. Whether you're learning to drive or teaching others, 
            we've made the process easy and straightforward.
          </p>
        </div>
      </section>

      {/* Toggle Between Student/Instructor Views (Dark Theme) */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto animate-slide-in-up">
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="#for-students" className="px-6 sm:px-8 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-semibold text-center text-sm sm:text-base shadow-lg shadow-purple-900/50">
              For Students
            </a>
            <a href="#for-instructors" className="px-6 sm:px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold text-center text-sm sm:text-base shadow-lg shadow-indigo-900/50">
              For Instructors
            </a>
          </div>
        </div>
      </section>

      {/* For Students Section (Dark Theme) */}
      <section id="for-students" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">For Students</h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Finding and booking your perfect driving instructor is quick and easy. 
              Here's how to get started on your journey to becoming a licensed driver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {studentSteps.map((step, index) => (
              <StepCard key={index} step={step} index={index} isStudent={true} />
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 animate-slide-in-up" style={{animationDelay: '0.6s'}}>
            <a href={`${APP_URL}/auth/sign-up`} className="inline-block bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-purple-700 transition-all text-base sm:text-lg font-semibold shadow-lg shadow-purple-900/50 transform hover:scale-105">
            Get Started as Student →
            </a>
          </div>
        </div>
      </section>

      {/* For Instructors Section (Dark Theme) */}
      <section id="for-instructors" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">For Instructors</h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Join our platform and grow your driving instruction business. 
              We handle the logistics so you can focus on teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {instructorSteps.map((step, index) => (
              <StepCard key={index} step={step} index={index} isStudent={false} />
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 animate-slide-in-up" style={{animationDelay: '0.6s'}}>
            <a href={`${APP_URL}/auth/sign-up`} className="inline-block bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-indigo-700 transition-all text-base sm:text-lg font-semibold shadow-lg shadow-indigo-900/50 transform hover:scale-105">
              Become an Instructor →
            </a>
          </div>
        </div>
      </section>

      {/* Features That Make It Easy (Dark Theme) */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">What Makes Steerli Different?</h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
              We've built features that make the entire experience seamless for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {featureCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-gray-900 rounded-2xl p-6 sm:p-8 text-center shadow-xl shadow-black/50 border border-gray-800 transition-all duration-300 hover-lift animate-slide-in-up"
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-purple-900/50 rounded-full">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-400">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer (Dark Theme) */}
      <footer className="bg-black/50 text-gray-300 py-8 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <img src="/images/steerly-logo.jpeg" alt="Steerli Logo" className="h-10 sm:h-15 w-auto" />
                <span className="text-xl sm:text-2xl font-bold text-white">Steerli</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Connecting students with professional driving instructors for a safer, smarter way to learn.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">For Students</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href={`${APP_URL}/auth/sign-up?type=student`} className="hover:text-purple-400 transition-colors">Sign Up</a></li>
                <li><a href="/how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a></li>
                <li><a href="/faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">For Instructors</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href={`${APP_URL}/auth/sign-up?type=instructor`} className="hover:text-purple-400 transition-colors">Become an Instructor</a></li>
                <li><a href="/how-it-works#for-instructors" className="hover:text-purple-400 transition-colors">Benefits</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="/about" className="hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; {new Date().getFullYear()} Steerli. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
