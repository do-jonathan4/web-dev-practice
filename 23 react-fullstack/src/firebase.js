import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase-firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Lpg5qh_q6pBRkQYgbd-oQtir7xaNQG4",
  authDomain: "cs-intro.firebaseapp.com",
  projectId: "cs-intro",
  storageBucket: "cs-intro.appspot.com",
  messagingSenderId: "861649350294",
  appId: "1:861649350294:web:a90a32f2acd8f729a09cb7",
  measurementId: "G-RRGCELGE00",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
