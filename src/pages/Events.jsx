import React, { useState, useEffect } from 'react';
import { events } from '../data/events';
import EventCard from '../components/EventCard';

function Events() {
  // State for filtering events
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filter, setFilter] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get current date for filtering
  const currentDate = new Date();
  
  // Filter events based on selected filter and search term
  useEffect(() => {
    let filtered = [...events];
    
    // Apply date filter
    if (filter === 'upcoming') {
      filtered = filtered.filter(event => new Date(event.date) >= currentDate);
    } else if (filter === 'past') {
      filtered = filtered.filter(event => new Date(event.date) < currentDate);
    }
    
    // Apply search term filter if any
    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort upcoming events by date (closest first)
    // Sort past events by date (most recent first)
    if (filter === 'upcoming') {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (filter === 'past') {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    
    setFilteredEvents(filtered);
  }, [filter, searchTerm]);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-white">
      {/* Page Header */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Événements & Activités</h1>
          <p className="text-xl text-white text-center mt-4 max-w-3xl mx-auto">
            Rejoignez-nous pour le culte, la communion fraternelle et le service communautaire. Tout le monde est le bienvenu à nos événements.
          </p>
        </div>
      </div>
      
      {/* Filters Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Search Input */}
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex gap-4 w-full md:w-auto">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tous les événements
              </button>
              <button
                onClick={() => setFilter('upcoming')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'upcoming'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                À venir
              </button>
              <button
                onClick={() => setFilter('past')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'past'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                Passés
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            {filter === 'upcoming' ? 'Événements à venir' : 
             filter === 'past' ? 'Événements passés' : 'Tous les événements'}
            {searchTerm && ` correspondant à "${searchTerm}"`}
          </h2>
          
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-700">Aucun événement trouvé</h3>
              <p className="text-gray-600 mt-2">
                {filter === 'upcoming' 
                  ? "Aucun événement à venir pour le moment. Merci de revenir bientôt !"
                  : "Essayez d'ajuster vos critères de recherche"}
              </p>
              {(searchTerm || filter !== 'upcoming') && (
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setFilter('upcoming');
                  }}
                  className="mt-4 bg-primary hover:bg-red-700 text-white py-2 px-6 rounded-lg font-medium"
                >
                  Voir tous les événements à venir
                </button>
              )}
            </div>
          )}
        </div>
      </section>
      
      {/* Add Event to Calendar */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Restez informé de nos événements</h2>
          <p className="text-gray-700 mb-6">
            Abonnez-vous à notre calendrier pour recevoir des notifications sur les événements et activités à venir.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
              </svg>
              Ajouter à Google Agenda
            </a>
            <a 
              href="#" 
              className="bg-gray-800 hover:bg-black text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
              </svg>
              Ajouter à Apple Calendar
            </a>
            <a 
              href="#" 
              className="bg-primary hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
              </svg>
              Télécharger le fichier iCal
            </a>
          </div>
        </div>
      </section>
      
      {/* Event Planning */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-primary p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Planning an Event?</h2>
                <p className="mb-6">
                  Our church facility is available for weddings, baptisms, and other special events. 
                  Contact us to learn more about hosting your next event at Grace Community Church.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Modern facilities</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Seating for up to 500 people</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Audio/visual equipment</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Kitchen and reception area</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-bold mb-4">Request Information</h3>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Event Type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      placeholder="Additional Details"
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-primary hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;