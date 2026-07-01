import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000

export default function DeleteConfirmation({ onConfirm, onCancel, isModalOpen }) {
  const [remainingtime, setRemainingtime] = useState(TIMER)

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




  useEffect(() => {
    console.log('inse useeffect of deleteConfimr')

    if (isModalOpen) {
      console.log('modal open ')
      const timeReference = setTimeout(() => {
        console.log('Automatic accept')
        onConfirm()
      }, TIMER)

      return () => {
        console.log('Cleanup timer')
        clearTimeout(timeReference)
      }
    }

  }, [onConfirm, isModalOpen])


  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} isModalOpen={isModalOpen}/>
    </div>
  );
}
