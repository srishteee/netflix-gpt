// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth from Firebase

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn7_dTErfwa6Qk7VI7UoEeVJ0s-fPUkZA",
  authDomain: "netflixgpt-999ea.firebaseapp.com",
  projectId: "netflixgpt-999ea",
  storageBucket: "netflixgpt-999ea.firebasestorage.app",
  messagingSenderId: "354003405378",
  appId: "1:354003405378:web:e9b372061eece72e793bdb",
  measurementId: "G-PLC1NYEFEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export initialized auth instance
export const auth = getAuth(app);
export default app;