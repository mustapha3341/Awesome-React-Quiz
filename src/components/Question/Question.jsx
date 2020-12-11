import React, { useEffect, useState } from "react";
import { shuffle } from "lodash";

const Question = ({ questions }) => {
    return (
        <div className="question">
            <div className="question--box">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, possimus? Eum dolorum quo animi nostrum!
                </p>
            </div>
            <div className="answers--container">
                <button className="answer">Answer</button>
                <button className="answer">Answer</button>
                <button className="answer">Answer</button>
                <button className="answer">Answer</button>
            </div>
        </div>
    );
};

export default Question;
