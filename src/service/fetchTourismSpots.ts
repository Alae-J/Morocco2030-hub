export const fetchSpotsByCategory = async (category: string) => {
    const categoryQueryMap = {
      attractions: "attractions in Rabat",
      hotels: "hotels in Rabat",
      restaurants: "restaurants in Rabat",
      transport: "transportation in Rabat",
    };
  
    // If "all", fetch each category and merge results
    if (category === "all") {
      const categories = Object.keys(categoryQueryMap);
      const results = await Promise.all(
        categories.map(async (cat) => {
          const query = categoryQueryMap[cat];
          const response = await fetch(`http://localhost:3001/api/places?query=${encodeURIComponent(query)}`);
          const data = await response.json();
          return data.results.map((spot: any, index: number) => ({
            id: `${cat}-${index}`,
            name: { EN: spot.name, FR: spot.name },
            image: spot.photos?.[0]
              ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${spot.photos[0].photo_reference}&key=AIzaSyA4uLlhU9uRa1RES18mm7sis4nTQjYtNe4`
              : "https://via.placeholder.com/400x300?text=No+Image",
            rating: spot.rating || 4.5,
            location: { EN: spot.formatted_address, FR: spot.formatted_address },
            description: {
              EN: spot.types?.join(", "),
              FR: spot.types?.join(", "),
            },
            category: cat
          }));
        })
      );
  
      return results.flat(); // Merge all arrays into one
    }
  
    // Single category case
    const query = categoryQueryMap[category];
    if (!query) return [];
  
    const response = await fetch(`http://localhost:3001/api/places?query=${encodeURIComponent(query)}`);
    const data = await response.json();
  
    return data.results.map((spot: any, index: number) => ({
      id: `${category}-${index}`,
      name: { EN: spot.name, FR: spot.name },
      image: spot.photos?.[0]
        ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${spot.photos[0].photo_reference}&key=AIzaSyA4uLlhU9uRa1RES18mm7sis4nTQjYtNe4`
        : "https://via.placeholder.com/400x300?text=No+Image",
      rating: spot.rating || 4.5,
      location: { EN: spot.formatted_address, FR: spot.formatted_address },
      description: {
        EN: spot.types?.join(", "),
        FR: spot.types?.join(", "),
      },
      category
    }));
  };
  