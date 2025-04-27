
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsTicker from '../components/NewsTicker';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Flag, Globe, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { MatchesHero, MatchesTabs, MatchesCalendarData, MatchesNews, MatchesGroups, LiveScores, groupTexts, MatchesTexts } from "@/helpers/Helper";
import { useLanguage } from "@/context/LanguageContext";

const Matches = () => {
  const [selectedTab, setSelectedTab] = useState('calendar');
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NewsTicker />

      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-moroccan-red text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{MatchesHero.title[language]}</h1>
            <p className="max-w-2xl mx-auto opacity-90">
              {MatchesHero.description[language]}
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
                  <span>{MatchesTabs.calendar[language]}</span>
                </TabsTrigger>
                <TabsTrigger value="groups" className="flex items-center gap-2">
                  <Flag size={16} />
                  <span>{MatchesTabs.groups[language]}</span>
                </TabsTrigger>
                <TabsTrigger value="news" className="flex items-center gap-2">
                  <Globe size={16} />
                  <span>{MatchesTabs.news[language]}</span>
                </TabsTrigger>
              </TabsList>

              {/* Calendar Tab Content */}
              <TabsContent value="calendar">
                <div className="py-4">
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input 
                        placeholder={MatchesTexts.searchPlaceholder[language]}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-8">
                    {Object.entries(MatchesCalendarData).map(([date, matches]) => (
                      <div key={date}>
                        <h3 className="text-lg font-bold mb-4 py-2 border-b">{date}</h3>
                        <div className="space-y-4">
                          {matches.map((match, idx) => (
                            <div key={idx} className="card-morocco p-4">
                              <div className="flex items-center">
                                <div className="w-16 text-center">
                                  <div className="font-medium">{match.time}</div>
                                  <div className="text-xs px-2 py-0.5 bg-moroccan-red/10 text-moroccan-red rounded-full mt-1">{groupTexts[language]} {match.group}</div>
                                </div>
                                
                                <div className="flex-1 flex items-center justify-center">
                                  <div className="flex flex-col items-center w-24">
                                    <span className="text-3xl">{match.team1Flag}</span>
                                    <span className="font-medium text-sm mt-1">{match.team1[language]}</span>
                                  </div>
                                  
                                  <div className="mx-4 text-lg font-bold">{MatchesTexts.vs[language]}</div>
                                  
                                  <div className="flex flex-col items-center w-24">
                                    <span className="text-3xl">{match.team2Flag}</span>
                                    <span className="font-medium text-sm mt-1">{match.team2[language]}</span>
                                  </div>
                                </div>
                                
                                <div className="w-40 text-center">
                                  <div className="text-sm">{match.stadium[language]}</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">{match.city[language]}</div>
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
                    {Object.entries(MatchesGroups).map(([group, teams]) => (
                      <div key={group} className="card-morocco">
                        <div className="p-4 border-b">
                          <h3 className="font-bold">{groupTexts[language]} {group}</h3>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-gray-50 dark:bg-moroccan-dark/70 text-sm">
                                <th className="py-2 px-4 text-left">{MatchesTexts.tableHeaders.team[language]}</th>
                                <th className="py-2 px-2 text-center">{MatchesTexts.tableHeaders.points[language]}</th>
                                <th className="py-2 px-2 text-center">{MatchesTexts.tableHeaders.played[language]}</th>
                                <th className="py-2 px-2 text-center">{MatchesTexts.tableHeaders.won[language]}</th>
                                <th className="py-2 px-2 text-center">{MatchesTexts.tableHeaders.draw[language]}</th>
                                <th className="py-2 px-2 text-center">{MatchesTexts.tableHeaders.lost[language]}</th>
                                <th className="py-2 px-2 text-center">{MatchesTexts.tableHeaders.goalsFor[language]}</th>
                                <th className="py-2 px-2 text-center">{MatchesTexts.tableHeaders.goalsAgainst[language]}</th>
                                <th className="py-2 px-2 text-center">{MatchesTexts.tableHeaders.goalDifference[language]}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {teams.map((team, idx) => (
                                <tr key={idx} className="border-t">
                                  <td className="py-3 px-4">
                                    <div className="flex items-center">
                                      <span className="mr-2">{team.flag}</span>
                                      <span className="font-medium">{team.team[language]}</span>
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
                    {MatchesNews.map((item) => (
                      <div key={item.id} className="card-morocco flex flex-col md:flex-row overflow-hidden">
                        <div className="md:w-1/3 h-48 md:h-auto">
                          <img 
                            src={item.image} 
                            alt={item.title[language]} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 md:w-2/3 flex flex-col">
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.date[language]}</div>
                          <h3 className="font-bold text-lg mb-2">{item.title[language]}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">{item.excerpt[language]}</p>
                          <button className="mt-4 text-moroccan-red font-medium hover:underline text-left">
                            {MatchesTexts.readMore[language]}
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
            <h2 className="text-2xl font-bold mb-6">{LiveScores.LiveScoresTitle[language]}</h2>
            
            <div className="bg-white dark:bg-moroccan-dark shadow-md rounded-xl p-6 text-center">
              <div className="text-lg">
                {LiveScores.LiveScoresTexts.noMatch[language]}
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                {LiveScores.LiveScoresTexts.info[language]}
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
