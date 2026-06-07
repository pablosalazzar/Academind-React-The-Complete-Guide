import { Link } from "react-router";

export default function SideBar() {
    return (
        <aside className="h-screen w-64 bg-gray-900 text-white p-6">
            <h2 className="text-2xl font-bold mb-8">Pablo Project Tasks Version</h2>
            <nav className="space-y-3">
                
                <Link to="/createProject" href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
                    Create Project
                </Link>
                
                <h3 className="text-1xl font-bold mb-8">Projects:</h3>
                <Link to="/project/1" href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
                    project 1
                </Link>
                <Link to="/project/2" href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
                    project 2
                </Link>
                <Link to="/project/3" href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
                    project 3
                </Link>
                
            </nav>
        </aside>
    )
}