
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsTicker from '../components/NewsTicker';
import { Filter, Calendar, Map, Search, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { TicketHero, TicketTabs, TicketMatches, TicketInfo, TicketTexts } from "@/helpers/Helper";
import { useLanguage } from "@/context/LanguageContext";

const Tickets = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [cartCount, setCartCount] = useState(0);

  const { language } = useLanguage();
  

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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{TicketHero.title[language]}</h1>
            <p className="max-w-2xl mx-auto opacity-90">
              {TicketHero.description[language]}
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
                    placeholder={TicketTexts.searchPlaceholder[language]} 
                    className="pl-10"
                  />
                </div>
                
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter size={16} />
                  <span className="hidden md:inline">{TicketTexts.filters[language]}</span>
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{TicketTexts.date[language]}</span>
                </Button>
                
                <Button variant="outline" className="flex items-center gap-2">
                  <Map size={16} />
                  <span>{TicketTexts.location[language]}</span>
                </Button>
                
                <Button variant="default" className="bg-moroccan-red relative">
                  <ShoppingCart size={18} />
                  <span className="ml-2 hidden md:inline">{TicketTexts.cart[language]}</span>
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
                {TicketTabs.upcoming[language]}
              </button>
              <button 
                className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === 'groups' ? 'border-moroccan-red text-moroccan-red' : 'border-transparent text-gray-600 dark:text-gray-400'}`}
                onClick={() => setActiveTab('groups')}
              >
                {TicketTabs.groups[language]}
              </button>
              <button 
                className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === 'knockout' ? 'border-moroccan-red text-moroccan-red' : 'border-transparent text-gray-600 dark:text-gray-400'}`}
                onClick={() => setActiveTab('knockout')}
              >
                {TicketTabs.knockout[language]}
              </button>
              <button 
                className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === 'final' ? 'border-moroccan-red text-moroccan-red' : 'border-transparent text-gray-600 dark:text-gray-400'}`}
                onClick={() => setActiveTab('final')}
              >
                {TicketTabs.final[language]}
              </button>
            </div>
          </div>
        </div>

        {/* Match Listings */}
        <div className="bg-gray-50 dark:bg-moroccan-dark/80 py-8">
          <div className="container mx-auto px-4">
            <div className="space-y-4">
              {TicketMatches.map((match) => (
                <div key={match.id} className="card-morocco p-4">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    {/* Date & Location */}
                    <div className="md:col-span-1">
                      <div className="flex flex-col">
                        <div className="font-medium text-moroccan-red">{match.date[language]}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{match.time}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{match.stadium[language]}, {match.city[language]}</div>
                      </div>
                    </div>
                    
                    {/* Teams */}
                    <div className="md:col-span-2">
                      <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl">{match.team1Flag}</span>
                          <span className="font-medium mt-1">{match.team1[language]}</span>
                        </div>
                        
                        <div className="mx-6 text-lg font-bold">{TicketTexts.vs[language]}</div>
                        
                        <div className="flex flex-col items-center">
                          <span className="text-3xl">{match.team2Flag}</span>
                          <span className="font-medium mt-1">{match.team2[language]}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price Category */}
                    <div className="md:col-span-1">
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{TicketTexts.category1[language]}</span>
                          <span className="font-medium">{match.prices.category1} MAD</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{TicketTexts.category2[language]}</span>
                          <span className="font-medium">{match.prices.category2} MAD</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{TicketTexts.category3[language]}</span>
                          <span className="font-medium">{match.prices.category3} MAD</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action */}
                    <div className="md:col-span-1">
                      <div className="flex flex-col space-y-2">
                        <button onClick={addToCart} className="py-2 bg-moroccan-red text-white rounded-md font-medium hover:bg-opacity-90 transition-colors">
                          {TicketTexts.buy[language]}
                        </button>
                        <button className="py-2 bg-transparent border border-moroccan-red text-moroccan-red rounded-md font-medium hover:bg-moroccan-red/5 transition-colors">
                          {TicketTexts.details[language]}
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
            <h2 className="text-2xl font-bold mb-6 text-center">{TicketTexts.ticketInfoTitle[language]}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 dark:bg-moroccan-dark/70 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-moroccan-red">{TicketInfo.categories.title[language]}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {TicketInfo.categories.description[language]}
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-moroccan-dark/70 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-moroccan-red">{TicketInfo.cancellation.title[language]}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                {TicketInfo.cancellation.description[language]}
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-moroccan-dark/70 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-moroccan-red">{TicketInfo.access.title[language]}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                {TicketInfo.access.description[language]}
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
              {TicketInfo.customerSupport[language]}
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
