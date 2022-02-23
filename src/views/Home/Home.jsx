import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      Welcome to the home page.
      <p>
        <Link to="/auth">Login/sign up</Link>
      </p>
    </div>
  );
}
