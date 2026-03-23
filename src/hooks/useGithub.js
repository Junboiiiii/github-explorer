import { useState } from 'react';

const BASE_URL = 'https://api.github.com';

// Read the token from .env
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Headers sent with every request
const headers = TOKEN
  ? { Authorization: `token ${TOKEN}` }
  : {};

function useGithub() {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos]       = useState([]);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);

  async function search(username) {
    // Reset everything before new search
    setLoading(true);
    setError(null);
    setUserData(null);
    setRepos([]);

    try {
      // Fire both requests at the same time with Promise.all
      const [userRes, reposRes] = await Promise.all([
        fetch(`${BASE_URL}/users/${username}`, { headers }),
        fetch(`${BASE_URL}/users/${username}/repos?per_page=100`, { headers })
      ]);

      // Check if user exists
      if (!userRes.ok) {
        throw new Error(`User "${username}" not found`);
      }

      const user  = await userRes.json();
      const reposData = await reposRes.json();

      setUserData(user);

      // Sort repos by star count — highest first
      setRepos(reposData.sort((a, b) => b.stargazers_count - a.stargazers_count));

    } catch (err) {
      setError(err.message);
    } finally {
      // Always runs — turns off loading spinner
      setLoading(false);
    }
  }

  // Return everything the components need
  return { userData, repos, loading, error, search };
}

export default useGithub;