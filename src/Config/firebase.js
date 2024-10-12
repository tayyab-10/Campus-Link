
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlELm6eKpCPfcEdnHzFljO6Hvx1b4GzY0",
  authDomain: "campuslink-fccc4.firebaseapp.com",
  projectId: "campuslink-fccc4",
  storageBucket: "campuslink-fccc4.appspot.com",
  messagingSenderId: "700380914235",
  appId: "1:700380914235:web:e0c59bb2bac44394f8f21e",
  measurementId: "G-E512FPYW9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

