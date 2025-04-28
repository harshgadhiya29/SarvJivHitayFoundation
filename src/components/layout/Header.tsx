import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { siteConfig } from '../../constants/siteConfig';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2"
          onClick={closeMobileMenu}
        >
          <Heart 
            className={`w-8 h-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} 
            fill={isScrolled ? 'rgb(5, 150, 105)' : 'white'} 
          />
          <span 
            className={`font-serif text-xl font-medium ${
              isScrolled ? 'text-neutral-900' : 'text-white'
            }`}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                isScrolled 
                  ? isLinkActive(link.path) 
                    ? 'text-primary-600' 
                    : 'text-neutral-700'
                  : isLinkActive(link.path)
                    ? 'text-primary-300'
                    : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`btn ${
              isScrolled ? 'btn-primary' : 'bg-white text-primary-700 hover:bg-opacity-90'
            }`}
          >
            Get Involved
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-neutral-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-neutral-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <div className="container py-4 flex flex-col space-y-3">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 text-neutral-700 ${
                  isLinkActive(link.path) ? 'text-primary-600 font-medium' : ''
                }`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn btn-primary w-full mt-2"
              onClick={closeMobileMenu}
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;