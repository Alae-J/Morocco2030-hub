import { createContext, useContext, useState } from 'react';

interface LanguageContextType {
    language: string;
    toggleLanguage: () => void;
    setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'FR',
    toggleLanguage: () => {},
    setLanguage: (_lang) => {},
});

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('FR');

    const toggleLanguage = () => {
        const SupportedLanguages = ['FR', 'EN'];
        const currentIndex = SupportedLanguages.indexOf(language);
        const nextIndex = (currentIndex + 1) % SupportedLanguages.length;
        setLanguage(SupportedLanguages[nextIndex]);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Small hook for easier usage
export const useLanguage = () => useContext(LanguageContext);
