import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000) // want the time in miliseconds 

    const timerRef = useRef()
    const modalRef = useRef()

    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime *1000


    // validation
    if(timeRemaining <= 0){
        // time expire
        clearInterval(timerRef.current)
        modalRef.current.open()
    }

    function handleReset(){
        setTimeRemaining( targetTime * 1000)
    }
    

    function handleStart() {
        timerRef.current = setInterval(() => {
            setTimeRemaining( prevVal => prevVal - 10)
        }, 10);
    }

    function handleStop() {
        modalRef.current.open()
        clearInterval(timerRef.current)
     
    }

    return (
        <>
            <ResultModal onReset={handleReset} result="lost" targetTime={targetTime} modalRef={modalRef} remainingTime ={timeRemaining}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timeIsActive ? handleStop : handleStart}>
                        {timeIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timeIsActive ? 'active' : undefined}>
                    {timeIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}