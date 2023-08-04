import { useState } from 'react';

export function useThemeToggle() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    console.log(theme + " TEMA TOGGLED")

  }

  return { theme, toggleTheme };
}

