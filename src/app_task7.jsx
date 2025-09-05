import React from "react";

function App() {
  const isPremium = true;

  return (
    <div>
      <h2>Conditional Rendering with && Example</h2>
      {isPremium && <p>Premium User</p>}
    </div>
  );
}

export default App;
