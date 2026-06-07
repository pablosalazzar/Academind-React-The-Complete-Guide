import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <SideBar/>

        <main className="flex-1 bg-gray-100 p-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>


          <p className="mt-4 text-gray-600">
            This is the content area next to the sidebar.
          </p>

          
        </main>
      </div>

    </>
  );
}

export default App;
