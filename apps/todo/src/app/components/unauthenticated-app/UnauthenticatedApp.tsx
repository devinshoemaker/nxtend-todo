import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPageContainer from '../../../auth/containers/login-page-container/LoginPageContainer';
import RegisterPageContainer from '../../../auth/containers/login-page-container/RegisterPageContainer';

const UnauthenticatedApp: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Switch>
            <Route path="/login" component={LoginPageContainer} exact />
            <Route path="/register" component={RegisterPageContainer} exact />
            <Redirect to="/login" />
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default UnauthenticatedApp;
