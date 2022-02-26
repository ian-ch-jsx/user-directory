import { useState } from 'react';
import { getProfile } from '../services/profiles';
import { useEffect } from 'react';

export const useProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    birthday: '',
    bio: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getProfile();

      if (profile.length > 0) {
        setProfile(profile[0]);
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);
  return { profile, setProfile, loading };
};
