import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Question from "./question";

function Questions(props) {
  const [count, setCount] = useState(1);
  const [userAnswers, setUserAnswers] = useState([]);

  const [btnTxt, setBtnTxt] = useState("Next");
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const [value, setValue] = useState();

  const nextQuestion = () => {
    setValue("");
    if (isPrevDisabled == true && count >= 1) {
      setIsPrevDisabled(false);
    }

    if (count < props.Qs.length) {
      //check selected option
      setCount(prevCount => prevCount + 1);
      setIsNextDisabled(true);

      if (count == (props.Qs.length - 1)) {
        setBtnTxt("Submit");
      }
    }

    else {
      checkScore();
      props.onYourAnswersUpdate(userAnswers);
      props.onStatusChangeHandler(true);
    }
  }

  const prevQuestion = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
    if (count == 1) {
      setIsPrevDisabled(true);
    }
  }

  const onAnswerSelected = (ind, answer) => {
    setValue(answer);
    if (userAnswers.some(a => Object.keys(a) == ind)) {
      let ansToUpdate = userAnswers.find(a => Object.keys(a) == ind);
      ansToUpdate[ind] = answer;
    }
    else {
      setUserAnswers([...userAnswers, { [ind]: answer }]);

    }
    setIsNextDisabled(false);
  }


  const checkScore = () => {
    props.Qs.map((Q) => {
      let actualAns = Q.answer;
      let userAns = userAnswers.filter(ans => Object.keys(ans)[0] == Q.id)[0][Q.id];
      actualAns === userAns ? props.onScoreChangeHandler(Q.id, 1) : props.onScoreChangeHandler(Q.id, 0);
    });
  }



  return (
    <div>
      <Question Qs={props.Qs} counter={count} onAnswerSelected1={onAnswerSelected} selectedValue={value} />
      <Button className="m-2" onClick={prevQuestion} disabled={isPrevDisabled}>Previous</Button>
      <Button className="m-2" onClick={nextQuestion} disabled={isNextDisabled}>{btnTxt}</Button>
    </div>
  );
}

export default Questions;
