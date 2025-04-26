
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsTicker from '../components/NewsTicker';
import { Filter, Calendar, Map, Search, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const Tickets = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [cartCount, setCartCount] = useState(0);
  
  // Données factices pour les matchs
  const matches = [
    {
      id: 1,
      team1: "Maroc",
      team1Flag: "🇲🇦",
      team2: "Espagne",
      team2Flag: "🇪🇸",
      date: "15 Juin 2030",
      time: "20:00",
      stadium: "Stade Mohammed V",
      city: "Casablanca",
      prices: {
        category1: 1500,
        category2: 1000,
        category3: 500
      }
    },
    {
      id: 2,
      team1: "France",
      team1Flag: "🇫🇷",
      team2: "Brésil",
      team2Flag: "🇧🇷",
      date: "16 Juin 2030",
      time: "17:00",
      stadium: "Stade de Rabat",
      city: "Rabat",
      prices: {
        category1: 1800,
        category2: 1200,
        category3: 600
      }
    },
    {
      id: 3,
      team1: "Argentine",
      team1Flag: "🇦🇷",
      team2: "Portugal",
      team2Flag: "🇵🇹",
      date: "17 Juin 2030",
      time: "20:00",
      stadium: "Stade de Marrakech",
      city: "Marrakech",
      prices: {
        category1: 2000,
        category2: 1500,
        category3: 800
      }
    },
    {
      id: 4,
      team1: "Allemagne",
      team1Flag: "🇩🇪",
      team2: "Angleterre",
      team2Flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      date: "18 Juin 2030",
      time: "16:00",
      stadium: "Stade Adrar",
      city: "Agadir",
      prices: {
        category1: 1600,
        category2: 1100,
        category3: 550
      }
    },
    {
      id: 5,
      team1: "Belgique",
      team1Flag: "🇧🇪",
      team2: "Pays-Bas",
      team2Flag: "🇳🇱",
      date: "19 Juin 2030",
      time: "20:00",
      stadium: "Grand Stade de Tanger",
      city: "Tanger",
      prices: {
        category1: 1500,
        category2: 1000,
        category3: 500
      }
    }
  ];

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NewsTicker />

      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-moroccan-red text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Billets pour la Coupe du Monde 2030</h1>
            <p className="max-w-2xl mx-auto opacity-90">
              Réservez vos places pour assister aux matchs de la Coupe du Monde 2030 au Maroc. 
              Une expérience inoubliable vous attend !
            </p>
          </div>
        </div>

        {/* Filter and Search */}
        <div className="bg-white dark:bg-moroccan-dark shadow-sm sticky top-[69px] z-20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex gap-2 flex-1">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    placeholder="Rechercher des matchs, équipes..." 
                    className="pl-10"
                  />
                </div>
                
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter size={16} />
                  <span className="hidden md:inline">Filtres</span>
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Date</span>
                </Button>
                
                <Button variant="outline" className="flex items-center gap-2">
                  <Map size={16} />
                  <span>Lieu</span>
                </Button>
                
                <Button variant="default" className="bg-moroccan-red relative">
                  <ShoppingCart size={18} />
                  <span className="ml-2 hidden md:inline">Panier</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-moroccan-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-moroccan-dark border-b">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto">
              <button 
                className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === 'upcoming' ? 'border-moroccan-red text-moroccan-red' : 'border-transparent text-gray-600 dark:text-gray-400'}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Matchs à venir
              </button>
              <button 
                className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === 'groups' ? 'border-moroccan-red text-moroccan-red' : 'border-transparent text-gray-600 dark:text-gray-400'}`}
                onClick={() => setActiveTab('groups')}
              >
                Phase de groupes
              </button>
              <button 
                className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === 'knockout' ? 'border-moroccan-red text-moroccan-red' : 'border-transparent text-gray-600 dark:text-gray-400'}`}
                onClick={() => setActiveTab('knockout')}
              >
                Phase éliminatoire
              </button>
              <button 
                className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === 'final' ? 'border-moroccan-red text-moroccan-red' : 'border-transparent text-gray-600 dark:text-gray-400'}`}
                onClick={() => setActiveTab('final')}
              >
                Finale
              </button>
            </div>
          </div>
        </div>

        {/* Match Listings */}
        <div className="bg-gray-50 dark:bg-moroccan-dark/80 py-8">
          <div className="container mx-auto px-4">
            <div className="space-y-4">
              {matches.map((match) => (
                <div key={match.id} className="card-morocco p-4">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    {/* Date & Location */}
                    <div className="md:col-span-1">
                      <div className="flex flex-col">
                        <div className="font-medium text-moroccan-red">{match.date}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{match.time}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{match.stadium}, {match.city}</div>
                      </div>
                    </div>
                    
                    {/* Teams */}
                    <div className="md:col-span-2">
                      <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl">{match.team1Flag}</span>
                          <span className="font-medium mt-1">{match.team1}</span>
                        </div>
                        
                        <div className="mx-6 text-lg font-bold">VS</div>
                        
                        <div className="flex flex-col items-center">
                          <span className="text-3xl">{match.team2Flag}</span>
                          <span className="font-medium mt-1">{match.team2}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price Category */}
                    <div className="md:col-span-1">
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Catégorie 1</span>
                          <span className="font-medium">{match.prices.category1} MAD</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Catégorie 2</span>
                          <span className="font-medium">{match.prices.category2} MAD</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Catégorie 3</span>
                          <span className="font-medium">{match.prices.category3} MAD</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action */}
                    <div className="md:col-span-1">
                      <div className="flex flex-col space-y-2">
                        <button onClick={addToCart} className="py-2 bg-moroccan-red text-white rounded-md font-medium hover:bg-opacity-90 transition-colors">
                          Acheter
                        </button>
                        <button className="py-2 bg-transparent border border-moroccan-red text-moroccan-red rounded-md font-medium hover:bg-moroccan-red/5 transition-colors">
                          Détails
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <section className="py-12 bg-white dark:bg-moroccan-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Informations sur les billets</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 dark:bg-moroccan-dark/70 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-moroccan-red">Catégories de billets</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Différentes catégories de billets sont disponibles, offrant divers emplacements dans le stade et expériences.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-moroccan-dark/70 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-moroccan-red">Politique d'annulation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Les billets peuvent être remboursés jusqu'à 30 jours avant l'événement, sous certaines conditions.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-moroccan-dark/70 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-moroccan-red">Accès au stade</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Les portes ouvrent 3 heures avant le coup d'envoi. Prévoyez votre arrivée en avance pour éviter les files d'attente.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pour toute question concernant les billets, contactez notre service client au +212 5XX-XXXXXX
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tickets;
