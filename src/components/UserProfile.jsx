import React from 'react';
import '../styles/UserProfile.css';

function UserProfile({ userData }) {
  const {
    avatar_url,
    name,
    login,
    bio,
    location,
    blog,
    followers,
    following,
    public_repos
  } = userData;

  return (
    <div className="profile-card">
      <img
        className="profile-avatar"
        src={avatar_url}
        alt={`${login}'s avatar`}
      />
      <div className="profile-info">
        <h2 className="profile-name">{name || login}</h2>
        <p className="profile-login">@{login}</p>
        {bio && <p className="profile-bio">{bio}</p>}
        {location && (
          <p className="profile-location">📍 {location}</p>
        )}
        {blog && (
          <a
            className="profile-blog"
            href={blog.startsWith('http') ? blog : `https://${blog}`}
            target="_blank"
            rel="noreferrer"
          >
            🔗 {blog}
          </a>
        )}
        <div className="profile-stats">
          <span className="stat">⭐ {followers} followers</span>
          <span className="stat">👥 {following} following</span>
          <span className="stat">📁 {public_repos} repos</span>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;