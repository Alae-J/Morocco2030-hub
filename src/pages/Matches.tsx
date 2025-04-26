
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsTicker from '../components/NewsTicker';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Flag, Globe, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Matches = () => {
  const [selectedTab, setSelectedTab] = useState('calendar');
  
  // Données factices pour le calendrier des matchs
  const matchesByDate = {
    "15 Juin 2030": [
      {
        time: "17:00",
        team1: "Maroc",
        team1Flag: "🇲🇦",
        team2: "Espagne",
        team2Flag: "🇪🇸",
        group: "A",
        stadium: "Stade Mohammed V",
        city: "Casablanca"
      },
      {
        time: "20:00",
        team1: "France",
        team1Flag: "🇫🇷",
        team2: "Argentine",
        team2Flag: "🇦🇷",
        group: "B",
        stadium: "Stade de Rabat",
        city: "Rabat"
      }
    ],
    "16 Juin 2030": [
      {
        time: "17:00",
        team1: "Allemagne",
        team1Flag: "🇩🇪",
        team2: "Brésil",
        team2Flag: "🇧🇷",
        group: "C",
        stadium: "Stade de Marrakech",
        city: "Marrakech"
      },
      {
        time: "20:00",
        team1: "Portugal",
        team1Flag: "🇵🇹",
        team2: "Pays-Bas",
        team2Flag: "🇳🇱",
        group: "D",
        stadium: "Grand Stade de Tanger",
        city: "Tanger"
      }
    ],
    "17 Juin 2030": [
      {
        time: "17:00",
        team1: "Angleterre",
        team1Flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        team2: "Italie",
        team2Flag: "🇮🇹",
        group: "E",
        stadium: "Stade Adrar",
        city: "Agadir"
      },
      {
        time: "20:00",
        team1: "Belgique",
        team1Flag: "🇧🇪",
        team2: "Croatie",
        team2Flag: "🇭🇷",
        group: "F",
        stadium: "Stade de Fès",
        city: "Fès"
      }
    ]
  };
  
  // Données factices pour les actualités
  const news = [
    {
      id: 1,
      title: "Le Maroc dévoile les plans des stades rénovés pour 2030",
      date: "25 Avril 2025",
      image: "https://images.unsplash.com/photo-1508098682722-e99c643e7f3b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      excerpt: "Les plans de rénovation des six stades qui accueilleront les matchs de la Coupe du Monde 2030 ont été dévoilés aujourd'hui."
    },
    {
      id: 2,
      title: "La FIFA confirme le format à 48 équipes pour 2030",
      date: "18 Avril 2025",
      image: "https://images.unsplash.com/photo-1529629468183-b9c986feda2d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      excerpt: "Le conseil de la FIFA a officiellement confirmé que le format à 48 équipes sera maintenu pour la Coupe du Monde 2030."
    },
    {
      id: 3,
      title: "Le programme des volontaires sera lancé en 2028",
      date: "10 Avril 2025",
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      excerpt: "Le comité d'organisation a annoncé que le programme de recrutement des volontaires débutera en janvier 2028."
    },
    {
      id: 4,
      title: "Les qualifications commenceront en mars 2028",
      date: "5 Avril 2025",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      excerpt: "La FIFA a annoncé le calendrier des qualifications pour la Coupe du Monde 2030, qui débuteront en mars 2028."
    }
  ];
  
  // Données factices pour les groupes
  const groups = {
    "A": [
      {team: "Maroc", flag: "🇲🇦", points: 9, played: 3, won: 3, draw: 0, lost: 0, gf: 7, ga: 1},
      {team: "Espagne", flag: "🇪🇸", points: 6, played: 3, won: 2, draw: 0, lost: 1, gf: 5, ga: 2},
      {team: "Canada", flag: "🇨🇦", points: 3, played: 3, won: 1, draw: 0, lost: 2, gf: 2, ga: 5},
      {team: "Japon", flag: "🇯🇵", points: 0, played: 3, won: 0, draw: 0, lost: 3, gf: 1, ga: 7}
    ],
    "B": [
      {team: "France", flag: "🇫🇷", points: 7, played: 3, won: 2, draw: 1, lost: 0, gf: 6, ga: 2},
      {team: "Argentine", flag: "🇦🇷", points: 6, played: 3, won: 2, draw: 0, lost: 1, gf: 5, ga: 3},
      {team: "Nigeria", flag: "🇳🇬", points: 4, played: 3, won: 1, draw: 1, lost: 1, gf: 3, ga: 3},
      {team: "Australie", flag: "🇦🇺", points: 0, played: 3, won: 0, draw: 0, lost: 3, gf: 1, ga: 7}
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NewsTicker />

      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-moroccan-red text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Matchs et Actualités</h1>
            <p className="max-w-2xl mx-auto opacity-90">
              Suivez tous les matchs, résultats et les dernières actualités de la Coupe du Monde 2030.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-moroccan-dark">
          <div className="container mx-auto px-4 py-6">
            <Tabs defaultValue="calendar" value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="calendar" className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Calendrier</span>
                </TabsTrigger>
                <TabsTrigger value="groups" className="flex items-center gap-2">
                  <Flag size={16} />
                  <span>Groupes</span>
                </TabsTrigger>
                <TabsTrigger value="news" className="flex items-center gap-2">
                  <Globe size={16} />
                  <span>Actualités</span>
                </TabsTrigger>
              </TabsList>

              {/* Calendar Tab Content */}
              <TabsContent value="calendar">
                <div className="py-4">
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input 
                        placeholder="Rechercher par équipe, ville ou stade..." 
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-8">
                    {Object.entries(matchesByDate).map(([date, matches]) => (
                      <div key={date}>
                        <h3 className="text-lg font-bold mb-4 py-2 border-b">{date}</h3>
                        <div className="space-y-4">
                          {matches.map((match, idx) => (
                            <div key={idx} className="card-morocco p-4">
                              <div className="flex items-center">
                                <div className="w-16 text-center">
                                  <div className="font-medium">{match.time}</div>
                                  <div className="text-xs px-2 py-0.5 bg-moroccan-red/10 text-moroccan-red rounded-full mt-1">Groupe {match.group}</div>
                                </div>
                                
                                <div className="flex-1 flex items-center justify-center">
                                  <div className="flex flex-col items-center w-24">
                                    <span className="text-3xl">{match.team1Flag}</span>
                                    <span className="font-medium text-sm mt-1">{match.team1}</span>
                                  </div>
                                  
                                  <div className="mx-4 text-lg font-bold">VS</div>
                                  
                                  <div className="flex flex-col items-center w-24">
                                    <span className="text-3xl">{match.team2Flag}</span>
                                    <span className="font-medium text-sm mt-1">{match.team2}</span>
                                  </div>
                                </div>
                                
                                <div className="w-40 text-center">
                                  <div className="text-sm">{match.stadium}</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">{match.city}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Groups Tab Content */}
              <TabsContent value="groups">
                <div className="py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(groups).map(([group, teams]) => (
                      <div key={group} className="card-morocco">
                        <div className="p-4 border-b">
                          <h3 className="font-bold">Groupe {group}</h3>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-gray-50 dark:bg-moroccan-dark/70 text-sm">
                                <th className="py-2 px-4 text-left">Équipe</th>
                                <th className="py-2 px-2 text-center">Pts</th>
                                <th className="py-2 px-2 text-center">J</th>
                                <th className="py-2 px-2 text-center">G</th>
                                <th className="py-2 px-2 text-center">N</th>
                                <th className="py-2 px-2 text-center">P</th>
                                <th className="py-2 px-2 text-center">BP</th>
                                <th className="py-2 px-2 text-center">BC</th>
                                <th className="py-2 px-2 text-center">+/-</th>
                              </tr>
                            </thead>
                            <tbody>
                              {teams.map((team, idx) => (
                                <tr key={idx} className="border-t">
                                  <td className="py-3 px-4">
                                    <div className="flex items-center">
                                      <span className="mr-2">{team.flag}</span>
                                      <span className="font-medium">{team.team}</span>
                                    </div>
                                  </td>
                                  <td className="py-3 px-2 text-center font-bold">{team.points}</td>
                                  <td className="py-3 px-2 text-center">{team.played}</td>
                                  <td className="py-3 px-2 text-center">{team.won}</td>
                                  <td className="py-3 px-2 text-center">{team.draw}</td>
                                  <td className="py-3 px-2 text-center">{team.lost}</td>
                                  <td className="py-3 px-2 text-center">{team.gf}</td>
                                  <td className="py-3 px-2 text-center">{team.ga}</td>
                                  <td className="py-3 px-2 text-center">{team.gf - team.ga}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* News Tab Content */}
              <TabsContent value="news">
                <div className="py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {news.map((item) => (
                      <div key={item.id} className="card-morocco flex flex-col md:flex-row overflow-hidden">
                        <div className="md:w-1/3 h-48 md:h-auto">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 md:w-2/3 flex flex-col">
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.date}</div>
                          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">{item.excerpt}</p>
                          <button className="mt-4 text-moroccan-red font-medium hover:underline text-left">
                            Lire l'article complet
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Live Scores (Placeholder) */}
        <section className="py-10 bg-gray-50 dark:bg-moroccan-dark/80">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Scores en Direct</h2>
            
            <div className="bg-white dark:bg-moroccan-dark shadow-md rounded-xl p-6 text-center">
              <div className="text-lg">
                Aucun match en cours actuellement
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Les scores en direct seront disponibles pendant la compétition
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Matches;
