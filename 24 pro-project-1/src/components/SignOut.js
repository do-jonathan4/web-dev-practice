import React from "react";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SignOut = () => {
  const [user] = useAuthState(auth);

  return (
    user && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};

export default SignOut;
