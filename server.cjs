const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/places', async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) return res.status(400).json({ error: "Missing query param" });

        const apiKey = "AIzaSyA4uLlhU9uRa1RES18mm7sis4nTQjYtNe4";
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
            const text = await response.text(); // Show Google’s error
            console.error('Google API Error:', text);
            return res.status(response.status).send(text);
        }

        const data = await response.json();

        if (data.status !== 'OK') {
            console.error('Google API Response Error:', data);
            return res.status(500).json({ error: data.status, message: data.error_message });
        }

        res.json(data);
    } catch (err) {
        console.error("Server crash:", err.message);
        res.status(500).json({ error: "Server error", detail: err.message });
    }
});

app.listen(3001, () => console.log('✅ Proxy server running on port 3001'));
