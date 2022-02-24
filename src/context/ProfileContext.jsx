import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/users';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );
};
