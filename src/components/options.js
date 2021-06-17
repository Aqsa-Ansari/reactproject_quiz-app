import React from "react";
import { Form } from 'react-bootstrap';

function Options(props) {
    const optionsObj = props.Q.options[0];
    const optionsArr = Object.keys(optionsObj).map(key => ({ [key]: optionsObj[key] }));

    const SelectionHandler = (e) => {
        const value = e.target.value;
        props.onAnswerSelected3(value);
    }

    return (
        <ul style={{ listStyleType: "none" }}>
            {optionsArr.map((option, index) => {
                return (
                    <li key={index}>
                        <Form.Check
                            type="radio"
                            label={Object.values(option)}
                            value={Object.values(option)}
                            name="optionRadios"
                            id={index}
                            onChange={SelectionHandler}
                        />
                    </li>
                );
            })}
        </ul >
    );
}

export default Options;