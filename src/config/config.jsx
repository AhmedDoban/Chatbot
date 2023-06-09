import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Boot Created by the Developer ##### 😊";

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
};

export default config;
