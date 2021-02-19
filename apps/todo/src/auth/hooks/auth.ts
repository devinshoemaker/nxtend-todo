import firebase from 'firebase/app';
import { useContext } from 'react';
import { useMutation } from 'react-query';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '../api/auth';
import { AuthContext } from '../providers/AuthProvider';

export const useAuthenticated = () => {
  return useContext(AuthContext);
};

export const useCreateUserWithEmailAndPassword = () => {
  const mutation = async ({ email, password }) => {
    return await createUserWithEmailAndPassword(email, password);
  };

  return useMutation<
    firebase.auth.UserCredential,
    firebase.auth.Error,
    { email: string; password: string }
  >(mutation);
};

export const useSignInWithEmailAndPassword = () => {
  const mutation = async ({ email, password }) => {
    return await signInWithEmailAndPassword(email, password);
  };

  return useMutation<
    firebase.auth.UserCredential,
    firebase.auth.Error,
    { email: string; password: string }
  >(mutation);
};
