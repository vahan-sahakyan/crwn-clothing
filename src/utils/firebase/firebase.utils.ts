import { initializeApp } from 'firebase/app';

import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  signOut,
  // onAuthStateChanged,
  User,
  onAuthStateChanged,
  // UserCredential,
  // NextOrObserver,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

import 'firebase/compat/firestore';
import { Collection, CollectionMap } from '../../redux/shop/shop.types';

const config = {
  apiKey: 'AIzaSyDWUF1NuTpT9rCd4gqPM-AHveO2T8MP5-E',
  authDomain: 'crwn-db-9321d.firebaseapp.com',
  projectId: 'crwn-db-9321d',
  storageBucket: 'crwn-db-9321d.appspot.com',
  messagingSenderId: '613724778680',
  appId: '1:613724778680:web:c3c4a90ed81555542cc44d',
};

initializeApp(config);
export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
};

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  console.log(collectionRef);

  const batch = writeBatch(db);
  objectsToAdd.forEach(obj => {
    const newDocRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const getCategoriesAndDocuments = async (): Promise<Collection[]> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Collection);
};
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      userAuth => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const auth = getAuth();

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signOutUser = async (): Promise<void> => await signOut(auth);
