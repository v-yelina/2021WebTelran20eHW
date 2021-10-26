import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const quizzes = useSelector((state) => state.quizzes);

  const renderQuizzes = () => {
    return quizzes.map((q) => (
      <div key={q.id} className="quizCard">
        <Link to={`/quiz/${q.id}`} className="quizTitle">
          {q.title}
        </Link>
      </div>
    ));
  };

  return (
    <div className="page homePage">
      <h1 className="pageTitle block">Select your quiz</h1>
      <div className="quizzesList">{renderQuizzes()}</div>
    </div>
  );
};

export default Home;
