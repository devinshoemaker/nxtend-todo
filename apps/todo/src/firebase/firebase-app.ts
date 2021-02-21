import firebase from 'firebase/app';
import 'firebase/auth';
import { environment } from '../environments/environment';
import firebaseConfig from './firebase-config';

const firebaseApp: firebase.app.App = firebase.initializeApp(firebaseConfig);

if (environment.firebaseEmulators) {
  firebaseApp.auth().useEmulator('http://localhost:9099/');
}

export const auth = firebaseApp.auth();

export default firebaseApp;
