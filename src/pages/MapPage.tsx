
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsTicker from '../components/NewsTicker';

// Importez cette image pour servir de placeholder de carte
// Nous utiliserons une image statique pour le prototype
// car l'intégration d'une vraie carte MapBox nécessite une clé API
const MapPage = () => {
  const [activeFilter, setActiveFilter] = useState('stades');
  
  // Données de points d'intérêt factices qui seraient normalement affichées sur la carte
  const pois = {
    stades: [
      { id: 1, name: "Stade Mohammed V", city: "Casablanca", lat: 33.5825, lng: -7.6483 },
      { id: 2, name: "Stade de Rabat", city: "Rabat", lat: 34.0128, lng: -6.8317 },
      { id: 3, name: "Stade de Marrakech", city: "Marrakech", lat: 31.6667, lng: -8.0000 },
      { id: 4, name: "Grand Stade de Tanger", city: "Tanger", lat: 35.7595, lng: -5.8339 },
      { id: 5, name: "Stade Adrar", city: "Agadir", lat: 30.4200, lng: -9.6000 },
      { id: 6, name: "Stade de Fès", city: "Fès", lat: 34.0372, lng: -5.0003 }
    ],
    tourisme: [
      { id: 7, name: "Médina de Marrakech", city: "Marrakech", lat: 31.6333, lng: -7.9833 },
      { id: 8, name: "Mosquée Hassan II", city: "Casablanca", lat: 33.6086, lng: -7.6326 },
      { id: 9, name: "Chefchaouen", city: "Chefchaouen", lat: 35.1672, lng: -5.2697 },
      { id: 10, name: "Jardin Majorelle", city: "Marrakech", lat: 31.6417, lng: -8.0000 },
      { id: 11, name: "Kasbah des Oudaïas", city: "Rabat", lat: 34.0333, lng: -6.8333 },
      { id: 12, name: "Volubilis", city: "Meknès", lat: 34.0736, lng: -5.5557 }
    ],
    transport: [
      { id: 13, name: "Aéroport Mohammed V", city: "Casablanca", lat: 33.3678, lng: -7.5889 },
      { id: 14, name: "Gare de Marrakech", city: "Marrakech", lat: 31.6313, lng: -8.0022 },
      { id: 15, name: "Gare de Casa-Voyageurs", city: "Casablanca", lat: 33.5897, lng: -7.6114 },
      { id: 16, name: "Aéroport Menara", city: "Marrakech", lat: 31.6078, lng: -8.0367 },
      { id: 17, name: "Gare de Rabat-Ville", city: "Rabat", lat: 34.0167, lng: -6.8367 },
      { id: 18, name: "Terminal de Bus Supratours", city: "Tanger", lat: 35.7764, lng: -5.8147 }
    ]
  };

  const filteredPOIs = pois[activeFilter] || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NewsTicker />

      <main className="flex-grow">
        {/* Map Controls */}
        <div className="bg-white dark:bg-moroccan-dark shadow-sm sticky top-[69px] z-20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <button 
                onClick={() => setActiveFilter('stades')}
                className={`px-4 py-2 rounded-full font-medium text-sm ${activeFilter === 'stades' ? 'bg-moroccan-red text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
              >
                🏟️ Stades
              </button>
              <button 
                onClick={() => setActiveFilter('tourisme')}
                className={`px-4 py-2 rounded-full font-medium text-sm ${activeFilter === 'tourisme' ? 'bg-moroccan-green text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
              >
                🏛️ Tourisme
              </button>
              <button 
                onClick={() => setActiveFilter('transport')}
                className={`px-4 py-2 rounded-full font-medium text-sm ${activeFilter === 'transport' ? 'bg-moroccan-sand text-moroccan-dark' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
              >
                🚆 Transport
              </button>
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
              <h2 className="text-lg font-bold mb-4">
                {activeFilter === 'stades' && '🏟️ Stades'}
                {activeFilter === 'tourisme' && '🏛️ Lieux Touristiques'}
                {activeFilter === 'transport' && '🚆 Transport'}
              </h2>
              
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
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Trains</span>
                  <span>⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Bus</span>
                  <span>⭐⭐⭐</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Taxis</span>
                  <span>⭐⭐⭐⭐</span>
                </div>
              </div>
              
              <div className="card-morocco p-6">
                <h3 className="font-bold text-lg mb-3">Conseils de Voyage</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                  <li>Apportez des vêtements légers et confortables</li>
                  <li>Prévoyez une protection solaire</li>
                  <li>Respectez les coutumes locales</li>
                  <li>Apprenez quelques phrases de base en arabe</li>
                  <li>Vérifiez les exigences de visa avant votre voyage</li>
                </ul>
              </div>
              
              <div className="card-morocco p-6">
                <h3 className="font-bold text-lg mb-3">Distances entre Villes</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Casablanca - Rabat</span>
                    <span className="font-medium">87 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Casablanca - Marrakech</span>
                    <span className="font-medium">242 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rabat - Tanger</span>
                    <span className="font-medium">250 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marrakech - Agadir</span>
                    <span className="font-medium">256 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rabat - Fès</span>
                    <span className="font-medium">207 km</span>
                  </div>
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
