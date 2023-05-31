import React from "react";
import { ChatData } from "../../ChatBotData.js";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    ChatData.map((data) => {
      if (data.message.toLowerCase().includes(message)) {
        actions.handleMessage(data.answer);
      }
    });
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
