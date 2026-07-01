import { useState, useEffect } from "react"

export default function ProgressBar({timer, isModalOpen}){

    const [remainingtime, setRemainingtime] = useState(timer)

      useEffect(() => {
    
        //only set this inverval if the modail is open 
        if (isModalOpen) {
          const interval = setInterval(() => {
            console.log('interval')
            setRemainingtime(prevValue => prevValue - 10)
          }, 10)
    
          // we need to clena up the function 
          return () => {
            clearInterval(interval)
          }
        }
        
    
      }, [isModalOpen])

    return(
        <>
            <progress value={remainingtime} max={timer} />
        </>
    )
}