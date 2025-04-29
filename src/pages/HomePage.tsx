import React, { useState, useEffect } from 'react';
import { Heart, ChevronDown, ArrowRight, User, ArrowUp, Menu, X } from 'lucide-react';
import GalleryPreview from '../components/sections/GalleryPreview';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

// Import slider images - ADD NEW IMAGES HERE
import sliderImage1 from '../img/1.jpg';
import sliderImage2 from '../img/2.jpg';
import sliderImage3 from '../img/3.jpg';
// Example: import sliderImage4 from '../img/4.jpg';

// Layout Component
const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    // Example: Add new slides here
    // {
    //   src: sliderImage4,
    //   alt: "Slide 4 - Sustainable Farming",
    // },
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header with animated navigation */}
      <Header/>

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
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Slider controls */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 mx-1 rounded-full transition-all ${
                    currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
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
                <span className="block">For the Welfare of</span>
                <span className="block text-blue-300">All Living Beings</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Promoting compassion, conservation, and community development through sustainable practices and education.
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

        {/* Initiatives Section with Animation */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Initiatives</h2>
              <p className="text-lg text-blue-700 max-w-3xl mx-auto">
                Discover the various ways we're making a positive impact across different areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Animal Welfare",
                  icon: "🐾",
                  description: "Rescuing and providing care for animals in need through our shelters and medical camps."
                },
                {
                  title: "Environmental Conservation",
                  icon: "🌳",
                  description: "Protecting and restoring natural habitats through tree planting and cleanup drives."
                },
                {
                  title: "Community Development",
                  icon: "👥",
                  description: "Empowering local communities through education, healthcare, and livelihood programs."
                },
                {
                  title: "Sustainable Farming",
                  icon: "🌱",
                  description: "Promoting organic agriculture and sustainable farming practices."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <div className="p-6">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-3xl mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-blue-700 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <a
                        href={`/initiatives/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-blue-600 font-medium flex items-center transition-all group-hover:text-blue-800"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 transition-all group-hover:ml-2" />
                      </a>
                    </div>
                  </div>
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
                { number: "10,000+", label: "Animals Rescued", icon: "🐾" },
                { number: "50,000+", label: "Trees Planted", icon: "🌳" },
                { number: "100+", label: "Communities Served", icon: "👥" },
                { number: "5,000+", label: "Volunteers Engaged", icon: "🤝" }
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
          <GalleryPreview/>
        </section>

        {/* Rest of the sections remain the same */}
        {/* Testimonials Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Testimonials</h2>
              <p className="text-lg text-blue-700 max-w-3xl mx-auto">
                Hear from the people who have been part of our journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya Sharma",
                  role: "Volunteer",
                  photo: "https://randomuser.me/api/portraits/women/44.jpg",
                  quote: "Working with Sarv Jiv Hitay Foundation has been a life-changing experience. Their dedication to animal welfare and environmental conservation is truly inspiring."
                },
                {
                  name: "Rajesh Patel",
                  role: "Community Member",
                  photo: "https://randomuser.me/api/portraits/men/32.jpg",
                  quote: "The foundation's sustainable farming initiatives have transformed our community. We've learned valuable skills and now have a reliable source of income."
                },
                {
                  name: "Meera Reddy",
                  role: "Donor",
                  photo: "https://randomuser.me/api/portraits/women/68.jpg",
                  quote: "I'm proud to support an organization that shows such commitment to their mission. The transparency and impact reports give me confidence that my donations are making a difference."
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900">{testimonial.name}</h3>
                      <p className="text-sm text-blue-700">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-blue-800 italic">"{testimonial.quote}"</p>
                </div>
              ))}
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
      <Footer/>
      {/* Scroll to top button */}
      <button
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
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