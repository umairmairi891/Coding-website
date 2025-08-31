import React from "react";
import { NavLink } from "react-router-dom";
function JsSyntax(){
    const string='cout << "Hello World"'
    const fun="int main(){ return 0} "
    return(
        <>
        <div className="bg-white w-full p-10">
            <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                <h2 className="font-bold text-xl ">C++ Syntax</h2>
                <p className="py-2 font-thin">Introduction to the syntax of C++ programming languages</p>
                <NavLink className='bg-blue-900 px-3 py-2 rounded mt-4 hover:bg-indigo-950 cursor-pointer'>
                   <button className="font-semibold mt-3 cursor-pointer">Start Learning more</button>
                </NavLink>
            </div>

            <div className="grid py-3 mt-3 grid-cols-1 sm:grid-cols-12 gap-5">
                <div className=" p-4 col-span-12 sm:col-span-6 rounded " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                   <h2 className="font-bold text-2xl border-l-5 border-indigo-800 pl-5">Basic Syntax</h2>
                   <p className="font-thin text-xl mt-3">C++ functions for printing the message line </p>
                   <div className="w-full h-auto bg-black text-green-600 mt-4 py-4 rounded">
                    <p className="px-3">
                        {fun}
                    </p>
                    <p className="px-3">{string} </p>
                   </div>
                </div>

                <div className=" p-4 col-span-12 sm:col-span-6 " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                   <h2 className="font-bold text-2xl border-l-5 border-indigo-800 pl-5">Variables</h2>
                   <p className="font-thin text-xl mt-3">In C++ there are different types of variables   </p>
                    <div className="w-full h-auto bg-black overflow-auto text-green-600  mt-4 py-2 rounded">
                    <p className="px-3">string message='Hello C++'</p>
                    <p className="px-3">int x=2</p>
                    <p className="px-3">char myLetetr="A"</p>
                   </div>
                </div>
            </div>



            <div className="grid py-3 mt-3 grid-cols-1 sm:grid-cols-12 gap-5">
                <div className=" p-4 col-span-12 sm:col-span-6 rounded " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                   <h2 className="font-bold text-2xl border-l-5 border-indigo-800 pl-5">Data Types</h2>
                   <p className="font-thin text-xl mt-3">C++ has several built in data types for different kinds of values</p>
                   <div className="w-full h-auto bg-black text-green-600 mt-4 py-2 rounded">
                    <p className="px-3">int : // stores integers</p>
                    <p className="px-3">double : //  stores floating point</p>
                    <p className="px-3"> string : // stores text</p>
                   </div>
                </div>

                <div className=" p-4 col-span-12 sm:col-span-6 " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                   <h2 className="font-bold text-2xl border-l-5 border-indigo-800 pl-5">Control Structure</h2>
                   <p className="font-thin text-xl mt-3">C++ supports commom control Structures like if statements, for and while loops</p>
                    <div className="w-full h-auto bg-black overflow-auto text-green-600  mt-4 py-2 rounded">
                    <p className="px-3">if (condition) "code"</p>
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