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
                    tasks: [...project.tasks, { id: Date.now(), name: newTask }]
                }
            })
        ))
    }



    return (
        <>
            <ProjectsContext value={{ projects, addProject, addTaks }}>
                {children}
            </ProjectsContext>
        </>
    )


}

// Creating my onw hook 
export function useProjects() {
    return useContext(ProjectsContext)
}