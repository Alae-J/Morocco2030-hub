
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsTicker from '../components/NewsTicker';
import { MapFilters, MapPOIs, PracticalInfos } from "@/helpers/Helper";


// Importez cette image pour servir de placeholder de carte
// Nous utiliserons une image statique pour le prototype
// car l'intégration d'une vraie carte MapBox nécessite une clé API
const MapPage = () => {
  const [activeFilter, setActiveFilter] = useState('stades');

  const filteredPOIs = MapPOIs[activeFilter] || [];

  const getFilterTitle = (filter) => {
    switch (filter) {
      case 'stades':
        return '🏟️ Stades';
      case 'tourisme':
        return '🏛️ Lieux Touristiques';
      case 'transport':
        return '🚆 Transport';
      default:
        return '';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NewsTicker />

      <main className="flex-grow">
        {/* Map Controls */}
        <div className="bg-white dark:bg-moroccan-dark shadow-sm sticky top-[69px] z-20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {MapFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full font-medium text-sm ${
                    activeFilter === filter
                      ? filter === 'stades' ? 'bg-moroccan-red text-white'
                      : filter === 'tourisme' ? 'bg-moroccan-green text-white'
                      : 'bg-moroccan-sand text-moroccan-dark'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {filter === 'stades' && '🏟️ Stades'}
                  {filter === 'tourisme' && '🏛️ Tourisme'}
                  {filter === 'transport' && '🚆 Transport'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex flex-col md:flex-row h-[calc(100vh-180px)]">
          {/* Map */}
          <div className="md:w-3/4 h-full relative">
            {/* Placeholder for actual map implementation */}
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1580851935978-f6b4e359da3f?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
                alt="Morocco Map"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center flex-col p-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Carte Interactive</h2>
                <p className="max-w-md">
                  Cette section afficherait normalement une carte interactive MapBox avec les points d'intérêt filtrés ci-dessous.
                  Pour l'implémentation complète, une clé API MapBox serait nécessaire.
                </p>
              </div>
            </div>
          </div>
          
          {/* Points of Interest List */}
          <div className="md:w-1/4 h-full bg-white dark:bg-moroccan-dark overflow-y-auto border-l">
            <div className="p-4">
              <h2 className="text-lg font-bold mb-4">{getFilterTitle(activeFilter)}</h2>
              
              <div className="space-y-3">
                {filteredPOIs.map((poi) => (
                  <div 
                    key={poi.id} 
                    className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    <h3 className="font-medium">{poi.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{poi.city}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <section className="py-12 bg-white dark:bg-moroccan-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Informations Pratiques</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-morocco p-6">
                <h3 className="font-bold text-lg mb-3">Transport Public</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Le Maroc dispose d'un réseau de trains modernes reliant les principales villes. 
                  Des bus et taxis sont disponibles pour les déplacements locaux.
                </p>
                {Object.entries(PracticalInfos.transportRatings).map(([transport, rating], idx) => (
                  <div key={idx} className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{transport}</span>
                    <span>{'⭐'.repeat(rating)}</span>
                  </div>
                ))}
              </div>
              
              <div className="card-morocco p-6">
                <h3 className="font-bold text-lg mb-3">Conseils de Voyage</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                  {PracticalInfos.travelTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
              
              <div className="card-morocco p-6">
                <h3 className="font-bold text-lg mb-3">Distances entre Villes</h3>
                <div className="space-y-2 text-sm">
                  {PracticalInfos.cityDistances.map((distance, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span>{distance.from} - {distance.to}</span>
                      <span className="font-medium">{distance.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MapPage;
