import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, MapPin, ShieldCheck, Users, Star, ChevronRight, ChevronUp } from 'lucide-react';

const APP_URL = 'https://app.steerli.com';

function FAQItem({ question, answer, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  const delay = 0.1 * index + 0.2;

  return (
    <div 
      className="border border-gray-800 rounded-xl overflow-hidden shadow-lg shadow-black/50 mb-4 animate-slide-in-up" 
      style={{animationDelay: `${delay}s`}}
    >
      <button
        className="flex justify-between items-center w-full p-5 sm:p-6 text-left bg-gray-900 hover:bg-gray-800 transition-colors"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <span className="text-base sm:text-lg font-semibold text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300" />
        ) : (
          <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300" />
        )}
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ maxHeight: isOpen ? '1000px' : '0' }} // Fallback for max-h-screen
      >
        <div className="p-5 sm:p-6 bg-gray-950 text-gray-400 text-sm sm:text-base border-t border-gray-800">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const studentFAQs = [
    {
      question: "How do I sign up as a student?",
      answer: "Click the 'Sign Up as Student' button on the homepage. You'll need to provide your basic information, location, and learning preferences. The entire process takes less than 5 minutes!"
    },
    {
      question: "How do I find the right instructor for me?",
      answer: "Once you're signed in, you can browse instructors by location, price, availability, and reviews. Use our filters to narrow down instructors who match your specific preferences, like automatic vs manual transmission, teaching style, and language."
    },
    {
      question: "What are the payment options?",
      answer: "We accept all major credit cards, debit cards, and digital wallets. All payments are processed securely through our platform. You can pay per lesson or purchase lesson packages for better rates."
    },
    {
      question: "Can I cancel or reschedule a lesson?",
      answer: "Yes! You can cancel or reschedule lessons up to 24 hours in advance without any penalty. Check your instructor's specific cancellation policy for details."
    },
    {
      question: "What if I'm not satisfied with my instructor?",
      answer: "You can switch instructors at any time! We want you to find the perfect match. Simply browse for a new instructor and book your next lesson with them."
    },
    {
      question: "Do instructors provide the car for lessons?",
      answer: "Most instructors provide a dual-control vehicle for lessons. This information is clearly displayed on each instructor's profile. Some instructors also offer lessons in your own vehicle."
    },
    {
      question: "How long does it take to get my license?",
      answer: "It varies by individual, but most students complete their training in 6-12 weeks with consistent practice. Your instructor will help create a personalized learning plan based on your goals and schedule."
    },
    {
      question: "Are instructors background-checked?",
      answer: "Absolutely! All instructors go through a thorough background check, license verification, and insurance verification before joining our platform. Your safety is our priority."
    }
  ];

  const instructorFAQs = [
    {
      question: "How do I become an instructor on Steerli?",
      answer: "Click 'Sign Up as Instructor' and complete the application. You'll need a valid driving instructor license, insurance, and to pass our background check. The approval process typically takes 3-5 business days."
    },
    {
      question: "What are the requirements to join?",
      answer: "You must have: a valid driving instructor license, appropriate insurance coverage, a clean driving record, a dual-control vehicle (or willingness to use student's car), and pass our background check."
    },
    {
      question: "How much can I earn?",
      answer: "Instructors typically earn $45-60 per hour. You set your own rates! Many full-time instructors on our platform earn $50,000-$80,000 annually, while part-time instructors earn extra income on their own schedule."
    },
    {
      question: "How do I get paid?",
      answer: "Payments are processed automatically after each completed lesson. Funds are transferred to your bank account weekly via direct deposit. You can track all your earnings in your instructor dashboard."
    },
    {
      question: "Can I set my own schedule?",
      answer: "Yes! You have complete control over your availability. Set your working hours, block off time when you're unavailable, and accept or decline lesson requests as you see fit."
    },
    {
      question: "What if a student cancels?",
      answer: "If a student cancels less than 24 hours before the lesson, you'll receive a cancellation fee. If they cancel with proper notice, the time slot opens up for other students to book."
    },
    {
      question: "How does Steerli help me grow my business?",
      answer: "We provide you with a professional profile, handle all marketing to attract students, manage bookings and payments, and give you tools to track your schedule and earnings. You focus on teaching, we handle the rest!"
    },
    {
      question: "What fees does Steerli charge?",
      answer: "Steerli takes a small service fee from each lesson (typically 15-20%). This covers payment processing, platform maintenance, marketing, and customer support. You keep the majority of what you earn."
    }
  ];

  const generalFAQs = [
    {
      question: "Is Steerli available in my area?",
      answer: "We're currently available in most major areas across the Canada and expanding rapidly. Enter your location during signup to see available instructors in your area."
    },
    {
      question: "How does Steerli ensure quality?",
      answer: "All instructors are verified and background-checked. Students can rate and review instructors after each lesson. We monitor feedback closely and work with instructors to maintain high standards."
    },
    {
      question: "What happens if there's an issue during a lesson?",
      answer: "Contact our support team immediately through the app. We're available during business hours to help resolve any issues. All lessons are covered by instructor insurance."
    }
  ];

  // Combine all FAQs for easy mapping
  const allFAQs = [
    ...studentFAQs,
    ...instructorFAQs,
    ...generalFAQs
  ];

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
              <a href="/how-it-works" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">How It Works</a>
              <a href="/faq" className="text-purple-400 font-medium">FAQ</a>
              <a href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Contact</a>
              <a href={`${APP_URL}/auth/login`} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Login</a>
              <a href={`${APP_URL}/auth/sign-up`} className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all font-medium transform hover:scale-105">Sign Up</a>
            </nav>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-300 hover:text-purple-400">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700 bg-black/90 animate-fadeIn">
              <div className="flex flex-col space-y-4">
                <a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">About</a>
                <a href="/how-it-works" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">How It Works</a>
                <a href="/faq" className="text-purple-400 font-medium">FAQ</a>
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
            Frequently Asked 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
             Questions
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            Find quick answers to the most common questions about using the Steerli platform. Can't find what you're looking for? 
            <a href="/contact" className="text-purple-400 hover:text-purple-300 font-medium transition-colors"> Contact us</a>.
          </p>
        </div>
      </section>

      {/* FAQ Content Section (Dark Theme + Animations) */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          {/* For Students */}
          <div className="animate-slide-in-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">For Students</h2>
            <div className="space-y-3 sm:space-y-4">
              {studentFAQs.map((faq, index) => (
                <FAQItem 
                  key={`student-${index}`} 
                  question={faq.question} 
                  answer={faq.answer} 
                  index={`student-${index}`}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>
          </div>

          {/* For Instructors */}
          <div className="animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">For Instructors</h2>
            <div className="space-y-3 sm:space-y-4">
              {instructorFAQs.map((faq, index) => (
                <FAQItem 
                  key={`instructor-${index}`} 
                  question={faq.question} 
                  answer={faq.answer} 
                  index={`instructor-${index}`}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>
          </div>

          {/* General */}
          <div className="animate-slide-in-up" style={{animationDelay: '0.4s'}}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">General Questions</h2>
            <div className="space-y-3 sm:space-y-4">
              {generalFAQs.map((faq, index) => (
                <FAQItem 
                  key={`general-${index}`} 
                  question={faq.question} 
                  answer={faq.answer} 
                  index={`general-${index}`}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA (Dark Theme) */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-4xl mx-auto text-center text-white animate-slide-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Still Have Questions?</h2>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Our support team is here to help! Reach out and we'll get back to you as soon as possible.
          </p>
          <a href="/contact" className="inline-block bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-purple-700 transition-all text-base sm:text-lg font-semibold shadow-lg transform hover:scale-105">
            Contact Support
          </a>
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
                <li><a href={`${APP_URL}/auth/sign-up/student`} className="hover:text-purple-400 transition-colors">Sign Up</a></li>
                <li><a href="/how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a></li>
                <li><a href="/faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">For Instructors</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href={`${APP_URL}/auth/sign-up/instructor`} className="hover:text-purple-400 transition-colors">Become an Instructor</a></li>
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
