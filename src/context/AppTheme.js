import { createContext, useContext } from "react";

const AppThemeContext = createContext({
  theme: "dark",
  themeToggle: () => {},
});

export const AppThemeProvider = ({ children }) => {
  // ✅ Tema fijo en oscuro
  const theme = "dark";

  // ✅ No hace nada (porque ya no quieres cambiar tema)
  const themeToggle = () => {};

  return (
    <AppThemeContext.Provider value={{ theme, themeToggle }}>
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(AppThemeContext);