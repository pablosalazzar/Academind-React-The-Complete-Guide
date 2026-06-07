import { createContext, useContext, useState } from "react";
import { projectsMockData } from "../mock/projectsData";

const ProjectsContext = createContext(null)

export function ProjectsProvier({ children }) {


    //const [project,setProjects] = useState([])
    const [projects, setProjects] = useState(projectsMockData)

    // Need to create the add Project
    // Need to create the add task 
    
    // Need to add a function that get and id and return the current project
    function getProjectById(){

    }

    return (
        <>
            <ProjectsContext value={{ projects }}>
                {children}
            </ProjectsContext>
        </>
    )


}

// Creating my onw hook 
export function useProjects(){
    return useContext(ProjectsContext)
}