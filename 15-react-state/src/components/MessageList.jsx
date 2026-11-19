import { useEffect, useState } from "react"

export function MessageList({messages}) {
  const [channelName, setChannelName] = useState("INFO 340")

  const msgList = messages.map(m => <p>{m}</p>)

  useEffect(() => {
    const msgListElement = document.getElementById("msgList")
    msgListElement.scrollTo(0, msgListElement.scrollHeight)
  }, [messages])

  // TODO investigate console error 'Each child in a list should have a unique "key" prop.'
  return (
    <>
      <h1>{channelName}</h1>
      <div id="msgList">
        {msgList}
      </div>
      {/* <button onClick={handleAddMessage}>Add Message</button> */}
    </>
  );
}