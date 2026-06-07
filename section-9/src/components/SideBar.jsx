import { Link } from "react-router";
import { useProjects } from "../context/ProjectsContext";

export default function SideBar() {

    const {projects}  = useProjects()

    return (
        <aside className="h-screen w-64 bg-gray-900 text-white p-6">
            <h2 className="text-2xl font-bold mb-8">Pablo Project Tasks Version</h2>
            <nav className="space-y-3">
                
                <Link to="/createProject" href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
                    Create Project
                </Link>
                
                <h3 className="text-1xl font-bold mb-8">Projects:</h3>
                {
                    projects.map( project => (
                        <Link key={project.id} to={`/project/${project.id}`} href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
                            {project.name}
                        </Link>
                    ))
                }
                
            </nav>
        </aside>
    )
}