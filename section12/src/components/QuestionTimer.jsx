import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimerExpire }) {
    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {

        console.log('SETTING TIMEOUT')
        const timer = setTimeout(() => {
            onTimerExpire()
        }, timeout);
        return ()=> {
            clearTimeout(timer)
        }
    }, [timeout, onTimerExpire] )


    useEffect(() => {
        console.log('SETTING INTERVAL')
        const interval = setInterval(() => {
            setRemainingTime(prevValue => prevValue - 100)
        }, 100);
        return () => {
            clearInterval(interval)
        }
    }, [])



    return (
        <>
            <progress id="question-time" value={remainingTime} max={timeout}></progress>

        </>
    )
}