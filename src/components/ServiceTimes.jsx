import React, { useEffect, useRef } from 'react';
import { slideIn } from '../utils/animations';

function ServiceTimes() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          slideIn(sectionRef.current, 300, 'right');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="service-times" ref={sectionRef} className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Horaires des cultes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">Culte du dimanche matin</h3>
            <p className="text-gray-700 mb-3">9h00 - 10h30</p>
            <p className="text-gray-600">Culte traditionnel avec chorale et Sainte-Cène le premier dimanche de chaque mois.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">Culte du dimanche soir</h3>
            <p className="text-gray-700 mb-3">18h00 - 19h30</p>
            <p className="text-gray-600">Culte contemporain avec groupe de musique et discussions en petits groupes.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">Étude biblique du mercredi</h3>
            <p className="text-gray-700 mb-3">19h00 - 20h30</p>
            <p className="text-gray-600">Étude biblique et réunion de prière pour tous les âges. Programmes pour enfants et jeunes disponibles.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-white px-6 py-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">Services spéciaux</h3>
            <p className="text-gray-600">
              Consultez notre <a href="/events" className="text-blue-600 hover:text-blue-800 underline">calendrier des événements</a> pour les cultes spéciaux, baptêmes et événements communautaires.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceTimes;