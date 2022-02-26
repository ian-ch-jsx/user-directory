import './Home.css';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <main>
      <h2>
        <strong>Welcome to the Happy Tails Employee Directory!</strong>
      </h2>
      <p>
        These are some words about happy tails and the purpose of this
        directory.
      </p>
      <p>Here's another paragraph explaining the account creation process.</p>
      <p>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </p>
    </main>
  );
}
