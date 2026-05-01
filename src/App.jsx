import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  return (
    <ThemeProvider>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </ThemeProvider>
  );
}
