/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { useAuthenticated } from '../auth/hooks/auth';
import AuthenticatedApp from './components/authenticated-app/AuthenticatedApp';
import UnauthenticatedApp from './components/unauthenticated-app/UnauthenticatedApp';
/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const authenticated = useAuthenticated();
  return authenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
