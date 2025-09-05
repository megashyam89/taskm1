
import React from "react";
import GreetingMessage from "./GreetingMessage";

function App() {
  return (
    <div>
      <h1>Dynamic Message Example</h1>
      <GreetingMessage timeOfDay="morning" />
      <GreetingMessage timeOfDay="afternoon" />
      <GreetingMessage timeOfDay="night" />
      <GreetingMessage timeOfDay="evening" /> 
    </div>
  );
}

export default App;
