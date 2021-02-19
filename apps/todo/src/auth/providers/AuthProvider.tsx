import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase-app';

export const AuthContext = createContext(false);

interface AuthProviderProps {
  children: JSX.Element;
}

const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const [authenticated, setAuthenticated] = useState<boolean>(
    JSON.parse(
      localStorage.getItem('authenticated') !== null
        ? localStorage.getItem('authenticated')
        : 'false'
    )
  );

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      localStorage.setItem('authenticated', (!!user).toString());
      setAuthenticated(!!user);
    });

    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <AuthContext.Provider value={authenticated}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
