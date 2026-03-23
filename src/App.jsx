import React from 'react';
import SearchBar   from './components/SearchBar';
import UserProfile from './components/UserProfile';
import RepoList    from './components/RepoList';
import ThemeToggle  from './components/ThemeToggle';
import { ProfileSkeleton, RepoListSkeleton } from './components/SkeletonLoader';
import useGithub   from './hooks/useGithub';
import useTheme     from './hooks/useTheme';
import './styles/App.css';
import './styles/Theme.css';

function App() {
  // All data and logic comes from the custom hook
  const { userData, repos, loading, error, search } = useGithub();
  const { dark, toggle } = useTheme();

  return (
    <div className="app">
        <div className="app-header">
            <h1 className="app-title">GitHub Explorer</h1>
            <ThemeToggle dark={dark} onToggle={toggle} />
        </div>

      <SearchBar onSearch={search} />

      {loading && <p className="status-msg">Loading...</p>}
      {error   && <p className="error-msg">{error}</p>}

      {loading && (
        <>
          <ProfileSkeleton />
          <RepoListSkeleton />
        </>
      )}

      {userData && <UserProfile userData={userData} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
}

export default App;