import React, { useEffect, useState, useCallback } from "react";
import { shuffle } from "lodash";

const Question = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");

    const shuffledAnswers = useCallback(() => {
        const { correct_answer, incorrect_answers } = questions[
            currentQuestion
        ];
        const answers = shuffle([correct_answer, ...incorrect_answers]);
        return answers;
    }, [questions,currentQuestion]);
    

    useEffect(() => {
        const ans = shuffledAnswers();
        setAnswers(ans);
    }, [shuffledAnswers])

    const handleClick = (index) => {
        shuffledAnswers();
        setSelectedAnswer(answers[index]);

        // check if answer is correct
        if(selectedAnswer === questions[currentQuestion].correct_answer) {
            setCorrectAnswer(selectedAnswer);
            alert("WHoaahh!!!! 😁");
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            return;
        }
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
                        onClick={() => handleClick(index)}
                        key={answer}
                        dangerouslySetInnerHTML={{ __html: answer }}
                        className="answer"
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Question;
