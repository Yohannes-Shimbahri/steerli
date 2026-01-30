import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const APP_URL = 'https://app.steerli.com';

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setSubmitError(null);
      try {
        // This endpoint needs to be created (e.g., a Vercel Edge Function or a dedicated backend)
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to send message. Please try again.');
        }

        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        setTimeout(() => setSubmitted(false), 5000);
      } catch (error) {
        setSubmitError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

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
              <a href="/faq" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">FAQ</a>
              <a href="/contact" className="text-purple-400 transition-colors font-medium">Contact</a>
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
                <a href="/how-it-works" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">How It Works</a>
                <a href="/faq" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">FAQ</a>
                <a href="/contact" className="text-purple-400 transition-colors font-medium">Contact</a>
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
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Touch</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content (Dark Theme + Animations) */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 animate-slide-in-up">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h2>
                <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: Mail, color: "purple", title: "Email", value: "steerli.app@gmail.com" },
                  { icon: Phone, color: "purple", title: "Phone", value: "+1 (647) 531-8028" },
                  { icon: MapPin, color: "purple", title: "Office", value: "150 Ellendale Dr ON M1P 1P1" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start space-x-3 sm:space-x-4 group">
                      <div className={`bg-gray-800 p-2 sm:p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-purple-400`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">{item.title}</h3>
                        <p className="text-gray-400 whitespace-pre-line text-sm sm:text-base">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-800">
                <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Support Hours</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                  Saturday: 10:00 AM - 4:00 PM PST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/70 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send us a Message</h2>
                
                {submitted && (
                  <div className="mb-6 bg-green-900/50 border border-green-700 text-green-300 px-4 py-3 rounded-lg flex items-center space-x-2 animate-fadeIn text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg flex items-center space-x-2 animate-fadeIn text-sm sm:text-base">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Error: {submitError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors text-white placeholder-gray-500`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors text-white placeholder-gray-500`}
                        placeholder="john@example.com"
                      />
                      {errors.email &&(
                        <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800 border ${errors.subject ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors text-white placeholder-gray-500`}
                  placeholder="How can we help you?"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors text-white placeholder-gray-500 resize-none`}
                  placeholder="Tell us more about your question or concern..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all text-base sm:text-lg font-semibold shadow-lg shadow-purple-900/50 flex items-center justify-center space-x-2 transform ${
                  loading 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:bg-purple-700 hover:scale-[1.01]'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ Quick Links (Dark Theme) */}
  <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
    <div className="max-w-7xl mx-auto text-center animate-slide-in-up">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Looking for Quick Answers?</h2>
      <p className="text-base sm:text-xl text-gray-400 mb-6 sm:mb-8">
        Check out our comprehensive FAQ section for immediate help.
      </p>
      <a href="/faq" className="inline-block bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-indigo-700 transition-all text-base sm:text-lg font-semibold shadow-lg transform hover:scale-105">
        Go to FAQ
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
