import { createContext, useContext, useState } from 'react';
import { getProfile } from '../services/profiles';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export const useProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    birthday: '',
    bio: '',
  });

  console.log(loading);
  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getProfile();
      console.log(profile);
      if (profile.length > 0) {
        setProfile(profile[0]);
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);
  return { profile, setProfile, loading };
};
