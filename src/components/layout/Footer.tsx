import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../../constants/siteConfig';
import logo  from '../../img/WL.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Foundation */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Foundation Logo" className="w-12 h-12" />
              <h3 className="text-lg font-medium">{siteConfig.name}</h3>
            </div>
            <p className="text-primary-100 text-sm">
              {siteConfig.description}. <br />
              {siteConfig.tagline}
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href={siteConfig.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-100 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={siteConfig.social.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-100 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-primary-100 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/donate" 
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link 
                  to="/volunteer" 
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-primary-300 mt-1 flex-shrink-0" />
                <a 
                  href={`mailto:${siteConfig.contactInfo.email}`} 
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  {siteConfig.contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-primary-300 mt-1 flex-shrink-0" />
                <a 
                  href={`tel:${siteConfig.contactInfo.phone}`} 
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  {siteConfig.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary-300 mt-1 flex-shrink-0" />
                <span className="text-primary-100 text-sm">
                  {siteConfig.contactInfo.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-primary-100 text-sm mb-4">
              Join our newsletter to stay updated on our latest initiatives and events.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 rounded bg-primary-800 text-white placeholder-black text-sm border border-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-400"
                required
              />
              <button
                type="submit"
                className="btn w-full bg-primary-600 hover:bg-primary-500 text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-200">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;