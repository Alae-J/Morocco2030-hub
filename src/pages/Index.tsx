
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsTicker from '../components/NewsTicker';
import HeroSection from '../components/HeroSection';
import CityCard from '../components/CityCard';
import MatchCard from '../components/MatchCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Données factices pour les villes
  const cities = [
    {
      name: "Casablanca",
      image: "https://images.unsplash.com/photo-1577147443947-7703c72c3678?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      description: "Découvrez le stade ultramoderne de Casablanca et l'ambiance vibrante de la plus grande ville du Maroc."
    },
    {
      name: "Rabat",
      image: "https://images.unsplash.com/photo-1579017464725-b4ee9fe3e53a?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      description: "Visitez la capitale du royaume, avec son mélange unique d'histoire, de culture et d'architecture moderne."
    },
    {
      name: "Marrakech",
      image: "https://images.unsplash.com/photo-1597212720058-61a925642c13?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      description: "Laissez-vous séduire par la ville ocre, ses souks animés et sa place Jemaa el-Fna légendaire."
    },
    {
      name: "Tanger",
      image: "https://images.unsplash.com/photo-1530524860484-63d0aa3d2689?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      description: "Point de rencontre entre l'Afrique et l'Europe, Tanger offre des vues imprenables sur la Méditerranée."
    }
  ];

  // Données factices pour les matchs
  const upcomingMatches = [
    {
      team1: "Maroc",
      team2: "Espagne",
      date: "15 Juin 2030",
      time: "20:00",
      stadium: "Stade Mohammed V",
      city: "Casablanca"
    },
    {
      team1: "France",
      team2: "Brésil",
      date: "16 Juin 2030",
      time: "17:00",
      stadium: "Stade de Rabat",
      city: "Rabat"
    },
    {
      team1: "Argentine",
      team2: "Portugal",
      date: "17 Juin 2030",
      time: "20:00",
      stadium: "Stade de Marrakech",
      city: "Marrakech"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NewsTicker />

      <main className="flex-grow">
        <HeroSection />

        {/* Cities Section */}
        <section className="py-16 bg-white dark:bg-moroccan-dark">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Villes Hôtes</h2>
              <Link to="/tourism" className="text-moroccan-red font-medium flex items-center hover:underline">
                Voir toutes <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((city, index) => (
                <CityCard 
                  key={index}
                  name={city.name}
                  image={city.image}
                  description={city.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Matches Section */}
        <section className="py-16 bg-gray-50 dark:bg-moroccan-dark/80">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Matchs à Venir</h2>
              <Link to="/matches" className="text-moroccan-red font-medium flex items-center hover:underline">
                Voir tous <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingMatches.map((match, index) => (
                <MatchCard 
                  key={index}
                  team1={match.team1}
                  team2={match.team2}
                  date={match.date}
                  time={match.time}
                  stadium={match.stadium}
                  city={match.city}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-moroccan-red text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Restez Informé</h2>
              <p className="mb-6 opacity-90">
                Abonnez-vous à notre newsletter pour recevoir les dernières actualités, 
                offres spéciales et mises à jour concernant la Coupe du Monde 2030.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-grow py-3 px-4 rounded-lg text-moroccan-dark focus:outline-none"
                />
                <button className="bg-moroccan-dark text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-80 transition-colors">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section className="py-16 bg-white dark:bg-moroccan-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Compte à Rebours</h2>
            
            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
              <div className="bg-moroccan-sand/20 rounded-lg p-4">
                <div className="text-3xl md:text-5xl font-bold text-moroccan-red">1825</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Jours</div>
              </div>
              <div className="bg-moroccan-sand/20 rounded-lg p-4">
                <div className="text-3xl md:text-5xl font-bold text-moroccan-red">12</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Heures</div>
              </div>
              <div className="bg-moroccan-sand/20 rounded-lg p-4">
                <div className="text-3xl md:text-5xl font-bold text-moroccan-red">34</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Minutes</div>
              </div>
              <div className="bg-moroccan-sand/20 rounded-lg p-4">
                <div className="text-3xl md:text-5xl font-bold text-moroccan-red">56</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Secondes</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
