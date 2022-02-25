import React from 'react';
import { useUser } from '../../context/UserContext';
import { useProfile } from '../../context/ProfileContext';
import { updateProfile, createProfile } from '../../services/profiles';

export default function ProfileForm({ isCreating = false }) {
  const { profile, setProfile } = useProfile();
  const { user } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isCreating) {
      resp = await createProfile({
        name: profile.userName,
        birthday: profile.birthday,
        email: user.email,
        bio: profile.bio,
      });
    } else {
      resp = await updateProfile();
    }
    setProfile(resp);
  };

  return (
    <div>
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={profile.name}
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
        <input
          type="textarea"
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
