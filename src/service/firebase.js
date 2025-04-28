// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";



import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2p1c1mBZPdUk89nXdouVImhyla8gp5eY",
  authDomain: "hackathon2030-6c5ef.firebaseapp.com",
  projectId: "hackathon2030-6c5ef",
  storageBucket: "hackathon2030-6c5ef.firebasestorage.app",
  messagingSenderId: "503630170834",
  appId: "1:503630170834:web:72f8db5b37afe039fefb0b",
  measurementId: "G-6C0E34B41B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
