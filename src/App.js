import "./App.css";
import Chatbot from "react-chatbot-kit";
import config from "./config/config";
import MessageParser from "./config/MessageParser/MessageParser";
import ActionProvider from "./config/ActionProvider/ActionProvider";

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
