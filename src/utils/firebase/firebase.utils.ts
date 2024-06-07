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
export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInformation = {}
) => {
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
        ...additionalInformation,
      });
    } catch (error: any) {
      console.error("Error creating the user:", error);
    }
  }

  return userDocRef;
};

export const createUserDocumentFromAuth2: (
  a: any,
  b: { displayName: string }
) => Promise<string | undefined> = async (userAuth, additionalInformation) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  console.log("USER SNAPSHOT ====>", additionalInformation);
  console.log("USER SNAPSHOT", userSnapshot);
  console.log("USER SNAPSHOT exist", userSnapshot.exists());

  const createdAt = new Date();
  const { email } = userAuth;
  try {
    await setDoc(userDocRef, {
      email,
      createdAt,
      displayName: additionalInformation.displayName,
    });
  } catch (error: any) {
    console.error("Error creating the user:", error);
  }
  return "ok";
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | undefined> => {
  if (!email || !password) return;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUserDocumentFromAuth(userCredential.user);
    return userCredential;
  } catch (error: any) {
    console.error("Error creating the user with email and password:", error);
  }
};
