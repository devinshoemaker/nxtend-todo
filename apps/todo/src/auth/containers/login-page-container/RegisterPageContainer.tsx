import { useIonRouter } from '@ionic/react';
import React from 'react';
import RegisterPage from '../../components/register-page/RegisterPage';
import { useCreateUserWithEmailAndPassword } from '../../hooks/auth';

const RegisterPageContainer: React.FC = () => {
  const router = useIonRouter();
  const { mutate, error } = useCreateUserWithEmailAndPassword();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleCreateUserWithEmailAndPassword = (
    email: string,
    password: string
  ) => {
    mutate({ email, password });
  };

  return (
    <RegisterPage
      onRegister={handleCreateUserWithEmailAndPassword}
      onLogin={handleLogin}
      error={error?.message}
    />
  );
};

export default RegisterPageContainer;
