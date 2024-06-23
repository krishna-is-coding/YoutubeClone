import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className=" p-1 flex  items-center shadow-sm">
      <FaUserCircle className="h-8 w-8 " />

      <span className="font-bold m-2 ">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
