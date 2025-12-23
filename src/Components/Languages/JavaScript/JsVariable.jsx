
import React, { useState } from "react";

import '/src/App.css'
import { NavLink } from 'react-router-dom';
function JsVariable() {

    const [isOpen, setisOpen] = useState(false);
    return (
        <>
            <div className="p-10">
                <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="font-bold text-xl font-[Itel] ">JavaScript Variables</h2>
                    <p className="py-2 font-thin">Welcome to the Variables of JavaScript programming languages</p>
                    <button onClick={() => setisOpen(!isOpen)} className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white">Start learning more</button>
                </div>

                {
                    isOpen && (
                        <div className="bg-cyan-900 h-auto navbar animate-animated  text-white rounded w-full sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
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

                <div className="mx-1  mt-4  " style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <div className="p-5 w-full">
                        <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">Definition</h2>
                        <p className="text-lg font-serif py-2">In JavaScript, variables are symbolic names used to store data values. They act as containers for information that can be accessed and manipulated throughout a program. Variables are declared using specific keywords, and their values can be of various data types.

                        </p>
                    </div>
                </div>

                <div className="mx-1  mt-4  " style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <div className="p-5 w-full">
                        <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">Declaring Variables:

                        </h2>
                        <p className="text-lg py-2">
                            <span className="text-xl font-bold">var</span> This is the older keyword for declaring variables. Variables declared with var are function-scoped or globally scoped if declared outside a function. They can be redeclared and updated.
                        </p>
                        <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
                            <p className="">
                                var x = 10;
                            </p>
                            <p className="">
                                var x = 20; // Redeclaration is allowed
                            </p>
                            <p>

                                x = 30; // Updating is allowed
                            </p>
                        </div>
                        <p className="text-lg py-2">
                            <span className="text-xl font-bold">Let</span>  Introduced in ES6, let is preferred for declaring variables whose values might change. Variables declared with let are block-scoped (scoped within curly braces {}). They can be updated but not redeclared within the same scope.
                        </p>
                        
                        <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
                            <p className="">
                                let x = 10;
                            </p>
                            <p className="">
                                let x=20 // error
                            </p>
                            <p>

                                x = 30; // Updating is allowed
                            </p>
                        </div>
                        <p className="text-lg py-2">
                            <span className="text-lg font-bold">const</span> Also introduced in ES6, const is used to declare constant variables, meaning their values cannot be reassigned after initialization. Like let, const variables are block-scoped. They must be initialized at the time of declaration.
                        </p>
                        <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
                            <p className="">
                                const y = 10;
                            </p>
                            <p className="">
                                y=20 // error
                            </p>
                            <p>
                               const  y = 30; // error
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-1  mt-4  " style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <div className="p-5 w-full">
                        <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">The Future of JavaScript</h2>
                        <p className="text-lg font-serif py-2">JavaScript continues to evolve and adapt to new technologies.
                            Upcoming trends include the growth of WebAssembly, which allows running code written in other languages alongside JavaScript in the browser.
                            Serverless computing is gaining traction, allowing developers to build applications without managing servers, with JavaScript playing a key role.
                            Machine learning is being integrated into JavaScript, enabling the development of intelligent web applications.
                            TypeScript, a statically typed superset of JavaScript, is becoming increasingly popular, offering more structure and reducing errors in large projects.
                            The future of JavaScript looks promising with more robust tools and features to help developers build better applications</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JsVariable;