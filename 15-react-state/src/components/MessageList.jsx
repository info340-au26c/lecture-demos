import { useEffect, useState } from "react"
import { generateRandomSentence } from "../utils/messages"

export function MessageList(props) {
  const [channelName, setChannelName] = useState("INFO 340")

  // TODO lift up this state.
  const [messages, setMessages] = useState([
    "Hey there!",
    "hi!",
    "how are you?",
    "good!"
  ]);

  const msgList = messages.map(m => <p>{m}</p>)

  useEffect(() => {
    const msgListElement = document.getElementById("msgList")
    msgListElement.scrollTo(0, msgListElement.scrollHeight)
  }, [messages])

  function handleAddMessage() {
    const newMessage = generateRandomSentence();
    setMessages(previousMessages => [...previousMessages, newMessage])
  }

  // TODO investigate console error 'Each child in a list should have a unique "key" prop.'
  return (
    <>
      <h1>{channelName}</h1>
      <div id="msgList">
        {msgList}
      </div>
      <button onClick={handleAddMessage}>Add Message</button>
    </>
  );
}