# 🇲🇦 Morocco 2030 Hub 🌍

An immersive web platform designed to showcase Morocco's hosting of the 2030 FIFA World Cup — blending ticket booking, tourism discovery, interactive mapping, and real-time info, all in one modern, responsive experience.

---

## 🧠 Features

### 🏠 Home
- Showcase of key Moroccan host cities with visuals and descriptions.
- Upcoming match cards with **VS layout**, stadium info, and direct ticket booking.

### 🎟️ Tickets & Match Booking
- Secure login required (Firebase Auth).
- Dynamic match details (teams, stadium, city, group).
- Ticket category selection with pricing.
- Seamless purchase confirmation flow with toast feedback.

### 🗺️ Explore Morocco
- **Tourism Explorer** with hero banner and search.
- Categorized filters: 🏛 Attractions, 🏨 Hotels, 🍽 Restaurants, 🚌 Transport.
- Filtered card grid with rating, location, and itinerary info.
- Deep linking for direct category filtering (e.g. "Explore Attractions" button leads to the right tab).

### 🧭 Interactive Map
- User geolocation with custom marker.
- Toggle between filters like Stadiums, Tourist Spots, Transport.
- Dynamic POIs with icon overlays and popups.

### 🌍 Internationalization
- Fully bilingual (🇫🇷 French / 🇬🇧 English).
- Language toggle available in header.

### 🧩 UI & UX
- Fully responsive.
- Tailwind CSS + custom theming.
- Smooth transitions and scroll.
- Light/Dark Mode toggle.
- Mobile menu and accessibility-focused design.

---

## 🔐 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **UI**: Tailwind CSS + Lucide Icons
- **Routing**: React Router
- **Auth**: Firebase Authentication
- **State Management**: Context API
- **Map Integration**: Leaflet.js
- **Hosting**: Vercel *(frontend)*

---

## 🚀 Getting Started

```bash
git clone https://github.com/Alae-J/Morocco2030-hub.git
cd Morocco2030-hub
npm install
```

### 🔹 Run the project with two terminals:

- **Terminal 1: Start the backend server**
```bash
node server.cjs
```

- **Terminal 2: Start the frontend**
```bash
npm run dev
```

Now open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## 🤝 Contributors

This project was collaboratively built by:

- **Alae Eddine Jahid** – [GitHub](https://github.com/Alae-J)
- **Anas Elwahabi**
- **Mohammed Amine Raguig**

We combined our strengths in full-stack development, UI/UX design, and data integration to create an immersive experience for Morocco 2030.

