import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-p4Ug1MWXXZg1ZhATEj2h_P7tVJW8VfE",
  authDomain: "react-chat-2553d.firebaseapp.com",
  projectId: "react-chat-2553d",
  storageBucket: "react-chat-2553d.appspot.com",
  messagingSenderId: "1072420482662",
  appId: "1:1072420482662:web:fbebba48e5fbd7bc5807a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
