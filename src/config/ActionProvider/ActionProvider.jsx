import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleMessage = (message) => {
    const botMessage = createChatBotMessage(message);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <React.Fragment>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage,
          },
        });
      })}
    </React.Fragment>
  );
};

export default ActionProvider;
