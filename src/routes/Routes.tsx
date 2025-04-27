import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Tickets from "@/pages/Tickets";
import Matches from "@/pages/Matches";
import Tourism from "@/pages/Tourism";
import MapPage from "@/pages/MapPage";
import NotFound from "@/pages/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/map" element={<MapPage />} />
            {/* for 404s */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
