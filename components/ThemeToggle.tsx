'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@teispace/next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder frame while loading
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2.5 rounded-lg bg-lightcyan dark:bg-bdazzled/30 text-gunmetal dark:text-lightcyan border border-cerulean/20 dark:border-cerulean/30 hover:scale-105 transition-all"
      aria-label="Toggle Theme"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-sienna" />
      ) : (
        <Moon className="w-4 h-4 text-bdazzled" />
      )}
    </button>
  );
}