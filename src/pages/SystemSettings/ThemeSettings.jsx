import React from 'react';
import { useTheme, themes } from '../../context/ThemeContext';
import { Icons } from '../../components/Icons';

export function ThemeSettings() {
  const { currentTheme, setCurrentTheme } = useTheme();

  const themeOptions = [
    { id: 'blue', name: 'Blue', color: 'bg-[#3b5998]' },
    { id: 'purple', name: 'Purple', color: 'bg-[#9333ea]' },
    { id: 'green', name: 'Green', color: 'bg-[#22c55e]' },
    { id: 'orange', name: 'Orange', color: 'bg-[#f97316]' },
    { id: 'red', name: 'Red', color: 'bg-[#ef4444]' },
    { id: 'indigo', name: 'Indigo', color: 'bg-[#6366f1]' },
    { id: 'black', name: 'Black', color: 'bg-[#0f172a]' },
    { id: 'pink', name: 'Pink', color: 'bg-[#ec4899]' },
    { id: 'teal', name: 'Teal', color: 'bg-[#14b8a6]' },
    { id: 'white', name: 'White', color: 'bg-white', border: 'border-gray-200' },
  ];

  return (
    <div className="p-6 bg-[#f8fafc] min-h-screen">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-indigo-50 rounded-lg">
            <Icons.Badge className="w-8 h-8 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Theme Settings</h2>
            <p className="text-gray-500 text-sm">Choose your preferred color theme</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {themeOptions.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setCurrentTheme(theme.id)}
              className={`relative flex items-center justify-center gap-2 px-4 py-4 rounded-xl text-sm font-semibold transition-all duration-200 border-2 ${
                currentTheme === theme.id 
                  ? 'border-indigo-500 scale-105 shadow-md' 
                  : 'border-transparent hover:scale-102 hover:shadow-sm'
              } ${theme.color} ${theme.id === 'white' ? 'text-gray-800' : 'text-white'} ${theme.border || ''}`}
            >
              <Icons.Badge className="w-4 h-4 opacity-80" />
              {theme.name}
              {currentTheme === theme.id && (
                <div className="absolute top-1 right-1">
                  <Icons.Check className="w-4 h-4 text-white bg-indigo-500 rounded-full p-0.5" />
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-bold text-gray-700">Current Theme:</span>
            <span className="text-sm font-medium text-gray-500 capitalize">{currentTheme}</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            The theme will be applied to the sidebar, cards, and page elements throughout the application.
          </p>
        </div>
      </div>
    </div>
  );
}
