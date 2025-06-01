import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceTimes from '../components/ServiceTimes';
import MissionSection from '../components/MissionSection';
import SermonCard from '../components/SermonCard';
import EventCard from '../components/EventCard';
import { Link } from 'react-router-dom';
import { sermons } from '../data/sermons';
import { events } from '../data/events';

function Home() {
  // Get featured sermons (latest 3)
  const featuredSermons = sermons.slice(0, 3);
  
  // Get upcoming events (next 3)
  const today = new Date();
  const upcomingEvents = events
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Service Times Section */}
      <ServiceTimes />
      
      {/* Featured Sermons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Dernières prédications</h2>
            <Link to="/sermons" className="text-amber-600 hover:text-amber-700 font-medium">
              Voir toutes les prédications
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSermons.map(sermon => (
              <SermonCard key={sermon.id} sermon={sermon} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <MissionSection />
      
      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Événements à venir</h2>
            <Link to="/events" className="text-amber-600 hover:text-amber-700 font-medium">
              Voir tous les événements
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-500 text-lg">Aucun événement à venir pour le moment. Revenez bientôt !</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Rejoignez notre communauté</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Nous serions ravis de vous accueillir pour le culte ce dimanche. Tout le monde est le bienvenu dans notre famille d'église.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-amber-600 py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Contactez-nous
            </Link>
            <a 
              href="#service-times" 
              className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Horaires des cultes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;