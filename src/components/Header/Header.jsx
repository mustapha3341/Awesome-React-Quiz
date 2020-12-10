import React from "react";

const Header = (props) => {
    return (
        <header className="header">
            <h1 className="logo">AWESOME QUIZ APP</h1>
            <nav className="main--nav">
                <ul className="nav--items">
                    <li className="nav--item">
                        <span className="question--answered-count">8</span>/
                        <span className="question--total-count">
                            {props.totalQuestions}
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
