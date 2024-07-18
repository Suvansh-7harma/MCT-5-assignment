import React, { useState, useEffect } from "react";
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    resetAll();
  }, []);

  const scrambleQuestions = () => {
    const scrambled = [...QuizData].sort(() => Math.random() - 0.5);
    setQuestions(scrambled);
  };

  const handleOptionClick = (index) => {
    setClickedOption(index + 1);
    setTimeout(() => {
      if (index + 1 === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setClickedOption(0);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
    scrambleQuestions();
  };

  return (
    <div>
      <p className="heading-txt">Geekster Quiz APP</p>
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={questions.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">
                {questions[currentQuestion]?.question}
              </span>
            </div>
            <div className="option-container">
              {questions[currentQuestion]?.options.map((option, i) => (
                <button
                  className={`option-btn ${
                    clickedOption === i + 1 ? "checked" : ""
                  }`}
                  key={i}
                  onClick={() => handleOptionClick(i)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
