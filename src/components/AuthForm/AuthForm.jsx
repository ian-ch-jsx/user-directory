import './AuthForm.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/';
import { signInUser, signUpUser } from '../../services/users';
import { useUser } from '../../context/UserContext';

export default function AuthForm({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((isSigningUp = true)) {
      await signUpUser(email, password);
      history.replace('/confirm');
    } else {
      resp = await signInUser(email, password);
      setUser(resp);
      history.replace('/profile');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
