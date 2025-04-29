import React from 'react';
import { Star, MapPin, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TouristSpotCardTexts } from '@/helpers/Helper';

interface TouristSpotCardProps {
  name: string;
  image: string;
  rating: number;
  location: string; // used for Google Maps destination
  category: string;
}

const TouristSpotCard: React.FC<TouristSpotCardProps> = ({
  name,
  image,
  rating,
  location,
  category
}) => {
  const { language } = useLanguage();

  const handleItineraryClick = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const encodedDestination = encodeURIComponent(location);
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodedDestination}`;
        window.open(mapsUrl, '_blank');
      },
      (error) => {
        alert('Unable to retrieve your location. Using approximate location instead.');
        const encodedDestination = encodeURIComponent(location);
        const fallbackUrl = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${encodedDestination}`;
        window.open(fallbackUrl, '_blank');
      }
    );
  };

  return (
    <div className="card-morocco h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white dark:bg-moroccan-dark bg-opacity-90 dark:bg-opacity-90 px-2 py-1 rounded-md text-xs font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded text-sm">
            <Star size={14} className="mr-1 fill-current" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="flex justify-between items-center mt-auto">
          <button className="text-moroccan-red font-medium text-sm flex items-center">
            <Info size={14} className="mr-1" />
            {TouristSpotCardTexts.moreInfo[language]}
          </button>

          <button 
            onClick={handleItineraryClick}
            className="bg-moroccan-green text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            {TouristSpotCardTexts.itinerary[language]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
