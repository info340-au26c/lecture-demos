import '../styles/App.css'
import { MessageList } from './MessageList';
import { SendForm } from './SendForm';
import { useState } from "react"
import { generateRandomSentence } from "../utils/messages"

function App() {
  const [messages, setMessages] = useState([
    "Hey there!",
    "hi!",
    "how are you?",
    "good!"
  ]);

  function handleAddMessage(message) {
    // const newMessage = generateRandomSentence();
    messages.push(message);
    setMessages([...messages]);
  }

  return (<>
    <MessageList messages={messages} />
    <SendForm sendMessage={handleAddMessage} />
  </>);
}

export default App
