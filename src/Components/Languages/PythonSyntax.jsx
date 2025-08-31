import React from "react";
import { NavLink } from "react-router-dom";
function PythonSyntax(){
    return(
        <>
        <div className="bg-white w-full p-10">
            <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                <h2 className="font-bold text-xl ">Python</h2>
                <p className="py-2 font-thin">Introduction to the syntax of python programming languages</p>
                <NavLink className='bg-blue-900 px-3 py-2 rounded mt-4 hover:bg-indigo-950 cursor-pointer'>
                   <button className="font-semibold mt-3 ">Start Learning more</button>
                </NavLink>
            </div>

            <div className="grid py-3 mt-3 grid-cols-1 sm:grid-cols-12 gap-5">
                <div className=" p-4 col-span-12 sm:col-span-6 rounded " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                   <h2 className="font-bold text-2xl border-l-5 border-indigo-800 pl-5">Basic Syntax</h2>
                   <p className="font-thin text-xl mt-3">Python uses indentation define code blocks and statements are typically written one per line</p>
                   <div className="w-full h-auto bg-black text-green-600 mt-4 py-4 rounded">
                    <p className="px-3">greet()</p>
                    <p className="px-3">print('Hello World')</p>
                   </div>
                </div>

                <div className=" p-4 col-span-12 sm:col-span-6 " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                   <h2 className="font-bold text-2xl border-l-5 border-indigo-800 pl-5">Variables</h2>
                   <p className="font-thin text-xl mt-3">Variables are dynamically typed and created when values assigned  to different data types</p>
                    <div className="w-full h-auto bg-black overflow-auto text-green-600  mt-4 py-2 rounded">
                    <p className="px-3">message='Hello World'</p>
                    <p className="px-3">x=2</p>
                    <p className="px-3">pl=5.14</p>
                   </div>
                </div>
            </div>



            <div className="grid py-3 mt-3 grid-cols-1 sm:grid-cols-12 gap-5">
                <div className=" p-4 col-span-12 sm:col-span-6 rounded " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                   <h2 className="font-bold text-2xl border-l-5 border-indigo-800 pl-5">Data Types</h2>
                   <p className="font-thin text-xl mt-3">Python has several built in data types for different kinds of values</p>
                   <div className="w-full h-auto bg-black text-green-600 mt-4 py-2 rounded">
                    <p className="px-3">name='Alice'</p>
                    <p className="px-3">numbers=[1,2,3,4]</p>
                    <p className="px-3">is_python_fun=true</p>
                   </div>
                </div>

                <div className=" p-4 col-span-12 sm:col-span-6 " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                   <h2 className="font-bold text-2xl border-l-5 border-indigo-800 pl-5">Control Structure</h2>
                   <p className="font-thin text-xl mt-3">Python supports commom control Structures like if statements, for and while loops</p>
                    <div className="w-full h-auto bg-black overflow-auto text-green-600  mt-4 py-2 rounded">
                    <p className="px-3">if x=9</p>
                    <p className="px-3">for i in range 10 </p>
                    <p className="px-3">while x=9</p>
                   </div>
                </div>
            </div>


        </div>
        </>
    )
}

export default PythonSyntax;