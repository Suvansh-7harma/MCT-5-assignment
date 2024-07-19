import React, { useState, useEffect } from "react";
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  useEffect(() => {
    if (clickedOption !== 0) {
      setTimeout(() => {
        changeQuestion();
      }, 2000);
    }
  }, [clickedOption]);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    } else {
      setWrongAnswers([
        ...wrongAnswers,
        {
          question: QuizData[currentQuestion].question,
          correctAnswer:
            QuizData[currentQuestion].options[
              QuizData[currentQuestion].answer - 1
            ],
        },
      ]);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
    setWrongAnswers([]);
  };

  return (
    <div>
      <p className="heading-txt">Geekster Quiz APP</p>
      <p className="heading-txt">Current score: {score}</p>
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
            wrongAnswers={wrongAnswers}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">Question {currentQuestion + 1} out of 5 </span>
              <span id="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => {
                const isCorrect = i + 1 === QuizData[currentQuestion].answer;
                return (
                  <button
                    className={`option-btn ${
                      clickedOption === i + 1 ? "checked" : ""
                    } ${clickedOption !== 0 && isCorrect ? "correct" : ""}`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                    disabled={clickedOption !== 0}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
