"use client"

import { useState } from "react"

import "/src/App.css"
import { NavLink } from "react-router-dom"

function CppDataTypes() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-3 md:p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-2xl font-[Itel]">C++ Data Types</h2>
          <p className="py-2 text-xl font-[Lato] leading-relaxed">Welcome to the C++ programming language</p>
          <button
            onClick={() => setisOpen(!isOpen)}
            className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white"
          >
            Start learning more
          </button>
        </div>

        {isOpen && (
          <div className="bg-cyan-900 h-auto navbar animate-animated text-white rounded w-full sm:w-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
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
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 font-bold text-3xl font-[Roboto] pl-5">C++ Data Types</h2>
            <p className="py-3 font-[Itel] text-xl leading-relaxed">
              C++ has several built-in data types that are statically typed and categorized into main groups:{" "}
              <strong>Fundamental (Primitive)</strong> and <strong>Derived (Compound)</strong> types. These data types
              help define the kind of values that can be stored, their size in memory, and the operations that can be
              performed on them.
            </p>

            <h3 className="font-bold text-2xl font-[Lato] mt-4">
              Fundamental Data Types: These represent basic single values with fixed memory size
            </h3>

            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong>Integer (int):</strong> Represents whole numbers without decimal points, both positive and
              negative. The size is typically 4 bytes and can store values from -2,147,483,648 to 2,147,483,647.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              int age = 30;
              <br />
              int temperature = -5;
            </div>

            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong>Float / Double:</strong> Represents floating-point numbers with decimal points. Float provides
              single precision (4 bytes) while double provides double precision (8 bytes) for more accurate
              calculations.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              float price = 19.99f;
              <br />
              double pi = 3.14159265359;
            </div>

            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong>Character (char):</strong> Represents a single character enclosed in single quotes. It stores
              ASCII values and occupies 1 byte of memory. For strings, C++ uses the std::string class from the standard
              library.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              char grade = 'A';
              <br />
              char symbol = '$';
              <br />
              string name = "Alice";
            </div>

            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong>Boolean (bool):</strong> Represents logical values and can have only two states: true or false
              (note the lowercase in C++). It is used for conditional statements and logical operations.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              bool isActive = true;
              <br />
              bool hasPermission = false;
            </div>

            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong>Void:</strong> Represents the absence of type. It is commonly used as a return type for functions
              that do not return a value, or for generic pointers that can point to any data type.
            </p>
            <div className="w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              void printMessage() {"{"} <br />
              {"  "}cout {"<<"} "Hello World";
              <br />
              {"}"}
              <br />
              // Function returns nothing
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CppDataTypes
