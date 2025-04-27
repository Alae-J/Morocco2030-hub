
export const SectionTitles = {
    hostCities: "Villes Hôtes",
    upcomingMatches: "Matchs à Venir",
    newsletter: "Restez Informé",
    countdown: "Compte à Rebours",
};

export const NewsletterText = {
    description: "Abonnez-vous à notre newsletter pour recevoir les dernières actualités, offres spéciales et mises à jour concernant la Coupe du Monde 2030.",
    placeholder: "Votre adresse email",
    button: "S'abonner",
};

export const Cities = [
    {
        name: "Casablanca",
        image: "https://images.unsplash.com/photo-1577147443947-7703c72c3678?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
        description: "Découvrez le stade ultramoderne de Casablanca et l'ambiance vibrante de la plus grande ville du Maroc."
    },
    {
        name: "Rabat",
        image: "https://images.unsplash.com/photo-1579017464725-b4ee9fe3e53a?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
        description: "Visitez la capitale du royaume, avec son mélange unique d'histoire, de culture et d'architecture moderne."
    },
    {
        name: "Marrakech",
        image: "https://images.unsplash.com/photo-1597212720058-61a925642c13?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
        description: "Laissez-vous séduire par la ville ocre, ses souks animés et sa place Jemaa el-Fna légendaire."
    },
    {
        name: "Tanger",
        image: "https://images.unsplash.com/photo-1530524860484-63d0aa3d2689?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
        description: "Point de rencontre entre l'Afrique et l'Europe, Tanger offre des vues imprenables sur la Méditerranée."
    }
];

export const UpcomingMatches = [
    {
        team1: "Maroc",
        team2: "Espagne",
        date: "15 Juin 2030",
        time: "20:00",
        stadium: "Stade Mohammed V",
        city: "Casablanca"
    },
    {
        team1: "France",
        team2: "Brésil",
        date: "16 Juin 2030",
        time: "17:00",
        stadium: "Stade de Rabat",
        city: "Rabat"
    },
    {
        team1: "Argentine",
        team2: "Portugal",
        date: "17 Juin 2030",
        time: "20:00",
        stadium: "Stade de Marrakech",
        city: "Marrakech"
    }
];

export const CountdownNumbers = {
    days: 1825,
    hours: 12,
    minutes: 34,
    seconds: 56,
};

export const CountdownLabels = {
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
};

// ===================
// TICKETS SECTION DATA
// ===================

export const TicketHero = {
    title: "Billets pour la Coupe du Monde 2030",
    description: "Réservez vos places pour assister aux matchs de la Coupe du Monde 2030 au Maroc. Une expérience inoubliable vous attend !",
};

export const TicketTabs = {
    upcoming: "Matchs à venir",
    groups: "Phase de groupes",
    knockout: "Phase éliminatoire",
    final: "Finale",
};

export const TicketMatches = [
    {
        id: 1,
        team1: "Maroc",
        team1Flag: "🇲🇦",
        team2: "Espagne",
        team2Flag: "🇪🇸",
        date: "15 Juin 2030",
        time: "20:00",
        stadium: "Stade Mohammed V",
        city: "Casablanca",
        prices: {
            category1: 1500,
            category2: 1000,
            category3: 500
        }
    },
    {
        id: 2,
        team1: "France",
        team1Flag: "🇫🇷",
        team2: "Brésil",
        team2Flag: "🇧🇷",
        date: "16 Juin 2030",
        time: "17:00",
        stadium: "Stade de Rabat",
        city: "Rabat",
        prices: {
            category1: 1800,
            category2: 1200,
            category3: 600
        }
    },
    {
        id: 3,
        team1: "Argentine",
        team1Flag: "🇦🇷",
        team2: "Portugal",
        team2Flag: "🇵🇹",
        date: "17 Juin 2030",
        time: "20:00",
        stadium: "Stade de Marrakech",
        city: "Marrakech",
        prices: {
            category1: 2000,
            category2: 1500,
            category3: 800
        }
    },
    {
        id: 4,
        team1: "Allemagne",
        team1Flag: "🇩🇪",
        team2: "Angleterre",
        team2Flag: "🏴",
        date: "18 Juin 2030",
        time: "16:00",
        stadium: "Stade Adrar",
        city: "Agadir",
        prices: {
            category1: 1600,
            category2: 1100,
            category3: 550
        }
    },
    {
        id: 5,
        team1: "Belgique",
        team1Flag: "🇧🇪",
        team2: "Pays-Bas",
        team2Flag: "🇳🇱",
        date: "19 Juin 2030",
        time: "20:00",
        stadium: "Grand Stade de Tanger",
        city: "Tanger",
        prices: {
            category1: 1500,
            category2: 1000,
            category3: 500
        }
    }
];

