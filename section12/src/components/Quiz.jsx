import { useCallback, useRef, useState } from "react"
import QUESTIONS from '../questions'
import quizCompletedImg from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"
import Question from "./Question"
import Summary from './Summary'


export default function Quiz() {

    // Answer state
    const [userAnswers, setUserAnswers] = useState([])
    //const activeQuestionIndex = userAnswers.length

    const activeQuestionIndex = userAnswers.length
    const quizFinish = QUESTIONS.length === activeQuestionIndex

    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer) {

        setUserAnswers(prevValue => [...prevValue, selectedAnswer])
        // we have to create a timer to start shoing the succeser or not 

    }, [])

    const handleTimeExpire = useCallback(() => handleSelectedAnswer(null), [handleSelectedAnswer])

    if (quizFinish) {

        return (
            <Summary userAnswers={userAnswers}/>
        )
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectedAnswer}
                onTimerExpire={handleTimeExpire}
            />
        </div>
    )
}