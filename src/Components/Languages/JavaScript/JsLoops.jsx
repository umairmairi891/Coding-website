import React, { useState } from "react";

import '/src/App.css'
import { NavLink } from 'react-router-dom';
function JsLoops() {

    const [isOpen, setisOpen] = useState(false);
    return (
        <>
            <div className="p-10">
                <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="font-bold text-xl font-[Itel] ">JavaScript Loops</h2>
                    <p className="py-2 font-thin">Welcome to the JavaScript programming languages</p>
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
                                <NavLink>
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

                <div className="mt-4 rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <div className="p-5 w-full">
                        <h2 className="font-[Itel] text-xl">JavaScript provides several types of loops to repeadetely execute a block of code based on a condition or to iterate over data structures. </h2>
                        <h3 className="text-xl font-[Roboto] py-2"><strong className="px-4 text-2xl">For Loop:</strong>This loop is used when the number of iterations is known or can be determined beforehand. It consist of three optional expression within its parantheses:</h3>
                        <ul className="px-5 text-xl font-[Itel]">
                            <li className="py-2"><strong>Initialization:</strong> Executed once before the loop starts <strong>let i=0;</strong></li>
                            <li className="py-2"><strong>Condition:</strong> Evaluated before each iteration; the loop continues as long as this condition is true <strong>i &#60; 5</strong></li>
                            <li className="py-2"><strong>Update Expression:</strong>Excuted after each iteration <strong>i ++</strong></li>
                        </ul>
                        <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
                            for(let i=0; i &#60; 5; i++){console.log('Iteration')}
                        </div>

                        <h3 className="text-xl font-[Roboto] py-4"><strong className="px-4 text-2xl">While Loop:</strong>This loop repeatedly executes a block of code as long as a specific condition remains true. The condition is checked before each iteration. </h3>
                        <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
                            let count=0;
                            while (count &#60; 3)   console.log('count')
                            count++
                        </div>

                        <h3 className="text-xl font-[Roboto] py-4"><strong className="px-4 text-2xl">Do...While Loop:</strong>Similar to the while loop, but the code block is executed at least once before the condition is checked.The condition is checked after each iteration. </h3>
                        <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
                            let x=0;
                            do console.log('Value of X')       while(x &#60 3)
                        </div>

                        <h3 className="text-xl font-[Roboto] py-4"><strong className="px-4 text-2xl">For...in Loop</strong>This loop iterates over enumerable properties of an object. It is generally used for iterating over object keys.  </h3>
                        <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
                            for (const key in person){console.log('key', 'person')};
                        </div>
                        <h3 className="text-xl font-[Roboto] py-4"> <strong className="px-4 text-2xl">For...of Loop </strong>This loop iterates over iterable objects (like arrays, strings , Maps and sets), providing access to the values of the elements.</h3>
                        <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
                            for (const fruit of fruits){console.log('fruit')};
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default JsLoops;