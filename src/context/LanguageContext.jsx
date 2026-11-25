import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default to Gujarati 'gu', user can switch to 'en'
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('aarav_lang') || 'gu';
  });

  useEffect(() => {
    localStorage.setItem('aarav_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'gu' ? 'en' : 'gu'));
  };

  const t = (guText, enText) => {
    return lang === 'gu' ? guText : enText;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

