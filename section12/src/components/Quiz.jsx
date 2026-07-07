import { useCallback, useState } from "react"
import QUESTIONS from '../questions'
import quizCompletedImg from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer"


export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([])
    const activeQuestionIndex = userAnswers.length
    const quizFinish = QUESTIONS.length === activeQuestionIndex

    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer) {
        // color the question.
        setUserAnswers(prevValue => [...prevValue, selectedAnswer])
    }, [])

    const handleTimeExpire = useCallback(() => handleSelectedAnswer(null), [handleSelectedAnswer])

    if (quizFinish) {
        return (
            <div id="summary">
                <img src={quizCompletedImg} alt="Trophy icon" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

    const shufleAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shufleAnswers.sort(() => Math.random() - 0.5)

    return (
        <div id="quiz">
            <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimerExpire={handleTimeExpire} />
            <div id="question">
                <h2> {QUESTIONS[activeQuestionIndex].text}</h2>

                <ul id="answers">
                    {shufleAnswers.map(answer => {

                        return (
                            <li key={answer} className="answer">
                                <button onClick={() => handleSelectedAnswer(answer)}>{answer}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}