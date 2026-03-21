// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChbQfJ01exsfH_-gSjp6BgzC5X8KycAXM",
  authDomain: "harvextro-c8ba0.firebaseapp.com",
  projectId: "harvextro-c8ba0",
  storageBucket: "harvextro-c8ba0.firebasestorage.app",
  messagingSenderId: "723597516358",
  appId: "1:723597516358:web:8b6050443b332aff297447",
  measurementId: "G-MN7HJQ9Q10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


export const auth = getAuth(app); */
