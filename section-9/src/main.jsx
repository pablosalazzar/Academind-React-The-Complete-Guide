import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import CreateProject from './components/CreateProject.jsx'
import ViewProject from './components/ViewProject.jsx'
import Layout from './Layout/Layout.jsx'
import { ProjectsProvier } from './context/ProjectsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectsProvier>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* All the pages inside my sidebar */}
            <Route path='/createProject' element={<CreateProject />} />
            <Route path='/project/:projectId' element={<ViewProject />} />
            {/* TODO: view project route */}
          </Route>
        </Routes>
      </ProjectsProvier>
    </BrowserRouter>
  </React.StrictMode>,
)
