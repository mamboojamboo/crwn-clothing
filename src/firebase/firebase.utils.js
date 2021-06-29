import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBqq4ppbtqZyvK6m96AKBvQoMaAp6AUn0g",
    authDomain: "crwn-clothing-aeb6a.firebaseapp.com",
    projectId: "crwn-clothing-aeb6a",
    storageBucket: "crwn-clothing-aeb6a.appspot.com",
    messagingSenderId: "749769682744",
    appId: "1:749769682744:web:824e72a28dc4b1d9379bcd"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
          console.log('error creating user', error.message)
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;