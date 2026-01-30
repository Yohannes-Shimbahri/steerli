import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Shield, Users, Zap, CheckCircle, Car, Star, Target, TrendingUp } from 'lucide-react';

const APP_URL = 'https://app.steerli.com';

const teamMembers = [
  {
    name: "Yohannes Shimbahri",
    role: "Founder & CEO",
    bio: "A passionate advocate for safe driving and technology, Yohannes founded Steerli to bridge the gap between students and qualified instructors.",
    image: "/images/team/yohannes.jpg" // Placeholder for local image
  },
  {
    name: "Aisha Khan",
    role: "Lead Instructor & Safety Officer",
    bio: "With over 15 years of experience, Aisha ensures all our instructors meet the highest standards of safety and teaching excellence.",
    image: "/images/team/aisha.jpg" // Placeholder for local image
  },
  {
    name: "David Chen",
    role: "Head of Technology",
    bio: "David leads the development of our seamless booking and tracking platform, ensuring a smooth experience for all users.",
    image: "/images/team/david.jpg" // Placeholder for local image
  },
];

const coreValues = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize the safety of our students and instructors above all else, with rigorous verification and background checks."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "We foster a supportive community where students and instructors can connect, share knowledge, and grow together."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We constantly seek new ways to simplify the learning process through technology, from booking to progress tracking."
  },
];

export default function AboutPage() {
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
              <a href="/about" className="text-purple-400 font-medium">About</a>
              <a href="/how-it-works" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">How It Works</a>
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
                <a href="/about" className="text-purple-400 font-medium">About</a>
                <a href="/how-it-works" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">How It Works</a>
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
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 animate-slide-in-up">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Steerli</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            We're on a mission to make quality driving education accessible, 
            affordable, and effective for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section (Dark Theme + Animations) */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-slide-in-up">
              <Target className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400 mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-400 mb-3 sm:mb-4">
                Learning to drive is one of life's most important milestones. At Steerli, 
                we believe everyone deserves access to quality instruction from verified, 
                professional driving instructors.
              </p>
              <p className="text-base sm:text-lg text-gray-400">
                We're building a platform that connects students with the perfect instructor 
                for their learning style, schedule, and budget while providing instructors 
                with the tools they need to grow their business.
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <img 
                src="/images/features/about-us.png" // Updated to local path
                alt="About Steerli"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section (Dark Theme + Animations) */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-3 sm:mb-4 animate-slide-in-up">Our Values</h2>
          <p className="text-center text-sm sm:text-base text-gray-400 mb-8 sm:mb-16 max-w-2xl mx-auto animate-slide-in-up" style={{animationDelay: '0.1s'}}>
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
                <div key={idx} className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-xl shadow-black/50 border border-gray-800 transition-all duration-300 hover-lift animate-slide-in-up" style={{animationDelay: `${0.2 + idx * 0.1}s`}}>
                  <Icon className={`w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mb-3 sm:mb-4`} />
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section (Dark Theme + Animations) */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center animate-slide-in-up">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-400 space-y-3 sm:space-y-4 text-sm sm:text-base animate-slide-in-up" style={{animationDelay: '0.2s'}}>
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

      {/* CTA Section (Dark Theme) */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Join the Steerli Community</h2>
          <p className="text-base sm:text-xl text-gray-400 mb-6 sm:mb-8">
            Whether you're learning to drive or teaching others, we'd love to have you with us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href={`${APP_URL}/auth/sign-up?type=student`} className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-purple-700 transition-all text-base sm:text-lg font-semibold shadow-lg shadow-purple-900/50 transform hover:scale-105">
              Sign Up as Student
            </a>
            <a href={`${APP_URL}/auth/sign-up?type=instructor`} className="bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-indigo-700 transition-all text-base sm:text-lg font-semibold shadow-lg shadow-indigo-900/50 transform hover:scale-105">
              Become an Instructor
            </a>
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
                <li><a href="/about" className="text-purple-400 transition-colors">About Us</a></li>
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
