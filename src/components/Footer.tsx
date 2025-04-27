import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FooterTexts } from '@/helpers/Helper';

const Footer = () => {
  const { language, setLanguage } = useLanguage();

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
              {FooterTexts.description[language]}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-moroccan-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-moroccan-red transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-moroccan-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-moroccan-red transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">{FooterTexts.quickLinksTitle[language]}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">{FooterTexts.quickLinks.home[language]}</Link></li>
              <li><Link to="/tickets" className="text-gray-300 hover:text-white transition-colors">{FooterTexts.quickLinks.tickets[language]}</Link></li>
              <li><Link to="/matches" className="text-gray-300 hover:text-white transition-colors">{FooterTexts.quickLinks.matches[language]}</Link></li>
              <li><Link to="/tourism" className="text-gray-300 hover:text-white transition-colors">{FooterTexts.quickLinks.tourism[language]}</Link></li>
              <li><Link to="/map" className="text-gray-300 hover:text-white transition-colors">{FooterTexts.quickLinks.map[language]}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4 text-lg">{FooterTexts.supportTitle[language]}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{FooterTexts.supportLinks.faq[language]}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{FooterTexts.supportLinks.assistance[language]}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{FooterTexts.supportLinks.refunds[language]}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{FooterTexts.supportLinks.terms[language]}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{FooterTexts.supportLinks.privacy[language]}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">{FooterTexts.contactTitle[language]}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-gray-300">support@morocco2030.ma</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-gray-300">+212 522-123456</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-bold text-sm mb-2">{FooterTexts.changeLanguage[language]}</h4>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setLanguage('FR')}
                  className={`px-2 py-1 rounded text-xs font-medium ${language === 'FR' ? 'bg-moroccan-red' : 'bg-gray-700'}`}
                >
                  FR
                </button>
                <button 
                  onClick={() => setLanguage('EN')}
                  className={`px-2 py-1 rounded text-xs font-medium ${language === 'EN' ? 'bg-moroccan-red' : 'bg-gray-700'}`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p dangerouslySetInnerHTML={{ __html: FooterTexts.copyright[language] }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
