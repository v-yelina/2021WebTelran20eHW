import React, { useState } from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const quizzes = useSelector((state) => state.quizzes);
  const options = quizzes.map((quiz) => ({
    value: quiz.id,
    label: quiz.title,
  }));
  const [selectOptId, setSelectOptId] = useState(0);
  const selectedQuiz = (() => {
    return quizzes.filter((quiz) => quiz.id === selectOptId)[0];
  })();

  const renderOptions = () => {
    return options.map((option) => (
      <option value={option.value} key={option.value}>
        {option.label}
      </option>
    ));
  };

  const onChangeHandle = (e) => {
    setSelectOptId(e.target.value);
  };

  return (
    <div className="page adminPage">
      <h1 className="pageTitle block">Add new quiz</h1>
      <form className="addForm block">
        <input
          type="text"
          name="title"
          //value={inputs.title}
          //onChange={onHandleChange}
          placeholder="Enter a title of new quiz"
        />

        <input type="submit" className="button" value="Create" />
      </form>

      <form className="addForm">
        <h3>Add new questions to quizzes</h3>
        <select onChange={onChangeHandle}>{renderOptions()}</select>
        <input
          type="text"
          name="question"
          //value={inputs.title}
          //onChange={}
          placeholder="Enter a title of new question"
        />

        <input type="submit" className="button" value="Create" />
      </form>
    </div>
  );
};

export default Admin;
