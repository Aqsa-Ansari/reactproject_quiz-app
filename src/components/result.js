import Q from "q";
import React from "react";
import { ListGroup } from 'react-bootstrap';

function Result(props) {

    const listItems = props.Qs.map(Q => {
        let a = props.scores.filter(score => Object.keys(props.scores) == Q.id)[Q.id] == 1 ? "Correct" : "Incorrect";

        return (
            <ListGroup.Item>
                {Q.question}
                <br />
                " Answer: " {Q.answer}
                <br />
                {a};
            </ListGroup.Item>
        )
    });

    return (
        <ListGroup>
            {listItems}
        </ListGroup>
    );
}

export default Result;