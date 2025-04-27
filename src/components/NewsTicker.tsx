import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { NewsTickerTexts } from '@/helpers/Helper';

const NewsTicker: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-moroccan-red text-white py-2 overflow-hidden relative">
      <div className="flex news-ticker whitespace-nowrap">
        {NewsTickerTexts.map((item, index) => (
          <div key={index} className="mx-6 text-sm font-medium flex items-center">
            <span className="inline-block h-2 w-2 bg-white rounded-full mr-2"></span>
            {item[language]}
          </div>
        ))}
        {/* Repeat for continuous animation */}
        {NewsTickerTexts.map((item, index) => (
          <div key={`repeat-${index}`} className="mx-6 text-sm font-medium flex items-center">
            <span className="inline-block h-2 w-2 bg-white rounded-full mr-2"></span>
            {item[language]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
