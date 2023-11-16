import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  const isUser = message.uid === user.uid ? "sent" : "recieved";

  return (
    <div className={`chat-bubble ${isUser}`}>
      <img src={message.avatar} alt="user avatar" />
      <div>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
