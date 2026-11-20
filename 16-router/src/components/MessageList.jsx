import { useEffect, useState } from "react"

function MessageList({messages}) {
  const msgList = messages.map(m => <p>{m}</p>)

  useEffect(() => {
    const msgListElement = document.getElementById("msgList")
    msgListElement.scrollTo(0, msgListElement.scrollHeight)
  }, [messages])

  // TODO investigate console error 'Each child in a list should have a unique "key" prop.'
  return (
    <>
      <div id="msgList">
        {msgList}
      </div>
      {/* <button onClick={handleAddMessage}>Add Message</button> */}
    </>
  );
}

export default MessageList
