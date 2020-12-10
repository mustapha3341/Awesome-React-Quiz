import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Question from "./components/Question/Question";

import { getQuestions } from "./FetchQuestions";

const App = (props) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        const res = await getQuestions();
        setQuestions(res.results);
    };

    console.log(questions);
    return (
        <div className="App">
            <Header totalQuestions={questions.length ? questions.length : "Loading..."} />
			{questions.length > 0 ? 
            	<Question currentQuestion={questions[0]}/>
				: <h1 className="loader">Loading....</h1>
			}
        </div>
    );
};

export default App;
