
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('FR');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  const toggleLanguage = () => {
    const languages = ['FR', 'EN', 'ES'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-moroccan-dark shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-moroccan-red h-10 w-10 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="font-bold text-lg md:text-xl">
              <span className="text-moroccan-red">Morocco</span>
              <span className="text-moroccan-green">2030</span>
              <span className="text-moroccan-dark dark:text-white"> Hub</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-moroccan-red transition-colors">Accueil</Link>
            <Link to="/tickets" className="font-medium hover:text-moroccan-red transition-colors">Billets</Link>
            <Link to="/matches" className="font-medium hover:text-moroccan-red transition-colors">Matchs</Link>
            <Link to="/tourism" className="font-medium hover:text-moroccan-red transition-colors">Tourisme</Link>
            <Link to="/map" className="font-medium hover:text-moroccan-red transition-colors">Carte</Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleLanguage}
              className="rounded-full"
            >
              <Globe size={18} />
              <span className="ml-1 text-xs">{language}</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            <Button variant="outline" className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 border-red-200 dark:border-red-800 hover:bg-red-200">
              Emergency Help
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-moroccan-dark border-t py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={toggleMenu}>Accueil</Link>
            <Link to="/tickets" className="font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={toggleMenu}>Billets</Link>
            <Link to="/matches" className="font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={toggleMenu}>Matchs</Link>
            <Link to="/tourism" className="font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={toggleMenu}>Tourisme</Link>
            <Link to="/map" className="font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={toggleMenu}>Carte</Link>
            
            <div className="flex items-center justify-between pt-4 border-t">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleLanguage}
              >
                <Globe size={18} />
                <span className="ml-1">{language}</span>
              </Button>
              
              <Button variant="outline" size="sm" className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 border-red-200 dark:border-red-800">
                Emergency Help
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
