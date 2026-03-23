import React from 'react';
import '../styles/Skeleton.css';

// Skeleton for the UserProfile card
export function ProfileSkeleton() {
  return (
    <div className="skeleton-profile-card">
      <div className="skeleton skeleton-avatar" />
      <div className="skeleton-lines">
        <div className="skeleton" style={{ height: '18px', width: '160px' }} />
        <div className="skeleton" style={{ height: '13px', width: '110px' }} />
        <div className="skeleton" style={{ height: '13px', width: '220px' }} />
        <div className="skeleton-stats">
          <div className="skeleton" style={{ height: '24px', width: '90px', borderRadius: '20px' }} />
          <div className="skeleton" style={{ height: '24px', width: '80px', borderRadius: '20px' }} />
          <div className="skeleton" style={{ height: '24px', width: '80px', borderRadius: '20px' }} />
        </div>
      </div>
    </div>
  );
}

// Skeleton for a single repo card
function RepoSkeleton() {
  return (
    <div className="skeleton-repo-card">
      <div className="skeleton-repo-top">
        <div className="skeleton" style={{ height: '14px', width: '140px' }} />
        <div className="skeleton" style={{ height: '14px', width: '45px' }} />
      </div>
      <div className="skeleton" style={{ height: '12px', width: '90%' }} />
      <div className="skeleton" style={{ height: '12px', width: '65%' }} />
      <div style={{ display: 'flex', gap: '12px' }}>
        <div className="skeleton" style={{ height: '11px', width: '60px' }} />
        <div className="skeleton" style={{ height: '11px', width: '40px' }} />
      </div>
    </div>
  );
}

// Renders 6 repo skeletons — matches our default "show 6 repos"
export function RepoListSkeleton() {
  return (
    <div>
      <div className="skeleton" style={{ height: '18px', width: '160px', marginBottom: '14px' }} />
      {Array.from({ length: 6 }).map((_, i) => (
        <RepoSkeleton key={i} />
      ))}
    </div>
  );
}