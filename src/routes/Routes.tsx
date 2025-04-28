import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Tickets from "@/pages/Tickets";
import Matches from "@/pages/Matches";
import Tourism from "@/pages/Tourism";
import MapPage from "@/pages/MapPage";
import NotFound from "@/pages/NotFound";
import Auth from "@/pages/auth";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Define the PrivateRoute wrapper first */}
        {/* Protected Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/map" element={<MapPage />} />

      {/* Public Routes */}
      <Route path="/auth" element={<Auth />} />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
