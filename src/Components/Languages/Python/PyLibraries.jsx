"use client"

import { useState } from "react"

import "/src/App.css"
import { NavLink } from "react-router-dom"

function PyLibraries() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-3 md:p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-2xl font-[Itel]">Python Libraries</h2>
          <p className="py-2 text-xl font-[Lato]">Explore the rich ecosystem of Python packages</p>
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
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 font-bold text-3xl font-[Roboto] pl-5">Python Libraries</h2>
            <p className="py-3 font-[Itel] text-xl">
              Python's extensive ecosystem of libraries is one of its greatest strengths, offering pre-built solutions
              for virtually any task. These libraries accelerate development by providing tested, optimized code that
              you can integrate into your projects. From data science to web development, Python has a library for
              everything.
            </p>

            <h3 className="font-bold text-2xl font-[Lato] mt-4">Popular Python Libraries and Their Use Cases</h3>

            <p className="py-2 font-[Itel] text-xl">
              <strong>NumPy:</strong> The fundamental package for scientific computing in Python, providing support for
              large multi-dimensional arrays and matrices, along with mathematical functions to operate on them.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              import numpy as np
              <br />
              array = np.array([1, 2, 3, 4, 5])
              <br />
              print(array.mean()) # Calculate average
            </div>

            <p className="py-2 font-[Itel] text-xl">
              <strong>Pandas:</strong> A powerful data manipulation and analysis library that provides data structures
              like DataFrames for handling structured data efficiently, making it essential for data science workflows.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              import pandas as pd
              <br />
              df = pd.read_csv('data.csv')
              <br />
              print(df.head()) # Display first 5 rows
            </div>

            <p className="py-2 font-[Itel] text-xl">
              <strong>Django:</strong> A high-level web framework that encourages rapid development and clean, pragmatic
              design. It includes built-in features for authentication, database management, and admin interfaces.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              from django.http import HttpResponse
              <br />
              <br />
              def home(request):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return HttpResponse("Hello, Django!")
            </div>

            <p className="py-2 font-[Itel] text-xl">
              <strong>Flask:</strong> A lightweight and flexible web framework perfect for building small to
              medium-sized web applications and APIs. It provides the essentials while allowing developers to choose
              their own tools and libraries.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              from flask import Flask
              <br />
              app = Flask(__name__)
              <br />
              <br />
              @app.route('/')
              <br />
              def hello():
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return "Hello, Flask!"
            </div>

            <p className="py-2 font-[Itel] text-xl">
              <strong>Matplotlib:</strong> A comprehensive library for creating static, animated, and interactive
              visualizations in Python. It's widely used for plotting graphs, charts, and other data visualizations.
            </p>
            <div className="w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              import matplotlib.pyplot as plt
              <br />
              plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
              <br />
              plt.ylabel('Values')
              <br />
              plt.show()
            </div>

            <p className="py-2 font-[Itel] text-xl">
              <strong>TensorFlow & PyTorch:</strong> Leading machine learning and deep learning frameworks that provide
              tools for building and training neural networks. They're essential for AI development and research.
            </p>
            <div className="w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              import tensorflow as tf
              <br />
              model = tf.keras.Sequential([
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;tf.keras.layers.Dense(10, activation='relu')
              <br />
              ])
            </div>

            <p className="py-2 font-[Itel] text-xl">
              <strong>Requests:</strong> An elegant and simple HTTP library that makes it easy to send HTTP requests and
              work with APIs. It handles authentication, cookies, and other HTTP features seamlessly.
            </p>
            <div className="w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              import requests
              <br />
              response = requests.get('https://api.example.com/data')
              <br />
              print(response.json())
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PyLibraries
