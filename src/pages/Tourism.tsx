
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsTicker from '../components/NewsTicker';
import TouristSpotCard from '../components/TouristSpotCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Utensils, Hotel, Camera, Map, Bus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Cities, TourismHero, TourismCategories, TourismSpots, TourismSectionTitles, TourismCulturalExperiences, TourismTexts } from "@/helpers/Helper";
import { useLanguage } from "@/context/LanguageContext";
import ChatBot from '@/components/ChatBox';


const Tourism = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

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
              src="https://images.unsplash.com/flagged/photo-1555169048-3c4845cfcf1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Moroccan Tourism"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 h-full flex items-end pb-16 relative z-10">
            <div>
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                {TourismHero.title[language]}
              </h1>
              <p className="text-white text-lg md:text-xl max-w-2xl mb-8">
                {TourismHero.description[language]}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-moroccan-red hover:bg-opacity-90">
                  {TourismTexts.exploreAttractions[language]}
                </Button>
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white">
                  {TourismTexts.planStay[language]}
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
                  placeholder={TourismTexts.searchPlaceholder[language]} 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                {/* <Button variant="outline" className="flex items-center gap-2">
                  <Filter size={16} />
                  <span>{TourismTexts.filters[language]}</span>
                </Button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-50 dark:bg-moroccan-dark/80 py-8">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid w-full grid-cols-5">
                {TourismCategories.map((category) => (
                  <TabsTrigger 
                    key={category.value} 
                    value={category.value}
                    className="flex items-center gap-2"
                  >
                    {getCategoryIcon(category.value)}
                    <span className="capitalize">{category.label[language]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {TourismCategories.map((category) => {
                const filteredSpots = TourismSpots.filter((spot) => {
                  const matchesCategory = category.value === 'all' || spot.category === category.value;
                  const matchesSearch = spot.name[language].toLowerCase().includes(searchTerm.toLowerCase()) || 
                                        spot.location[language].toLowerCase().includes(searchTerm.toLowerCase());
                
                  return matchesCategory && matchesSearch;
                });
                

                return (
                  <TabsContent key={category.value} value={category.value}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                      {filteredSpots.map((spot) => (
                        <TouristSpotCard 
                          key={spot.id}
                          name={spot.name[language]}
                          image={spot.image}
                          rating={spot.rating}
                          location={spot.location[language]}
                          description={spot.description[language]}
                          category={spot.category === 'attractions' ? 'Attraction' : 
                                  spot.category === 'hotels' ? 'Hôtel' : 
                                  spot.category === 'restaurants' ? 'Restaurant' : 'Transport'}
                        />
                      ))}
                    </div>
                  </TabsContent>
                )
              })}
            </Tabs>
          </div>
        </section>

        {/* Featured Cities */}
        <section className="py-16 bg-white dark:bg-moroccan-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">{TourismSectionTitles.hostCities[language]}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Cities.map((city, idx) => (
              <div key={idx} className="relative h-80 rounded-xl overflow-hidden group">
                <img 
                  src={city.image}
                  alt={city.name[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{city.name[language]}</h3>
                  <p className="text-white/80 text-sm mb-4">{city.description[language]}</p>
                  <Button className="bg-moroccan-red hover:bg-opacity-90">
                    {TourismTexts.exploreButton[language]}
                  </Button>
                </div>
              </div>
            ))}

            </div>
          </div>
        </section>

        {/* Cultural Experiences */}
        <section className="py-16 bg-gray-50 dark:bg-moroccan-dark/80">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{TourismSectionTitles.culturalExperiences[language]}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mb-10">
              {TourismTexts.culturalExperienceIntro[language]}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TourismCulturalExperiences.map((experience, idx) => (
                <div key={idx} className="card-morocco p-4 flex flex-col h-full">
                  <div className="h-48 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={experience.image}
                      alt={experience.title[language]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{experience.title[language]}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {experience.description[language]}
                  </p>
                  <Button className="w-full bg-moroccan-green hover:bg-opacity-90">{experience.button[language]}</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Tourism;
