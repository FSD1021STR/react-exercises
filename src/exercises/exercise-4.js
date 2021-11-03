import { useState } from "react";

export function Exercise6() {
  const [text, setText] = useState("esto es una frase");

  function updateText(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h1>{text}</h1>
      <input type="text" value={text} onChange={updateText} />
    </div>
  );
}
