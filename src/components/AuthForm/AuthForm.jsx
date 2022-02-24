import './AuthForm.css';
import { useState } from 'react';
import { signUpUser } from '../../services/users';

export default function AuthForm({ isSigningIn = true }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" />
      <input type="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
