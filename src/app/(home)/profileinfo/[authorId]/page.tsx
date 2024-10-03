"use client"
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Profile {
  displayName: string;
  bio: string;
  avatarUrl: string;
  coverUrl: string;
}

const ProfileInfo = ({ params: { authorId } }: { params: { authorId: string } }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (authorId) {
      fetch(`/api/profile/${authorId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          setProfile(data);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, [authorId]);

  if (error) {
    return <div>Error loading profile: {error}</div>;
  }

  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <h1>{profile.displayName}</h1>
      <p>Bio: {profile.bio}</p>
    </div>
  );
};

export default ProfileInfo;