import { Link } from 'react-router-dom';
import { Ticket, Map, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { HeroSectionTexts } from '@/helpers/Helper';

const HeroSection = () => {
  const { language } = useLanguage();

  return (
    <div className="relative bg-moroccan-red text-white overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '24px 24px'
          }}>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {HeroSectionTexts.title[language]}
            <span className="block text-moroccan-sand">{HeroSectionTexts.subtitle[language]}</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            {HeroSectionTexts.description[language]}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tickets" className="btn-primary flex items-center justify-center">
              <Ticket className="mr-2" size={20} />
              {HeroSectionTexts.buttons.tickets[language]}
            </Link>
            <Link to="/tourism" className="btn-secondary flex items-center justify-center">
              <Map className="mr-2" size={20} />
              {HeroSectionTexts.buttons.tourism[language]}
            </Link>
            <Link to="/matches" className="btn-accent flex items-center justify-center">
              <Calendar className="mr-2" size={20} />
              {HeroSectionTexts.buttons.matches[language]}
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {HeroSectionTexts.stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-4xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm opacity-80">{stat.label[language]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="currentColor" fillOpacity="1" d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,64C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
