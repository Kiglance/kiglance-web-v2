'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="focus:ring-primary relative inline-flex h-6 w-12 items-center justify-center rounded-full bg-[#e2e1e1] transition-colors duration-300 hover:bg-gray-600 focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-400 focus:outline-none dark:bg-gray-700"
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
