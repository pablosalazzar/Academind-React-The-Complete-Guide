import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimerExpire, mode }) {
    console.log(timeout)
    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        const timer = setTimeout(() => {
            onTimerExpire()
        }, timeout);
        return ()=> {
            clearTimeout(timer)
        }
    }, [timeout, onTimerExpire] )


    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevValue => prevValue - 100)
        }, 100);
        return () => {
            clearInterval(interval)
        }
    }, [])



    return (
        <>
            <progress 
            id="question-time"
            value={remainingTime}
            max={timeout}
            className={mode}
            ></progress>
        </>
    )
}