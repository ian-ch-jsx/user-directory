import { createContext, useContext, useState } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const currentProfile = getProfile();
  const [profile, setProfile] = useState(
    currentProfile
      ? {
          name: currentProfile.name,
          email: currentProfile.email,
          birthday: currentProfile.birthday,
          bio: currentProfile.bio,
        }
      : {}
  );

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a ProfileContext provider.');
  }
  return context;
};
