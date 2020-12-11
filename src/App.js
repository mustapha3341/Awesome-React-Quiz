import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Question from "./components/Question/Question";


const App = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const url =
            "https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple";
            fetch(url).then(response => {
                return response.json()
            }).then(data => {
                setQuestions(data.results);
            }).catch(error => {
                throw new Error("Error connecting to server" + error);
            })
    }, []);


    return (
        <div className="App">
            <Header
                totalQuestions={
                    questions.length ? questions.length : "Loading..."
                }
            />
            {questions.length > 0 ? (
                <Question
                    questions={questions}
                />
            ) : (
                <h1 className="loader">Loading....🤓</h1>
            )}
        </div>
    );
};

export default App;
