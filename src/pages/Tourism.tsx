
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsTicker from '../components/NewsTicker';
import TouristSpotCard from '../components/TouristSpotCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Utensils, Hotel, Camera, Map, Bus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Tourism = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'attractions', 'hotels', 'restaurants', 'transport'];
  
  // Données factices pour les lieux touristiques
  const spots = [
    {
      id: 1,
      name: "Médina de Marrakech",
      image: "https://images.unsplash.com/photo-1597212720058-61a925642c13?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      rating: 4.8,
      location: "Marrakech",
      description: "Explorez les souks animés et découvrez l'artisanat traditionnel marocain au cœur de cette médina inscrite au patrimoine mondial.",
      category: "attractions"
    },
    {
      id: 2,
      name: "Royal Mansour",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      rating: 4.9,
      location: "Marrakech",
      description: "Un palace luxueux offrant une expérience authentique avec des riads privés, des jardins somptueux et une cuisine raffinée.",
      category: "hotels"
    },
    {
      id: 3,
      name: "La Sqala",
      image: "https://images.unsplash.com/photo-1541518763669-27fef9b35497?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      rating: 4.6,
      location: "Casablanca",
      description: "Restaurant situé dans une ancienne forteresse portugaise, proposant des plats marocains traditionnels dans un cadre exceptionnel.",
      category: "restaurants"
    },
    {
      id: 4,
      name: "Chefchaouen",
      image: "https://images.unsplash.com/photo-1553899017-4ff8eeea5f3b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      rating: 4.9,
      location: "Nord du Maroc",
      description: "La célèbre ville bleue nichée dans les montagnes du Rif, connue pour ses ruelles peintes en bleu et son ambiance unique.",
      category: "attractions"
    },
    {
      id: 5,
      name: "Four Seasons Casablanca",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      rating: 4.7,
      location: "Casablanca",
      description: "Hôtel de luxe en bord de mer offrant une vue imprenable sur l'océan Atlantique et des chambres élégantes.",
      category: "hotels"
    },
    {
      id: 6,
      name: "Al Fassia",
      image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      rating: 4.5,
      location: "Marrakech",
      description: "Restaurant tenu exclusivement par des femmes, proposant une cuisine marocaine authentique et savoureuse.",
      category: "restaurants"
    },
    {
      id: 7,
      name: "Service de Taxis Maroc",
      image: "https://images.unsplash.com/photo-1503783641174-cf9ab62d9bd0?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      rating: 4.3,
      location: "Tout le Maroc",
      description: "Service de transport fiable pour se déplacer facilement entre les villes hôtes pendant la Coupe du Monde.",
      category: "transport"
    },
    {
      id: 8,
      name: "Jardin Majorelle",
      image: "https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      rating: 4.7,
      location: "Marrakech",
      description: "Magnifique jardin botanique créé par l'artiste français Jacques Majorelle et plus tard acquis par Yves Saint Laurent.",
      category: "attractions"
    }
  ];

  const filteredSpots = selectedCategory === 'all' ? spots : spots.filter(spot => spot.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'all': return <Map size={20} />;
      case 'attractions': return <Camera size={20} />;
      case 'hotels': return <Hotel size={20} />;
      case 'restaurants': return <Utensils size={20} />;
      case 'transport': return <Bus size={20} />;
      default: return <Map size={20} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NewsTicker />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1539020140153-e8c237112e3c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
              alt="Moroccan Tourism"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 h-full flex items-end pb-16 relative z-10">
            <div>
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                Découvrez le Maroc
              </h1>
              <p className="text-white text-lg md:text-xl max-w-2xl mb-8">
                Explorez les merveilles du royaume, des médinas animées aux sommets de l'Atlas, en passant par les plages de sable doré.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-moroccan-red hover:bg-opacity-90">Explorer les Attractions</Button>
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white">
                  Planifier votre Séjour
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="bg-white dark:bg-moroccan-dark py-6 shadow-md sticky top-[69px] z-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Rechercher des lieux, hôtels, restaurants..." 
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter size={16} />
                  <span>Filtres</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-50 dark:bg-moroccan-dark/80 py-8">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid w-full grid-cols-5">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="flex items-center gap-2"
                  >
                    {getCategoryIcon(category)}
                    <span className="capitalize">{category === 'all' ? 'Tout' : category}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {filteredSpots.map((spot) => (
                      <TouristSpotCard 
                        key={spot.id}
                        name={spot.name}
                        image={spot.image}
                        rating={spot.rating}
                        location={spot.location}
                        description={spot.description}
                        category={spot.category === 'attractions' ? 'Attraction' : 
                                spot.category === 'hotels' ? 'Hôtel' : 
                                spot.category === 'restaurants' ? 'Restaurant' : 'Transport'}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Featured Cities */}
        <section className="py-16 bg-white dark:bg-moroccan-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Villes Hôtes à Découvrir</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative h-80 rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1577147443947-7703c72c3678?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
                  alt="Casablanca"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Casablanca</h3>
                  <p className="text-white/80 text-sm mb-4">La capitale économique du Maroc, mélange d'architecture moderne et traditionnelle.</p>
                  <Button className="bg-moroccan-red hover:bg-opacity-90">Explorer</Button>
                </div>
              </div>
              
              <div className="relative h-80 rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1579017464725-b4ee9fe3e53a?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
                  alt="Rabat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Rabat</h3>
                  <p className="text-white/80 text-sm mb-4">La capitale administrative, avec ses jardins, monuments et front de mer.</p>
                  <Button className="bg-moroccan-red hover:bg-opacity-90">Explorer</Button>
                </div>
              </div>
              
              <div className="relative h-80 rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1597212720058-61a925642c13?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
                  alt="Marrakech"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Marrakech</h3>
                  <p className="text-white/80 text-sm mb-4">La ville ocre, célèbre pour sa médina, ses souks et sa place Jemaa el-Fna.</p>
                  <Button className="bg-moroccan-red hover:bg-opacity-90">Explorer</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Experiences */}
        <section className="py-16 bg-gray-50 dark:bg-moroccan-dark/80">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Expériences Culturelles</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mb-10">
              Immergez-vous dans la riche culture marocaine pour une expérience authentique pendant votre séjour.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-morocco p-4 flex flex-col h-full">
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1489693420562-e5ea8a8fdcf4?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
                    alt="Cuisine Marocaine"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Cuisine Marocaine</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Participez à des cours de cuisine et apprenez à préparer des tajines, couscous et pâtisseries traditionnelles.
                </p>
                <Button className="w-full bg-moroccan-green hover:bg-opacity-90">Réserver un Cours</Button>
              </div>
              
              <div className="card-morocco p-4 flex flex-col h-full">
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1598974357809-112ca5f7e9f9?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
                    alt="Artisanat Marocain"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Artisanat Marocain</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Découvrez le savoir-faire des artisans locaux : poterie, tissage de tapis, travail du cuir et bijouterie.
                </p>
                <Button className="w-full bg-moroccan-green hover:bg-opacity-90">Visiter les Ateliers</Button>
              </div>
              
              <div className="card-morocco p-4 flex flex-col h-full">
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1595646699244-3bfa47a606ac?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
                    alt="Musique et Danse"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Musique et Danse</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Assistez à des spectacles de musique gnaoua, andalouse et berbère, ainsi qu'à des danses traditionnelles.
                </p>
                <Button className="w-full bg-moroccan-green hover:bg-opacity-90">Réserver un Spectacle</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tourism;
