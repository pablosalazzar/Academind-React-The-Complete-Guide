import { useState } from "react"

export default function NewTask({onSaveTask}){

    const [task,setTask] = useState("")
    function handleAddTaks(){
        onSaveTask(task)
        setTask("")
    }

    return(
        <div className="flex items-center gap-4">
            <input value={task} onChange={e=>setTask(e.target.value)} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            <button onClick={handleAddTaks} className="text-slate-700 hover:text-stone-950" >Add task</button>
        </div>
    )
}