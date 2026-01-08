import React from 'react';
import { Car, UserPlus, Search, Calendar, CreditCard, MapPin, BookOpen, Trophy, MessageCircle, Star, CheckCircle, ArrowRight } from 'lucide-react';

const APP_URL = 'https://driving-class-hg0kapb8q-yohannes-shimbahris-projects.vercel.app';

export default function HowItWorksPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src="/images/steerly-logo.jpeg" alt="Steerly Logo" className="h-15 w-auto" />
              <span className="text-2xl font-bold text-gray-900">Steerly</span>
            </a>
            
            <nav className="flex items-center space-x-6">
              <a href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">About</a>
              <a href={`${APP_URL}/auth/login`} className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Login</a>
              <a href={`${APP_URL}/auth/sign-up`} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">Sign Up</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Steerly</span> Works
          </h1>
          <p className="text-xl text-gray-600">
            Getting started is simple. Whether you're learning to drive or teaching others, 
            we've made the process easy and straightforward.
          </p>
        </div>
      </section>

      {/* Toggle Between Student/Instructor Views */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4">
            <a href="#for-students" className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
              For Students
            </a>
            <a href="#for-instructors" className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              For Instructors
            </a>
          </div>
        </div>
      </section>

      {/* For Students Section */}
      <section id="for-students" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">For Students</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Finding and booking your perfect driving instructor is quick and easy. 
              Here's how to get started on your journey to becoming a licensed driver.
            </p>
          </div>

          <div className="space-y-16">
            {studentSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-3xl font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-indigo-100 rounded-lg">
                          <Icon className="w-8 h-8 text-indigo-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 text-lg mb-6">{step.description}</p>
                      
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {index < studentSteps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <a href={`${APP_URL}/auth/sign-up`} className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all text-lg font-semibold shadow-lg">
              Get Started as Student →
            </a>
          </div>
        </div>
      </section>

      {/* For Instructors Section */}
      <section id="for-instructors" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">For Instructors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our platform and grow your driving instruction business. 
              We handle the logistics so you can focus on teaching.
            </p>
          </div>

          <div className="space-y-16">
            {instructorSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-3xl font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-purple-100 rounded-lg">
                          <Icon className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 text-lg mb-6">{step.description}</p>
                      
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {index < instructorSteps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <a href={`${APP_URL}/auth/sign-up`} className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all text-lg font-semibold shadow-lg">
              Become an Instructor →
            </a>
          </div>
        </div>
      </section>

      {/* Features That Make It Easy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Steerly Different?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built features that make the entire experience seamless for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <MessageCircle className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">In-App Messaging</h3>
              <p className="text-gray-600">
                Communicate directly with instructors or students through our secure messaging system.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Calendar className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                See real-time availability and book lessons that fit your schedule perfectly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Star className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reviews & Ratings</h3>
              <p className="text-gray-600">
                Make informed decisions with authentic reviews from real students.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <MapPin className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Pickup</h3>
              <p className="text-gray-600">
                Choose your preferred pickup location - home, work, or anywhere convenient.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Trophy className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor your learning journey with detailed progress reports and milestones.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <CreditCard className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                All payments processed securely with buyer and seller protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of students and instructors who trust Steerly for their driving education needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`${APP_URL}/auth/sign-up`} className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-lg font-semibold shadow-lg">
              Sign Up as Student
            </a>
            <a href={`${APP_URL}/auth/sign-up`} className="bg-purple-700 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition-colors text-lg font-semibold shadow-lg border-2 border-white">
              Become an Instructor
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/images/steerly-logo.jpeg" alt="Steerly Logo" className="h-15 w-auto" />
                <span className="text-2xl font-bold text-white">Steerly</span>
              </div>
              <p className="text-gray-400">
                Connecting students with professional driving instructors for a safer, smarter way to learn.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">For Students</h3>
              <ul className="space-y-2">
                <li><a href={`${APP_URL}/auth/signup?type=student`} className="hover:text-indigo-400 transition-colors">Sign Up</a></li>
                <li><a href="/how-it-works" className="hover:text-indigo-400 transition-colors">How It Works</a></li>
                <li><a href="/faq" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">For Instructors</h3>
              <ul className="space-y-2">
                <li><a href={`${APP_URL}/auth/signup?type=instructor`} className="hover:text-indigo-400 transition-colors">Become an Instructor</a></li>
                <li><a href="/instructor-benefits" className="hover:text-indigo-400 transition-colors">Benefits</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Steerly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}