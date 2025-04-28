import React, { useState, useEffect } from 'react';
import { Heart, ChevronDown, ArrowRight, User, ArrowUp, Menu, X } from 'lucide-react';

// Layout Component
const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Slider images for hero background
  const sliderImages = [
    "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
    "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg",
    "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
    "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
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
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <div className="flex items-center">
                <Heart className="w-8 h-8 text-blue-600 mr-2" fill="#3b82f6" />
                <span className={`font-bold text-xl ${scrolled ? 'text-blue-800' : 'text-white'}`}>Sarv Jiv Hitay</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {['Home', 'About', 'Initiatives', 'Gallery', 'Videos', 'Contact'].map((item) => (
                <li key={item} className="group relative">
                  <a
                    href={`/${item.toLowerCase()}`}
                    className={`font-medium text-sm transition-colors group-hover:text-blue-600 ${scrolled ? 'text-blue-900' : 'text-white'
                      }`}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="mr-4 text-blue-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-blue-800' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-blue-800' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Donate Button (Always Visible) */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Donate Now
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
          <ul className="px-4 space-y-3">
            {['Home', 'About', 'Initiatives', 'Gallery', 'Videos', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="block font-medium text-blue-900 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Slider Animation */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-blue-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 opacity-80 z-10"></div>

            {/* Slider implementation */}
            <div className="absolute inset-0">
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <img
                    src={image}
                    alt={`Slider background ${index + 1}`}
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
                  className={`w-3 h-3 mx-1 rounded-full transition-all ${currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
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
            <div className="animate-pulse">
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Gallery</h2>
              <p className="text-lg text-blue-700 max-w-3xl mx-auto">
                Explore moments from our journey of creating positive impact.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
                "https://images.pexels.com/photos/1483769/pexels-photo-1483769.jpeg",
                "https://images.pexels.com/photos/5721057/pexels-photo-5721057.jpeg",
                "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
                "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg",
                "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg"
              ].map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg h-64 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="font-bold">Project Title</h3>
                    <p className="text-sm text-blue-100">Brief description of this project or event</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/gallery"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                View All Photos
              </a>
            </div>
          </div>
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
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
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
      <footer className="bg-blue-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-blue-400 mr-2" fill="#60a5fa" />
                <span className="font-bold text-xl">Sarv Jiv Hitay</span>
              </div>
              <p className="text-blue-200 mb-4">
                Dedicated to creating a world where all living beings coexist in harmony.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Our Work', 'Gallery', 'Videos', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-200 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Our Initiatives</h3>
              <ul className="space-y-2">
                {['Animal Welfare', 'Environmental Conservation', 'Community Development', 'Sustainable Farming', 'Education Programs'].map((item) => (
                  <li key={item}>
                    <a href={`/initiatives/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-200 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <address className="not-italic text-blue-200">
                <p className="mb-2">Sarv Jiv Hitay Foundation</p>
                <p className="mb-2">123 Harmony Road, Greenville</p>
                <p className="mb-2">New Delhi, 110001</p>
                <p className="mb-2">India</p>
              </address>
              <p className="text-blue-200 mb-2">Phone: +91 98765 43210</p>
              <p className="text-blue-200">Email: info@sarvjivhitay.org</p>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-300 text-sm mb-4 md:mb-0">
                © 2025 Sarv Jiv Hitay Foundation. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a href="/privacy-policy" className="text-blue-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="text-blue-300 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="/sitemap" className="text-blue-300 hover:text-white text-sm transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

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