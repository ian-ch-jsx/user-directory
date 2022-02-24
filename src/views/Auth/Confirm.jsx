import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Confirm() {
  const { user } = useUser();
  console.log(user);
  return <div>Confirm your email.</div>;
}
