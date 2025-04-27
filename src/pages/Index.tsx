import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsTicker from '../components/NewsTicker';
import HeroSection from '../components/HeroSection';
import CityCard from '../components/CityCard';
import MatchCard from '../components/MatchCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { seeAllTexts, SectionTitles, NewsletterText, Cities, UpcomingMatches, CountdownNumbers, CountdownLabels } from "@/helpers/Helper";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {

  const { language } = useLanguage();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2030-06-15T00:00:00').getTime(); // June 15, 2030

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

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
              <h2 className="text-2xl md:text-3xl font-bold">{SectionTitles.hostCities[language]}</h2>
              <Link to="/tourism" className="text-moroccan-red font-medium flex items-center hover:underline">
                {seeAllTexts[language].matches} <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Cities.map((city, index) => (
                <CityCard 
                  key={index}
                  name={city.name[language]}
                  image={city.image}
                  description={city.description[language]}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Matches Section */}
        <section className="py-16 bg-gray-50 dark:bg-moroccan-dark/80">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">{SectionTitles.upcomingMatches[language]}</h2>
              <Link to="/matches" className="text-moroccan-red font-medium flex items-center hover:underline">
                Voir tous <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {UpcomingMatches.map((match, index) => (
                <MatchCard 
                  key={index}
                  team1={match.team1[language]}
                  team2={match.team2[language]}
                  date={match.date[language]}
                  time={match.time}
                  stadium={match.stadium[language]}
                  city={match.city[language]}
                  group={match.group} // ✅ Dynamic group!
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-moroccan-red text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{SectionTitles.newsletter[language]}</h2>
              <p className="mb-6 opacity-90">
                {NewsletterText.description[language]}
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder={NewsletterText.placeholder[language]}
                  className="flex-grow py-3 px-4 rounded-lg text-moroccan-dark focus:outline-none"
                />
                <button className="bg-moroccan-dark text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-80 transition-colors">
                  {NewsletterText.button[language]}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section className="py-16 bg-white dark:bg-moroccan-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">{SectionTitles.countdown[language]}</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto">
              {[
                { value: countdown.days, label: CountdownLabels.days[language] },
                { value: countdown.hours, label: CountdownLabels.hours[language] },
                { value: countdown.minutes, label: CountdownLabels.minutes[language] },
                { value: countdown.seconds, label: CountdownLabels.seconds[language] },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center bg-moroccan-sand/20 rounded-lg px-6 py-6 min-w-[80px]">
                  <div className="text-4xl md:text-5xl font-bold text-moroccan-red break-words">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
