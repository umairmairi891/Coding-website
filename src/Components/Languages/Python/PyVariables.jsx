"use client"

import { useState } from "react"

import "/src/App.css"
import { NavLink } from "react-router-dom"
function PyVariable() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-2xl font-[Itel] ">Python Variables</h2>
          <p className="py-2 text-xl font-[Lato]">Welcome to the Variables of Python programming language</p>
          <button
            onClick={() => setisOpen(!isOpen)}
            className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white"
          >
            Start learning more
          </button>
        </div>

        {isOpen && (
          <div className="bg-cyan-900 h-auto navbar animate-animated  text-white rounded w-full sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
            <ul className=" text-lg font-[Roboto]">
              <div className="flex justify-between items-center">
                <NavLink className="w-[80%]  hover:bg-gray-700  duration-300" to="/pyintroduction">
                  <li className="py-3 px-4  hover:bg-gray-700  duration-300">Introduction</li>
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

        <div className="mx-1  mt-4  " style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">Definition</h2>
            <p className="text-lg font-serif py-2">
              In Python, variables are symbolic names that serve as references to objects stored in memory. Unlike many
              other programming languages, Python variables don't have explicit type declarations. They are dynamically
              typed, meaning the type is determined automatically based on the value assigned. Variables act as
              containers that can hold various data types and can be easily reassigned throughout your program.
            </p>
          </div>

        </div>

        <div className="mx-1  mt-4  " style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">Declaring Variables</h2>
            <p className="text-lg py-2">
              <span className="text-xl font-bold">Simple Assignment:</span> Python uses a straightforward approach to
              variable declaration. You simply assign a value to a variable name using the equals sign (=). The variable
              is created the moment you first assign a value to it. Python automatically determines the data type based
              on the assigned value.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              <p className="">x = 10</p>
              <p className="">name = "Python"</p>
              <p>is_active = True</p>
            </div>
            <p className="text-lg py-2">
              <span className="text-xl font-bold">Multiple Assignment:</span> Python allows you to assign values to
              multiple variables simultaneously in a single line. This feature makes your code more concise and
              readable. You can also assign the same value to multiple variables at once.
            </p>

            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              <p className="">x, y, z = 10, 20, 30</p>
              <p className="">a = b = c = 100</p>
              <p>first_name, last_name = "John", "Doe"</p>
            </div>
            <p className="text-lg py-2">
              <span className="text-lg font-bold">Variable Naming Conventions:</span> Python variable names must start
              with a letter or underscore, followed by letters, numbers, or underscores. Variable names are
              case-sensitive, meaning 'age' and 'Age' are different variables. It's recommended to use lowercase letters
              with underscores for better readability (snake_case). Avoid using Python keywords and built-in function
              names as variable names.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              <p className="">user_name = "Alice" # Good practice</p>
              <p className="">_private_var = 42 # Valid</p>
              <p>MAX_SIZE = 100 # Constants in uppercase</p>
            </div>
          </div>
        </div>
        <div className="mx-1  mt-4  " style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">The Future of Python</h2>
            <p className="text-lg font-serif py-2">
              Python continues to dominate in various fields and shows no signs of slowing down. The language is
              constantly evolving with new features and improvements in each version release. Python's role in
              artificial intelligence and machine learning continues to expand, with frameworks like TensorFlow and
              PyTorch leading the way. The development of tools for better performance, such as PyPy and Cython, is
              making Python faster and more efficient. Type hints and static type checking with tools like mypy are
              becoming increasingly popular, helping developers write more robust code. Python's simplicity combined
              with its powerful capabilities ensures it will remain one of the most sought-after programming languages
              for years to come.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PyVariable
