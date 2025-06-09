import React, { useState } from 'react';
import { Menu, X, CreditCard, ArrowLeftRight, Building2, Copy, Check } from 'lucide-react';

import Dlogo from '../../img/LOGOSJHF.png';

const Header = () => {
  // Removed unused scrolled state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [donatePopupOpen, setDonatePopupOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [copiedField, setCopiedField] = useState('');
  
  // Mouse swipe states for desktop
  const [mouseStart, setMouseStart] = useState<number | null>(null);
  const [mouseEnd, setMouseEnd] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openDonatePopup = () => {
    setDonatePopupOpen(true);
    setIsFlipped(false);
  };

  const closeDonatePopup = () => {
    setDonatePopupOpen(false);
    setIsFlipped(false);
  };

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe || isRightSwipe) {
      setIsFlipped(!isFlipped);
    }
  };

  // Mouse handlers for desktop swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    // Prevent text selection during potential swipe
    e.preventDefault();
    setMouseEnd(null);
    setMouseStart(e.clientX);
    setIsSwiping(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isSwiping) return;
    // Prevent text selection during active swipe
    e.preventDefault();
    setMouseEnd(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!mouseStart || !mouseEnd) {
      setIsSwiping(false);
      return;
    }
    
    // Prevent text selection on mouse up during swipe
    e.preventDefault();
    
    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe || isRightSwipe) {
      setIsFlipped(!isFlipped);
    }
    
    setIsSwiping(false);
    setMouseStart(null);
    setMouseEnd(null);
  };

  const handleMouseLeave = () => {
    setIsSwiping(false);
    setMouseStart(null);
    setMouseEnd(null);
  };

  // Navigation items
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Videos', path: '/videos' },
    { title: 'Contact', path: '/contact' }
  ];

  const mobileNavItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Videos', path: '/videos' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="fixed w-full z-50 py-2 transition-all duration-300 bg-white text-black">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
          <div className="transition-all duration-300 scale-100">
            <div className="flex items-center">
            <img src={Dlogo} alt="Logo"  className="h-14 object-contain Dimage" />

            </div>
          </div>
        </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="font-medium text-sm transition-colors hover:text-blue-600 text-black"
              >
                {item.title}
              </a>
            ))}
            <button 
              onClick={openDonatePopup}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Donate Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full px-0">
           <img src={Dlogo} alt="Logo" className="object-contain Mimage" />

            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
          <ul className="px-4 space-y-3">
            {mobileNavItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.path}
                  className="block font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDonatePopup();
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
              >
                Donate Now
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Donate Popup Overlay */}
      {donatePopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
          <div className="relative w-full max-w-md mx-auto">
            {/* Close Button */}
            <button
              onClick={closeDonatePopup}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 z-10"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Card Container */}
            <div className="relative w-full h-auto perspective-1000 mb-4">
              <div
                className={`relative w-full transition-transform duration-500 transform-style-preserve-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                } ${isSwiping ? 'cursor-grabbing select-none' : 'cursor-grab select-auto'}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                style={{
                  userSelect: isSwiping ? 'none' : 'auto',
                  WebkitUserSelect: isSwiping ? 'none' : 'auto',
                  MozUserSelect: isSwiping ? 'none' : 'auto',
                  msUserSelect: (isSwiping ? 'none' : 'auto') as any
                }}
              >
                {/* Front Side - QR Code */}
                <div className="w-full backface-hidden bg-white rounded-2xl shadow-2xl border border-gray-100">
                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <CreditCard className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Payment</h3>
                      <p className="text-gray-600">Scan QR code with any UPI app</p>
                    </div>

                    {/* QR Code */}
                    <div className="flex justify-center mb-6">
                      <div className="w-48 h-48 sm:w-56 sm:h-56 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-lg border border-gray-200 mb-3 flex items-center justify-center">
                            <div className="grid grid-cols-8 gap-1">
                              {[...Array(64)].map((_, i) => (
                                <div key={i} className={`w-1 h-1 sm:w-1.5 sm:h-1.5 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}></div>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 font-medium">UPI QR Code</p>
                        </div>
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 text-center mb-3">Accepted Payment Methods</p>
                      <div className="flex justify-center space-x-4">
                        <div className="px-3 py-2 bg-gray-50 rounded-lg text-xs font-medium text-gray-700">Google Pay</div>
                        <div className="px-3 py-2 bg-gray-50 rounded-lg text-xs font-medium text-gray-700">PhonePe</div>
                        <div className="px-3 py-2 bg-gray-50 rounded-lg text-xs font-medium text-gray-700">Paytm</div>
                      </div>
                    </div>

                    {/* Switch Button and Instructions */}
                    <div className="text-center">
                      <button
                        onClick={toggleCard}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <ArrowLeftRight className="w-4 h-4 mr-2" />
                        View Bank Details
                      </button>
                      <div className="mt-2 text-center">
                        <p className="text-xs text-gray-400 md:hidden">Swipe for Bank Details</p>
                        <p className="text-xs text-gray-400 hidden md:block">Click & Drag or use button to flip</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side - Bank Details */}
                <div className="absolute inset-0 w-full backface-hidden rotate-y-180 bg-white rounded-2xl shadow-2xl border border-gray-100">
                  <div className="p-4 sm:p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-green-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Bank Transfer</h3>
                      <p className="text-sm text-gray-600">Direct bank transfer details</p>
                    </div>

                    {/* Bank Details - Compact Layout */}
                    <div className="flex-1 bg-gray-50 rounded-xl p-4 mb-4">
                      <div className="space-y-3">
                        {[
                          { label: 'Account Name', value: 'Your Organization Name' },
                          { label: 'Account Number', value: '1234567890123456' },
                          { label: 'Bank Name', value: 'State Bank of India' },
                          { label: 'IFSC Code', value: 'SBIN0001234' },
                          { label: 'Branch', value: 'Main Branch, Mumbai' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-gray-500 mb-0.5">{item.label}</p>
                              <p className="text-sm font-semibold text-gray-900 truncate">{item.value}</p>
                            </div>
                            <button
                              onClick={() => copyToClipboard(item.value, item.label)}
                              className="ml-3 p-1.5 text-gray-400 hover:text-gray-600 hover:bg-white rounded-md transition-all duration-200 flex-shrink-0"
                              title="Copy to clipboard"
                            >
                              {copiedField === item.label ? (
                                <Check className="w-4 h-4 text-green-600" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    

                    {/* Switch Button and Instructions */}
                    <div className="text-center">
                      <button
                        onClick={toggleCard}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <ArrowLeftRight className="w-4 h-4 mr-2" />
                        View QR Code
                      </button>
                      <div className="mt-2 text-center">
                        <p className="text-xs text-gray-400 hidden md:block">Click & Drag or use button to flip</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .select-none {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .select-auto {
          -webkit-user-select: auto;
          -moz-user-select: auto;
          -ms-user-select: auto;
          user-select: auto;
        }
      `}</style>
    </div>
  );
};

export default Header;