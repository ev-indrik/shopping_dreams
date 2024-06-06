import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgeK5zBHpBuwfgqJb2yhxhY0TOJ0bXVQQ",
  authDomain: "shopping-dreams-9fcea.firebaseapp.com",
  projectId: "shopping-dreams-9fcea",
  storageBucket: "shopping-dreams-9fcea.appspot.com",
  messagingSenderId: "702737680930",
  appId: "1:702737680930:web:bc6656b515ecbddb12987b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Setup Google authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signinWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signinWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Firestore database
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth: any) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

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
      console.error("Error creating the user:", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  if (!email || !password) return;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUserDocumentFromAuth(userCredential.user);
    return userCredential;
  } catch (error) {
    console.error("Error creating the user with email and password:", error);
  }
};
