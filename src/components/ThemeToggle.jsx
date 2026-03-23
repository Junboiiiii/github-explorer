import React from 'react';
import '../styles/ThemeToggle.css';

function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label="Toggle dark mode"
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}

export default ThemeToggle;