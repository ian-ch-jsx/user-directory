import { createContext, useContext, useState } from 'react';
import { getProfile } from '../services/profiles';
import { useEffect } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    birthday: '',
    bio: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const profile = await getProfile();
      if (profile.length > 0) {
        setProfile(profile[0]);
      }
    };
    fetchData();
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a ProfileContext provider.');
  }
  return context;
};
