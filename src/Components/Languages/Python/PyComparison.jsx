"use client"

import { useState } from "react"

import "/src/App.css"
import { NavLink } from "react-router-dom"
function PyComparison() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-5 md:p-10">
        <div
          className="bg-gray-600 text-center py-5  px-6 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}>
          <h2 className="font-bold text-xl font-[Itel] ">Python Comparison</h2>
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
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Libraries</li>
              </NavLink>
              <NavLink to="/pycomparison">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Comparison</li>
              </NavLink>
            </ul>
          </div>
        )}

        <div className="mt-4 rounded " style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-1 md:p-5 w-full overflow-auto">
            <table className="responsive w-full ">
              <tr className="text-xl font-bold font-[Itel] border-4 border-l-4 border-black">
                <th className="px-4 py-2 font-[Itel] border-r-4 border-black">Features</th>
                <th className="px-4 py-2 font-[Itel] border-r-4 border-black">Python</th>
                <th className="px-4 py-2 font-[Itel] border-r-4 border-black">Other Languages</th>
              </tr>
              <tbody className="font-[Itel] text-lg">
                <tr className="">
                  <td className="px-1 border-4 font-bold py-2">Ease of Learning and Use</td>
                  <td className="px-4 border-4">
                    Python is renowned for its simplicity and readability, making it an ideal choice for beginners. Its
                    clean syntax resembles natural language, allowing developers to focus on problem-solving rather than
                    complex syntax rules. The interpreted nature enables immediate feedback and rapid prototyping.
                  </td>
                  <td className="px-4 border-4">
                    Languages like JavaScript offer similar ease of learning for web development, while languages such
                    as C++ or Java present a steeper learning curve due to their complex syntax, memory management
                    requirements, and the need for understanding compilation processes.
                  </td>
                </tr>

                <tr>
                  <td className="px-1 py-2 border-4 font-bold">Performance and Speed</td>
                  <td className="px-4 py-2 border-4">
                    Python prioritizes development speed and code readability over raw execution speed. While
                    interpreted languages are generally slower than compiled ones, Python offers performance
                    optimization through libraries like NumPy and integration with C/C++ for computation-intensive
                    tasks.
                  </td>
                  <td className="px-4 py-2 border-4">
                    Compiled languages like C, C++, Rust, and Go deliver superior performance for CPU-intensive
                    operations. Java strikes a balance with its Just-In-Time compilation, while JavaScript with modern
                    engines like V8 offers excellent performance for web applications.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2 border-4 font-bold">Versatility and Use Cases</td>
                  <td className="px-4 py-2 border-4">
                    Python excels in diverse domains including data science, machine learning, artificial intelligence,
                    web development (Django, Flask), automation, scientific computing, and backend services. Its
                    extensive library ecosystem makes it suitable for virtually any programming task.
                  </td>
                  <td className="px-4 py-2 border-4">
                    JavaScript dominates web development (front-end and Node.js backend). Java powers enterprise
                    applications and Android development. C++ is preferred for system programming and game development.
                    Each language has specialized strengths in particular domains.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2  border-4 font-bold">Community and Ecosystem</td>
                  <td className="px-4 py-2 border-4">
                    Python boasts one of the largest and most supportive programming communities worldwide. The Python
                    Package Index (PyPI) hosts over 400,000 packages, covering everything from web frameworks to machine
                    learning libraries, ensuring comprehensive support for any project.
                  </td>
                  <td className="px-4 py-2 border-4">
                    JavaScript has an enormous community with NPM being the largest package registry. Java maintains a
                    strong enterprise community, while languages like Ruby and PHP have dedicated followings in specific
                    niches.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2 border-4 font-bold">Frameworks and Libraries</td>
                  <td className="px-4 py-2 border-4">
                    Python features powerful frameworks like Django and Flask for web development, TensorFlow and
                    PyTorch for machine learning, Pandas and NumPy for data analysis, and Selenium for automation. This
                    rich ecosystem accelerates development across various domains.
                  </td>
                  <td className="px-4 py-2 border-4">
                    JavaScript offers React, Angular, and Vue.js for front-end, plus Express.js for backend. Java
                    provides Spring and Hibernate for enterprise applications. Each language's frameworks are tailored
                    to its primary use cases.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2 border-4 font-bold">Career Opportunities</td>
                  <td className="px-4 py-2 border-4">
                    Python developers are in high demand across data science, machine learning, AI research, backend
                    development, automation engineering, and scientific computing. The language's versatility opens
                    doors to diverse and lucrative career paths in rapidly growing fields.
                  </td>
                  <td className="px-4 py-2 border-4">
                    JavaScript developers find abundant opportunities in web development. Java remains strong in
                    enterprise and Android development. Specialized languages like R (statistics) or Swift (iOS) offer
                    niche career paths with competitive salaries.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default PyComparison
