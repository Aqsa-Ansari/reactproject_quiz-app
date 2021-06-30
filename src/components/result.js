import React from "react";
import { ListGroup } from 'react-bootstrap';
import { BsCheckCircle, BsXCircle } from "react-icons/bs"

function Result(props) {

    let totalScore = 0;

    const listItems = props.Qs.map(Q => {
        let res, ic;
        if (props.scores.scoresArr.filter(scoresArr => Object.keys(scoresArr) == Q.id)[0][Q.id] == 1) {
            res = "Correct"
            ic = <BsCheckCircle />
            totalScore += 1;
        }
        else {
            res = "Incorrect"
            ic = <BsXCircle />
        }

        let ans = props.yourAnswers.filter(answers => Object.keys(answers) == Q.id)[0][Q.id];

        return (
            <ListGroup.Item>
                {Q.id}. {Q.question}
                <br />
                Right Answer: {Q.answer}
                <br />
                Your Answer: {ans}
                <br />
                {res}{ic}
            </ListGroup.Item>
        )
    });

    return (
        <div className="container border">
            <h2>Total Score: {totalScore}/5</h2>
            <ListGroup>
                {listItems}
            </ListGroup>
        </div>
    );
}

export default Result;