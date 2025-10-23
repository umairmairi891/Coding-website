import React, { useState } from "react";

import '/src/App.css'
import { NavLink } from 'react-router-dom';
function JsDataTypes() {

    const [isOpen, setisOpen] = useState(false);
    return (
        <>
            <div className="p-3 md:p-10">
                <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="font-bold text-2xl font-[Itel] ">JavaScript Data Types</h2>
                    <p className="py-2 text-xl font-[Lato]">Welcome to the JavaScript programming languages</p>
                    <button onClick={() => setisOpen(!isOpen)} className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white">Start learning more</button>
                </div>

                {
                    isOpen && (
                        <div className="bg-cyan-900 h-auto navbar animate-animated  text-white rounded w-[100%] sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
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

                <div className="mx-0 mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <div className="p-5 w-full">
                        <h2 className="border-l-5 border-blue-800 font-bold text-3xl font-[Roboto] pl-5">JavaScript Data Types</h2>
                        <p className="py-3 font-[Itel] text-xl">Javascript has eight fundamental data types, categorized into two main groups: <strong>Primitive</strong> and <strong>Non-Primitive</strong> types</p>
                        <h3 className="font-bold text-2xl font-[Lato]">Primitive Data Types: These represent single immutable value</h3>
                        <p className="py-2 font-[Itel] text-xl"><strong>Number:</strong> Represents both integers and floating point numbers</p>

                        <div className="w-[100%] md:w-[100%] h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
                            let age=30;
                            let price=19.90
                        </div>
                        <p className="py-2 font-[Itel] text-xl"><strong>String:</strong>Represents sequence of characters, enclosed in single quotes or backticks.</p>
                        <div className="w-[100%] md:w-[100%] h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
                            let name='Alice';
                            let greeting=`Hello World`
                        </div>
                        <p className="py-2 font-[Itel] text-xl"><strong>Boolean:</strong>Represents a logical entity and can have only two values: true or false</p>
                        
                        <div className="w-[100%] md:w-[100%] h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
                            let isActive=true;
                            let hasPermission=false;
                        </div>
                        <p className="py-2 font-[Itel] text-xl"><strong>Undefined:</strong> Represents a variable that has been declared but not yet assigned a value.</p>
                        <div className="w-[100%] h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
                            let myVariable; // myVariable is undefined
                        </div>
                        <p className="py-2 font-[Itel] text-xl"><strong>Null:</strong> Represents the intentional absense of any object value. It is a primitive value</p>
                       
                        <div className="w-[100%] h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
                            let emptyValue=null;
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default JsDataTypes;