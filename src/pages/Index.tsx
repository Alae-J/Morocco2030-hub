
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsTicker from '../components/NewsTicker';
import HeroSection from '../components/HeroSection';
import CityCard from '../components/CityCard';
import MatchCard from '../components/MatchCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitles, NewsletterText, Cities, UpcomingMatches, CountdownNumbers, CountdownLabels } from "@/helpers/Helper";

const Index = () => {

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
              <h2 className="text-2xl md:text-3xl font-bold">{SectionTitles.hostCities}</h2>
              <Link to="/tourism" className="text-moroccan-red font-medium flex items-center hover:underline">
                Voir toutes <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Cities.map((city, index) => (
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
              <h2 className="text-2xl md:text-3xl font-bold">{SectionTitles.upcomingMatches}</h2>
              <Link to="/matches" className="text-moroccan-red font-medium flex items-center hover:underline">
                Voir tous <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {UpcomingMatches.map((match, index) => (
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{SectionTitles.newsletter}</h2>
              <p className="mb-6 opacity-90">
                {NewsletterText.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder={NewsletterText.placeholder}
                  className="flex-grow py-3 px-4 rounded-lg text-moroccan-dark focus:outline-none"
                />
                <button className="bg-moroccan-dark text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-80 transition-colors">
                  {NewsletterText.button}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section className="py-16 bg-white dark:bg-moroccan-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">{SectionTitles.countdown}</h2>
            
            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
              <div className="bg-moroccan-sand/20 rounded-lg p-4">
                <div className="text-3xl md:text-5xl font-bold text-moroccan-red">{CountdownNumbers.days}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{CountdownLabels.days}</div>
              </div>
              <div className="bg-moroccan-sand/20 rounded-lg p-4">
                <div className="text-3xl md:text-5xl font-bold text-moroccan-red">{CountdownNumbers.hours}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{CountdownLabels.hours}</div>
              </div>
              <div className="bg-moroccan-sand/20 rounded-lg p-4">
                <div className="text-3xl md:text-5xl font-bold text-moroccan-red">{CountdownNumbers.minutes}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{CountdownLabels.minutes}</div>
              </div>
              <div className="bg-moroccan-sand/20 rounded-lg p-4">
                <div className="text-3xl md:text-5xl font-bold text-moroccan-red">{CountdownNumbers.seconds}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{CountdownLabels.seconds}</div>
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
