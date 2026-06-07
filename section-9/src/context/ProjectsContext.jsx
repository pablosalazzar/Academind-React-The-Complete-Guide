import { createContext, useContext, useState } from "react";
import { projectsMockData } from "../mock/projectsData";

const ProjectsContext = createContext(null)

export function ProjectsProvier({ children }) {


    //const [project,setProjects] = useState([])
    const [projects, setProjects] = useState(projectsMockData)

    // Need to create the add Project
    // Need to create the add task 

    // TODO: Need to add a function that get and id and return the current project
    function getProjectById() {

    }

    function deleteProject(projectId){
      // delete project with no verification of tasks: 
      setProjects( prevValue => (
        prevValue.filter( project => project.id != projectId)
      ) )

      return "success"
    }

    function addProject(newProject) {
        const newProjectId = Date.now()
        setProjects(prevValue => [...prevValue, { id: newProjectId, ...newProject, tasks: [] }])
        console.log('Project added')
    }

    function addTaks(projectId, newTask) {
        setProjects(prevValue => (
            prevValue.map(project => {
                if (project.id != projectId) {
                    return project
                }

                return {
                    ...project,
                    tasks: [...project.tasks, { id: Date.now(), name: newTask, completed:false }]
                }
            })
        ))
    }

    function deleteTask(projectId, taskId){
      // we can use the filter witth the delete
      setProjects( prevValue => (
        prevValue.map( project => {
          if(project.id != projectId){
            return project
          }
          
          // get tasks 
          const filterTasks = project.tasks.filter( task => (
            task.id != taskId
          ))

          return {...project, tasks: filterTasks}

        })
      ))

    }

    function completeTaks(projectId, taskId){

      setProjects( prevValue => (
        prevValue.map( project => {
          if(project.id != projectId){
            return project
          }
          
          const updatedTasks = project.tasks.map( task=> {
            if(task.id != taskId){
              return task
            }
            return {...task, completed: !task.completed}
          })

          return {...project, tasks: updatedTasks}
        })
      ))
    }



    return (
        <>
            <ProjectsContext value={{ projects, addProject, addTaks, completeTaks, deleteTask, deleteProject }}>
                {children}
            </ProjectsContext>
        </>
    )


}

// Creating my onw hook 
export function useProjects() {
    return useContext(ProjectsContext)
}