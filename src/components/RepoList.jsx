import React, { useState } from 'react';
import '../styles/RepoList.css';

// Language dot colours — matches GitHub's colours
const LANG_COLORS = {
  JavaScript : '#f1e05a',
  TypeScript : '#3178c6',
  Python     : '#3572A5',
  HTML       : '#e34c26',
  CSS        : '#563d7c',
  Java       : '#b07219',
  Go         : '#00ADD8',
  Rust       : '#dea584',
};

// --- RepoCard (private — only used by RepoList below) ---
function RepoCard({ repo }) {
  const langColor = LANG_COLORS[repo.language] || '#888';

  return (
    <a
      className="repo-card"
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="repo-top">
        <span className="repo-name">{repo.name}</span>
        <span className="repo-stars">⭐ {repo.stargazers_count}</span>
      </div>

      {repo.description && (
        <p className="repo-desc">{repo.description}</p>
      )}

      <div className="repo-meta">
        {repo.language && (
          <span className="repo-lang">
            <span
              className="lang-dot"
              style={{ background: langColor }}
            />
            {repo.language}
          </span>
        )}
        <span className="repo-forks">🍴 {repo.forks_count}</span>
      </div>
    </a>
  );
}

// --- RepoList (exported — used by App.jsx) ---
function RepoList({ repos }) {
  const [visible, setVisible] = useState(6);

  if (!repos.length) return null;

  return (
    <div className="repo-list">
      <h3 className="repo-list-title">
        Repositories ({repos.length})
      </h3>

      {repos.slice(0, visible).map(repo => (
        <RepoCard key={repo.id} repo={repo} />
      ))}

      {visible < repos.length && (
        <button
          className="show-more-btn"
          onClick={() => setVisible(v => v + 6)}
        >
          Show more ({repos.length - visible} remaining)
        </button>
      )}
    </div>
  );
}

export default RepoList;