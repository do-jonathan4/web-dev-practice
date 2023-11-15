import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="sign-in">
      <h2>Welcome to Chat App</h2>
      <p>Sign In with your Google Account to start chatting</p>
      <button onClick={signInWithGoogle}>Sign In</button>
    </main>
  );
};

export default SignIn;
