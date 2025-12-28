"use client"

import { useState } from "react"
import "/src/App.css"
import { NavLink } from "react-router-dom"

function CppObjects() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-xl font-[Itel]">C++ Objects & Structs</h2>
          <p className="py-2 font-thin leading-relaxed">
            Master C++ powerful data structures and object-oriented programming concepts
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

        <div className="mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="text-xl font-[Lato] leading-relaxed">
              In C++, objects are instances of classes or structs that encapsulate data and behavior together. Structs
              and classes are user-defined data types that allow efficient data organization and manipulation. Objects
              are fundamental to C++ object-oriented programming and are used to model real-world entities with
              attributes and methods.
            </h2>
            <h2 className="py-2 text-2xl font-bold font-[Roboto]">Key Characteristics of C++ Objects:</h2>

            <p className="text-xl py-2 font-[Itel] leading-relaxed">
              <strong className="text-2xl">Encapsulation:</strong> Objects bundle data members and member functions
              together, providing a clean interface to interact with the data
            </p>
            <h3 className="py-2 text-xl font-[Itel] leading-relaxed">
              <strong className="text-2xl">Type Safety:</strong> Objects have well-defined types at compile time,
              ensuring type safety and preventing runtime errors
            </h3>
            <h3 className="py-2 text-xl font-[Itel] leading-relaxed">
              <strong className="text-2xl">Memory Management:</strong> Objects can be created on the stack or heap, with
              precise control over memory allocation and deallocation
            </h3>
            <h3 className="py-2 text-xl font-[Itel] leading-relaxed">
              <strong className="text-2xl">Object-Oriented Support:</strong> C++ fully supports OOP principles including
              inheritance, polymorphism, and abstraction through classes and objects
            </h3>
          </div>
        </div>

        <div className="mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="text-2xl font-bold font-[Roboto]">Creating Objects with Structs</h2>
            <p className="text-xl py-2 font-[Itel] leading-relaxed">
              The most common way to create a simple object is using a struct with member variables:
            </p>
            <div className="py-3 bg-black text-green-600 px-4 rounded">
              struct Person &#123; string firstName; string lastName; int age; &#125;;
              <br />
              Person person = &#123;"John", "Doe", 30&#125;;
            </div>
            <h2 className="text-2xl font-[Roboto] font-bold py-4">Common Object Operations:</h2>
            <p className="py-2 text-lg font-[Itel] leading-relaxed">
              <strong className="text-xl">Accessing members:</strong> person.firstName = "Jane";
            </p>
            <p className="py-2 text-lg font-[Itel] leading-relaxed">
              <strong className="text-xl">Modifying members:</strong> person.age = 31;
            </p>
            <p className="py-2 text-lg font-[Itel] leading-relaxed">
              <strong className="text-xl">Pointer access:</strong> Person* ptr = &person; ptr-&gt;age = 32;
            </p>
            <p className="py-2 text-lg font-[Itel] leading-relaxed">
              <strong className="text-xl">Using maps for key-value pairs:</strong> std::map&lt;string, int&gt; ages;
              ages["John"] = 30;
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CppObjects
