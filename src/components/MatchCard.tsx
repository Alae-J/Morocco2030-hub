import React from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { MatchCardTexts, groupTexts } from '@/helpers/Helper';
import { Link } from 'react-router-dom';

interface MatchCardProps {
  id: number;
  team1: string;
  team2: string;
  date: string;
  time: string;
  stadium: string;
  city: string;
  group: string;
}

const MatchCard: React.FC<MatchCardProps> = ({ 
  id,
  team1, 
  team2, 
  date, 
  time, 
  stadium, 
  city,
  group
}) => {
  const { language } = useLanguage();

  return (
    <div className="card-morocco p-4 flex flex-col">
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Calendar size={14} className="mr-1" />
          <span>{date} • {time}</span>
        </div>

        {group && (
          <span className="text-xs font-medium px-2 py-1 bg-moroccan-sand/20 text-moroccan-dark dark:text-moroccan-sand rounded-full">
            {groupTexts[language]} {group}
          </span>
        )}
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col items-center text-center w-5/12">
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 mb-2 flex items-center justify-center overflow-hidden">
            <span className="font-bold text-sm">{team1.substring(0, 3)}</span>
          </div>
          <span className="font-medium text-sm">{team1}</span>
        </div>
        
        <div className="w-2/12 text-center">
          <span className="text-lg font-bold">{MatchCardTexts.vs[language]}</span>
        </div>
        
        <div className="flex flex-col items-center text-center w-5/12">
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 mb-2 flex items-center justify-center overflow-hidden">
            <span className="font-bold text-sm">{team2.substring(0, 3)}</span>
          </div>
          <span className="font-medium text-sm">{team2}</span>
        </div>
      </div>

      <div className="mt-auto">
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <span>{stadium}, {city}</span>
        </div>
        <Link to={`/buy-ticket/${id}`}>
          <button className="w-full mt-2 py-2 bg-moroccan-red text-white rounded-md font-medium hover:bg-opacity-90 transition-colors">
            {MatchCardTexts.buyTickets[language]}
          </button>
        </Link>
      </div>

    </div>
  );
};

export default MatchCard;
