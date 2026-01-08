import React, { useState } from 'react';
import { Car, ChevronDown, ChevronUp } from 'lucide-react';

const APP_URL = 'https://driving-class-hg0kapb8q-yohannes-shimbahris-projects.vercel.app';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
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
      question: "How do I become an instructor on Steerly?",
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
      question: "How does Steerly help me grow my business?",
      answer: "We provide you with a professional profile, handle all marketing to attract students, manage bookings and payments, and give you tools to track your schedule and earnings. You focus on teaching, we handle the rest!"
    },
    {
      question: "What fees does Steerly charge?",
      answer: "Steerly takes a small service fee from each lesson (typically 15-20%). This covers payment processing, platform maintenance, marketing, and customer support. You keep the majority of what you earn."
    }
  ];

  const generalFAQs = [
    {
      question: "Is Steerly available in my area?",
      answer: "We're currently available in most major areas across the Canada and expanding rapidly. Enter your location during signup to see available instructors in your area."
    },
    {
      question: "How does Steerly ensure quality?",
      answer: "All instructors are verified and background-checked. Students can rate and review instructors after each lesson. We monitor feedback closely and work with instructors to maintain high standards."
    },
    {
      question: "What happens if there's an issue during a lesson?",
      answer: "Contact our support team immediately through the app. We're available during business hours to help resolve any issues. All lessons are covered by instructor insurance."
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
              <a href={`${APP_URL}/auth/signup`} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">Sign Up</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Steerly. Can't find what you're looking for? 
            <a href="/contact" className="text-indigo-600 hover:text-indigo-700 font-medium"> Contact us</a>.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* For Students */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">For Students</h2>
            <div className="space-y-4">
              {studentFAQs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          {/* For Instructors */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">For Instructors</h2>
            <div className="space-y-4">
              {instructorFAQs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          {/* General */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">General Questions</h2>
            <div className="space-y-4">
              {generalFAQs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Our support team is here to help! Reach out and we'll get back to you as soon as possible.
          </p>
          <a href="/contact" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-lg font-semibold shadow-lg">
            Contact Support
          </a>
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