import React, { useEffect, useRef } from 'react';
import { fadeIn } from '../utils/animations';

function MissionSection() {
  const missionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fadeIn(missionRef.current, 400);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (missionRef.current) {
      observer.observe(missionRef.current);
    }
    
    return () => {
      if (missionRef.current) {
        observer.unobserve(missionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={missionRef} className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
              alt="Church community service" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Mission & Vision</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Mission</h3>
              <p className="text-gray-700">
                Aimer Dieu, aimer les autres et faire des disciples qui transforment les communautés par 
                la puissance de l'Évangile et la présence du Christ.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Vision</h3>
              <p className="text-gray-700">
                Être une famille d'église dynamique qui reflète la diversité de notre ville, connecte les gens à Jésus, 
                et habilite les croyants à utiliser leurs dons pour servir notre communauté et le monde.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Valeurs</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Enseignement biblique :</strong> Fonder tout ce que nous faisons sur les Écritures</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Communauté authentique :</strong> Créer des relations significatives</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Adoration passionnée :</strong> Vivre la présence de Dieu ensemble</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Discipulat global :</strong> Grandir dans tous les domaines de la vie</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Service compatissant :</strong> Répondre aux besoins avec l'amour du Christ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;