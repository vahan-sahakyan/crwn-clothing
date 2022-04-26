import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

const blueHat = firestore
  .collection('users')
  .doc('XETG2p2OZlJE1JLWRpRO')
  .collection('cartItems')
  .doc('yW4OQXjOIBmDb9WSoraw');
console.log(blueHat);
