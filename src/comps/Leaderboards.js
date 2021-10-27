import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Leaderboards = () => {
  const scoreTable = useSelector((state) => state.scoreTable);
  const score = useSelector(
    (state) => state.scoreTable[state.scoreTable.length - 1]
  );

  const renderScore = () => {
    return !score || !Object.keys(score).length ? (
      <div className="yourScore block"> No scores </div>
    ) : (
      <div
        className={`yourScore block ${
          score.score / score.questions > 0.5 ? "goodScore" : "badScore"
        }
        `}
      >
        {score.score / score.questions > 0.5 ? (
          <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
          </div>
        ) : (
          ""
        )}
        You got <span className="scoreSpan">{score.score} </span>
        points out of <span className="questionsNumber">{score.questions}</span>
        .
      </div>
    );
  };

  const renderTable = () => {
    return !Object.keys(scoreTable).length ? (
      <tr>
        <td>-</td>
        <td>-</td>
      </tr>
    ) : (
      scoreTable
        .sort((a, b) => {
          return b.score - a.score;
        })
        .map((sc) => (
          <tr key={sc.time}>
            <td>{sc.time}</td>
            <td>{sc.score}</td>
          </tr>
        ))
    );
  };

  return (
    <div className="page leaderboard">
      {!score || !Object.keys(score).length ? (
        <div className="pageTitle block"> Leaderboard </div>
      ) : (
        <h1 className="pageTitle block">
          {score.score / score.questions > 0.5 ? "Congratulations!" : "Oops..."}
        </h1>
      )}
      {renderScore()}

      <h3 className="leaderboardTitle block">Leaderboard</h3>
      <div className="scoreTable block">
        <table>
          <thead>
            <tr className="tableHeader">
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
      <Link className="navItem block" to="/">
        Back to Quiz Selection
      </Link>
    </div>
  );
};

export default Leaderboards;
