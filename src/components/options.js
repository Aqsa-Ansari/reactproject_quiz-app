import React, { useState } from "react";
import { Form } from 'react-bootstrap';

function Options(props) {
    const optionsObj = props.Q.options[0];
    const optionsArr = Object.keys(optionsObj).map(key => ({ [key]: optionsObj[key] }));


    const SelectionHandler = (e) => {
        props.onAnswerSelected3(e.target.value);
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
                            checked={Object.values(option) == props.selectedValue}
                        />
                    </li>
                );
            })}
        </ul >
    );
}

export default Options;