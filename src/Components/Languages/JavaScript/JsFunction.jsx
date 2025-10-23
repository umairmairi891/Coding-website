import React,{useState} from "react";

import '/src/App.css' 
import { NavLink } from 'react-router-dom';
function JsFunction(){

    const [isOpen, setisOpen] = useState(false);
    return(
    <>
    <div className="p-10">
        <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="font-bold text-xl font-[Itel] ">JavaScript Functions</h2>
                    <p className="py-2 font-thin">Welcome to the JavaScript programming languages</p>
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
  <div className="mx-0 mt-4" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
    <div className="w-full p-5">
     <p className="font-[Itel] text-xl">JavaScript functions are block of resuable code designed to perform specific task.They are fundamental building blocks in JavaScript and are essential for organizing code, promoting reusability, and creating dynamic and interactive web applications.</p>
    <h2 className="text-2xl font-bold py-3 font-[Roboto]">Declaring and Calling Functions</h2>
    <h3 className="text-xl font-bold font-[Itel] mb-3">Function Declaration</h3>
    <div className="w-[100%] py-3 px-4 bg-black text-green-600 rounded">
        function functionName(params) {
            // code to be executed
            // return result;
        }
    </div>
    <h3 className="text-xl font-[Itel] font-bold mb-3 py-2">Function Expression</h3>
    <div className="w-[100%] py-3 px-4 bg-black text-green-600 rounded">
      const functionName  =function(parameter1, parameter2 ) {
            // code to be executed
            // return result;
        }
    </div>
    <h3 className="text-xl font-[Itel] mb-3 py-2"><strong>Arrow Function:</strong> A more concise syntax for function expressions.
    </h3>
    <div className="w-[100%] py-3 px-4 bg-black text-green-600 rounded">
      const add =(a,b)=&a+b;
    </div> 
    <h3 className="text-xl font-[Itel] mb-3 py-2"><strong>Calling a function:</strong>To execute the code within a function, yo call or invoke it by its name followed by parantheses.
    </h3>
    <div className="w-[100%] py-3 px-4 bg-black text-green-600 rounded">
      functionName(argument1, argument2);
    </div> 
    </div>
  </div>
    <div className="mt-4 mx-0" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
        <div className="p-5 w-full">
        <h2 className="font-bold text-2xl font-[Roboto]">Key Concepts:</h2>
        <h3 className="py-2 font-[Itel] text-xl"><strong className="font-bold">Parameters and Arguments:</strong> Parameters are placeholders defined in the function declaration to receive values. Arguments are the actual values passed to the function when it is called. </h3>
        <h3 className="py-2 font-[Itel] text-xl"><strong className="font-bold">Return Values:</strong> Functions can optionally return a value using the return keyword. </h3>
        <h3 className="py-2 font-[Itel] text-xl"><strong className="font-bold">Arrow Functions:</strong> A concise syntax for writing function expression</h3>
        <h3 className="py-2 font-[Itel] text-xl"><strong className="font-bold">Immediately invoked function expression:</strong> Functions that execute as soon as they are defined.</h3>
        <h3 className="py-2 font-[Itel] text-xl"><strong className="font-bold">Callback Functions:</strong>Functions passes as arguments to other functions to be executed later</h3>
        <h3 className="py-2 font-[Itel] text-xl"><strong className="font-bold">Async Functions:</strong>
        Functions designed to handle asynchronous opertions often using async and await</h3>
        </div>
    </div>

                
    </div>
    </>
    )
}

export default JsFunction;