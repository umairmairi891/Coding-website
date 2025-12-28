"use client"

import { useState } from "react"
import "/src/App.css"
import { NavLink } from "react-router-dom"

function PyFunction() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-xl font-[Itel]">Python Functions</h2>
          <p className="py-2 font-thin">Welcome to the Python programming language</p>
          <button
            onClick={() => setisOpen(!isOpen)}
            className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white"
          >
            Start learning more
          </button>
        </div>

        {isOpen && (
          <div className="bg-cyan-900 h-auto navbar animate-animated text-white rounded w-full sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
            <ul className="text-lg font-[Roboto]">
              <div className="flex justify-between items-center">
                <NavLink className="w-[80%] hover:bg-gray-700 duration-300" to="/pyintroduction">
                  <li className="py-3 px-4 hover:bg-gray-700 duration-300">Introduction</li>
                </NavLink>
                <i
                  onClick={() => setisOpen(!isOpen)}
                  className="fa-solid fa-xmark cursor-pointer text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"
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

        <div className="mx-0 mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="w-full p-5">
            <p className="font-[Itel] text-xl">
              Python functions are reusable blocks of code designed to perform specific tasks. They are fundamental
              building blocks in Python and are essential for organizing code, promoting reusability, and creating
              efficient, maintainable applications across various domains including web development, data science, and
              automation.
            </p>

            <h2 className="text-2xl font-bold py-3 font-[Roboto]">Defining and Calling Functions</h2>

            <h3 className="text-xl font-bold font-[Itel] mb-3">Standard Function Definition</h3>
            <div className="w-full py-3 px-4 bg-black text-green-600 rounded">
              def function_name(parameters):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;# code to be executed
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return result
            </div>

            <h3 className="text-xl font-[Itel] font-bold mb-3 py-2">Lambda Function</h3>
            <div className="w-full py-3 px-4 bg-black text-green-600 rounded">
              # Lambda functions are anonymous, single-expression functions
              <br />
              add = lambda a, b: a + b
            </div>

            <h3 className="text-xl font-[Itel] mb-3 py-2">
              <strong>Function with Default Parameters:</strong> Python allows you to specify default values for
              function parameters, making them optional during function calls.
            </h3>
            <div className="w-full py-3 px-4 bg-black text-green-600 rounded">
              def greet(name, message="Hello"):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return f"{"{message}"}, {"{name}"}!"
            </div>

            <h3 className="text-xl font-[Itel] mb-3 py-2">
              <strong>Calling a Function:</strong> To execute the code within a function, you call or invoke it by its
              name followed by parentheses containing any required arguments.
            </h3>
            <div className="w-full py-3 px-4 bg-black text-green-600 rounded">
              result = function_name(argument1, argument2)
            </div>
          </div>
        </div>

        <div className="mt-4 mx-0" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="font-bold text-2xl font-[Roboto]">Key Concepts</h2>
            <h3 className="py-2 font-[Itel] text-xl">
              <strong className="font-bold">Parameters and Arguments:</strong> Parameters are placeholders defined in
              the function signature to receive values. Arguments are the actual values passed to the function when it
              is called.
            </h3>
            <h3 className="py-2 font-[Itel] text-xl">
              <strong className="font-bold">Return Values:</strong> Functions can optionally return one or multiple
              values using the return keyword. Without an explicit return, functions return None by default.
            </h3>
            <h3 className="py-2 font-[Itel] text-xl">
              <strong className="font-bold">Lambda Functions:</strong> Anonymous, single-expression functions that
              provide a concise way to create small functions for simple operations.
            </h3>
            <h3 className="py-2 font-[Itel] text-xl">
              <strong className="font-bold">Default Parameters:</strong> Function parameters can have default values,
              allowing functions to be called with fewer arguments than defined.
            </h3>
            <h3 className="py-2 font-[Itel] text-xl">
              <strong className="font-bold">*args and **kwargs:</strong> Special syntax for accepting variable numbers
              of positional and keyword arguments respectively.
            </h3>
            <h3 className="py-2 font-[Itel] text-xl">
              <strong className="font-bold">Decorators:</strong> Functions that modify or enhance other functions
              without changing their code, commonly used for logging, authentication, and caching.
            </h3>
            <h3 className="py-2 font-[Itel] text-xl">
              <strong className="font-bold">Generator Functions:</strong> Functions that use the yield keyword to
              produce a sequence of values lazily, useful for handling large datasets efficiently.
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default PyFunction
