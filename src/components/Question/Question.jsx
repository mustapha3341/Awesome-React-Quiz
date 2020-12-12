import React, { useEffect, useState, useCallback } from "react";
import { shuffle } from "lodash";

const Question = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selected, setSelected] = useState(null);

    const shuffledAnswers = useCallback(() => {
        const { correct_answer, incorrect_answers } = questions[
            currentQuestion
        ];
        const answers = shuffle([correct_answer, ...incorrect_answers]);
        setAnswers(answers);
    }, [questions, currentQuestion]);

    useEffect(() => {
        shuffledAnswers();
    }, [shuffledAnswers]);

    const handleNext = () => {
        setSelected(null);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            return;
        }
    };

    const handlePrev = () => {
        const prevQuestion = currentQuestion - 1;
        if (prevQuestion < 0) {
            return;
        } else {
            setCurrentQuestion(prevQuestion);
        }
    };

    const handleSelected = (index) => {
        const sel = answers[index];
        setSelected(sel);
    };

    return (
        <div className="question">
            <div className="question--box">
                <p
                    dangerouslySetInnerHTML={{
                        __html: questions[currentQuestion].question,
                    }}
                ></p>
            </div>
            <div className="answers--container">
                {answers.map((answer, index) => (
                    <button
                        onClick={() => {
                            handleSelected(index);
                        }}
                        key={answer}
                        dangerouslySetInnerHTML={{ __html: answer }}
                        className={`answer ${
                            selected === answer ? `selected` : ""
                        }`}
                    ></button>
                ))}
            </div>
            <div className="next--question-btn">
                <button onClick={handlePrev} className="next--btn">
                    Prev
                </button>
                <button onClick={handleNext} className="prev--btn">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Question;
