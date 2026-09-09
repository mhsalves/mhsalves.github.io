import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import { node } from 'prop-types';

export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'pt', label: 'PT', name: 'Português' },
];

const STORAGE_KEY = 'language';

const LanguageContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
});

const isSupported = (code) => LANGUAGES.some((language) => language.code === code);

/**
 * The site is a static export, so there is one HTML file and no locale routing.
 * English is what ships; a reader's choice is applied on the client and
 * remembered in localStorage.
 */
export function LanguageProvider(props) {
  const { children } = props;
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  // Restore the stored choice after mount, never during render, so the server
  // and the first client render agree.
  useEffect(() => {
    let stored = null;

    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      stored = null;
    }

    if (stored && isSupported(stored)) {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      // A reader with storage blocked still gets the toggle, just not the memory.
    }
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: node,
};

LanguageProvider.defaultProps = {
  children: null,
};

export function useLanguage() {
  return useContext(LanguageContext);
}

/**
 * Picks the right half of a `{ en, pt }` dictionary, falling back to English so
 * a missing translation degrades to readable rather than blank.
 */
export function useTranslation(dictionary) {
  const { language } = useLanguage();
  return dictionary[language] || dictionary[DEFAULT_LANGUAGE];
}
