import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      Welcome to the home page.
      <p>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
