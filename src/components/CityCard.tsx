
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CityCardProps {
  name: string;
  image: string;
  description: string;
}

const CityCard: React.FC<CityCardProps> = ({ name, image, description }) => {
  return (
    <div className="card-morocco group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">{name}</h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <button className="flex items-center text-moroccan-red font-medium group-hover:translate-x-1 transition-transform">
          Explorer <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default CityCard;
