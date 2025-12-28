"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"

function CppLibraries() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-3 md:p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-2xl font-[Itel]">C++ Libraries</h2>
          <p className="py-2 text-xl font-[Lato] leading-relaxed">Explore the powerful ecosystem of C++ libraries</p>
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
            <h2 className="border-l-5 border-blue-800 font-bold text-3xl font-[Roboto] pl-5">C++ Libraries</h2>
            <p className="py-3 font-[Itel] text-xl leading-relaxed">
              C++'s extensive ecosystem of libraries is one of its greatest strengths, offering high-performance,
              pre-built solutions for virtually any task. These libraries accelerate development by providing tested,
              optimized code that you can integrate into your projects. From game development to scientific computing,
              C++ has a library for everything.
            </p>

            <h3 className="font-bold text-2xl font-[Lato] mt-4">Popular C++ Libraries and Their Use Cases</h3>

            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong>STL (Standard Template Library):</strong> The foundation of modern C++ programming, providing
              containers (vector, map, set), algorithms, and iterators. It's built into the language and offers
              type-safe, efficient data structures.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              #include &lt;vector&gt;
              <br />
              #include &lt;algorithm&gt;
              <br />
              <br />
              std::vector&lt;int&gt; nums = {"{5, 2, 8, 1, 9}"};
              <br />
              std::sort(nums.begin(), nums.end());
            </div>

            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong>Boost:</strong> A comprehensive collection of peer-reviewed, portable C++ libraries that extend
              the functionality of the standard library. Many Boost libraries have been incorporated into the C++
              standard over time.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              #include &lt;boost/filesystem.hpp&gt;
              <br />
              <br />
              boost::filesystem::path p("example.txt");
              <br />
              if (boost::filesystem::exists(p)) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;// File exists
              <br />
              {"}"}
            </div>

            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong>Qt:</strong> A comprehensive cross-platform framework for creating graphical user interfaces and
              applications. It includes tools for GUI development, networking, database access, and much more.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              #include &lt;QApplication&gt;
              <br />
              #include &lt;QPushButton&gt;
              <br />
              <br />
              int main(int argc, char *argv[]) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;QApplication app(argc, argv);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;QPushButton button("Hello Qt!");
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;button.show();
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return app.exec();
              <br />
              {"}"}
            </div>

            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong>OpenCV:</strong> The leading open-source computer vision and machine learning library. It provides
              tools for image processing, object detection, face recognition, and video analysis.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              #include &lt;opencv2/opencv.hpp&gt;
              <br />
              <br />
              cv::Mat image = cv::imread("photo.jpg");
              <br />
              cv::cvtColor(image, image, cv::COLOR_BGR2GRAY);
              <br />
              cv::imwrite("grayscale.jpg", image);
            </div>

            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong>Eigen:</strong> A high-performance template library for linear algebra, including matrices,
              vectors, numerical solvers, and related algorithms. It's widely used in robotics, computer graphics, and
              scientific computing.
            </p>
            <div className="w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              #include &lt;Eigen/Dense&gt;
              <br />
              <br />
              Eigen::MatrixXd matrix(2, 2);
              <br />
              matrix(0, 0) = 3;
              <br />
              matrix(1, 0) = 2.5;
              <br />
              std::cout &lt;&lt; matrix &lt;&lt; std::endl;
            </div>

            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong>SFML (Simple and Fast Multimedia Library):</strong> A cross-platform library for multimedia and
              game development. It provides modules for graphics, audio, networking, and window management with a simple
              API.
            </p>
            <div className="w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              #include &lt;SFML/Graphics.hpp&gt;
              <br />
              <br />
              sf::RenderWindow window(sf::VideoMode(800, 600), "Game");
              <br />
              sf::CircleShape shape(50);
              <br />
              shape.setFillColor(sf::Color::Green);
              <br />
              window.draw(shape);
            </div>

            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              <strong>cURL (libcurl):</strong> A powerful library for transferring data with URLs, supporting HTTP,
              HTTPS, FTP, and many other protocols. It's essential for network programming and API integration.
            </p>
            <div className="w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              #include &lt;curl/curl.h&gt;
              <br />
              <br />
              CURL *curl = curl_easy_init();
              <br />
              curl_easy_setopt(curl, CURLOPT_URL, "https://api.example.com");
              <br />
              curl_easy_perform(curl);
              <br />
              curl_easy_cleanup(curl);
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CppLibraries
