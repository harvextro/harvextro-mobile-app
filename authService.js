import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

// Email/Password register
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Email/Password login
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Google login (works for login & register)
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

// Logout
export const logoutUser = () => {
  return signOut(auth);
};
