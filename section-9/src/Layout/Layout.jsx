import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

export default function Layout() {

  return (<>
    <div className="flex min-h-screen">
      <SideBar />
      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Outlet />
      </main>
    </div>
  </>)



}