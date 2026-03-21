import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
