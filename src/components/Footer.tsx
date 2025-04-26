
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-moroccan-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-moroccan-red h-10 w-10 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="font-bold text-lg">
                <span className="text-moroccan-red">Morocco</span>
                <span className="text-moroccan-green">2030</span>
                <span className="text-white"> Hub</span>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Votre guide officiel pour la Coupe du Monde FIFA 2030 au Maroc. Billets, matchs, tourisme et plus.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-moroccan-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-moroccan-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-moroccan-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-moroccan-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/tickets" className="text-gray-300 hover:text-white transition-colors">Billets</Link></li>
              <li><Link to="/matches" className="text-gray-300 hover:text-white transition-colors">Matchs</Link></li>
              <li><Link to="/tourism" className="text-gray-300 hover:text-white transition-colors">Tourisme</Link></li>
              <li><Link to="/map" className="text-gray-300 hover:text-white transition-colors">Carte Interactive</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Assistance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Remboursements</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-gray-300">contact@morocco2030hub.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-gray-300">+212 5XX-XXXXXX</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-bold text-sm mb-2">Changer la langue</h4>
              <div className="flex space-x-2">
                <button className="px-2 py-1 bg-moroccan-red rounded text-xs font-medium">FR</button>
                <button className="px-2 py-1 bg-gray-700 rounded text-xs font-medium">EN</button>
                <button className="px-2 py-1 bg-gray-700 rounded text-xs font-medium">ES</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Morocco2030 Hub. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
