import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState(""); // Correct usage of useState
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("Api Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20) + "🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className="w-[400px] h-[492px] bg-gray-200 border border-black rounded-sm m-2 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-[400px] p-2 ml-2 border border-black "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Krishna Sharma",
              message: LiveMessage,
            })
          );
          setLiveMessage(""); // Clear the input after sending a message
        }}
      >
        <input
          className="px-2 mx-2 w-80"
          type="text"
          value={LiveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className=" w-10 bg-green-100" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
