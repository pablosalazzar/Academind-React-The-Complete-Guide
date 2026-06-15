import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSidebar from './components/ProjectSidebar'
import SelectedProject from './components/SelectedProject';

function App() {

  const [projects, setProjects] = useState({
    currentProject: undefined,
    list: [],
    tasks:[]
  })

  function handleAddProject(){
    setProjects( prevValue => (
      {
        ...prevValue,
        currentProject: null
      }
    ))
  }

  function handleAddProjectList(projectData){
    setProjects( prevValue => {
      const newProject = {...projectData, id: Math.random()}
      const updatedList =  [...prevValue.list,newProject ]
      return {
        ...prevValue,
        list: updatedList,
        currentProject: undefined
      }
    })
  }

  function handleCancel(){
    setProjects( prevValue => (
      {
        ...prevValue,
        currentProject: undefined
      }
    ))
  }

  function handleSelectProject(projectId){
    // need to add the id of the project to the state
    setProjects(prevValue=> (
      {
        ...prevValue,
        currentProject: projectId
      }
    ))
  }

  function handleDeleteProject(projectId){
    setProjects(prevVaue=>(
      {
        ...prevVaue,
        currentProject: undefined,
        list: prevVaue.list.filter(project => project.id !== projectId) 
      }
    ))
  }

  let content
  const selectedProject = projects.list.find( project => project.id === projects.currentProject)
  if(projects.currentProject === undefined){
    content = <NoProjectSelected onAddProject={handleAddProject} onDeleteProject={handleDeleteProject}/>
  }else if(projects.currentProject === null){
    content= <NewProject onAddProject={handleAddProjectList} onCancel={handleCancel}/>
  }else{
    // need to show the project
    content = <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject} />
  }

  return (
    <main className ="h-screen my-8 flex gap-8">
      <ProjectSidebar
       onAddProject={handleAddProject}
       projects = {projects.list}
       onSelectProject={handleSelectProject}
       selectedId = {projects.currentProject}
      />
      {content}
    </main>
  );
}

export default App;
