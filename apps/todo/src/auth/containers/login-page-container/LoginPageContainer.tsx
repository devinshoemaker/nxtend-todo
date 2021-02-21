import { useIonRouter } from '@ionic/react';
import React from 'react';
import LoginPage from '../../components/login-page/LoginPage';
import { useSignInWithEmailAndPassword } from '../../hooks/auth';

const LoginPageContainer: React.FC = () => {
  const router = useIonRouter();
  const { mutate, error } = useSignInWithEmailAndPassword();

  const handleLogin = (email: string, password: string) => {
    mutate({ email, password });
  };

  const handleSignup = () => {
    router.push('/register');
  };

  return (
    <LoginPage
      onLogin={handleLogin}
      onRegister={handleSignup}
      error={error?.message}
    />
  );
};

export default LoginPageContainer;