export const TicketInfo = {
    categories: {
        title: "Catégories de billets",
        description: "Différentes catégories de billets sont disponibles, offrant divers emplacements dans le stade et expériences.",
    },
    cancellation: {
        title: "Politique d'annulation",
        description: "Les billets peuvent être remboursés jusqu'à 30 jours avant l'événement, sous certaines conditions.",
    },
    access: {
        title: "Accès au stade",
        description: "Les portes ouvrent 3 heures avant le coup d'envoi. Prévoyez votre arrivée en avance pour éviter les files d'attente.",
    },
    customerSupport: "Pour toute question concernant les billets, contactez notre service client au +212 5XX-XXXXXX",
};

// ===================
// MATCHES SECTION DATA
// ===================

export const MatchesHero = {
    title: "Matchs et Actualités",
    description: "Suivez tous les matchs, résultats et les dernières actualités de la Coupe du Monde 2030.",
};

export const MatchesTabs = {
    calendar: "Calendrier",
    groups: "Groupes",
    news: "Actualités",
};

export const MatchesCalendarData = {
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
            team1Flag: "🏴",
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

export const MatchesNews = [
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

export const MatchesGroups = {
    "A": [
        { team: "Maroc", flag: "🇲🇦", points: 9, played: 3, won: 3, draw: 0, lost: 0, gf: 7, ga: 1 },
        { team: "Espagne", flag: "🇪🇸", points: 6, played: 3, won: 2, draw: 0, lost: 1, gf: 5, ga: 2 },
        { team: "Canada", flag: "🇨🇦", points: 3, played: 3, won: 1, draw: 0, lost: 2, gf: 2, ga: 5 },
        { team: "Japon", flag: "🇯🇵", points: 0, played: 3, won: 0, draw: 0, lost: 3, gf: 1, ga: 7 }
    ],
    "B": [
        { team: "France", flag: "🇫🇷", points: 7, played: 3, won: 2, draw: 1, lost: 0, gf: 6, ga: 2 },
        { team: "Argentine", flag: "🇦🇷", points: 6, played: 3, won: 2, draw: 0, lost: 1, gf: 5, ga: 3 },
        { team: "Nigeria", flag: "🇳🇬", points: 4, played: 3, won: 1, draw: 1, lost: 1, gf: 3, ga: 3 },
        { team: "Australie", flag: "🇦🇺", points: 0, played: 3, won: 0, draw: 0, lost: 3, gf: 1, ga: 7 }
    ]
};

export const LiveScores = {
    LiveScoresTitle: "Scores en Direct",
    LiveScoresTexts: {
        noMatch: "Aucun match en cours actuellement",
        info: "Les scores en direct seront disponibles pendant la compétition",
    }
}

// ===================
// TOURISM SECTION DATA
// ===================

export const TourismHero = {
    title: "Découvrez le Maroc",
    description: "Explorez les merveilles du royaume, des médinas animées aux sommets de l'Atlas, en passant par les plages de sable doré.",
};

export const TourismCategories = [
    { value: "all", label: "Tout" },
    { value: "attractions", label: "Attractions" },
    { value: "hotels", label: "Hôtels" },
    { value: "restaurants", label: "Restaurants" },
    { value: "transport", label: "Transport" },
];

export const TourismSpots = [
    {
        id: 1,
        name: "Médina de Marrakech",
        image: "https://images.unsplash.com/photo-1597212720058-61a925642c13?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
        rating: 4.8,
        location: "Marrakech",
        description: "Explorez les souks animés et découvrez l'artisanat traditionnel marocain au cœur de cette médina inscrite au patrimoine mondial.",
        category: "attractions"
    },
    {
        id: 2,
        name: "Royal Mansour",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
        rating: 4.9,
        location: "Marrakech",
        description: "Un palace luxueux offrant une expérience authentique avec des riads privés, des jardins somptueux et une cuisine raffinée.",
        category: "hotels"
    },
    {
        id: 3,
        name: "La Sqala",
        image: "https://images.unsplash.com/photo-1541518763669-27fef9b35497?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
        rating: 4.6,
        location: "Casablanca",
        description: "Restaurant situé dans une ancienne forteresse portugaise, proposant des plats marocains traditionnels dans un cadre exceptionnel.",
        category: "restaurants"
    },
    {
        id: 4,
        name: "Chefchaouen",
        image: "https://images.unsplash.com/photo-1553899017-4ff8eeea5f3b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
        rating: 4.9,
        location: "Nord du Maroc",
        description: "La célèbre ville bleue nichée dans les montagnes du Rif, connue pour ses ruelles peintes en bleu et son ambiance unique.",
        category: "attractions"
    },
    {
        id: 5,
        name: "Four Seasons Casablanca",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
        rating: 4.7,
        location: "Casablanca",
        description: "Hôtel de luxe en bord de mer offrant une vue imprenable sur l'océan Atlantique et des chambres élégantes.",
        category: "hotels"
    },
    {
        id: 6,
        name: "Al Fassia",
        image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
        rating: 4.5,
        location: "Marrakech",
        description: "Restaurant tenu exclusivement par des femmes, proposant une cuisine marocaine authentique et savoureuse.",
        category: "restaurants"
    },
    {
        id: 7,
        name: "Service de Taxis Maroc",
        image: "https://images.unsplash.com/photo-1503783641174-cf9ab62d9bd0?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
        rating: 4.3,
        location: "Tout le Maroc",
        description: "Service de transport fiable pour se déplacer facilement entre les villes hôtes pendant la Coupe du Monde.",
        category: "transport"
    },
    {
        id: 8,
        name: "Jardin Majorelle",
        image: "https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
        rating: 4.7,
        location: "Marrakech",
        description: "Magnifique jardin botanique créé par l'artiste français Jacques Majorelle et plus tard acquis par Yves Saint Laurent.",
        category: "attractions"
    }
];

export const TourismSectionTitles = {
    hostCities: "Villes Hôtes à Découvrir",
    culturalExperiences: "Expériences Culturelles",
};

export const TourismCulturalExperiences = [
    {
        title: "Cuisine Marocaine",
        description: "Participez à des cours de cuisine et apprenez à préparer des tajines, couscous et pâtisseries traditionnelles.",
        button: "Réserver un Cours",
        image: "https://images.unsplash.com/photo-1489693420562-e5ea8a8fdcf4?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
    },
    {
        title: "Artisanat Marocain",
        description: "Découvrez le savoir-faire des artisans locaux : poterie, tissage de tapis, travail du cuir et bijouterie.",
        button: "Visiter les Ateliers",
        image: "https://images.unsplash.com/photo-1598974357809-112ca5f7e9f9?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
    },
    {
        title: "Musique et Danse",
        description: "Assistez à des spectacles de musique gnaoua, andalouse et berbère, ainsi qu'à des danses traditionnelles.",
        button: "Réserver un Spectacle",
        image: "https://images.unsplash.com/photo-1595646699244-3bfa47a606ac?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
    }
];

// ===================
// MapPage SECTION DATA
// ===================

export const MapFilters = ['stades', 'tourisme', 'transport'];

export const MapPOIs = {
    stades: [
        { id: 1, name: "Stade Mohammed V", city: "Casablanca", lat: 33.5825, lng: -7.6483 },
        { id: 2, name: "Stade de Rabat", city: "Rabat", lat: 34.0128, lng: -6.8317 },
        { id: 3, name: "Stade de Marrakech", city: "Marrakech", lat: 31.6667, lng: -8.0000 },
        { id: 4, name: "Grand Stade de Tanger", city: "Tanger", lat: 35.7595, lng: -5.8339 },
        { id: 5, name: "Stade Adrar", city: "Agadir", lat: 30.4200, lng: -9.6000 },
        { id: 6, name: "Stade de Fès", city: "Fès", lat: 34.0372, lng: -5.0003 }
    ],
    tourisme: [
        { id: 7, name: "Médina de Marrakech", city: "Marrakech", lat: 31.6333, lng: -7.9833 },
        { id: 8, name: "Mosquée Hassan II", city: "Casablanca", lat: 33.6086, lng: -7.6326 },
        { id: 9, name: "Chefchaouen", city: "Chefchaouen", lat: 35.1672, lng: -5.2697 },
        { id: 10, name: "Jardin Majorelle", city: "Marrakech", lat: 31.6417, lng: -8.0000 },
        { id: 11, name: "Kasbah des Oudaïas", city: "Rabat", lat: 34.0333, lng: -6.8333 },
        { id: 12, name: "Volubilis", city: "Meknès", lat: 34.0736, lng: -5.5557 }
    ],
    transport: [
        { id: 13, name: "Aéroport Mohammed V", city: "Casablanca", lat: 33.3678, lng: -7.5889 },
        { id: 14, name: "Gare de Marrakech", city: "Marrakech", lat: 31.6313, lng: -8.0022 },
        { id: 15, name: "Gare de Casa-Voyageurs", city: "Casablanca", lat: 33.5897, lng: -7.6114 },
        { id: 16, name: "Aéroport Menara", city: "Marrakech", lat: 31.6078, lng: -8.0367 },
        { id: 17, name: "Gare de Rabat-Ville", city: "Rabat", lat: 34.0167, lng: -6.8367 },
        { id: 18, name: "Terminal de Bus Supratours", city: "Tanger", lat: 35.7764, lng: -5.8147 }
    ]
    };

    export const PracticalInfos = {
    transportRatings: {
        Trains: 4,
        Bus: 3,
        Taxis: 4
    },
    travelTips: [
        "Apportez des vêtements légers et confortables",
        "Prévoyez une protection solaire",
        "Respectez les coutumes locales",
        "Apprenez quelques phrases de base en arabe",
        "Vérifiez les exigences de visa avant votre voyage"
    ],
    cityDistances: [
        { from: "Casablanca", to: "Rabat", distance: "87 km" },
        { from: "Casablanca", to: "Marrakech", distance: "242 km" },
        { from: "Rabat", to: "Tanger", distance: "250 km" },
        { from: "Marrakech", to: "Agadir", distance: "256 km" },
        { from: "Rabat", to: "Fès", distance: "207 km" }
    ]
};
