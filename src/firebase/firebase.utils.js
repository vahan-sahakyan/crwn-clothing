import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDWUF1NuTpT9rCd4gqPM-AHveO2T8MP5-E',
  authDomain: 'crwn-db-9321d.firebaseapp.com',
  projectId: 'crwn-db-9321d',
  storageBucket: 'crwn-db-9321d.appspot.com',
  messagingSenderId: '613724778680',
  appId: '1:613724778680:web:c3c4a90ed81555542cc44d',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
