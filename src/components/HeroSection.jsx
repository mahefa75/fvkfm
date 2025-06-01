import React, { useEffect, useRef } from 'react';
import { fadeIn } from '../utils/animations';

function HeroSection() {
  const heroRef = useRef(null);
  
  useEffect(() => {
    if (heroRef.current) {
      fadeIn(heroRef.current, 300);
    }
  }, []);
  
  return (
    <div ref={heroRef} className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="z-10 px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
          Bienvenue à la FVKFM (Ny Fiangonan' ny Vondrona Kristianin' ny Fanahy Masina)
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 animate-fadeIn animation-delay-300">
          Un lieu de culte, de communauté et de croissance spirituelle
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-600">
          <a 
            href="#service-times" 
            className="bg-primary hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Horaires des cultes
          </a>
          <a 
            href="/about" 
            className="bg-transparent border-2 border-secondary text-secondary py-3 px-6 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all transform hover:scale-105"
          >
            À propos
          </a>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;