"use client"

import { useState } from "react"

import "/src/App.css"
import { NavLink } from "react-router-dom"
function PyHistory() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-3 md:p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-2xl font-[Itel] ">Python History</h2>
          <p className="py-2 text-xl font-[Lato]">Welcome to the History of Python programming languages</p>
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
              <NavLink>
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
              <NavLink to="/loops">
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
            <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">History</h2>
            <p className="text-lg font-serif py-2">
              Python's history began in the late 1980s when Guido van Rossum, a programmer at Centrum Wiskunde &
              Informatica (CWI) in the Netherlands, started developing the language. It was officially released in 1991
              as Python 0.9.0. Named after the British comedy series "Monty Python's Flying Circus," Python was designed
              to be fun to use and emphasize code readability with its clean syntax. Its primary goal was to create a
              language that was easy to learn yet powerful enough for complex applications.
            </p>
          </div>
        </div>

        <div className="mx-1  mt-4  " style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">
              Key milestones in Python's history include:
            </h2>
            <p className="text-lg font-serif py-3">
              1991: Python 0.9.0 is released by Guido van Rossum, featuring classes, exception handling, and core data
              types.
            </p>
            <p className="text-lg font-serif py-3">
              1994: Python 1.0 is released with new features like lambda, map, filter, and reduce functions.
            </p>
            <p className="text-lg font-serif py-3">
              2000: Python 2.0 is released, introducing list comprehensions, garbage collection, and Unicode support.
            </p>
            <p className="text-lg font-serif py-3">
              2008: Python 3.0 is released, a major backward-incompatible release designed to fix fundamental design
              flaws in the language.
            </p>
            <p className="text-lg font-serif py-3">
              2010: Django and Flask web frameworks gain popularity, establishing Python as a leading language for web
              development.
            </p>
            <p className="text-lg font-serif py-3">
              2015: Python becomes the most popular language for data science and machine learning with libraries like
              NumPy, Pandas, and scikit-learn.
            </p>
            <p className="text-lg font-serif py-3">
              2018: Guido van Rossum steps down as Python's "Benevolent Dictator For Life" (BDFL), and Python
              transitions to a steering council governance model.
            </p>
            <p className="text-lg font-serif py-3">
              2020: Python 2 reaches end-of-life. Python 3.9 introduces new features like dictionary merge operators and
              type hinting improvements. Python consistently ranks as one of the top programming languages worldwide.
            </p>
          </div>
        </div>
        <div className="mx-1  mt-4  " style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">The Future of Python</h2>
            <p className="text-lg font-serif py-2">
              Python continues to evolve and dominate multiple domains of software development. Upcoming trends include
              enhanced performance improvements with projects like PyPy and faster CPython implementations. AI and
              Machine Learning continue to be Python's strongest domains, with frameworks like TensorFlow, PyTorch, and
              Keras leading innovation. Data Science and Analytics remain core strengths, with tools like Jupyter,
              Pandas, and Matplotlib constantly improving. Web development is thriving with modern frameworks like
              FastAPI gaining popularity alongside Django and Flask. The future of Python looks extremely promising with
              continuous community growth, better tooling, and expanding use cases from automation to quantum computing.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PyHistory
