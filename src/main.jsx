import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Syntax from './Components/Syntax.jsx'
import PythonSyntax from './Components/PythonSyntax.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='syntax' element={<Syntax/>}/>
      <Route path='pythonsyntax' element={<PythonSyntax/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
