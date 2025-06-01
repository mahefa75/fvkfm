import React from 'react';
import { Link } from 'react-router-dom';

function SermonCard({ sermon }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
      <div className="relative pb-56 overflow-hidden">
        <img 
          src={sermon.imageUrl} 
          alt={sermon.title} 
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <div className="text-white">
            <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded mb-2">
              {sermon.date}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{sermon.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{sermon.description}</p>
        <div className="flex items-center text-gray-700 text-sm mb-4">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
          </svg>
          <span>{sermon.speaker}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/sermons/${sermon.id}`} 
            className="text-secondary hover:text-primary font-medium"
          >
            Listen Now
          </Link>
          
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">{sermon.duration}</span>
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SermonCard;