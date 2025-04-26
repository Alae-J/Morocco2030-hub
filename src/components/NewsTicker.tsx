
import React from 'react';

const NewsTicker: React.FC = () => {
  // Exemple de nouvelles pour le ticker
  const news = [
    "Lancement officiel du logo Morocco 2030 prévu le mois prochain",
    "Le stade de Rabat en avance sur les travaux de rénovation",
    "La FIFA confirme 48 équipes pour la Coupe du Monde 2030",
    "Des programmes de volontariat ouvriront prochainement",
    "Le système de billetterie ouvrira en 2027"
  ];

  return (
    <div className="bg-moroccan-red text-white py-2 overflow-hidden relative">
      <div className="flex news-ticker whitespace-nowrap">
        {news.map((item, index) => (
          <div key={index} className="mx-6 text-sm font-medium flex items-center">
            <span className="inline-block h-2 w-2 bg-white rounded-full mr-2"></span>
            {item}
          </div>
        ))}
        {/* Répétition pour l'animation continue */}
        {news.map((item, index) => (
          <div key={`repeat-${index}`} className="mx-6 text-sm font-medium flex items-center">
            <span className="inline-block h-2 w-2 bg-white rounded-full mr-2"></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
