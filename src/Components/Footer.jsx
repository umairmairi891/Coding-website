import React from "react";
import { NavLink } from "react-router-dom";
function Footer(){
    return(
        <>
        <div className="bg-indigo-800 w-full font-[Robo]">
            <div className="px-10 py-5 text-white ">
                <h2 className="font-bold text-xl">About Us</h2>
                <ul className="font-thin ">
                    <li>
                        <NavLink>
                            Community
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({isActive})=>
                            `${isActive? 'text-orange-600 font-bold': "text-white"}`
                        }>
                          About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                          Career
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                          Team
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Footer;