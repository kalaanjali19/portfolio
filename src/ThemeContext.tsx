// src/context/ThemeContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context
const ThemeContext = createContext({
  theme: 'light', // default theme
  toggleTheme: () => {}, // function to toggle the theme
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Update the document's theme on theme change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
