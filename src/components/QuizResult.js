import React from "react";

function QuizResult(props) {
  return (
    <>
      {/* <div className="show-score">
        Your Score: {props.score}
        <br />
        Total Score: {props.totalScore}
      </div>
      <button id="next-button" onClick={props.tryAgain}>
        Try Again
      </button> */}
      {props.wrongAnswers.length > 0 && (
        <div className="wrong-answers">
          <h3>Wrong Questions and Correct Answers:</h3>
          <ul>
            {props.wrongAnswers.map((item, index) => (
              <li key={index}>
                <b>Question:</b> {item.question}
                <br />
                <b>Correct Answer:</b> {item.correctAnswer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default QuizResult;
