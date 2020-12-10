const url =
    "https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple";

export const getQuestions = async () => {
    const result = await fetch(url);
    const questions = result.json();
    return questions;
};
