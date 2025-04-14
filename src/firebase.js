// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA72qRwSU8vHGQElv2U4O4BquLCjNxw0lQ",
  authDomain: "portfolio2025-2c657.firebaseapp.com",
  projectId: "portfolio2025-2c657",
  storageBucket: "portfolio2025-2c657.firebasestorage.app",
  messagingSenderId: "998297891863",
  appId: "1:998297891863:web:c9b7899650d116a04c1852",
  measurementId: "G-3H601LPQQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);