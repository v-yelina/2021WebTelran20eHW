import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuiz, addQuestion, addAnswer } from "../store/actionGenerator";

const initialValue = {
  quizTitle: "",
  questionTitle: "",
  answerTitle: "",
  correct: false,
};

const Admin = () => {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizzes);
  const [inputs, setInputs] = useState(initialValue);
  const [activeQuizId, setActiveQuizId] = useState(0);
  const [activeQuestionId, setActiveQuestionId] = useState(0);

  const questions = useSelector((state) => {
    const quiz = state.quizzes.find((quiz) => quiz.id === activeQuizId);
    if (!quiz) {
      return [];
    }
    return quiz.questions;
  });

  const answers = useSelector((state) => {
    const quiz = state.quizzes.find((quiz) => quiz.id === activeQuizId);
    if (!quiz) {
      return [];
    }
    const question = quiz.questions.find(
      (question) => question.id === activeQuestionId
    );
    if (!question) {
      return [];
    }
    return question.answers;
  });

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onCheckboxChangeHandler = (event) => {
    setInputs((inputs) => {
      return { ...inputs, [event.target.name]: !inputs[event.target.name] };
    });
  };

  const getQuestions = (quizID) => {
    setActiveQuizId(quizID);
  };

  const getAnswers = (questID) => {
    setActiveQuestionId(questID);
  };

  const renderQuizzes = () => {
    return quizzes.map((quiz) => (
      <li
        key={quiz.id}
        onClick={() => {
          getQuestions(quiz.id);
        }}
      >
        {quiz.title}
      </li>
    ));
  };

  const renderQuestions = () => {
    return !questions.length ? (
      <p>No questions</p>
    ) : (
      questions.map((quest) => (
        <li
          key={quest.id}
          onClick={() => {
            getAnswers(quest.id);
          }}
        >
          {quest.title}
        </li>
      ))
    );
  };

  const renderAnswers = () => {
    return !answers.length ? (
      <p>No answers</p>
    ) : (
      answers.map((answ) => <li key={answ.id}>{answ.title}</li>)
    );
  };

  const addNewQuiz = (e) => {
    e.preventDefault();
    dispatch(addQuiz(inputs.quizTitle));
    setInputs(initialValue);
  };

  const addNewQuestion = (e) => {
    e.preventDefault();
    dispatch(addQuestion(activeQuizId, inputs.questionTitle));
    setInputs(initialValue);
  };

  const addNewAnswer = (e) => {
    e.preventDefault();
    console.log(
      activeQuizId,
      activeQuestionId,
      inputs.answerTitle,
      inputs.correct
    );
    dispatch(
      addAnswer(
        activeQuizId,
        activeQuestionId,
        inputs.answerTitle,
        inputs.correct
      )
    );
    setInputs(initialValue);
  };

  return (
    <div className="page adminPage">
      <h1 className="pageTitle block">Add new quiz</h1>
      <div className="list quizzesList">
        <ul className="block">{renderQuizzes()}</ul>
      </div>
      <div className="list questionsList">
        <ul className="block">{renderQuestions()}</ul>
      </div>
      <div className="list answersList">
        <ul className="block">{renderAnswers()}</ul>
      </div>
      <form className="addForm block" onSubmit={addNewQuiz}>
        <input
          type="text"
          name="quizTitle"
          value={inputs.quizTitle}
          onChange={onHandleChange}
          placeholder="Enter a title of new quiz"
        />
        <input type="submit" className="button" value="New Quiz" />
      </form>

      <form className="addForm block" onSubmit={addNewQuestion}>
        <input
          type="text"
          name="questionTitle"
          value={inputs.questionTitle}
          onChange={onHandleChange}
          placeholder="Enter a title of new question"
        />
        <input type="submit" className="button" value="New Question" />
      </form>

      <form className="addForm block" onSubmit={addNewAnswer}>
        <input
          type="text"
          name="answerTitle"
          value={inputs.answerTitle}
          onChange={onHandleChange}
          placeholder="Enter a title of new answer"
        />
        <label className="checkbox" htmlFor="correct">
          <input
            type="checkbox"
            name="correct"
            id="correct"
            value={inputs.correct}
            onChange={onCheckboxChangeHandler}
          />
          Correct
        </label>
        <input type="submit" className="button" value="New Answer" />
      </form>
    </div>
  );
};

export default Admin;
