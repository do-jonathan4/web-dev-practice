// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.measurementId,
  authDomain: process.env.measurementId,
  projectId: process.env.measurementId,
  storageBucket: process.env.measurementId,
  messagingSenderId: process.env.measurementId,
  appId: process.env.measurementId,
  measurementId: process.env.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
