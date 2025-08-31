
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Home() {
    return (
        <>
            <div className=" px-3 sm:px-10 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-12 justify-center">
                    <div className='sm:col-span-6 '>
                        <h2 className='text-2xl font-bold font-[Popins]'>Explore Every Programming Languages in one Place</h2>
               <TypedHeading/>
                    <button className='mt-4 cursor-pointer bg-indigo-800 px-3 text-white py-2 rounded'>Browse Languages</button>
                    <button className='md:ml-3 ml-3 cursor-pointer mt-4 sm:mt-0 bg-purple-600 px-3 py-2 rounded text-white'>Start Learning</button>
                    </div>
                    <div className='sm:col-span-6 ml-0 md:ml-5 mx-2 mt-5 sm:mt-0 bg-amber-400'>
                        <img className='w-full h-full  rounded ' src="src/Images/Gemini_Generated_Image_jtostqjtostqjtos.png" alt="" />
                    </div>
                </div>

              <div className='grid grid-cols-1 sm:grid-cols-12 w-[100%] sm:w-full  mt-5 '>
                    <div className='bg-gray-600 p-3 w- sm:col-span-3 max-h-[510px] md:max-h-[280px] lg:max-h-[350px] xl:max-h-[510px] overflow-auto text-xl text-white font-[Roboto] rounded'>
                        <h2 className='font-bold px-2'>Languages</h2>
                        <input className='bg-white text-black rounded w-full px-3 py-2 mt-2 md:text-base' type="text" placeholder='Search Langauges' />
                        <h3 className='text-center mt-4 md:mt-1 lg:mt-4 font-semibold md:text-base hover:bg-blue-600 cursor-pointer rounded py-2 md:py-0 lg:py-2'>Papular Languages</h3>
                        <ul className='grid gap-4 cursor-pointer'>
                            <li className='hover:bg-blue-600 px-3 rounded py-2'>JavaScript</li>
                            <li className='hover:bg-blue-600 px-3 rounded py-2'>Java</li>
                            <li className='hover:bg-blue-600 px-3 rounded py-2'>C++</li>
                            <li className='hover:bg-blue-600 px-3 rounded py-2'>HTML</li>
                            <li className='hover:bg-blue-600 px-3 rounded py-2'>CSS</li>
                            <li className='hover:bg-blue-600 px-3 rounded py-2'>CSS</li>
                            <li className='hover:bg-blue-600 px-3 rounded py-2'>CSS</li>
                            <li className='hover:bg-blue-600 px-3 rounded py-2'>CSS</li>
                            <li className='hover:bg-blue-600 px-3 rounded py-2'>CSS</li>
                        </ul>
                    </div>
                    <div className='sm:col-span-8 ml-1 sm:ml-10'>
                        <div className='flex gap-3 sm:gap-10 px-1 sm:px-4 text-sm sm:text-xl'>
                            <button className='cursor-pointer font-semibold bg-indigo-700 py-2 mt-2 px-3 rounded text-white hover:bg-indigo-950 duration-200'>OverView</button>
                            <button className='cursor-pointer font-semibold bg-indigo-700 py-2 mt-2 px-3 rounded text-white hover:bg-indigo-950 duration-200'>Syntax</button>
                            <button className='cursor-pointer font-semibold bg-indigo-700 py-2 mt-2 px-3 rounded text-white hover:bg-indigo-950 duration-200'>Examples</button>
                        </div>
                        <hr className='mt-4' />
                        <div className="img">
                          <img className='mt-3 rounded' src="src/Images/java-overview.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


       

    const TypedHeading = () => {
      const el = useRef(null); // Ref to attach Typed.js to

      useEffect(() => {
        const typed = new Typed(el.current, {
          strings: [
            "Syntax",
            "Tutorials",
            "Tools for developers of all levels",
          ],
          typeSpeed: 60,  // Typing speed in milliseconds
          backSpeed: 40,  // Backspacing speed in milliseconds
          loop: true,     // Loop the animation
          startDelay: 500, // Delay before starting in milliseconds
          backDelay: 1000, // Delay before backspacing in milliseconds
        });

        // Cleanup function to destroy the Typed instance on unmount
        return () => {
          typed.destroy();
        };
      }, []); // Empty dependency array ensures it runs once on mount

      return (
        <div>
          <h3 className='text-xl font-bold font-[Roboto] mt-3'>
            <span ref={el}></span> {/* The span where the typing effect will appear */}
          </h3>
        </div>
      );
    };



export default Home;