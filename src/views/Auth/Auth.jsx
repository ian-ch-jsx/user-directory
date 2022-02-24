// import './AuthForm.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/';
import { signInUser, signUpUser } from '../../services/users';
import { useUser } from '../../context/UserContext';

export default function AuthForm() {
  const history = useHistory();
  const { setUser, type, setType, password, setPassword, email, setEmail } =
    useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
        history.replace('/profile');
      }
      if (type === 'signup') {
        resp = await signUpUser(email, password);
        history.replace('/confirm');
      }
      setUser({ id: resp.id, email: resp.email });
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <span className="auth-tabs">
        <h3
          onClick={() => {
            setType('signin');
          }}
        >
          sign in
        </h3>
        <h3
          onClick={() => {
            setType('signup');
          }}
        >
          sign up
        </h3>
      </span>
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
    </>
  );
}
