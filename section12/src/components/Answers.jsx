import { useCallback, useRef, useState } from "react"

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {

    // use reference
    const shuffledAnswers = useRef()

    // verify if its created
    if( !shuffledAnswers.current){
        shuffledAnswers.current = [...answers]
        shuffledAnswers.current.sort(() => Math.random() - 0.5)
    }


    return (
        <>
            <ul id="answers">
                {shuffledAnswers.current.map(answer => {
                    // veriy if the onee that i select its the one what should be painted
                    let cssClass = ''
                    const isSelected = answer === selectedAnswer
                    if (isSelected && answerState === 'answered') {
                        cssClass = 'selected'
                    }

                    if (isSelected && (answerState === 'correct' || answerState == 'wrong')) {
                        cssClass = answerState
                    }

                    return (
                        <li key={answer} className="answer">
                            <button disabled={answerState != ''} className={cssClass} onClick={() => onSelect(answer)}>{answer}</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}