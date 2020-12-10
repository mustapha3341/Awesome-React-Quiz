import React, { useState, useEffect } from "react";
import { shuffle } from "lodash";

const Question = ({questions}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [answers, setAnswers] = useState([]);

    // useEffect(() => {
    //     const { correct_answer, incorrect_answers } = questions[
    //         currentQuestion
    //     ];
    //     const answers = [...incorrect_answers, correct_answer];
    //     const result = shuffle(answers);
    //     setAnswers(result);
    // }, []);

    // setAnswers(() => {
    //     const { correct_answer, incorrect_answers } = questions[
    //         currentQuestion
    //     ];
    //     const answers = [...incorrect_answers, correct_answer];
    //     const result = shuffle(answers);
    //     return result;
    // })

    // TODO: fix re-render issue and getting answers to display correctly issue

    const handleClick = (index) => {
        if(questions[index] === questions[currentQuestion].correct_answer) {
            alert("Correct!!!");
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }else {
            setShowScore(true);
        }
    }

    return (
        <div className="question">
            {
                showScore ? <h1>You scored 0 out of 20</h1> :
                <>
                    <div className="question--box">
                        <p>{questions[currentQuestion].question}</p>
                    </div>
                    <div className="answers--container">
                        {answers.map((answer, index) => (
                            <button
                                onClick={ () => handleClick(index) }
                                key={answer}
                                className="answer"
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                </>
            }
            
        </div>
    );
};

export default Question;
