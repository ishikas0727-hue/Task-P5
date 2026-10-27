import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPlSVY7hGMCwbfts9rJtYHCutK1O9DS0o",
  authDomain: "staff-deakin.firebaseapp.com",
  projectId: "staff-deakin",
  storageBucket: "staff-deakin.firebasestorage.app",
  messagingSenderId: "252563248832",
  appId: "1:252563248832:web:b79239cf2703980b2ebf25",
  measurementId: "G-4WK7FWVFFF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
