import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  // Calculate if event is upcoming
  const eventDate = new Date(event.date);
  const isUpcoming = eventDate >= new Date();
  
  // Format the date nicely
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  }).format(eventDate);
  
  // Format the time nicely
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(eventDate);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="p-5">
        {isUpcoming && (
          <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
            Upcoming
          </span>
        )}
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{event.title}</h3>
        
        <div className="flex items-center mb-3 text-gray-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span>{formattedDate}</span>
        </div>
        
        <div className="flex items-center mb-3 text-gray-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span>{formattedTime}</span>
        </div>
        
        <div className="flex items-center mb-4 text-gray-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>{event.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/events/${event.id}`} 
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
          >
            Details
          </Link>
          
          {event.registrationRequired && (
            <span className="text-red-600 font-medium text-sm">
              Registration Required
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCard;