import React, { useState } from "react";
import Qs from "../questions.json";
import Questions from "./questions";
import Result from "./result";


function Quiz() {
  const [status, setStatus] = useState(false);  //true means all questions done
  const [scores, setScores] = useState({
    scoresArr: []
  });

  const [yourAnswers, setYourAnswers] = useState([]);

  const yourAnswersUpdateHandler = (userAnswers) => {
    setYourAnswers(userAnswers);
  }

  const statusChangeHandler = (s) => {
    setStatus(s);
  }

  const scoreChangeHandler = (k, s) => {
    setScores(prevScores => ({ scoresArr: [...prevScores.scoresArr, { [k]: s }] }))

  }


  const quiz = (
    <div>
      <h1>Quiz</h1>
      <Questions Qs={Qs} onStatusChangeHandler={statusChangeHandler} onScoreChangeHandler={scoreChangeHandler} onYourAnswersUpdate={yourAnswersUpdateHandler} />
    </div>
  );

  const result = (
    <div>
      <h1>Quiz Results</h1>
      <Result Qs={Qs} scores={scores} yourAnswers={yourAnswers} />
    </div>
  );

  return (
    <div className="container border border-dark w-75">
      {status ? result : quiz}
    </div>
  );
}

export default Quiz;