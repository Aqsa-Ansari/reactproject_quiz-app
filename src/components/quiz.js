import React, { useState } from "react";
import Qs from "../questions.json";
import Questions from "./questions";
import Result from "./result";


function Quiz() {
  const [status, setStatus] = useState(false);  //true means all questions done
  const [scores, setScores] = useState([]);

  const statusChangeHandler = (s) => {
    setStatus(s);
  }

  const scoreChangeHandler = (index, s) => {
    setScores([...scores, { [index]: s }]);     ///////// 'State, why you no update?  :(
    debugger;
  }

  const quiz = (
    <div>
      <h1>Quiz</h1>
      <Questions Qs={Qs} onStatusChangeHandler={statusChangeHandler} onScoreChangeHandler={scoreChangeHandler} />
    </div>
  );

  const result = (
    <div>
      <h1>Quiz Results</h1>
      <Result Qs={Qs} scores={scores} />
    </div>
  );

  return (
    <div>
      {status ? result : quiz}
    </div>
  );
}

export default Quiz;