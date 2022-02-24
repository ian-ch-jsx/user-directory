// import './AuthForm.css';

import { useHistory } from 'react-router-dom/';
import { signInUser, signUpUser } from '../../services/users';
import { useUser } from '../../context/UserContext';

export default function AuthForm({ isSigningIn = false }) {
  const history = useHistory();
  const { setUser, password, setPassword, email, setEmail } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (isSigningIn) {
        resp = await signInUser(email, password);
        history.replace('/profile');
      } else {
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
