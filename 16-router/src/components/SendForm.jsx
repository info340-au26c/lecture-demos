import { useState } from "react";

function SendForm({sendMessage}) {
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(text);
    setText('');
  }

  function handleChange(event) {
    let newText = event.target.value;
    setText(newText);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO control this input field. */}
      <input type="text" onChange={handleChange} value={text}></input>
      <button type="submit" id="sendButton">Send</button>
    </form>
  );
}

export default SendForm
