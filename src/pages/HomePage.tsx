import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Heart, ChevronDown, ArrowRight, User, ArrowUp, Menu, X } from 'lucide-react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Divya_Baskar_Logo from '../img/Divya_Baskar_Logo.png';
import InstagramLogo from "../img/instagram.png";
import YouTubeLogo from "../img/ytlogo.png";
import FoundationLogo from "../img/WL.png";

// Lazy load heavy components
const GalleryPreview = lazy(() => import('../components/sections/GalleryPreview'));

// Import slider images with dynamic imports
const sliderImage1 = new URL('../img/1.jpg', import.meta.url).href;
const sliderImage2 = new URL('../img/2.jpg', import.meta.url).href;
const sliderImage3 = new URL('../img/3.jpg', import.meta.url).href;

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Simulate data loading for initiatives
  useEffect(() => {
    const timer = setTimeout(() => {
      // setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Slider images configuration object
  const sliderImages = [
    {
      src: sliderImage1,
      alt: "Slide 1 - Animal Welfare",
    },
    {
      src: sliderImage2,
      alt: "Slide 2 - Environmental Conservation",
    },
    {
      src: sliderImage3,
      alt: "Slide 3 - Community Development",
    },
  ];

  const initiatives = [
    {
      title: "Animal Welfare",
      description: "Rescuing and caring for stray animals, providing medical treatment and shelter.",
      icon: <Heart className="w-8 h-8 text-primary-500" />,
    },
    {
      title: "Environmental Conservation",
      description: "Planting trees, cleaning water bodies, and promoting sustainable practices.",
      icon: <ArrowUp className="w-8 h-8 text-primary-500" />,
    },
    {
      title: "Community Development",
      description: "Supporting education, healthcare, and livelihood programs for underprivileged communities.",
      icon: <User className="w-8 h-8 text-primary-500" />,
    },
    {
      title: "Sustainable Farming",
      description: "Promoting organic farming and sustainable agricultural practices.",
      icon: <ArrowRight className="w-8 h-8 text-primary-500" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide effect for hero background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // socialMedia section

  type SocialMedia = {
    platform: "Instagram" | "YouTube";
    icon: string;
    username: string;
    followers?: string;
    subscribers?: string;
    description: string;
    link: string;
  };

  const socialMediaData: SocialMedia[] = [
    {
      platform: "Instagram",
      icon: InstagramLogo,
      username: "@sarvjivhitayfoundation",
      followers: "85+ followers",
      description:
        "Follow us for beautiful moments from our animal rescues, environmental initiatives, and community events.",
      link: "https://www.instagram.com/sarvjivhitayfoundation?igsh=MWJjY3l4a3l3a2Vleg==",
    },
    {
      platform: "YouTube",
      icon: YouTubeLogo,
      username: "Sarv Jiv Hitay Foundation",
      subscribers: "160 + subscribers",
      description:
        "Watch our impactful documentaries, rescue stories, and educational content about conservation.",
      link: "https://www.youtube.com/@sarvjivhitayfoundation?sub_confirmation=1",
    },
  ];
  const [popup, setPopup] = useState<SocialMedia | null>(null);

  const closePopup = () => setPopup(null);

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header with animated navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow" id='main-content'>
        {/* Hero Section with Slider Animation */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-blue-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 opacity-80 z-10"></div>

            {/* Slider implementation */}
            <div className="absolute inset-0">
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {!loadedImages.has(index) && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  )}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover ${
                      loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(index)}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    width="1920"
                    height="1080"
                  />
                </div>
              ))}
            </div>

            {/* Animated particles */}
            <div className="absolute inset-0 flex z-10">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse"
                  style={{
                    position: 'absolute',
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)'
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="block">🌿 Compassion Is the True Strength 🌿</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              True strength lies in compassion—lifting others, serving selflessly, and honoring the value of every life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Get Involved
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:bg-white hover:text-blue-900 focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Initiatives Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {initiatives.map((initiative, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-4">{initiative.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Impact Statistics Section */}
        <section className="py-32 bg-blue-900 text-white relative overflow-hidden">
          {/* Animated background gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute w-full h-full bg-blue-900 opacity-50"></div>
            <div className="absolute w-3/4 h-3/4 bg-blue-700 rounded-full blur-3xl -top-1/4 -right-1/4 animate-pulse"></div>
            <div className="absolute w-2/4 h-2/4 bg-blue-600 rounded-full blur-3xl -bottom-1/4 -left-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white bg-opacity-20"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 8 + 6}s infinite ease-in-out`,
                }}
              ></div>
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10 mb-32">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-lg blur-md transform -rotate-3"></div>
                  <h2 className="relative text-3xl md:text-5xl font-bold px-8 py-2 bg-blue-800 rounded-lg border-2 border-blue-400 shadow-lg">Our Impact</h2>
                </div>
              </div>
              <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mt-6">
                Through the support of our donors and volunteers, we've achieved significant milestones in our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "10,000+", label: "People Welfare", icon: "🥼" },
                { number: "50,000+", label: "Food Distribution for the Needy", icon: "🥗" },
                { number: "100+", label: "Animal Welfare", icon: "🐾" },
                { number: "5,000+", label: "Environmental Conservation", icon: "🌱" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Card background with glow effect */}
                  <div className="absolute inset-0 bg-blue-600 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

                  {/* Card content */}
                  <div
                    className="relative text-center p-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl border border-blue-400 border-opacity-30 transform transition-all duration-500 hover:scale-105 hover:bg-opacity-20 hover:shadow-xl"
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-2xl shadow-lg animate-pulse">
                      {stat.icon}
                    </div>
                    <div className="mt-4">
                      <div className="font-bold text-4xl md:text-5xl mb-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-200">
                        {stat.number}
                      </div>
                      <div className="text-blue-200 text-lg font-medium">{stat.label}</div>
                    </div>

                    {/* Radial progress indicator */}
                    <svg className="absolute bottom-0 left-0 right-0 w-full h-1" viewBox="0 0 100 1">
                      <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      <line x1="0" y1="0.5" x2={`${(index + 1) * 25}`} y2="0.5" stroke="rgba(255,255,255,0.8)" strokeWidth="1" className="animate-dashExpand" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="text-center mt-16">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:bg-blue-100 transform hover:scale-105 shadow-lg hover:shadow-xl">
                See Our Impact Report
              </button>
            </div>
          </div>

          {/* Wave animation at bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#fff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,96C672,96,768,128,864,128C960,128,1056,96,1152,80C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section className="bg-white GalleryPreview">
          <Suspense fallback={<div>Loading...</div>}>
            <GalleryPreview />
          </Suspense>
        </section>

        {/* Rest of the sections remain the same */}
        {/* Divya Bhaskar Media Recognition Section */}
        <section className="py-20 bg-blue-50 overflow-hidden relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full opacity-20 -ml-48 -mb-48"></div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Media Recognition</h2>
              <p className="text-lg text-blue-700 max-w-3xl mx-auto">
                Our efforts to create positive impact have been recognized by leading media organizations.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row">
                  {/* Logo and visual side */}
                  <div className="w-full md:w-2/5 bg-gradient-to-br from-blue-800 to-blue-900 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-6 w-48 h-48 mx-auto relative">
                        <a href='https://www.divyabhaskar.co.in/local/gujarat/ahmedabad/news/awareness-program-of-sarva-jiv-hitay-foundation-trust-134320812.html'><img src={Divya_Baskar_Logo} alt="Logo" className="w-full h-full object-cover" /></a>
                      </div>
                      <p className="text-blue-200 font-medium italic">Gujarat's Leading Newspaper</p>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="w-full md:w-3/5 p-6 md:p-12">
                    <div className="h-full flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Featured Article</span>
                      </div>
                      <h3 className="font-bold text-blue-900 mb-4 DVHeading">
                        <p className="text-red-500">સર્વ જીવ હિતાય ફાઉન્ડેશન ટ્રસ્ટનો જાગૃતિ કાર્યક્રમ:</p>મણીનગર ITIમાં 250 વિદ્યાર્થીઓને PPT અને શોર્ટ ફિલ્મ દ્વારા વ્યસન-મુક્તિ અંગે જાગૃત કરાયા
                      </h3>
                      <p className="text-blue-700 mb-6">
                        અમદાવાદના વસ્ત્રાલ ખાતે આવેલા સર્વ જીવ હિતાય ફાઉન્ડેશન ટ્રસ્ટ દ્વારા તારીખ 10 જાન્યુઆરી 2025ને શુક્રવારના રોજ મણીનગર શાખા અંતર્ગતની ઈન્ડસ્ટ્રીયલ ઈન્સ્ટીટ્યુટ ઓફ ટ્રેઈનિંગ કોલેજ, વસ્ત્રાલમાં વ્યસન-મુક્તિ અંગેનો જાગૃતિ કાર્યક્રમ યોજાયો હતો. જેમાં પ્રેક
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center">
                          <span className="text-sm text-blue-600 mr-1">Published on:</span>
                          <span className="text-sm font-medium text-blue-800">January 30, 2025</span>
                        </div>
                        <div className="flex-grow"></div>
                        <a
                          href="https://www.divyabhaskar.co.in/local/gujarat/ahmedabad/news/awareness-program-of-sarva-jiv-hitay-foundation-trust-134320812.html"
                          className="inline-flex items-center text-blue-600 font-medium transition-all hover:text-blue-800 group"
                        >
                          Read Full Article
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-all group-hover:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="relative">
      {/* Social Media Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialMediaData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-100">
              <img
                src={item.icon}
                alt={`${item.platform} logo`}
                className="w-8 h-8"
              />
            </div>
            <h4 className="text-blue-900 font-bold mb-1">{item.platform}</h4>
            <p className="text-blue-600 font-medium text-sm mb-2">
              {item.username}
            </p>
            <p className="text-blue-700 text-sm mb-2">
              {item.followers || item.subscribers}
            </p>
            <p className="text-blue-700 mb-2">{item.description}</p>
            <button
              onClick={() => setPopup(item)}
              className="inline-flex items-center text-blue-600 font-medium transition-all hover:text-blue-800 group"
            >
              {item.platform === "YouTube" ? "Subscribe" : "Follow"}
              <ArrowRight className="w-4 h-4 ml-1 transition-all group-hover:ml-2" />
            </button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {popup && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md min-h-[480px] relative shadow-xl animate-fadeIn flex flex-col items-center text-center">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Foundation Logo */}
            <div className="mb-4">
              <img
                src={FoundationLogo}
                alt="Foundation Logo"
                className="w-32 h-32 object-contain mx-auto"
              />
            </div>

            {/* Platform Icon */}
            <div className="mb-3">
              <img
                src={popup.icon}
                alt={`${popup.platform} logo`}
                className="w-10 h-10 mx-auto"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
              {popup.platform === "YouTube"
                ? "Subscribe to our channel"
                : "Follow us on Instagram"}
            </h3>

            <p className="text-blue-700 mb-6 px-2">{popup.description}</p>

            <a
              href={popup.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all"
            >
              {popup.platform === "YouTube" ? "Go to YouTube" : "Open Instagram"}
            </a>
          </div>
        </div>
      )}
    </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-40 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
            <img
              src="https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg"
              alt="Join us background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
                Together, we can make a lasting impact. Whether through volunteering, donating, or simply spreading awareness, every contribution matters.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Volunteer With Us
                </button>
                <button className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-blue-100 focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  Make a Donation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
      {/* Scroll to top button */}
      <button
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 ${showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes dashExpand {
          0% { stroke-dasharray: 0 100; }
          100% { stroke-dasharray: 100 0; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;