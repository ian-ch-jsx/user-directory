import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <p>
        WELCOME TO THE DIRECTORY! | <Link to="/">Home</Link> |
        <Link to="/auth">Login</Link>
      </p>
    </div>
  );
}
