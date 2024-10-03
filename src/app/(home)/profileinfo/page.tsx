"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProfileInfo = () => {
  const router = useRouter();
  const { email } = router.query;

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (email) {
      const fetchProfile = async () => {
        try {
          const response = await fetch(`/api/profile?email=${email}`);
          const data = await response.json();
          setProfile(data);
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      };

      fetchProfile();
    }
  }, [email]);

  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>Email: {profile.email}</p>
      <p>Bio: {profile.bio}</p>
      {/* Выводите любые другие данные профиля */}
    </div>
  );
};

export default ProfileInfo;