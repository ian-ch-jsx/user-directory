import { checkError, client } from './cilent';

export function getUser() {
  return client.auth.user();
}

export async function signUpUser(email, password) {
  const resp = await client.auth.signUp({ email, password });
  return checkError(resp);
}

export async function signInUser(email, password) {
  const resp = await client.auth.signIn({ email, password });
  return checkError(resp);
}

export async function signOutUser() {
  return client.auth.signOut();
}
