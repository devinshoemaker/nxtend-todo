import firebase from 'firebase/app';
import { auth } from '../../firebase/firebase-app';

export const createUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> => {
  return await auth.createUserWithEmailAndPassword(email, password);
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> => {
  return await auth.signInWithEmailAndPassword(email, password);
};
