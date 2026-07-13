import {useState} from 'react'
import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"
import QUESTIONS from '../questions'


export default function Question({
    index, 
    onSelectAnswer, 
    onTimerExpire 
}) {



    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null,
    })

    let timer = 10000 

    if(answer.selectedAnswer){
        timer = 1000
    }

    if(answer.isCorrect !== null){
        timer = 2000
    }




    function handleSelectAnswer(answer) {
        // update the anser
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })
        // We show if it's correct or not after a second 

        setTimeout(() => {
            console.log('inside question telling if its correct')
            // verify if the answer was correct 
            // we need the first answer from the question index that I have
            const isCorrect = QUESTIONS[index].answers[0] === answer
            console.log(isCorrect)

            setAnswer({
                selectedAnswer: answer,
                isCorrect: isCorrect
            })
            
            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000);
            // update the state
        }, 1000);
    }

    let answerState = ''
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    }else if( answer.selectedAnswer){
        answerState = 'answered'
    }
    console.log(answerState)

    return (
        <>
            <div id="question">
                {/* If the user select a question, start a new timer that let me see the animation  */}
                <QuestionTimer
                    key={timer}
                    timeout={timer}
                    onTimerExpire={ answer.selectedAnswer === '' ? onTimerExpire: null}
                    mode={answerState}
                />
                <h2> {QUESTIONS[index].text}</h2>
                <Answers
                    answers={QUESTIONS[index].answers}
                    selectedAnswer={answer.selectedAnswer}
                    answerState={answerState}
                    onSelect={handleSelectAnswer}
                />
            </div>
        </>
    )
}