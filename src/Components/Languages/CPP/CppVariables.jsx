"use client"

import { useState } from "react"

import "/src/App.css"
import { NavLink } from "react-router-dom"

function CppVariable() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-2xl font-[Itel] ">C++ Variables</h2>
          <p className="py-2 text-xl font-[Lato] leading-relaxed">
            Welcome to the Variables of C++ programming language
          </p>
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
                <NavLink className="w-[80%]  hover:bg-gray-700  duration-300" to="/cppintroduction">
                  <li className="py-3 px-4  hover:bg-gray-700  duration-300">Introduction</li>
                </NavLink>
                <i
                  onClick={() => setisOpen(!isOpen)}
                  className="fa-solid fa-xmark cursor-pointer  text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"
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

        <div className="mx-1  mt-4  " style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">Definition</h2>
            <p className="text-lg font-serif py-2 leading-relaxed">
              In C++, variables are named storage locations in memory that hold values of specific data types. Unlike
              dynamically typed languages, C++ is statically typed, meaning every variable must be declared with an
              explicit data type before it can be used. Variables serve as containers that store data which can be
              accessed and modified throughout the program's execution. The type of a variable determines the size of
              memory allocated, the range of values it can store, and the operations that can be performed on it.
            </p>
          </div>
        </div>

        <div className="mx-1  mt-4  " style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">Declaring Variables</h2>
            <p className="text-lg py-2 leading-relaxed">
              <span className="text-xl font-bold">Simple Declaration:</span> C++ requires explicit type declaration for
              all variables. You must specify the data type followed by the variable name, and optionally initialize it
              with a value using the equals sign (=). The variable is created at the point of declaration, and memory is
              allocated based on the specified type. C++ supports various data types including int, float, double, char,
              bool, and more.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              <p className="">int x = 10;</p>
              <p className="">string name = "C++";</p>
              <p>bool is_active = true;</p>
            </div>
            <p className="text-lg py-2 leading-relaxed">
              <span className="text-xl font-bold">Multiple Declaration:</span> C++ allows you to declare multiple
              variables of the same type in a single statement by separating them with commas. You can also initialize
              them with different values at the time of declaration. This makes code more concise when working with
              multiple variables of the same type. However, each variable must be explicitly initialized if you want to
              assign different values.
            </p>

            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              <p className="">int x = 10, y = 20, z = 30;</p>
              <p className="">int a, b, c = 100;</p>
              <p>string first_name = "John", last_name = "Doe";</p>
            </div>
            <p className="text-lg py-2 leading-relaxed">
              <span className="text-lg font-bold">Variable Naming Conventions:</span> C++ variable names must start with
              a letter or underscore, followed by letters, numbers, or underscores. Variable names are case-sensitive,
              meaning 'age' and 'Age' are different variables. Common conventions include camelCase for local variables
              and snake_case for some projects. Constants are typically written in UPPERCASE with underscores. Avoid
              using C++ keywords and reserved words as variable names to prevent compilation errors.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              <p className="">string userName = "Alice"; // camelCase</p>
              <p className="">int _privateVar = 42; // Valid with underscore</p>
              <p>const int MAX_SIZE = 100; // Constant in uppercase</p>
            </div>
          </div>
        </div>
        <div className="mx-1  mt-4  " style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">The Future of C++</h2>
            <p className="text-lg font-serif py-2 leading-relaxed">
              C++ continues to evolve and remains one of the most powerful and widely-used programming languages in the
              industry. The language is constantly improving with new standards like C++20 and C++23, introducing modern
              features such as concepts, ranges, coroutines, and modules. C++ plays a critical role in
              performance-critical applications including game engines, operating systems, embedded systems, and
              high-frequency trading platforms. The introduction of smart pointers and modern memory management
              techniques has made C++ safer and more accessible to new developers. With its combination of high
              performance, low-level control, and object-oriented features, C++ will continue to be the language of
              choice for systems programming and applications where efficiency is paramount for years to come.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CppVariable
