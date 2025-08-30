import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Syntax from './Components/Syntax.jsx'
import PythonSyntax from './Components/PythonSyntax.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
   children:[
    {
      path:'',
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'syntax',
      element:<Syntax/>,
    },
    {
      path:'pythonsyntax',
      element:<PythonSyntax/>
    }
   ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
