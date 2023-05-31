import "./App.css";
import Chatbot from "react-chatbot-kit";
import config from "./config/config";
import MessageParser from "./config/MessageParser/MessageParser";
import ActionProvider from "./config/ActionProvider/ActionProvider";
import "react-chatbot-kit/build/main.css";
function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        className="ChatBootStyle"
      />
    </div>
  );
}

export default App;
