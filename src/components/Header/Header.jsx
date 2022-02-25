import './Header.css';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';
import { Link } from 'react-router-dom';

export default function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();

  const handleLogin = () => {
    history.push('/login');
  };

  const handleLogout = async () => {
    await signOutUser();
    setUser({});
    history.replace('/');
  };
  return (
    <header>
      <span>
        <img src="../../assets/headerdog.png" />
        <h1>
          <Link to="/">
            <strong>Happy Tails</strong> Employee Directory
          </Link>
        </h1>
      </span>
      <span>
        <p>{user?.email ? `logged in as ${user.email}` : ''}</p>
        {!user.email && <button onClick={handleLogin}>Log In</button>}
        {user.email && <button onClick={handleLogout}>Log Out</button>}
      </span>
    </header>
  );
}
