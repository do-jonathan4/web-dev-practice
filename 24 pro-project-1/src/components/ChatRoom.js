import { useRef } from "react";
import SendMessage from "./SendMessage";

const ChatRoom = () => {
  const scroll = useRef();

  //message array
  // query
  // order by X

  return (
    <>
      <main>
        <span ref={scroll}></span>
      </main>
      <SendMessage scroll={scroll} />
    </>
  );
};

export default ChatRoom;
