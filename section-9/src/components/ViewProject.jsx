import { useParams } from "react-router"
import { useProjects } from '../context/ProjectsContext'
import { useEffect, useState } from "react"

export default function ViewProject() {

  //Task state. TODO: move this variable to other state
  const [task,setTask] = useState("")

  let { projectId } = useParams()
  const { projects,addTaks } = useProjects()

  const project = projects.find(currentProject => currentProject.id == projectId)
  

  function handleAddTaks(){
    // need to verify if field its empty 
    // Store the new task ussing context
    // Clear the input task 
    addTaks( projectId ,task)
    setTask("")
    
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-1">Project</p>
          <h1 className="text-2xl font-medium text-zinc-900">{project.name}</h1>
          <p className="text-sm text-zinc-500 mt-1">{project.description}</p>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 active:scale-95 transition">
          Delete project
        </button>
      </div>

      {/* Divider */}
      <hr className="border-zinc-100" />

      {/* Create Task */}
      <div className="bg-white border border-zinc-200 rounded-2xl p-6">
        <h2 className="text-sm font-medium text-zinc-700 mb-4">Create task</h2>
        <div className="flex gap-3">
          <input
            value={task}
            onChange={e=> setTask(e.target.value)}
            type="text"
            placeholder="Task name"
            className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:ring-2 focus:ring-indigo-400/30 focus:border-indigo-400 transition"
          />
          <button onClick={handleAddTaks} className="px-5 py-2.5 text-sm font-medium text-indigo-100 bg-indigo-600 hover:bg-indigo-500 active:scale-95 rounded-lg transition whitespace-nowrap">
            + Add task
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-zinc-100">
          <h2 className="text-sm font-medium text-zinc-700">Tasks</h2>
        </div>

        <ul className="divide-y divide-zinc-100">
          {/* Task item — repeat this pattern */}

          {project.tasks.map(task => (
            <li key={task.id} className="flex items-center justify-between px-6 py-3.5 hover:bg-zinc-50 transition group">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="accent-indigo-600 w-4 h-4 rounded" />
                <span className="text-sm text-zinc-800">{task.name}</span>
              </div>
              <button className="text-xs text-zinc-400 hover:text-red-500 border border-transparent hover:border-red-200 hover:bg-red-50 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
                Remove
              </button>
            </li>
          ))}
        </ul>

        {/* Empty state */}

        {project.tasks.length == 0 && (
          <div className="px-6 py-10 text-center text-sm text-zinc-400">
            No tasks yet — add one above.
          </div>
        )}

      </div>

    </div>
  )
}