"use client"

import { useState } from "react"
import "/src/App.css"
import { NavLink } from "react-router-dom"

function CppLoops() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-xl font-[Itel]">C++ Loops</h2>
          <p className="py-2 font-thin">Welcome to the C++ programming language</p>
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

        <div className="mt-4 rounded" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="font-[Itel] text-xl leading-relaxed">
              C++ provides several types of loops to repeatedly execute a block of code based on a condition or to
              iterate over data structures efficiently. These loops are fundamental to controlling program flow and
              processing collections of data.
            </h2>

            <h3 className="text-xl font-[Roboto] py-4 leading-relaxed">
              <strong className="px-4 text-2xl">For Loop:</strong>This loop is used to iterate a specific number of
              times with an initialization, condition, and increment/decrement expression. It's the most common loop in
              C++ and provides precise control over iteration with a clear, compact syntax.
            </h3>
            <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
              {`for(int i = 0; i < 5; i++) {\n    cout << "Iteration " << i << endl;\n}`}
            </div>

            <h3 className="text-xl font-[Roboto] py-4 leading-relaxed">
              <strong className="px-4 text-2xl">While Loop:</strong>This loop repeatedly executes a block of code as
              long as a specified condition remains true. The condition is evaluated before each iteration, making it
              ideal for scenarios where the number of iterations is not predetermined or depends on runtime conditions.
            </h3>
            <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
              {`int count = 0;\nwhile(count < 3) {\n    cout << "Count: " << count << endl;\n    count++;\n}`}
            </div>

            <h3 className="text-xl font-[Roboto] py-4 leading-relaxed">
              <strong className="px-4 text-2xl">Do-While Loop:</strong>This loop is similar to the while loop, but it
              guarantees at least one execution because the condition is checked after the loop body executes. This is
              useful when you need to ensure the code runs at least once before checking the condition.
            </h3>
            <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
              {`int num = 0;\ndo {\n    cout << "Number: " << num << endl;\n    num++;\n} while(num < 3);`}
            </div>

            <h3 className="text-xl font-[Roboto] py-4 leading-relaxed">
              <strong className="px-4 text-2xl">Range-Based For Loop (C++11):</strong>This modern loop iterates over
              containers like arrays, vectors, and strings with cleaner syntax. It automatically handles iterators and
              provides a more intuitive way to traverse collections without managing indices.
            </h3>
            <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
              {`vector<string> fruits = {"apple", "banana", "cherry"};\nfor(const auto& fruit : fruits) {\n    cout << fruit << endl;\n}`}
            </div>

            <h3 className="text-xl font-[Roboto] py-4 leading-relaxed">
              <strong className="px-4 text-2xl">Nested Loops:</strong>C++ allows loops within loops, which is
              particularly useful for working with multidimensional arrays or performing operations that require
              multiple levels of iteration. Each inner loop completes all its iterations for each iteration of the outer
              loop.
            </h3>
            <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
              {`for(int i = 0; i < 3; i++) {\n    for(int j = 0; j < 3; j++) {\n        cout << i << "," << j << " ";\n    }\n    cout << endl;\n}`}
            </div>

            <h3 className="text-xl font-[Roboto] py-4 leading-relaxed">
              <strong className="px-4 text-2xl">Break and Continue:</strong>C++ provides control statements to modify
              loop behavior. The <strong>break</strong> statement exits the loop entirely and transfers control to the
              statement immediately following the loop, while <strong>continue</strong> skips the remaining code in the
              current iteration and proceeds to the next iteration.
            </h3>
            <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
              {`for(int i = 0; i < 10; i++) {\n    if(i == 3)\n        continue;  // Skip 3\n    if(i == 7)\n        break;  // Stop at 7\n    cout << i << endl;\n}`}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CppLoops
