<header className={`fixed w-full z-50 py-2 transition-all duration-300 bg-white text-black ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
<div className="container mx-auto px-4 flex justify-between items-center">
  {/* Logo */}
  <div className="flex items-center">
    <div className={`transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}>
      <div className="flex items-center">
      <img src={Dlogo} alt="Logo"  className="h-14 object-contain Dimage" />

      </div>
    </div>
  </div>

  {/* Desktop Navigation */}
  <nav className="hidden md:flex items-center space-x-6">
    {['Home', 'About', 'Initiatives', 'Gallery', 'Videos', 'Contact'].map((item) => (
      <a
        key={item}
        href={`/${item.toLowerCase()}`}
        className="font-medium text-sm transition-colors hover:text-blue-600 text-black"
      >
        {item}
      </a>
    ))}
    {/* Donate Now Button for Desktop */}
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      Donate Now
    </button>
  </nav>

  {/* Mobile Menu Button */}
  <div className="md:hidden flex items-center justify-between w-full px-0 smallNavbar">
    {/* Left: Logo */}
    <img src={Mlogo} alt="Logo" className="object-contain Mimage" />

    {/* Right: Navigation Menu Button */}
    <button
      onClick={toggleMobileMenu}
      className="text-black focus:outline-none" // Set color permanently black for mobile view
    >
      {mobileMenuOpen ? (
        <X className="w-6 h-6 text-black" /> // Icon color permanently black
      ) : (
        <Menu className="w-6 h-6 text-black" /> // Icon color permanently black
      )}
    </button>
  </div>
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
    {/* Donate Now Button for Mobile */}
    <li className="mt-4">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Donate Now
      </button>
    </li>
  </ul>
</div>
</header>