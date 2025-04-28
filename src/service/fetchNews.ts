
export const fetchFootballNews = async () => {
    const apiKey = 'pub_835771148585f046660308a75e55fa8b63534';
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&category=sports&q=football&language=fr&country=ma`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
        console.log(data.results);
    } catch (error) {
        console.error('Error fetching football news:', error);
        return [];
    }
};