import React,{useState} from "react";

import { NavLink } from 'react-router-dom';

import '/src/App.css' 
function JsWorking(){

    
    const [isOpen, setisOpen] = useState(false);

    return (
<>

<div className="p-10">
        <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="font-bold text-xl font-[Itel] ">JavaScript Working</h2>
                    <p className="py-2 font-thin">Welcome to the Working of JavaScript programming languages</p>
                    <button onClick={() => setisOpen(!isOpen)} className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white">Start learning more</button>
                </div>
</div>
{
     isOpen && (
                        <div className="bg-cyan-900 h-auto  navbar  text-white rounded w-[100%] sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
                            <ul className=" text-lg font-[Roboto]">
                                <div className="flex justify-between items-center">
                                    <NavLink className='w-[80%]  hover:bg-gray-700  duration-300' to='/jsintroduction'>
                                        <li className="py-3 px-4  hover:bg-gray-700  duration-300">Introduction</li>
                                    </NavLink>
                                    <i onClick={() => setisOpen(!isOpen)} className="fa-solid fa-xmark cursor-pointer  text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"></i>
                                </div>
                                <NavLink to='/jshistory'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">History</li>
                                </NavLink>
                                <NavLink to='/jsworking'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Working</li>
                                </NavLink>
                                <NavLink to='/jssyntax'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Syntax</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Variables</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Data Types</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Functions</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Operators</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Loops</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Objects</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Classes</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">DOM</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Comparison</li>
                                </NavLink>
                            </ul>
                        </div>
            )
        }


                <div className="mx-3 md:mx-10  mt-2 mb-4  " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
                   <div className=" p-5">
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">How JavaScript Works?</h2>
                    <p className="text-lg font-serif py-2">JavaScript is a dynamically typed, cross-platform threaded scripting and programming language, used to put functionality and interactivity at the client side as well as to write logic on the server side of a website. It can display content updates, interactive maps, control multimedia, interactive forms, and many more.
</p>
<p className="text-lg font-serif py-2">JavaScript, in short JS, was created in 1995 by Brendan Eich, who was working at Netscape Communications. In the beginning, it was designed to add interactivity to websites. Currently, JavaScript can support both client-side and server-side development. It plays a very important role in modern web apps by helping developers manipulate the Document Object Model (DOM), handle user events, and communicate with servers asynchronously.
</p>
                   </div>
                </div>
<div className="mx-3 md:mx-10  mt-2 mb-4  p-5" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">JavaScript Engines</h2>
    <p className="text-lg font-serif py-2">JavaScript engines are responsible for executing JavaScript code. The two most important JavaScript engines are V8 (used in Chrome and Node.js) and SpiderMonkey (used in Firefox). These engines follow a similar process to interpret and execute JavaScript:
</p>
<h2 className="font-semibold font-[Itel] text-xl">How JavaScript Engines Interpret and Execute Code?</h2>
<p className="text-lg font-serif py-2">Parsing: When we load a webpage or execute a script, the JavaScript engine first parses the source code to understand its structure. It converts the code into an Abstract Syntax Tree (AST) which is a hierarchical representation of the script.
Compilation: Now in compilation phase, the engine translates the AST into machine-readable bytecode using JIT (Just-In-Time) compilation. JIT compilation optimizes performance by compiling frequently executed code segments at runtime.
Execution: Finally, the bytecode or machine code is executed line by line, which produces the output or behavior as defined by the JavaScript code</p>
</div>
</>
    )
}

export default JsWorking;