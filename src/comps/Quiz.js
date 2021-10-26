import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Quiz = () => {
  const history = useHistory();
  const { quizID } = useParams();
  const currentQuiz = useSelector((state) =>
    state.quizzes.find((quiz) => quiz.id === +quizID)
  );
  const dispatch = useDispatch();

  const [activeQIndex, setActiveQIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState({});

  useEffect(() => {
    if (currentQuiz !== undefined) {
      setActiveQuestion(currentQuiz.questions[activeQIndex]);
    }
  }, [activeQIndex]);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const renderQuestion = () => {
    return !activeQuestion.id ? (
      <div className="question">No questions here</div>
    ) : (
      <div className="question">
        <div className="questionTitle">{activeQuestion.title}</div>
        <div className="answersList">{renderAnswers()}</div>
      </div>
    );
  };

  useEffect(() => {
    if (currentQuiz !== undefined) {
      setActiveQuestion(currentQuiz.questions[activeQIndex]);
    }
  }, [activeQIndex]);

  const renderAnswers = () => {
    return activeQuestion.answers.map((answer) => (
      <div
        key={answer.id}
        onClick={() => {
          switchQuestion(answer.id);
        }}
        className="answer"
      >
        {answer.title}
      </div>
    ));
  };

  useEffect(() => {
    if (!isAnswered) {
      return;
    }
    if (activeQIndex + 1 === currentQuiz.questions.length) {
      dispatch({
        type: "SEND_SCORE",
        payload: {
          time: Date.now(),
          score,
          questions: currentQuiz.questions.length,
        },
      });
      history.push("/leaderboards");
    } else {
      setActiveQIndex((activeQIndex) => activeQIndex + 1);
    }
    setIsAnswered(false);
  }, [isAnswered]);

  const switchQuestion = (answerID) => {
    const answer = activeQuestion.answers.find(
      (answer) => answer.id === answerID
    );
    if (answer.correct) {
      setScore((score) => score + 1);
      console.log(`current score: ${score}`);
    }
    setIsAnswered(true);
  };

  return (
    <div className="page quizPage">
      <h1 className="pageTitle block">{currentQuiz.title}</h1>
      {renderQuestion()}
    </div>
  );
};

export default Quiz;
