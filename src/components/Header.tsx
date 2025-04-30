
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { NavigationLinks, ButtonTexts } from '@/helpers/Helper';
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const user = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language, toggleLanguage } = useLanguage(); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
            {NavigationLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="font-medium hover:text-moroccan-red transition-colors"
                onClick={toggleMenu} // for mobile
              >
                {link.name[language]}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-3">
          <Button 
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center px-2 py-1 rounded-md transition"
          >
            <Globe size={16} className="mr-1" />
            <span className="text-sm font-medium">{language}</span>
          </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            <Link to="/auth">
              <Button 
                variant="outline" 
                className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 border-red-200 dark:border-red-800"
              >
                {ButtonTexts.login[language]}
              </Button>
            </Link>
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
            {NavigationLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="font-medium hover:text-moroccan-red transition-colors"
                onClick={toggleMenu} // for mobile
              >
                {link.name[language]}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleLanguage}
              >
                <Globe size={18} />
                <span className="ml-1">{language}</span>
              </Button>
              
              {!user && <Link to="/auth" onClick={toggleMenu}>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 border-red-200 dark:border-red-800"
                >
                  {ButtonTexts.login[language]}
                </Button>
              </Link>}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
