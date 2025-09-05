import React from "react";

function App() {
  const isLoggedIn = true; 

  return (
    <div>
      <h2>Conditional Rendering Example</h2>
      <p>{isLoggedIn ? "Logged In" : "Guest"}</p>
    </div>
  );
}

export default App;
