import { Redirect } from 'react-router-dom';
import { useProfile } from '../../hooks/useProfile';
import { useHistory } from 'react-router-dom';
import styles from './Profile.css';

export default function Profile() {
  const { profile, loading } = useProfile();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.replace('/profile/edit');
  };

  if (loading) return <p>...Loading</p>;
  if (!loading && !profile.name) return <Redirect to="/profile/create" />;
  return (
    <div className={`${styles.profileContainer}`}>
      <h2>Employee Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
      <button onClick={handleSubmit}>edit profile</button>
    </div>
  );
}
