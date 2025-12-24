import React,{useState} from "react";

import '/src/App.css' 
import { NavLink } from 'react-router-dom';
function JsObjects(){

    const [isOpen, setisOpen] = useState(false);
    return(
    <>
    <div className="p-10">
        <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="font-bold text-xl font-[Itel] ">JavaScript Objects</h2>
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

      <div className="mt-4" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
        <div className="p-5 w-full">
            <h2 className="text-xl font-[Lato]">In JavaScript, an object is a standalone entity that can hold multiple values as properties and or methods. Objects are fundamental to JavaScript and are used to represent real-world entities to organize related data. </h2>
            <h2 className="py-2 text-2xl font-bold font-[Roboto]">Key Characteristic of JavaScript Object:</h2>
            
            <p className="text-xl py-2 font-[Itel]"> <strong className="text-2xl">Collection of Properties and Methods:</strong>Objects can have properties and methods (functions that perform actions related to the object)</p>
            <h3 className="py-2 text-xl font-[Itel]"><strong className="text-2xl">Dynamic:</strong> Properties and methods can be added, modified or deleted from an object at runtime</h3>
            <h3 className="py-2 text-xl font-[Itel]"> <strong className="text-2xl">Flexible Structure:</strong>
            Objects do not have a fixed structure, allowing for diverse data representation.</h3>
            <h3 className="py-2 text-xl font-[Itel]"><strong className="text-2xl">Prototype-based inheritence:</strong>
            Objects inherit properties and methods from their prototype, forming a chain of inheritance.</h3>
        </div>
      </div>

      <div className="mt-4" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
        <div className="p-5 w-full">
            <h2 className="text-2xl font-bold font-[Roboto]">Creating Objects</h2>
            <p className="text-xl py-2 font-[Itel]">The most common way to create an object is using object literal syntax:</p>
           <div className="py-3 bg-black text-green-600 px-4 rounded">
              const person= firstname:'john', lastname:'Doe', age : 30
           </div>
           <h2 className="text-2xl font-[Roboto] font-bold py-4">Common Object Operations:</h2>
           <p className="py-2 text-lg font-[Itel]"><strong className="text-xl ">Adding new properties:</strong>  person.occupation="Engineer"</p>
           <p className="py-2 text-lg font-[Itel]"><strong className="text-xl ">Modifying existing properties:</strong>  person.age=31</p>
           <p className="py-2 text-lg font-[Itel]"><strong className="text-xl ">Deleting  properties:</strong>  delete person.age</p>
           <p className="py-2 text-lg font-[Itel]"><strong className="text-xl ">Iterating over properties:</strong>  Object.values(), Object.entries().</p>
        </div>
      </div>
                
    </div>
    </>
    )
}

export default JsObjects;