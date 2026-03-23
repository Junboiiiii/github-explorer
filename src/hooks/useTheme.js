import { useState, useEffect } from 'react';

function useTheme() {
  // Read saved preference from localStorage on first load
  // If nothing saved, check if OS is in dark mode
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('gh-explorer-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Set data-theme on <body> so CSS variables kick in
    document.body.setAttribute('data-theme', dark ? 'dark' : 'light');
    // Save preference so it persists on refresh
    localStorage.setItem('gh-explorer-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return { dark, toggle: () => setDark(d => !d) };
}

export default useTheme;