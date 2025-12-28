"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"

function CppClasses() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-xl font-[Itel] ">C++ Classes</h2>
          <p className="py-2 font-thin leading-relaxed">Welcome to the C++ programming language</p>
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
            <h2 className="text-lg leading-relaxed">
              C++ classes are fundamental to object-oriented programming (OOP), providing a blueprint for creating
              objects with encapsulated data and behavior. Classes in C++ offer powerful features like access
              specifiers, constructors, destructors, and member functions, making them essential for building robust and
              maintainable software. C++'s class system combines the flexibility of OOP with the performance and control
              of a compiled language, making it ideal for system programming, game development, and high-performance
              applications.
            </h2>
          </div>
        </div>
        <div className="mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h1 className="text-2xl font-bold font-[Itel]">Key Concepts of C++ Classes:</h1>
            <h2 className="text-xl font-bold font-[Lato] py-2 leading-relaxed">
              Declaration: Classes are declared using the class keyword followed by the class name and access
              specifiers.
            </h2>
            <div className="px-4 py-4 bg-black text-green-600 rounded">
              class MyClass {"{"}
              <br />
              public:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;// Public members
              <br />
              private:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;// Private members
              <br />
              {"}"};
            </div>
            <h2 className="text-xl font-[Itel] py-3 leading-relaxed">
              <strong>Constructor:</strong> Constructors are special member functions that are automatically called when
              an object is created. They initialize the object's attributes and have the same name as the class with no
              return type.
            </h2>

            <div className="px-4 py-4 bg-black text-green-600 rounded">
              class Person {"{"}
              <br />
              public:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;string name;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;int age;
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;// Constructor
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Person(string n, int a) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name = n;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;age = a;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              {"}"};
            </div>
            <h2 className="text-xl font-[Itel] py-3 leading-relaxed">
              <strong>Methods:</strong> Member functions defined within a class are called methods. They define the
              behavior of objects created from the class and can access the object's data members.
            </h2>

            <div className="px-4 py-4 bg-black text-green-600 rounded">
              class Person {"{"}
              <br />
              public:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;string name;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;int age;
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Person(string n, int a) : name(n), age(a) {"{}"}
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;void greet() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Hello, my name is " &lt;&lt; name
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt; " and I am "
              &lt;&lt; age &lt;&lt; " years old." &lt;&lt; endl;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              {"}"};
            </div>

            <h2 className="text-xl font-[Itel] py-3 leading-relaxed">
              <strong>Instantiation:</strong> New objects (instances) are created from a class by declaring variables of
              the class type and calling the constructor.
            </h2>

            <div className="px-4 py-4 bg-black text-green-600 rounded">
              Person person1("Alice", 30);
              <br />
              person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
            </div>

            <h2 className="text-xl font-[Itel] py-3 leading-relaxed">
              <strong>Inheritance:</strong> C++ classes support inheritance, allowing a derived class to inherit
              attributes and methods from a base class. The colon (:) is used to specify inheritance, and access
              specifiers control visibility.
            </h2>

            <div className="px-4 py-4 bg-black text-green-600 rounded">
              class Student : public Person {"{"}
              <br />
              public:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;string student_id;
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Student(string n, int a, string id) : Person(n, a) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;student_id = id;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;void study() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; name &lt;&lt; " is studying." &lt;&lt; endl;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              {"}"};<br />
              <br />
              Student student1("Bob", 20, "S123");
              <br />
              student1.greet(); // Inherited method
              <br />
              student1.study();
            </div>

            <h2 className="text-xl font-[Itel] py-3 leading-relaxed">
              <strong>Static Members and Methods:</strong> C++ supports static data members that are shared across all
              instances of a class, and static member functions that can be called without creating an object.
            </h2>

            <div className="px-4 py-4 bg-black text-green-600 rounded">
              class Calculator {"{"}
              <br />
              public:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;static int add(int a, int b) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a + b;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              {"}"};<br />
              <br />
              cout &lt;&lt; Calculator::add(5, 3); // Output: 8
            </div>

            <h2 className="text-xl font-[Itel] py-3 leading-relaxed">
              <strong>Destructors:</strong> Destructors are special member functions that are automatically called when
              an object is destroyed. They clean up resources and have the same name as the class prefixed with a tilde
              (~).
            </h2>

            <div className="px-4 py-4 bg-black text-green-600 rounded">
              class MyClass {"{"}
              <br />
              public:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;MyClass() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Constructor called" &lt;&lt; endl;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;~MyClass() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Destructor called" &lt;&lt; endl;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              {"}"};
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CppClasses
