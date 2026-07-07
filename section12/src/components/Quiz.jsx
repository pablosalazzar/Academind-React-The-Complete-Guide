import { useState } from "react"
import QUESTIONS from '../questions'


export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length

    const shufleAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shufleAnswers.sort(() => Math.random() -0.5)     

    function handleSelectedAnswer(selectedAnswer) {
        console.log('Answer Selected')
        setUserAnswers(prevValue => [...prevValue, selectedAnswer])
    }

    return (
        <div id="quiz">
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