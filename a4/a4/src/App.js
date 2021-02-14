import React, { useEffect, useRef, useState } from "react";
import History from "./History.js";
import Ball from "./ball.jpg";
import "./App.css";

const answers = [
  "Not sure.",
  "I don't want to tell you.",
  "Stop asking me questions and go away",
  "I'm really tired, not really in the mood for this right now",
];

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);
  const questionAnswerArray = useRef([]);
  function submitHandler(e) {
    e.preventDefault();
    if (
      inputRef.current.value.indexOf("?") !== -1 &&
      inputRef.current.value.length >= 2
    ) {
      questionAnswerArray.current.push([
        inputRef.current.value,
        answers[Math.floor(Math.random() * answers.length)],
      ]);
      setCount(count + 1);
      setError(false);
    } else {
      setError(true);
    }
  }
  useEffect(() => {
    document.title = "Questions: " + count;
  }, [count]);
  return (
    <div className="container">
      <h1>Number of Questions Asked: {count}</h1>
      <form onSubmit={submitHandler} key={count}>
        <input
          type="text"
          autoComplete="false"
          autoCapitalize="false"
          autoCorrect="false"
          placeholder="Ask me a question"
          ref={inputRef}
        ></input>
        <input type="submit" value="Ask!" />
        {error && <span> You must ask a question.</span>}
      </form>
      <img src={Ball} alt="Magic Eight Ball"></img>
      {count !== 0 && (
        <h3>
          The Magic Eight Ball Says:{" "}
          {
            questionAnswerArray.current[
              questionAnswerArray.current.length - 1
            ][1]
          }
        </h3>
      )}
      <History questionAnswerArray={questionAnswerArray.current}></History>
    </div>
  );
}

export default App;
