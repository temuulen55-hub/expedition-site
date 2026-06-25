import { createContext, useContext, useState } from "react";

export const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const toggle = () => setLang((l) => (l === "en" ? "mn" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Hook: returns the translated string for the active language. */
export function useT(dict) {
  const { lang } = useContext(LanguageContext);
  return dict[lang] ?? dict.en;
}

/** Hook: returns lang + toggle directly. */
export function useLang() {
  return useContext(LanguageContext);
}
