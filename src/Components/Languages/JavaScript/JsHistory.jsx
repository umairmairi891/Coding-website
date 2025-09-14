import React,{useState} from "react";

import { NavLink } from 'react-router-dom';
function JsHistory(){

    const [isOpen, setisOpen] = useState(false);
    return(
    <>
    <div className="p-10">
        <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="font-bold text-xl font-[Itel] ">JavaScript History</h2>
                    <p className="py-2 font-thin">Welcome to the History of JavaScript programming languages</p>
                    <button onClick={() => setisOpen(!isOpen)} className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white">Start learning more</button>
                </div>

                {
                    isOpen && (
                        <div className="bg-cyan-900 h-auto   text-white rounded w-[100%] sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
                            <ul className=" text-lg font-[Roboto]">
                                <div className="flex justify-between items-center">
                                    <NavLink className='w-[80%]  hover:bg-gray-700  duration-300' to='/jsintroduction'>
                                        <li className="py-3 px-4  hover:bg-gray-700  duration-300">Introduction</li>
                                    </NavLink>
                                    <i onClick={() => setisOpen(!isOpen)} className="fa-solid fa-xmark cursor-pointer  text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"></i>
                                </div>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">History</li>
                                </NavLink>
                                <NavLink to='/jsworking'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Working</li>
                                </NavLink>
                                <NavLink to='/jssyntax'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Syntax</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Variables</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Data Types</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Functions</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Operators</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Loops</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Objects</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Classes</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">DOM</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Comparison</li>
                                </NavLink>
                            </ul>
                        </div>
                    )
                }

                <div className="mx-1  mt-4  " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
                    <div className="p-5 w-full">
                        <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">History</h2>
                        <p className="text-lg font-serif py-2">JavaScript's history began in 1995 when Brendan Eich, a programmer at Netscape Communications Corporation, created the language in just 10 days. Initially named "Mocha," then "LiveScript," it was ultimately renamed "JavaScript" to leverage the popularity of Java, despite having a distinct design and purpose. Its primary goal was to add interactivity and dynamism to web pages, which were largely static at the time. 
</p>
                    </div>
                </div>

                <div className="mx-1  mt-4  " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
                    <div className="p-5 w-full">
                      <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">Key milestones in JavaScript's history include:
</h2>
<p className="text-lg font-serif py-3">1995:
Brendan Eich creates JavaScript at Netscape</p>
<p className="text-lg font-serif py-3">1996:
Microsoft introduces JScript for Internet Explorer 3.0, a largely compatible but extended version of JavaScript.
</p>
<p className="text-lg font-serif py-3">1997:
JavaScript is submitted to ECMA International and becomes the ECMA-262 standard, officially known as ECMAScript.
</p>
<p className="text-lg font-serif py-3">1999:
ECMAScript 3 (ES3) is released, bringing significant improvements and becoming a widely supported standard.
</p>
<p className="text-lg font-serif py-3">2005:
Jesse James Garrett coins the term "AJAX" (Asynchronous JavaScript and XML), highlighting JavaScript's role in creating more responsive web applications.</p>
<p className="text-lg font-serif py-3">2008:
Google releases the Chrome browser with its high-performance V8 JavaScript engine, significantly boosting JavaScript's execution speed and capabilities.
</p>
<p className="text-lg font-serif py-3">2009:
Ryan Dahl creates Node.js, enabling server-side JavaScript development outside the browser.
</p>
<p className="text-lg font-serif py-3">2015:
ECMAScript 2015 (ES6) is released, a major update introducing new features like classes, arrow functions, and modules. Subsequent versions are released annually (ES2016, ES2017, etc.).
</p>
                    </div>
                </div>
                <div className="mx-1  mt-4  " style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
                    <div className="p-5 w-full">
                        <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">The Future of JavaScript</h2>
                        <p className="text-lg font-serif py-2">JavaScript continues to evolve and adapt to new technologies.
Upcoming trends include the growth of WebAssembly, which allows running code written in other languages alongside JavaScript in the browser.
Serverless computing is gaining traction, allowing developers to build applications without managing servers, with JavaScript playing a key role.
Machine learning is being integrated into JavaScript, enabling the development of intelligent web applications.
TypeScript, a statically typed superset of JavaScript, is becoming increasingly popular, offering more structure and reducing errors in large projects.
The future of JavaScript looks promising with more robust tools and features to help developers build better applications</p>
                    </div>
                </div>
    </div>
    </>
    )
}

export default JsHistory;