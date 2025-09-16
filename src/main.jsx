import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import ContactUs from './Components/Footer/Contact.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Syntax from './Components/Syntax.jsx'
import PythonSyntax from './Components/Languages/PythonSyntax.jsx'
import JsSyntax from './Components/Languages/JsSyntax.jsx'
import CplusplusSyntax from './Components/Languages/CplusplusSyntax.jsx'
import Community from './Components/Footer/Community.jsx'
import Career from './Components/Footer/Career.jsx'
import Team from './Components/Footer/Team.jsx'
import Documentation from './Components/Footer/Documentation.jsx'
import API from './Components/Footer/API.jsx'
import Blog from './Components/Footer/BLog.jsx'
import Support from './Components/Footer/Support.jsx'
import Privacy from './Components/Footer/Privacy.jsx'
import JsIntroduction from './Components/Languages/JavaScript/JsIntroduction.jsx'
import JsHistory from './Components/Languages/JavaScript/JsHistory.jsx'
import JavaScript from './Components/Languages/JavaScript/JavaScript.jsx'
import JsWorking from './Components/Languages/JavaScript/JsWorking.jsx'
import JsVariable from './Components/Languages/JavaScript/JsVariable.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='community' element={<Community/>} />
      <Route path='career' element={<Career/>} />
      <Route path='team' element={<Team/>} />
      <Route path='contactus' element={<ContactUs/>} />
      <Route path='documentation' element={<Documentation/>} />
      <Route path='api' element={<API/>} />
      <Route path='blog' element={<Blog/>} />
      <Route path='support' element={<Support/>} />
      <Route path='privacy' element={<Privacy/>} />
      <Route path='syntax' element={<Syntax/>}/>
      <Route path='pythonsyntax' element={<PythonSyntax/>}/>
      <Route path='jssyntax' element={<JsSyntax/>}/>
      <Route path='cplusplussyntax' element={<CplusplusSyntax/>}/>
      <Route path='javascript' element={<JavaScript/>}/>
      <Route path='jsintroduction' element={<JsIntroduction/>}/>
      <Route path='jshistory' element={<JsHistory/>}/>
      <Route path='jsworking' element={<JsWorking/>}/>
      <Route path='jsvariable' element={<JsVariable/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
