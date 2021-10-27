import { SEND_SCORE, ADD_QUIZ, ADD_QUESTION, ADD_ANSWER } from "./constTypes";

export const addScore = (score, questions) => {
  return {
    type: SEND_SCORE,
    payload: {
      time: Date.now(),
      score: score,
      questions: questions,
    },
  };
};

export const addQuiz = (title) => {
  return {
    type: ADD_QUIZ,
    payload: {
      id: Date.now(),
      title: title,
      questions: [],
    },
  };
};

export const addQuestion = (quizId, title) => {
  return {
    type: ADD_QUESTION,
    payload: {
      id: Date.now(),
      title: title,
      answers: [],
    },
    quizId: quizId,
  };
};

export const addAnswer = (quizId, questionId, title, correct) => {
  return {
    type: ADD_ANSWER,
    payload: {
      answer: {
        id: Date.now(),
        title: title,
        correct: correct,
      },
      questionId: questionId,
      quizId: quizId,
    },
  };
};
