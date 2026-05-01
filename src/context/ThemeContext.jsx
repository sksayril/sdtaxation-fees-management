import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  blue: {
    sidebar: 'bg-[#3b5998]',
    primary: 'bg-[#3b5998]',
    hover: 'hover:bg-[#2d4373]',
    text: 'text-[#3b5998]',
    border: 'border-[#3b5998]',
    accent: 'bg-[#3b5998]'
  },
  purple: {
    sidebar: 'bg-[#9333ea]',
    primary: 'bg-[#9333ea]',
    hover: 'hover:bg-[#7e22ce]',
    text: 'text-[#9333ea]',
    border: 'border-[#9333ea]',
    accent: 'bg-[#9333ea]'
  },
  green: {
    sidebar: 'bg-[#22c55e]',
    primary: 'bg-[#22c55e]',
    hover: 'hover:bg-[#16a34a]',
    text: 'text-[#22c55e]',
    border: 'border-[#22c55e]',
    accent: 'bg-[#22c55e]'
  },
  orange: {
    sidebar: 'bg-[#f97316]',
    primary: 'bg-[#f97316]',
    hover: 'hover:bg-[#ea580c]',
    text: 'text-[#f97316]',
    border: 'border-[#f97316]',
    accent: 'bg-[#f97316]'
  },
  red: {
    sidebar: 'bg-[#ef4444]',
    primary: 'bg-[#ef4444]',
    hover: 'hover:bg-[#dc2626]',
    text: 'text-[#ef4444]',
    border: 'border-[#ef4444]',
    accent: 'bg-[#ef4444]'
  },
  indigo: {
    sidebar: 'bg-[#6366f1]',
    primary: 'bg-[#6366f1]',
    hover: 'hover:bg-[#4f46e5]',
    text: 'text-[#6366f1]',
    border: 'border-[#6366f1]',
    accent: 'bg-[#6366f1]'
  },
  black: {
    sidebar: 'bg-[#0f172a]',
    primary: 'bg-[#0f172a]',
    hover: 'hover:bg-[#1e293b]',
    text: 'text-[#0f172a]',
    border: 'border-[#0f172a]',
    accent: 'bg-[#0f172a]'
  },
  pink: {
    sidebar: 'bg-[#ec4899]',
    primary: 'bg-[#ec4899]',
    hover: 'hover:bg-[#db2777]',
    text: 'text-[#ec4899]',
    border: 'border-[#ec4899]',
    accent: 'bg-[#ec4899]'
  },
  teal: {
    sidebar: 'bg-[#14b8a6]',
    primary: 'bg-[#14b8a6]',
    hover: 'hover:bg-[#0d9488]',
    text: 'text-[#14b8a6]',
    border: 'border-[#14b8a6]',
    accent: 'bg-[#14b8a6]'
  },
  white: {
    sidebar: 'bg-white',
    sidebarText: 'text-gray-800',
    primary: 'bg-white',
    hover: 'hover:bg-gray-100',
    text: 'text-gray-800',
    border: 'border-gray-200',
    accent: 'bg-gray-200'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('appTheme') || 'blue';
  });

  useEffect(() => {
    localStorage.setItem('appTheme', currentTheme);
  }, [currentTheme]);

  const themeData = themes[currentTheme];

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themeData }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
