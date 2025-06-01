import React, { useEffect } from 'react';
import MissionSection from '../components/MissionSection';

function About() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-white">
      {/* Page Header */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">À Propos de Notre Église</h1>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <MissionSection />
      
      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Notre Histoire</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex items-start">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:text-right md:pr-8">
                    <span className="text-xl font-bold text-primary">1975</span>
                  </div>
                  <div className="md:w-2/3 relative">
                    <div className="hidden md:block absolute top-2 -left-4 h-4 w-4 rounded-full bg-primary"></div>
                    <h3 className="text-xl font-bold mb-2">Notre Fondation</h3>
                    <p className="text-gray-700">
                      FVKFM a commencé comme un petit rassemblement de 15 familles se réunissant dans un centre communautaire local. 
                      Fondée par le Pasteur James Wilson, l'église a été établie avec une vision de servir la communauté 
                      et de fournir un lieu de culte authentique et de croissance spirituelle.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex items-start">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:text-right md:pr-8">
                    <span className="text-xl font-bold text-primary">1988</span>
                  </div>
                  <div className="md:w-2/3 relative">
                    <div className="hidden md:block absolute top-2 -left-4 h-4 w-4 rounded-full bg-primary"></div>
                    <h3 className="text-xl font-bold mb-2">Construction de Notre Première Église</h3>
                    <p className="text-gray-700">
                      Alors que la congrégation grandissait pour atteindre plus de 150 membres, nous avons acheté un terrain et construit notre premier bâtiment d'église. 
                      Cette étape importante représentait des années de dons fidèles, de prières et de soutien communautaire.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex items-start">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:text-right md:pr-8">
                    <span className="text-xl font-bold text-primary">2002</span>
                  </div>
                  <div className="md:w-2/3 relative">
                    <div className="hidden md:block absolute top-2 -left-4 h-4 w-4 rounded-full bg-primary"></div>
                    <h3 className="text-xl font-bold mb-2">Début de l'Action Communautaire</h3>
                    <p className="text-gray-700">
                      Sous la direction du Pasteur Michael Thomas, l'église a établi son programme d'action communautaire, 
                      fournissant nourriture, vêtements et soutien à ceux qui en ont besoin. Cela a marqué le début de notre engagement 
                      à servir au-delà de nos murs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex items-start">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:text-right md:pr-8">
                    <span className="text-xl font-bold text-primary">2015</span>
                  </div>
                  <div className="md:w-2/3 relative">
                    <div className="hidden md:block absolute top-2 -left-4 h-4 w-4 rounded-full bg-primary"></div>
                    <h3 className="text-xl font-bold mb-2">Expansion et Croissance</h3>
                    <p className="text-gray-700">
                      L'église a agrandi ses installations pour inclure un plus grand sanctuaire, des salles de classe pour les enfants et les jeunes, 
                      et un centre communautaire. Notre congrégation compte maintenant plus de 500 membres d'horizons divers, 
                      unis par la foi et un objectif commun.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex items-start">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:text-right md:pr-8">
                    <span className="text-xl font-bold text-primary">Today</span>
                  </div>
                  <div className="md:w-2/3 relative">
                    <div className="hidden md:block absolute top-2 -left-4 h-4 w-4 rounded-full bg-primary"></div>
                    <h3 className="text-xl font-bold mb-2">Poursuite du Voyage</h3>
                    <p className="text-gray-700">
                      Aujourd'hui, FVKFM continue de grandir et de servir sous la direction du Pasteur Sarah Johnson. 
                      Nous restons fidèles à notre vision fondatrice tout en nous adaptant pour répondre aux besoins de notre communauté 
                      et de notre monde en évolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Notre Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 h-64 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Pasteur Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Pasteur Sarah Johnson</h3>
              <p className="text-primary">Pasteur principal</p>
              <p className="mt-2 text-gray-600">
                Dirige notre famille d'église depuis 2010 avec passion pour l'adoration authentique et le service communautaire.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 h-64 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" 
                  alt="Pasteur David Lee" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Pasteur David Lee</h3>
              <p className="text-primary">Pasteur associé</p>
              <p className="mt-2 text-gray-600">
                Supervise le ministère de la jeunesse et les actions communautaires avec enthousiasme et compassion.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 h-64 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                  alt="Pasteur Rachel Martinez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Pasteur Rachel Martinez</h3>
              <p className="text-primary">Pasteur de louange</p>
              <p className="mt-2 text-gray-600">
                Dirige notre équipe de louange avec créativité et un cœur pour conduire les gens dans la présence de Dieu.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Conseil d'Église & Anciens</h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              Notre église est également guidée par un conseil d'anciens dévoués qui apportent sagesse, supervision 
              et soutien à notre personnel pastoral et à nos responsables de ministère. Ils aident à s'assurer que nous restons fidèles 
              à notre mission et à nos valeurs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Beliefs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ce que Nous Croyons</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">La Bible</h3>
              <p className="text-gray-700">
                Nous croyons que la Bible est la Parole de Dieu, divinement inspirée et sans erreur, 
                fournissant l'autorité finale pour la foi et la vie.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Dieu</h3>
              <p className="text-gray-700">
                Nous croyons en un seul Dieu qui existe éternellement en trois personnes : Père, Fils et Saint-Esprit.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Jésus-Christ</h3>
              <p className="text-gray-700">
                Nous croyons en la divinité de Jésus-Christ, Sa naissance virginale, Sa vie sans péché, 
                Sa mort expiatoire, Sa résurrection corporelle et Son retour futur.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Le Salut</h3>
              <p className="text-gray-700">
                Nous croyons que le salut est un don de Dieu reçu par la foi en Jésus-Christ seul, 
                non par les œuvres ou les efforts humains.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">L'Église</h3>
              <p className="text-gray-700">
                Nous croyons que l'église est le corps de Christ, appelée à adorer Dieu, 
                à nourrir les croyants et à partager l'Évangile avec le monde.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;