import React from "react";
import Options from './options';

function Question(props) {

  const onAnswerSelected2 = (selectedAnswer) => {
    props.onAnswerSelected1(props.counter, selectedAnswer);
  }

  return (props.Qs.filter(Q => Q.id == props.counter).map(
    OneQ => {
      return (
        <div>
          <h3>{OneQ.question}</h3>
          <Options num={props.counter} Q={OneQ} onAnswerSelected3={onAnswerSelected2} selectedValue={props.selectedValue} />
        </div>
      );
    }
  )
  );
}

export default Question;
