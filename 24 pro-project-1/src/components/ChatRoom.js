import { useRef, useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";

import { db } from "../firebase";
import SendMessage from "./SendMessage";
import Message from "./Message";

const ChatRoom = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(30)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });

    return () => unsubscribe;
  }, []);

  return (
    <>
      <main>
        <div className="messages-wrapper">
          {messages.map((x) => (
            <Message key={x.id} message={x} />
          ))}
        </div>
        <span ref={scroll}></span>
      </main>
      <SendMessage scroll={scroll} />
    </>
  );
};

export default ChatRoom;
