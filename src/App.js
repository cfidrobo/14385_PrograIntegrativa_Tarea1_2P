import React from "react";
import Button from "./button";
import Counter from "./counter";

function App() {
  return (
    <div>
      <h1>Web Components with React</h1>
      <Button label="Click me" onClick={() => alert("Button clicked!")} />
      <Counter />
    </div>
  );
}

export default App;
