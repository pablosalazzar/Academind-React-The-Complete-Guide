import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)
    const timerRef = useRef()
    const modalRef = useRef()

    function handleStart() {
        setTimerStarted(true)
        timerRef.current = setTimeout(() => {
            setTimerExpired(true)
            modalRef.current.open()
        }, targetTime * 1000);

    }

    function handleStop() {
        clearTimeout(timerRef.current)
        setTimerStarted(false)
    }

    return (
        <>
            <ResultModal result="lost" targetTime={targetTime} modalRef={modalRef}/>
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>you lost!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}