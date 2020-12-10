import React from "react";

const Question = (props) => {
    return (
        <div className="question">
            <div className="question--box">
                <p>
                   {props.currentQuestion.question}
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
