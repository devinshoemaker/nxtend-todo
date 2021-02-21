import {
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import Button from '../../../shared/components/button/Button';

export interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
  onRegister: () => void;
  error?: string;
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: CustomEvent) => {
    setEmail(e.detail.value);
  };

  const handlePasswordChange = (e: CustomEvent) => {
    setPassword(e.detail.value);
  };

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onLogin(email, password);
  };

  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onRegister();
  };

  const validateForm = (): boolean => {
    return !!(email && password);
  };

  const isFormValid = validateForm();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vinyl</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Vinyl</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="flex justify-center items-center h-full">
          <form className="w-full md:max-w-xl">
            {props.error && <IonLabel color="danger">{props.error}</IonLabel>}
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                type="email"
                title="Email"
                onIonChange={handleEmailChange}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                title="Password"
                onIonChange={handlePasswordChange}
              />
            </IonItem>
            <Button
              className="w-full mt-2 uppercase"
              onClick={handleLogin}
              disabled={!isFormValid}
            >
              Login
            </Button>
            <Button className="w-full mt-2 uppercase" onClick={handleRegister}>
              Register
            </Button>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
