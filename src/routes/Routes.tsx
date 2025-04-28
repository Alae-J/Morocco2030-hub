import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Tickets from "@/pages/Tickets";
import Matches from "@/pages/Matches";
import Tourism from "@/pages/Tourism";
import MapPage from "@/pages/MapPage";
import NotFound from "@/pages/NotFound";
import Auth from "@/pages/auth";
import PrivateRoute from "@/components/PrivateRoute"; // <-- you must import it

const AppRoutes = () => {
  return (
    <Routes>
      {/* Protected Routes */}
      <Route path="/" element={
        <PrivateRoute>
          <Index />
        </PrivateRoute>
      } />
      <Route path="/tickets" element={
        <PrivateRoute>
          <Tickets />
        </PrivateRoute>
      } />
      <Route path="/matches" element={
        <PrivateRoute>
          <Matches />
        </PrivateRoute>
      } />
      <Route path="/tourism" element={
        <PrivateRoute>
          <Tourism />
        </PrivateRoute>
      } />
      <Route path="/map" element={
        <PrivateRoute>
          <MapPage />
        </PrivateRoute>
      } />

      {/* Public Routes */}
      <Route path="/auth" element={<Auth />} />

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
