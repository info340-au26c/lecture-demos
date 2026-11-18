export function SendField() {
  function handleSubmit(e) {
    // TODO what happens if we don't "preventDefault"?
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO control this input field. */}
      <input type="text"></input>
      <button type="submit" id="sendButton">Send</button>
    </form>
  );
}