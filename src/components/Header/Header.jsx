import './Header.css';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';

export default function Header() {
  const user = useUser();
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    signOutUser(user);
    history.replace('/');
  };
  return (
    <header>
      <span>
        <img src="./assets/headerdog.png" />
        <h1>
          <strong>Happy Tails</strong> Employee Directory
        </h1>
      </span>
      {user?.email ? 'wtf' : 'Not Signed in.'}
    </header>
  );
}
