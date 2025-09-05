import React from "react";

function GreetingMessage({ timeOfDay }) {
  let message = "";

  if (timeOfDay === "morning") {
    message = "Good Morning";
  } else if (timeOfDay === "afternoon") {
    message = "Good Afternoon";
  } else if (timeOfDay === "night") {
    message = "Good Night";
  } else {
    message = "Hello!";
  }

  return <h2>{message}</h2>;
}

export default GreetingMessage;
