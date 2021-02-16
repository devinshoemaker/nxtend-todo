import firebase from 'firebase/app';
import firebaseConfig from './firebase-config';

const firebaseApp: firebase.app.App = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
