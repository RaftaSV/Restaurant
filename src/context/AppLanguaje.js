import { createContext, useContext, useEffect, useState } from 'react';
import storage from 'utils/storage';

const AppLanguageContext = createContext({
  language: 'es',
  languageToggle: () => {},
});

const KEY_LANGUAGE_NAME = 'land';

export const AppLanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const setMode = (mode) => {
    storage.setItem(KEY_LANGUAGE_NAME, mode);
    setLanguage(mode);
  };

  const languageToggle = () => {
    setMode(language === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    const localLanguage = storage.getItem(KEY_LANGUAGE_NAME);
    if (localLanguage) {
      setMode(localLanguage);
    } else {
      setMode( 'es');
    }
  }, []);

  return (
    <AppLanguageContext.Provider
      value={{
        language,
        languageToggle
      }}
    >
      {children}
    </AppLanguageContext.Provider>
  );
};

export const useAppLanguage = () => useContext(AppLanguageContext);
