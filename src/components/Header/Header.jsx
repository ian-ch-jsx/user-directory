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
    <div>
      <p>WELCOME TO THE DIRECTORY {user?.email} |</p>
      <button onClick={handleLogout}>sign out</button>
    </div>
  );
}
