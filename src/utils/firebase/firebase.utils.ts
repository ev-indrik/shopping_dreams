import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgeK5zBHpBuwfgqJb2yhxhY0TOJ0bXVQQ",
  authDomain: "shopping-dreams-9fcea.firebaseapp.com",
  projectId: "shopping-dreams-9fcea",
  storageBucket: "shopping-dreams-9fcea.appspot.com",
  messagingSenderId: "702737680930",
  appId: "1:702737680930:web:bc6656b515ecbddb12987b",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signinWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signinWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth: any) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot: any = await getDoc(userDocRef);

  // if user data doesn't exist create/set the document with user data from userAuth in my collection - else return userDocRef
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error: any) {
      console.log("Error while creating user:", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword: any = async (
  email: string,
  password: any
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
