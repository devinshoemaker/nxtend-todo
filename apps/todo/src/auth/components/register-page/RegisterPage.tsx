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
import React, { useState } from 'react';
import Button from '../../../shared/components/button/Button';

export interface RegisterPageProps {
  onRegister: (username: string, password: string) => void;
  onLogin: () => void;
  error?: string;
}

const RegisterPage: React.FC<RegisterPageProps> = (props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleEmailChange = (e: CustomEvent) => {
    setEmail(e.detail.value);
  };

  const handlePasswordChange = (e: CustomEvent) => {
    setPassword(e.detail.value);
  };

  const handleConfirmPasswordChange = (e: CustomEvent) => {
    setConfirmPassword(e.detail.value);
  };

  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onRegister(email, password);
  };

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onLogin();
  };

  const validateForm = (): boolean => {
    return email && password && confirmPassword && password === confirmPassword;
  };

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
                data-testid="password"
                type="password"
                title="Password"
                onIonChange={handlePasswordChange}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Confirm Password</IonLabel>
              <IonInput
                data-testid="confirm-password"
                type="password"
                title="Confirm Password"
                onIonChange={handleConfirmPasswordChange}
              />
            </IonItem>

            <Button
              className="w-full mt-2 uppercase"
              type="submit"
              onClick={handleRegister}
              disabled={!validateForm()}
            >
              Register
            </Button>
            <Button
              className="w-full mt-2 uppercase"
              type="button"
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
