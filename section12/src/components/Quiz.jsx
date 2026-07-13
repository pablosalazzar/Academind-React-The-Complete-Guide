import { useCallback, useRef, useState } from "react"
import QUESTIONS from '../questions'
import quizCompletedImg from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"
import Question from "./Question"


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
        let skip = 0
        let correct = 0
        let incorrect = 0

        let wrongAnswers = new Map()
        // loop the results and start calculating thr esutl s
        for (const [index, answer] of userAnswers.entries()) {

            if (answer == null) {
                skip++
            } else {
                // verify if this answer its correct or incorrect
                if (answer === QUESTIONS[index].answers[0]) {
                    correct++
                } else {
                    incorrect++
                    wrongAnswers.set(index, answer)
                }

            }
        }

        return (
            <div id="summary">
                <img src={quizCompletedImg} alt="Trophy icon" />
                <h2>Quiz Completed!</h2>

                {/* // I wnat to show here the data  */}
                Total Of skip questions = {skip}
                <br />

                {/* How many skip question I have  */}
                Total of good quesitons = {correct}
                <br />

                {/* Hiow many worng questions i have */}
                Total of wrong questions = {incorrect}
                <br />
                <br />

                {[...wrongAnswers].map(([questionIndex, wrongAnswer]) => (
                    <div key={questionIndex}>
                        Question {questionIndex}: {wrongAnswer}
                    </div>
                ))}

            </div>
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