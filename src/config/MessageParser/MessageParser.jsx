import React from "react";
import { ChatData } from "../../ChatBotData.js";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.length > 0) {
      ChatData.filter((data) =>
        data.question.toLowerCase().includes(message.toLowerCase())
      ).length > 0
        ? ChatData.filter((data) =>
            data.question.toLowerCase().includes(message.toLowerCase())
          ).map((data) => actions.handleMessage(data.answer))
        : actions.handleMessage("Sorry , My Dataset can't answer your QU.");
    } else {
      actions.handleMessage("Sorry , My Dataset can't answer your QU. ");
    }
  };

  return (
    <React.Fragment>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </React.Fragment>
  );
};

export default MessageParser;
