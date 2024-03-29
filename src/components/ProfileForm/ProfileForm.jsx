import styles from './ProfileForm.css';
import { useUser } from '../../context/UserContext';
import { useProfile } from '../../hooks/useProfile';
import { updateProfile, createProfile } from '../../services/profiles';
import { useHistory } from 'react-router-dom';

export default function ProfileForm({ isCreating = false }) {
  const { profile, setProfile } = useProfile();
  const { user } = useUser();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let resp;
    if (isCreating) {
      resp = await createProfile({
        name: profile.name,
        birthday: profile.birthday,
        email: user.email,
        bio: profile.bio,
      });
    } else {
      resp = await updateProfile({
        name: profile.name,
        birthday: profile.birthday,
        email: user.email,
        bio: profile.bio,
      });
    }
    setProfile(resp);
    history.replace('/profile');
  };

  return (
    <div className={`${styles.profileFormContainer}`}>
      {isCreating ? <h2>Create Profile</h2> : <h2>Edit Profile</h2>}
      <p>Email: {profile.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={profile?.name}
          onChange={(e) =>
            setProfile((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
        <input
          type="date"
          value={profile.birthday}
          onChange={(e) =>
            setProfile((prevState) => ({
              ...prevState,
              birthday: e.target.value,
            }))
          }
        />
        <textarea
          placeholder="bio"
          value={profile.bio}
          onChange={(e) =>
            setProfile((prevState) => ({
              ...prevState,
              bio: e.target.value,
            }))
          }
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
