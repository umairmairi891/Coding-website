import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import '/src/App.css' 
function JsIntroduction() {

    const [isOpen, setisOpen] = useState(false)
    return (
        <>
            <div className="bg-white w-full p-10">
                <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="font-bold text-xl font-[Itel] ">JavaScript Introduction</h2>
                    <p className="py-2 font-thin">Welcome to the Introduction of JavaScript programming languages</p>
                    <button onClick={() => setisOpen(!isOpen)} className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white">Start learning more</button>
                </div>

                {
                    isOpen && (
                        <div className="bg-cyan-900 h-auto navbar animate-animated   text-white rounded w-[100%] sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
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
                                <NavLink to='/jsvariable'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Variables</li>
                                </NavLink>
                                <NavLink to='/jsdatatypes'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Data Types</li>
                                </NavLink>
                                <NavLink to='/jsfunction'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Functions</li>
                                </NavLink>
                                <NavLink to='/jsoperator'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Operators</li>
                                </NavLink>
                                <NavLink to='/jsloops'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Loops</li>
                                </NavLink>
                                <NavLink to='/jsobjects'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Objects</li>
                                </NavLink>
                                <NavLink to='/jsclasses'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Classes</li>
                                </NavLink>
                                <NavLink to='/jsdom'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">DOM</li>
                                </NavLink>
                                <NavLink to='/jscomparison'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Comparison</li>
                                </NavLink>
                            </ul>
                        </div>
                    )
                }
            </div>

            <div className='mx-3 md:mx-10 py-5'>
                <div className='p-5 w-full' style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className='border-l-5 border-blue-800 pl-5 font-bold font-[Roboto] text-2xl'>Introduction</h2>
                    <p className="text-lg py-2 px-4">JavaScript is the programming language of the web.
                        It can update and change both HTML and CSS.
                        It can calculate, manipulate and validate data.
                    </p>
                    <p className="text-lg py-2 px-4">JavaScript is one of the 3 languages all web developers must learn:
                        1. HTML to define the content of web pages
                        2. CSS to specify the layout of web pages
                        3. JavaScript to program the behavior of web pages
                    </p>
                </div>

                <div className='p-5 w-full mt-4' style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className='border-l-5 border-blue-800 pl-5 font-bold font-[Roboto] text-2xl'>Key Aspects of JavaScript</h2>
                    <p className="text-lg py-2 px-4">Client-Side Scripting: Originally, JavaScript was designed to run directly within web browsers (client-side), enabling dynamic and interactive elements on a webpage without requiring server communication for every action. This includes features like form validation, animations, interactive maps, and responsive user interfaces.
                    </p>
                    <p className="text-lg py-1 px-4 ">
                        Server-Side Capabilities: With the advent of Node.js, JavaScript extended its reach to server-side development, allowing developers to build full-stack applications using a single language.
                    </p>
                    <p className="text-lg py-1 px-4">
                        Dynamic and Interpreted: JavaScript is a dynamically typed language, meaning variable types are determined at runtime. It is also an interpreted language, executing code line by line without requiring a separate compilation step.
                    </p>
                    <p className="text-lg py-1 px-4">Object-Oriented and Event-Driven: JavaScript supports object-oriented programming concepts through prototypes and classes. It is also inherently event-driven, responding to user actions and other events within a web environment. 
</p>
<p className="text-lg py-1 px-4">
    Integration with HTML and CSS: JavaScript seamlessly integrates with HTML and CSS, allowing manipulation of the Document Object Model (DOM) to dynamically change content, styles, and attributes of web page elements.
</p>
                </div>
            </div>
        </>
    )
}

export default JsIntroduction;