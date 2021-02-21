import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../../../home/components/home-page/HomePage';
import Menu from '../menu/Menu';

const AuthenticatedApp: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Switch>
              <Route path="/home" component={HomePage} />
              <Redirect to="/home" />
            </Switch>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default AuthenticatedApp;
