import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Login from './Components/Sign/login/Login.jsx'
import About from './Components/About.jsx'
import ContactUs from './Components/Footer/Contact.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Syntax from './Components/Syntax.jsx'
import PythonSyntax from './Components/Languages/Python/PythonSyntax.jsx'
import JsSyntax from './Components/Languages/JavaScript/JsSyntax.jsx'
import CplusplusSyntax from './Components/Languages/CPP/CplusplusSyntax.jsx'
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
import JsDataTypes from './Components/Languages/JavaScript/JsDataTypes.jsx'
import JsFunction from './Components/Languages/JavaScript/JsFunction.jsx'
import JsOperator from './Components/Languages/JavaScript/JsOperator.jsx'
import JsLoops from './Components/Languages/JavaScript/JsLoops.jsx'
import JsObjects from './Components/Languages/JavaScript/JsObjects.jsx'
import JsClasses from './Components/Languages/JavaScript/JsClasses.jsx'
import JsDOM from './Components/Languages/JavaScript/JsDOM.jsx'
import JsComparison from './Components/Languages/JavaScript/JsComparison.jsx'
import Python from './Components/Languages/Python/Python.jsx'
import PyIntroduction from './Components/Languages/Python/PyIntroduction.jsx'
import PyHistory from './Components/Languages/Python/PyHistory.jsx'
import PyWorking from './Components/Languages/Python/PyWorking.jsx'
import PyVariable from './Components/Languages/Python/PyVariables.jsx'
import PyDataTypes from './Components/Languages/Python/PyDataTypes.jsx'
import PyFunction from './Components/Languages/Python/PyFunction.jsx'
import PyOperator from './Components/Languages/Python/PyOperator.jsx'
import PyLoops from './Components/Languages/Python/PyLoops.jsx'
import PyObjects from './Components/Languages/Python/PyObjects.jsx'
import PyClasses from './Components/Languages/Python/PyClasses.jsx'
import PyComparison from './Components/Languages/Python/PyComparison.jsx'
import PyLibraries from './Components/Languages/Python/PyLibraries.jsx'
import CPlusPlus from './Components/Languages/CPP/Cpp.jsx'
import CPlusPlusSyntax from './Components/Languages/CPP/CplusplusSyntax.jsx'
import CppIntroduction from './Components/Languages/CPP/CppIntroduction.jsx'
import CppHistory from './Components/Languages/CPP/CppHistory.jsx'
import CppWorking from './Components/Languages/CPP/CppWorking.jsx'
import CppVariable from './Components/Languages/CPP/CppVariables.jsx'
import CppDataTypes from './Components/Languages/CPP/CppDataTypes.jsx'
import CppFunction from './Components/Languages/CPP/CppFunction.jsx'
import CppOperator from './Components/Languages/CPP/CppOperator.jsx'
import CppLoops from './Components/Languages/CPP/CppLoop.jsx'
import CppObjects from './Components/Languages/CPP/CppObjects.jsx'
import CppClasses from './Components/Languages/CPP/CppClasses.jsx'
import CppLibraries from './Components/Languages/CPP/CppLibrary.jsx'
import CppComparison from './Components/Languages/CPP/CppComaprison.jsx'
import AuthContainer from './Components/Sign/login/Authentication.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='login' element={<AuthContainer/>} />
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
      <Route path='pysyntax' element={<PythonSyntax/>}/>
      <Route path='jssyntax' element={<JsSyntax/>}/>
      <Route path='cplusplussyntax' element={<CplusplusSyntax/>}/>
      <Route path='javascript' element={<JavaScript/>}/>
      <Route path='jsintroduction' element={<JsIntroduction/>}/>
      <Route path='jshistory' element={<JsHistory/>}/>
      <Route path='jsworking' element={<JsWorking/>}/>
      <Route path='jsvariable' element={<JsVariable/>}/>
      <Route path='jsdatatypes' element={<JsDataTypes/>}/>
      <Route path='jsfunction' element={<JsFunction/>}/>
      <Route path='jsoperator' element={<JsOperator/>}/>
      <Route path='jsloops' element={<JsLoops/>}/>
      <Route path='jsobjects' element={<JsObjects/>}/>
      <Route path='jsclasses' element={<JsClasses/>}/>  
      <Route path='jsdom' element={<JsDOM/>}/>
      <Route path='jscomparison' element={<JsComparison/>}/>
      <Route path='python' element={<Python/>}/>
      <Route path='pyintroduction' element={<PyIntroduction/>}/>
      <Route path='pyhistory' element={<PyHistory/>}/>
      <Route path='pyworking' element={<PyWorking/>}/>
      <Route path='pyvariable' element={<PyVariable/>}/>
      <Route path='pydatatypes' element={<PyDataTypes/>}/>
      <Route path='pyfunction' element={<PyFunction/>}/>
      <Route path='pyoperator' element={<PyOperator/>}/>
      <Route path='pyloops' element={<PyLoops/>}/>
      <Route path='pyobjects' element={<PyObjects/>}/>
      <Route path='pyclasses' element={<PyClasses/>}/>
      <Route path='pylibraries' element={<PyLibraries/>}/>
      <Route path='pycomparison' element={<PyComparison/>}/>
      <Route path='cpp' element={<CPlusPlus/>}/>
      <Route path='cppsyntax' element={<CPlusPlusSyntax/>}/>
      <Route path='cppintroduction' element={<CppIntroduction/>}/>
      <Route path='cpphistory' element={<CppHistory/>}/>
      <Route path='cppworking' element={<CppWorking/>}/>
      <Route path='cppvariable' element={<CppVariable/>}/>
      <Route path='cppdatatypes' element={<CppDataTypes/>}/>
      <Route path='cppfunction' element={<CppFunction />}/>
      <Route path='cppoperator' element={<CppOperator />}/>
      <Route path='cpploops' element={<CppLoops/>}/>
      <Route path='cppobjects' element={<CppObjects/>}/>
      <Route path='cppclasses' element={<CppClasses/>}/>
      <Route path='cpplibraries' element={<CppLibraries/>}/>
      <Route path='cppcomparison' element={<CppComparison/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
