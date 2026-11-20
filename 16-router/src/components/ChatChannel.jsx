import MessageList from './MessageList';
import SendForm from './SendForm';
import { useState } from "react"

function ChatChannel({ channelName }) {
  const [messages, setMessages] = useState([
    "Hey there! Welcome to the " + channelName + " chat!",
  ]);

  function handleAddMessage(message) {
    // const newMessage = generateRandomSentence();
    messages.push(message);
    setMessages([...messages]);
  }

  return (
    <>
      <div id="chatContainer">
        <div id="links">
          <ol>
            <li><a href="/">Home Page</a></li>
          </ol>
        </div>
        <div id="messages">
          <h1 className="channelName">{channelName}</h1>
          <MessageList messages={messages} />
          <SendForm sendMessage={handleAddMessage} />
        </div>
      </div>
    </>
  )
}

export default ChatChannel