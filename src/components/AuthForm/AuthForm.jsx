import './AuthForm.css';
import { useState } from 'react';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <input type="email" />
      <input type="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
