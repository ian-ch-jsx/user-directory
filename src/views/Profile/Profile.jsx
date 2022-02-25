import { Redirect, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useProfile } from '../../hooks/useProfile';

export default function Profile() {
  const { profile, loading } = useProfile();

  if (loading) return <p>...Loading</p>;
  if (!loading && !profile.name) return <Redirect to="/profile/create" />;
  return (
    <div>
      profile!
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );
}
