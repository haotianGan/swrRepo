import React from "react";
import "./History.css";

function History({ questionAnswerArray }) {
  questionAnswerArray = questionAnswerArray.slice(0).reverse();
  return (
    <div className="containerHistory">
      {questionAnswerArray.map((value, index) => {
        const [question, answer] = value;
        console.log(questionAnswerArray);
        return (
          <div className="questionAnswer" key={index}>
            <p>Q: {question}</p>
            <p>A: {answer}</p>
          </div>
        );
      })}
    </div>
  );
}

export default History;
