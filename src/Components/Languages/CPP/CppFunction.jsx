"use client"

import { useState } from "react"
import "/src/App.css"
import { NavLink } from "react-router-dom"

function CppFunction() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-xl font-[Itel]">C++ Functions</h2>
          <p className="py-2 font-thin leading-relaxed">Welcome to the C++ programming language</p>
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
                <NavLink className="w-[80%] hover:bg-gray-700 duration-300" to="/cppintroduction">
                  <li className="py-3 px-4 hover:bg-gray-700 duration-300">Introduction</li>
                </NavLink>
                <i
                  onClick={() => setisOpen(!isOpen)}
                  className="fa-solid fa-xmark cursor-pointer text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"
                ></i>
              </div>
              <NavLink to="/cpphistory">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">History</li>
              </NavLink>
              <NavLink to="/cppworking">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Working</li>
              </NavLink>
              <NavLink to="/cppsyntax">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Syntax</li>
              </NavLink>
              <NavLink to="/cppvariable">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Variables</li>
              </NavLink>
              <NavLink to="/cppdatatypes">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Data Types</li>
              </NavLink>
              <NavLink to="/cppfunction">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Functions</li>
              </NavLink>
              <NavLink to="/cppoperator">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Operators</li>
              </NavLink>
              <NavLink to="/cpploops">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Loops</li>
              </NavLink>
              <NavLink to="/cppobjects">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Objects</li>
              </NavLink>
              <NavLink to="/cppclasses">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Classes</li>
              </NavLink>
              <NavLink to="/cpplibraries">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Libraries</li>
              </NavLink>
              <NavLink to="/cppcomparison">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Comparison</li>
              </NavLink>
            </ul>
          </div>
        )}

        <div className="mx-0 mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="w-full p-5">
            <p className="font-[Itel] text-xl leading-relaxed">
              C++ functions are reusable blocks of code designed to perform specific tasks. They are fundamental
              building blocks in C++ programming and are essential for organizing code, promoting modularity, and
              creating efficient, maintainable applications across various domains including game development, system
              programming, and high-performance computing.
            </p>

            <h2 className="text-2xl font-bold py-3 font-[Roboto]">Defining and Calling Functions</h2>

            <h3 className="text-xl font-bold font-[Itel] mb-3">Standard Function Definition</h3>
            <div className="w-full py-3 px-4 bg-black text-green-600 rounded">
              return_type function_name(parameter_type parameter) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;// code to be executed
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return result;
              <br />
              {"}"}
            </div>

            <h3 className="text-xl font-[Itel] font-bold mb-3 py-2">Inline Function</h3>
            <div className="w-full py-3 px-4 bg-black text-green-600 rounded">
              // Inline functions are expanded at compile time for better performance
              <br />
              inline int add(int a, int b) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return a + b;
              <br />
              {"}"}
            </div>

            <h3 className="text-xl font-[Itel] mb-3 py-2 leading-relaxed">
              <strong>Function with Default Parameters:</strong> C++ allows you to specify default values for function
              parameters, making them optional during function calls.
            </h3>
            <div className="w-full py-3 px-4 bg-black text-green-600 rounded">
              string greet(string name, string message = "Hello") {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return message + ", " + name + "!";
              <br />
              {"}"}
            </div>

            <h3 className="text-xl font-[Itel] mb-3 py-2 leading-relaxed">
              <strong>Calling a Function:</strong> To execute the code within a function, you call or invoke it by its
              name followed by parentheses containing any required arguments.
            </h3>
            <div className="w-full py-3 px-4 bg-black text-green-600 rounded">
              int result = function_name(argument1, argument2);
            </div>
          </div>
        </div>

        <div className="mt-4 mx-0" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="font-bold text-2xl font-[Roboto]">Key Concepts</h2>
            <h3 className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong className="font-bold">Parameters and Arguments:</strong> Parameters are placeholders defined in
              the function signature with specific types. Arguments are the actual values passed to the function when it
              is called, and they must match the parameter types.
            </h3>
            <h3 className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong className="font-bold">Return Values:</strong> Functions must specify a return type in their
              declaration. They return values using the return keyword. Functions can return void if they don't return
              any value.
            </h3>
            <h3 className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong className="font-bold">Inline Functions:</strong> Functions marked with the inline keyword are
              expanded at compile time rather than called, providing better performance for small, frequently-used
              functions.
            </h3>
            <h3 className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong className="font-bold">Default Parameters:</strong> Function parameters can have default values,
              allowing functions to be called with fewer arguments than defined. Default parameters must be at the end
              of the parameter list.
            </h3>
            <h3 className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong className="font-bold">Function Overloading:</strong> C++ allows multiple functions with the same
              name but different parameter types or counts, enabling versatile function usage based on arguments
              provided.
            </h3>
            <h3 className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong className="font-bold">Pass by Reference:</strong> Functions can accept references to variables
              using the & symbol, allowing them to modify the original variable rather than working with a copy.
            </h3>
            <h3 className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong className="font-bold">Function Templates:</strong> Generic functions that work with multiple data
              types using template parameters, providing code reusability without sacrificing type safety or
              performance.
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default CppFunction
