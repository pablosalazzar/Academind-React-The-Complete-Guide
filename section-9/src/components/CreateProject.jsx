import { useState } from "react"
import { useProjects } from "../context/ProjectsContext"
import { useNavigate } from "react-router"


export default function CreateProject() {

  const [projectName, setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const {addProject} = useProjects()

  let navigate = useNavigate();

  function clearForm(){
    setProjectDescription("")
    setProjectName("")
  }

  function handleSaveProject( e ){
    e.preventDefault()

    // Verify that fiels are not empty 
    const newProjectId = addProject({
      name: projectName,
      description: projectDescription
    })
    // Save the data
    // clena the inputs & show success message
    clearForm()
    // Redirect to the project that I already creat
    navigate(`/project/${newProjectId}`)
  }


  return (
    <div className="max-w-lg mx-auto mt-10 bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm">
      <h1 className="text-xl font-medium text-zinc-900 flex items-center gap-2 mb-6">
        📁 Create project
      </h1>

      <form className="space-y-5" onSubmit={handleSaveProject}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="project-name" className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
            Project name
          </label>
          <input
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            id="project-name"
            type="text"
            placeholder="e.g. Website redesign"
            className="bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:ring-2 focus:ring-indigo-400/30 focus:border-indigo-400 transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="description" className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
            Description
          </label>
          <textarea
            value={projectDescription}
            onChange={e=> setProjectDescription(e.target.value)}
            id="description"
            rows={4}
            placeholder="What is this project about?"
            className="bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:ring-2 focus:ring-indigo-400/30 focus:border-indigo-400 transition resize-y"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-zinc-100">
          <button
            type="button"
            className="px-4 py-2 text-sm text-zinc-500 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 text-sm font-medium text-indigo-100 bg-indigo-600 hover:bg-indigo-500 active:scale-95 rounded-lg transition"
          >
            ✓ Save project
          </button>
        </div>
      </form>
    </div>
  )
}