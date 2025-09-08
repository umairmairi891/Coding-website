import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function JsSyntax(){


    const [isOpen,setisOpen]=useState(false)

    return(
        <>
        <div className="bg-white w-full p-10">
            <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                <h2 className="font-bold text-xl ">JavaScript Syntax</h2>
                <p className="py-2 font-thin">Introduction to the syntax of JavaScript programming languages</p>
                <NavLink onClick={()=>setisOpen(!isOpen)} className='bg-blue-900 cursor-pointer px-3 py-2 rounded mt-4 hover:bg-indigo-950 cursor-pointer'>
                   <button className="font-semibold mt-3 cursor-pointer ">Start Learning more</button>
                </NavLink>
            </div>

{
                isOpen &&(
                 <div className="bg-cyan-900 h-auto   text-white rounded w-[100%] sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
                     <ul className=" text-lg font-[Roboto]">
                        <NavLink className='flex justify-between items-center '>
                            <li className="py-3 px-4 w-[80%] hover:bg-gray-700  duration-300">Introduction</li>
                            <i onClick={()=>setisOpen(!isOpen)} className="fa-solid fa-xmark  text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"></i>
                        </NavLink>
                        <NavLink>
                            <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">History</li>
                        </NavLink>
                        <NavLink>
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

            <div className="grid py-3 mt-3 grid-cols-1 sm:grid-cols-12 gap-5">
                <div className=" p-4 col-span-12 sm:col-span-6 rounded " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                   <h2 className="font-bold text-2xl border-l-5 border-indigo-800 pl-5">Basic Syntax</h2>
                   <p className="font-thin text-xl mt-3">JavaScript uses build in functions for printing the message line </p>
                   <div className="w-full h-auto bg-black text-green-600 mt-4 py-4 rounded">
                    <p className="px-3">
                        console.log('Hello')
                    </p>
                    <p className="px-3">alert('Hello alert')</p>
                   </div>
                </div>

                <div className=" p-4 col-span-12 sm:col-span-6 " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                   <h2 className="font-bold text-2xl border-l-5 border-indigo-800 pl-5">Variables</h2>
                   <p className="font-thin text-xl mt-3">Variables are dynamically typed and created when values assigned  </p>
                    <div className="w-full h-auto bg-black overflow-auto text-green-600  mt-4 py-2 rounded">
                    <p className="px-3">var message='Hello World'</p>
                    <p className="px-3">let x=2</p>
                    <p className="px-3">const pl=5.14</p>
                   </div>
                </div>
            </div>



            <div className="grid py-3 mt-3 grid-cols-1 sm:grid-cols-12 gap-5">
                <div className=" p-4 col-span-12 sm:col-span-6 rounded " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                   <h2 className="font-bold text-2xl border-l-5 border-indigo-800 pl-5">Data Types</h2>
                   <p className="font-thin text-xl mt-3">JavaScript has several built in data types for different kinds of values</p>
                   <div className="w-full h-auto bg-black text-green-600 mt-4 py-2 rounded">
                    <p className="px-3">name='Alice'</p>
                    <p className="px-3">numbers=[1,2,3,4]</p>
                    <p className="px-3">is_js_fun=true</p>
                   </div>
                </div>

                <div className=" p-4 col-span-12 sm:col-span-6 " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                   <h2 className="font-bold text-2xl border-l-5 border-indigo-800 pl-5">Control Structure</h2>
                   <p className="font-thin text-xl mt-3">JavaScript supports commom control Structures like if statements, for and while loops</p>
                    <div className="w-full h-auto bg-black overflow-auto text-green-600  mt-4 py-2 rounded">
                    <p className="px-3">if (condition) code</p>
                    <p className="px-3">for (condition)   code</p>
                    <p className="px-3">while (condition) code</p>
                   </div>
                </div>
            </div>


        </div>
        </>
    )
}

export default JsSyntax;