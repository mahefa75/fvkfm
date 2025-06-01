import React, { useState, useEffect } from 'react';
import { sermons } from '../data/sermons';
import SermonCard from '../components/SermonCard';

function Sermons() {
  // State for filtering and searching
  const [filteredSermons, setFilteredSermons] = useState(sermons);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');

  // Get unique speakers and topics for filter dropdowns
  const speakers = ['All', ...new Set(sermons.map(sermon => sermon.speaker))];
  const topics = ['All', ...new Set(sermons.map(sermon => sermon.topic))];

  // Handle filtering
  useEffect(() => {
    let results = sermons;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(sermon => 
        sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sermon.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by speaker
    if (selectedSpeaker !== 'All') {
      results = results.filter(sermon => sermon.speaker === selectedSpeaker);
    }
    
    // Filter by topic
    if (selectedTopic !== 'All') {
      results = results.filter(sermon => sermon.topic === selectedTopic);
    }
    
    setFilteredSermons(results);
  }, [searchTerm, selectedSpeaker, selectedTopic]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-white">
      {/* Page Header */}
      <div className="bg-amber-500 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Prédications</h1>
          <p className="text-xl text-white text-center mt-4 max-w-3xl mx-auto">
            Explorez notre bibliothèque de prédications et de messages pour approfondir votre foi et votre compréhension de la Parole de Dieu.
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
                placeholder="Rechercher des prédications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            
            {/* Filter Dropdowns */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-2/3">
              <div className="w-full sm:w-1/2">
                <select
                  value={selectedSpeaker}
                  onChange={(e) => setSelectedSpeaker(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {speakers.map(speaker => (
                    <option key={speaker} value={speaker}>
                      {speaker === 'All' ? 'Tous les orateurs' : speaker}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="w-full sm:w-1/2">
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {topics.map(topic => (
                    <option key={topic} value={topic}>
                      {topic === 'All' ? 'Tous les thèmes' : topic}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredSermons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSermons.map(sermon => (
                <SermonCard key={sermon.id} sermon={sermon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-700">Aucune prédication trouvée</h3>
              <p className="text-gray-600 mt-2">Essayez d'ajuster vos critères de recherche ou de filtrage</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSpeaker('All');
                  setSelectedTopic('All');
                }}
                className="mt-4 bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-lg font-medium"
              >
                Effacer les Filtres
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Subscribe to Sermons */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Restez informé de nos derniers messages</h2>
          <p className="text-gray-700 mb-6">
            Abonnez-vous pour recevoir nos prédications directement dans votre boîte mail. Ne manquez jamais un message de notre église.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 flex-grow sm:max-w-xs"
              required
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Sermons;