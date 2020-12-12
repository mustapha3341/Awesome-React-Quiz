import React from "react";

const ShowScore = ({score, totalQuestions, handleRetry}) => {
    return (
        <div className="show--score">
            <h1>You scored {score} out of {totalQuestions}</h1>
            <button onClick={() => handleRetry()} className="retry">Retry</button>
        </div>
    );
};

export default ShowScore;
