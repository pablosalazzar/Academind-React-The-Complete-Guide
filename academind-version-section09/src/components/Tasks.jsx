import NewTask from "./NewTask";

export default function Tasks({tasks,onSaveTask, onDeleteTask}){
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onSaveTask={onSaveTask}/>
        <p className="text-stone-800 my-4">This project dont have tasks</p>
        <ul>
            {tasks.map(task=> (
                <li key={task.id} className="flex justify-between">
                    <p>{task.name}</p>
                    <p>
                        <button onClick={()=> onDeleteTask(task.id)}>Delete</button>    
                    </p>
                    
                </li>
            ))}
        </ul>
    </section>
}