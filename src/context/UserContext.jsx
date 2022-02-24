import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('signin');
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        type,
        setType,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserContext provider.');
  }
  return context;
};
