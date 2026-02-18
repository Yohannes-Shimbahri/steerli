import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Users, 
  Calendar, 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Clock, 
  Menu, 
  X,
  ChevronRight,
  Play,
  Search,
  CreditCard,
  TrendingUp,
  Award,
  DollarSign,
  Shield
} from 'lucide-react';

const APP_URL = 'https://app.steerli.com';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('students');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Local Instructors",
      description: "Find certified driving instructors in your neighborhood with proven track records.",
      icon: MapPin,
      image: "/images/features/local_instructors.jpg",
      color: "purple"
    },
    {
      title: "Flexible Scheduling",
      description: "Book lessons that fit your busy life. Morning, evening, or weekend sessions available.",
      icon: Calendar,
      image: "/images/features/flexible_scheduling.jpg",
      color: "indigo"
    },
    {
      title: "Verified Reviews",
      description: "Read honest feedback from real students to choose the best instructor for your needs.",
      icon: Star,
      image: "/images/features/verified_reviews.jpg",
      color: "purple"
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. See lesson rates upfront and pay securely through our platform.",
      icon: ShieldCheck,
      image: "/images/features/transparent_pricing.jpg",
      color: "indigo"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning journey with digital logs and feedback from your instructor.",
      icon: Clock,
      image: "/images/features/progress_tracking.jpg",
      color: "purple"
    },
    {
      title: "Safe & Secure",
      description: "All instructors are background-checked and vehicles are fully insured for your peace of mind.",
      icon: ShieldCheck,
      image: "/images/features/safe_secure.jpg",
      color: "indigo"
    }
  ];

  const stats = [
    { label: "Active Students", value: "2,000+", icon: Users },
    { label: "Certified Instructors", value: "150+", icon: ShieldCheck },
    { label: "Lessons Completed", value: "15,000+", icon: CheckCircle },
    { label: "Average Rating", value: "4.9/5", icon: Star }
  ];

  const whyChooseContent = {
    students: [
      {
        title: "Find Your Perfect Match",
        desc: "Search instructors by location, price, and reviews to find the one that fits your learning style.",
        icon: Search,
        color: "purple"
      },
      {
        title: "Easy Online Booking",
        desc: "Schedule and manage your lessons anytime, anywhere with our simple booking system.",
        icon: Calendar,
        color: "indigo"
      },
      {
        title: "Secure Payments",
        desc: "Pay for lessons safely through our platform with multiple payment options.",
        icon: CreditCard,
        color: "purple"
      },
      {
        title: "Track Your Progress",
        desc: "Get digital feedback after every lesson and know exactly when you're ready for your test.",
        icon: TrendingUp,
        color: "indigo"
      }
    ],
    instructors: [
      {
        title: "Grow Your Business",
        desc: "Reach more students in your area and fill your schedule without any marketing effort.",
        icon: TrendingUp,
        color: "purple"
      },
      {
        title: "Manage with Ease",
        desc: "Use our powerful dashboard to manage bookings, students, and your calendar in one place.",
        icon: Award,
        color: "indigo"
      },
      {
        title: "Guaranteed Payments",
        desc: "Never worry about no-shows or late payments. Get paid automatically for every lesson.",
        icon: DollarSign,
        color: "purple"
      },
      {
        title: "Professional Profile",
        desc: "Showcase your expertise with a professional profile, verified reviews, and ratings.",
        icon: Star,
        color: "indigo"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Improved Sticky Header (Dark Theme) */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg py-2 sm:py-3 border-b border-purple-900' 
          : 'bg-transparent py-3 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src="/images/steerly-logo.jpeg" alt="Steerli Logo" className="h-10 sm:h-15 w-auto" />
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide text-white">Steerli</span>
            </a>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">About</a>
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
                <a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">About</a>
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

      {/* Hero Section (Dark Theme + New Animation) */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 animate-slide-in-up">
            Master the Road with 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
             Steerli
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            The professional platform connecting you with certified, top-rated driving instructors for a secure and efficient learning experience.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 animate-slide-in-up" style={{animationDelay: '0.4s'}}>
            <a 
              href={`${APP_URL}/auth/sign-up/student`} 
              className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition-all text-lg font-bold shadow-2xl shadow-purple-900/50 transform hover:scale-105"
            >
              Start Learning Today
            </a>
            <a 
              href={`${APP_URL}/auth/sign-up/instructor`} 
              className="bg-gray-800 text-gray-300 border border-gray-700 px-8 py-4 rounded-xl hover:bg-gray-700 transition-all text-lg font-bold shadow-lg transform hover:scale-105"
            >
              Become an Instructor
            </a>
          </div>
        </div>
      </section>
      {/* Why Choose Steerli Section (RESTORED WITH TABS - Dark Theme) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose Steerli?</h2>
            <div className="inline-flex p-1 bg-gray-900 rounded-xl border border-gray-700">
              <button 
                onClick={() => setActiveTab('students')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'students' ? 'bg-gray-800 text-purple-400 shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                For Students
              </button>
              <button 
                onClick={() => setActiveTab('instructors')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'instructors' ? 'bg-gray-800 text-purple-400 shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                For Instructors
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-900/50 rounded-full opacity-50"></div>
                <img 
                  src={activeTab === 'students' ? "/images/features/student_teaching.jpg" : "/images/features/local_instructors.jpg"} 
                  alt={activeTab === 'students' ? "Student learning" : "Instructor teaching"} 
                  className="relative rounded-3xl shadow-2xl shadow-black/70 w-full h-auto object-cover z-10"
                />
                <div className="absolute -bottom-6 -right-6 bg-gray-900 p-6 rounded-2xl shadow-xl shadow-black/70 z-20 hidden sm:block border border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-700 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i + (activeTab === 'students' ? 10 : 20)}`} alt="User" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">
                        {activeTab === 'students' ? 'Join steerli students' : 'Join steerli instructors'}
                      </p>
                      <div className="flex text-yellow-400">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="space-y-6 sm:space-y-8">
                {whyChooseContent[activeTab].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start space-x-4 group animate-slide-in-up" style={{animationDelay: `${0.1 * idx + 0.4}s`}}>
                      <div className={`bg-${item.color}-900/50 p-3 rounded-xl group-hover:scale-110 transition-transform border border-${item.color}-800`}>
                        <Icon className={`w-6 h-6 text-${item.color}-400`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 animate-slide-in-up" style={{animationDelay: '0.8s'}}>
                <a href={`${APP_URL}/auth/sign-up${activeTab === 'instructors' ? '?type=instructor' : ''}`} className="inline-flex items-center space-x-2 text-purple-400 font-bold hover:text-purple-300 transition-colors group">
                  <span>Get started as {activeTab === 'students' ? 'a student' : 'an instructor'}</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Dark Theme + New Animation) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4 animate-slide-in-up">Everything You Need to Succeed</h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto text-center mb-12 sm:mb-20 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            We've built the most comprehensive platform to make your driving journey smooth and stress-free.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/70 transition-all duration-300 group border border-gray-800 hover-lift animate-slide-in-up" style={{animationDelay: `${0.1 * idx + 0.4}s`}}>
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className={`inline-flex p-2 sm:p-3 rounded-xl bg-${feature.color}-900/50 mb-4 sm:mb-6 border border-${feature.color}-800`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${feature.color}-400`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section (Dark Theme) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl shadow-black/70 border border-gray-800 animate-slide-in-up">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">Ready to Start Your Journey?</h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
                Join students who have already found their perfect instructor through Steerli.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href={`${APP_URL}/auth/sign-up/student`} className="w-full sm:w-auto bg-purple-600 text-white px-8 sm:px-10 py-4 rounded-xl hover:bg-purple-700 transition-all font-bold text-lg shadow-2xl shadow-purple-900/50 transform hover:scale-105">
                  Sign Up as Student
                </a>
                <a href={`${APP_URL}/auth/sign-up/instructor`} className="w-full sm:w-auto bg-indigo-600 text-white px-8 sm:px-10 py-4 rounded-xl hover:bg-indigo-700 transition-all font-bold text-lg shadow-2xl shadow-indigo-900/50 transform hover:scale-105">
                  Become an Instructor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Dark Theme) */}
      <footer className="bg-black/50 text-gray-300 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img src="/images/steerly-logo.jpeg" alt="Steerli Logo" className="h-10 sm:h-15 w-auto" />
                <span className="text-xl sm:text-2xl font-bold text-white">Steerli</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Connecting students with professional driving instructors for a safer, smarter way to learn.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">For Students</h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li><a href={`${APP_URL}/auth/sign-up/student`} className="hover:text-purple-400 transition-colors flex items-center group"><ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /><span>Sign Up</span></a></li>
                <li><a href="/how-it-works" className="hover:text-purple-400 transition-colors flex items-center group"><ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /><span>How It Works</span></a></li>
                <li><a href="/faq" className="hover:text-purple-400 transition-colors flex items-center group"><ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /><span>FAQ</span></a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">For Instructors</h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li><a href={`${APP_URL}/auth/sign-up/instructor`} className="hover:text-purple-400 transition-colors flex items-center group"><ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /><span>Become an Instructor</span></a></li>
                <li><a href="/how-it-works#for-instructors" className="hover:text-purple-400 transition-colors flex items-center group"><ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /><span>Benefits</span></a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">Company</h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li><a href="/about" className="hover:text-purple-400 transition-colors flex items-center group"><ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /><span>About Us</span></a></li>
                <li><a href="/contact" className="hover:text-purple-400 transition-colors flex items-center group"><ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /><span>Contact</span></a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 sm:pt-10 text-center text-gray-500 text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} Steerli. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
