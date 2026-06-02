import { useImperativeHandle, useRef } from "react"

export default function ResultModal({modalRef,result, targetTime}){
    const dialogRef = useRef()

    useImperativeHandle(modalRef, ()=> {
        return{
            open(){
                dialogRef.current.showModal()
            }
        }
    })

    return(
        <dialog ref={dialogRef} className="result-modal" >
            <h2>You {result}</h2>
            <p>
                The target time was <strong>{targetTime} seconds</strong>
            </p>
            <p>
                You stop the timer wiht <strong>x seconds left</strong>
            </p>
        <form method="dialog">
            <button>Close</button>
        </form>
        </dialog>
    )
}