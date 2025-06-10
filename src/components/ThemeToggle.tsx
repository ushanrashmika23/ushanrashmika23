import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}
const ThemeToggle: React.FC<ThemeToggleProps> = ({
  darkMode,
  toggleTheme
}) => {
  return <button onClick={toggleTheme} className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-[#1a1a1d] text-[#f5f5f7] shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'bg-white text-[#1d1d1f] shadow-[0_0_15px_rgba(0,0,0,0.1)]'}`} aria-label="Toggle theme">
      {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>;
};
export default ThemeToggle;