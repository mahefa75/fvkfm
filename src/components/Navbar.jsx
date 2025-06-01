import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Active link highlighting
  const isActive = (path) => {
    return location.pathname === path ? 'text-primary border-b-2 border-primary' : '';
  };
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">FVKFM</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`transition-colors duration-300 hover:text-secondary ${isActive('/')}`}>Accueil</Link>
            <Link to="/about" className={`transition-colors duration-300 hover:text-secondary ${isActive('/about')}`}>À propos</Link>
            <Link to="/sermons" className={`transition-colors duration-300 hover:text-secondary ${isActive('/sermons')}`}>Prédications</Link>
            <Link to="/events" className={`transition-colors duration-300 hover:text-secondary ${isActive('/events')}`}>Événements</Link>
            <Link to="/contact" className={`transition-colors duration-300 hover:text-secondary ${isActive('/contact')}`}>Contact</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current text-gray-800" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-2 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4 py-2">
              <Link to="/" onClick={() => setIsOpen(false)} className={`block py-2 hover:text-secondary ${isActive('/')}`}>Accueil</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className={`block py-2 hover:text-secondary ${isActive('/about')}`}>À propos</Link>
              <Link to="/sermons" onClick={() => setIsOpen(false)} className={`block py-2 hover:text-secondary ${isActive('/sermons')}`}>Prédications</Link>
              <Link to="/events" onClick={() => setIsOpen(false)} className={`block py-2 hover:text-secondary ${isActive('/events')}`}>Événements</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className={`block py-2 hover:text-secondary ${isActive('/contact')}`}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;