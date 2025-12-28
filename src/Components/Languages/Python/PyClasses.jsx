"use client"

import { useState } from "react"

import "/src/App.css"
import { NavLink } from "react-router-dom"
function PyClasses() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-xl font-[Itel] ">Python Classes</h2>
          <p className="py-2 font-thin">Welcome to the Python programming language</p>
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
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Modules</li>
              </NavLink>
              <NavLink to="/pycomparison">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Comparison</li>
              </NavLink>
            </ul>
          </div>
        )}

        <div className="mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="text-lg">
              Python classes are fundamental to object-oriented programming (OOP), providing a blueprint for creating
              objects with encapsulated data and behavior. Since Python is inherently object-oriented, classes offer a
              natural and powerful way to structure code, promoting reusability, modularity, and maintainability.
              Python's class system is elegant and straightforward, making it accessible for beginners while offering
              advanced features for experienced developers.
            </h2>
          </div>
        </div>
        <div className="mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h1 className="text-2xl font-bold font-[Itel]">Key Concepts of Python Classes:</h1>
            <h2 className="text-xl font-bold font-[Lato] py-2">
              Declaration: Classes are declared using the class keyword followed by the class name.
            </h2>
            <div className="px-4 py-4 bg-black text-green-600 rounded">
              class MyClass:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;pass
            </div>
            <h2 className="text-xl  font-[Itel] py-3">
              <strong>Constructor:</strong> The __init__() method is a special method that is automatically called when
              a new instance of the class is created. It initializes the object's attributes and is equivalent to a
              constructor in other languages.
            </h2>

            <div className="px-4 py-4 bg-black text-green-600 rounded">
              class Person:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, name, age):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name = name
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.age = age
            </div>
            <h2 className="text-xl font-[Itel] py-3">
              <strong>Methods:</strong> Functions defined within a class are called methods. They define the behavior of
              objects created from the class. The first parameter is always self, which refers to the instance itself.
            </h2>

            <div className="px-4 py-4 bg-black text-green-600 rounded">
              class Person:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, name, age):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name = name
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.age = age
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;def greet(self):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"Hello, my name is {"{"}self.name{"}"} and I am{" "}
              {"{"}self.age{"}"} years old.")
            </div>

            <h2 className="text-xl font-[Itel] py-3">
              <strong>Instantiation:</strong> New objects (instances) are created from a class by calling the class name
              like a function.
            </h2>

            <div className="px-4 py-4 bg-black text-green-600 rounded">
              person1 = Person("Alice", 30)
              <br />
              person1.greet() # Output: Hello, my name is Alice and I am 30 years old.
            </div>

            <h2 className="text-xl font-[Itel] py-3">
              <strong>Inheritance:</strong> Python classes support inheritance, allowing a child class to inherit
              attributes and methods from a parent class. The super() function is used to call methods from the parent
              class.
            </h2>

            <div className="px-4 py-4 bg-black text-green-600 rounded">
              class Student(Person):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, name, age, student_id):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(name, age)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.student_id = student_id
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;def study(self):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"{"{"}self.name{"}"} is studying.")
              <br />
              <br />
              student1 = Student("Bob", 20, "S123")
              <br />
              student1.greet() # Inherited method
              <br />
              student1.study()
            </div>

            <h2 className="text-xl font-[Itel] py-3">
              <strong>Class Methods and Static Methods:</strong> Python supports class methods (decorated with
              @classmethod) that receive the class as the first parameter, and static methods (decorated with
              @staticmethod) that don't receive any implicit first parameter.
            </h2>

            <div className="px-4 py-4 bg-black text-green-600 rounded">
              class Calculator:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;@staticmethod
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;def add(a, b):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a + b<br />
              <br />
              print(Calculator.add(5, 3)) # Output: 8
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PyClasses
