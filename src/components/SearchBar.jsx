import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  function handleSubmit() {
    if (input.trim() === '') return;
    onSearch(input.trim());
  }

  function handleKey(e) {
    if (e.key === 'Enter') handleSubmit();
  }

  return (
    <div className="search-bar">
      <input
        className="search-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKey}
        placeholder="Enter GitHub username..."
        type="text"
      />
      <button className="search-btn" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;