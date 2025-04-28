
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AppRoutes from "../routes/Routes";
import { LanguageProvider } from "@/context/LanguageContext";


const queryClient = new QueryClient();

const App = () => {
  // Effect to initialize dark mode from localStorage
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LanguageProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
