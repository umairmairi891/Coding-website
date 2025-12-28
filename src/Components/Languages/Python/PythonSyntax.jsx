import { useState } from "react";
import { NavLink } from "react-router-dom";

function PythonSyntax(){
    const [isOpen, setisOpen] = useState(false)
    return(
        <>
        <div className="bg-white w-full p-10">
            <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                <h2 className="font-bold text-xl ">Python</h2>
                <p className="py-2 text-xl font-[Lato]">Introduction to the syntax of python programming languages</p>
                
          <button
            onClick={() => setisOpen(!isOpen)}
            className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white"
          >
            Start learning more
          </button>
            </div>

 {isOpen && (
          <div className="bg-cyan-900 navbar h-auto animate-animated  text-white  w-full sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
            <ul className=" text-lg font-[Roboto]">
              <div className="flex justify-between items-center">
                <NavLink className="w-[80%]  hover:bg-gray-700  duration-300" to="/pyintroduction">
                  <li className="py-3 px-4 font-[Itel] hover:bg-gray-700  duration-300">Introduction</li>
                </NavLink>
                <i
                  onClick={() => setisOpen(!isOpen)}
                  className="fa-solid fa-xmark cursor-pointer  text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"
                ></i>
              </div>
              <NavLink to="/pyhistory">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">History</li>
              </NavLink>
              <NavLink to="/pyworking">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Working</li>
              </NavLink>
              <NavLink to="/pysyntax">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Syntax</li>
              </NavLink>
              <NavLink to="/pyvariable">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Variables</li>
              </NavLink>
              <NavLink to="/pydatatypes">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Data Types</li>
              </NavLink>
              <NavLink to="/pyfunction">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Functions</li>
              </NavLink>
              <NavLink to="/pyoperator">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Operators</li>
              </NavLink>
              <NavLink to="/pyloops">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Loops</li>
              </NavLink>
              <NavLink to="/pyobjects">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Objects</li>
              </NavLink>
              <NavLink to="/pyclasses">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Classes</li>
              </NavLink>
              <NavLink to="/pylibraries">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Libraries</li>
              </NavLink>
              <NavLink to="/pycomparison">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Comparison</li>
              </NavLink>
            </ul>
          </div>
        )}
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