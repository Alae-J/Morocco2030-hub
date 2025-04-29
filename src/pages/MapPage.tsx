import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsTicker from '../components/NewsTicker';
import { MapFilters, MapPOIs, PracticalInfos } from "@/helpers/Helper";
import { useLanguage } from '@/context/LanguageContext';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ChatBot from '@/components/ChatBox';
import L from 'leaflet';

const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const poiIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3179/3179068.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const FlyToPOI = ({ poi }) => {
  const map = useMap();
  useEffect(() => {
    if (poi) {
      map.flyTo([poi.lat, poi.lng], 14, { duration: 1.2 });
    }
  }, [poi]);
  return null;
};

const MapPage = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(MapFilters[0].value);
  const filteredPOIs = MapPOIs[activeFilter] || [];
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [selectedPOI, setSelectedPOI] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  const getFilterTitle = (filter) => {
    switch (filter) {
      case 'stades':
        return language === 'FR' ? '🏟️ Stades' : '🏟️ Stadiums';
      case 'tourisme':
        return language === 'FR' ? '🏛️ Lieux Touristiques' : '🏛️ Tourist Spots';
      case 'transport':
        return language === 'FR' ? '🚆 Transport' : '🚆 Transport';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NewsTicker />

      <main className="flex-grow">
        <div className="bg-white dark:bg-moroccan-dark shadow-sm sticky top-[69px] z-20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {MapFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-full font-medium text-sm ${
                    activeFilter === filter.value
                      ? filter.value === 'stades' ? 'bg-moroccan-red text-white'
                      : filter.value === 'tourisme' ? 'bg-moroccan-green text-white'
                      : 'bg-moroccan-sand text-moroccan-dark'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {filter.label[language]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-[calc(100vh-180px)]">
          <div className="md:w-3/4 h-full relative">
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              {position ? (
                <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                  />

                  <Marker position={position} icon={userIcon}>
                    <Popup>You are here! 📍</Popup>
                  </Marker>

                  {selectedPOI && (
                    <>
                      <FlyToPOI poi={selectedPOI} />
                      <Marker position={[selectedPOI.lat, selectedPOI.lng]} icon={poiIcon}>
                        <Popup>{selectedPOI.name[language]}</Popup>
                      </Marker>
                    </>
                  )}
                </MapContainer>
              ) : (
                <p>Loading your location...</p>
              )}
            </div>
          </div>

          <div className="md:w-1/4 h-full bg-white dark:bg-moroccan-dark overflow-y-auto border-l">
            <div className="p-4">
              <h2 className="text-lg font-bold mb-4">{getFilterTitle(activeFilter)}</h2>
              <div className="space-y-3">
                {filteredPOIs.map((poi) => (
                  <div
                    key={poi.id}
                    onClick={() => setSelectedPOI(poi)}
                    className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    <h3 className="font-medium">{poi.name[language]}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{poi.city[language]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="py-12 bg-white dark:bg-moroccan-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {language === 'FR' ? 'Informations Pratiques' : 'Practical Information'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-morocco p-6">
                <h3 className="font-bold text-lg mb-3">
                  {language === 'FR' ? 'Transport Public' : 'Public Transport'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {language === 'FR'
                    ? "Le Maroc dispose d'un réseau de trains modernes reliant les principales villes. Des bus et taxis sont disponibles pour les déplacements locaux."
                    : "Morocco has a modern train network connecting major cities. Buses and taxis are available for local transportation."}
                </p>
                {Object.entries(PracticalInfos.transportRatings).map(([transport, rating], idx) => (
                  <div key={idx} className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{transport}</span>
                    <span>{'⭐'.repeat(rating)}</span>
                  </div>
                ))}
              </div>

              <div className="card-morocco p-6">
                <h3 className="font-bold text-lg mb-3">
                  {language === 'FR' ? 'Conseils de Voyage' : 'Travel Tips'}
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                  {PracticalInfos.travelTips.map((tip, idx) => (
                    <li key={idx}>{tip[language]}</li>
                  ))}
                </ul>
              </div>

              <div className="card-morocco p-6">
                <h3 className="font-bold text-lg mb-3">
                  {language === 'FR' ? 'Distances entre Villes' : 'Distances Between Cities'}
                </h3>
                <div className="space-y-2 text-sm">
                  {PracticalInfos.cityDistances.map((distance, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span>{distance.from[language]} - {distance.to[language]}</span>
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
      <ChatBot />
    </div>
  );
};

export default MapPage;
