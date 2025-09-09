import React,{useState} from 'react'
import { NavLink} from 'react-router-dom';
function JsIntroduction(){

    const [isOpen, setisOpen] = useState(false)
    return(
        <>
        <div className="bg-white w-full p-10">
            <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)'}}>
                <h2 className="font-bold text-xl ">JavaScript Introduction</h2>
                <p className="py-2 font-thin">Introduction to the Introduction of JavaScript programming languages</p>
                    <button onClick={() => setisOpen(!isOpen)} className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white">Start learning more</button>
            </div>

{
                isOpen &&(
                 <div className="bg-cyan-900 h-auto   text-white rounded w-[100%] sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
                     <ul className=" text-lg font-[Roboto]">
                        <NavLink className='flex justify-between items-center ' to='/jsintroduction'>
                            <li className="py-3 px-4 w-[80%] hover:bg-gray-700  duration-300">Introduction</li>
                            <i onClick={()=>setisOpen(!isOpen)} className="fa-solid fa-xmark  text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"></i>
                        </NavLink>
                        <NavLink>
                            <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">History</li>
                        </NavLink>
                        <NavLink>
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
            </div>
            </>
    )
}

export default JsIntroduction;