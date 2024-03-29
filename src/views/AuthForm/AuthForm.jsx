import styles from './AuthForm.css';
import { Link, useHistory } from 'react-router-dom/';
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
        history.replace('/profile/');
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
    <div className={`${styles.authContainer}`}>
      {isSigningIn ? <h2>Sign In</h2> : <h2>Register</h2>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          aria-label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          aria-label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {isSigningIn ? (
        <p>
          Not registered? <Link to="/register">Sign up!</Link>
        </p>
      ) : (
        <p>
          Already registered? <Link to="/login">Sign in!</Link>
        </p>
      )}
    </div>
  );
}
