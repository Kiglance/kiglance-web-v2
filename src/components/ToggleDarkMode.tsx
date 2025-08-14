'use client';
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

function ToggleDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Initialize dark mode from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="focus:ring-primary relative inline-flex h-6 w-12 items-center justify-center rounded-full bg-gray-700 transition-colors duration-300 hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
      aria-label="Toggle dark mode"
    >
      <div
        className={`absolute flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
          isDarkMode ? 'translate-x-3' : '-translate-x-3'
        }`}
      >
        {isDarkMode ? (
          <Moon size={12} className="text-gray-700" />
        ) : (
          <Sun size={12} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
}

export default ToggleDarkMode;
