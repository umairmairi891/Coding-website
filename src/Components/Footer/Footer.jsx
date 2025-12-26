import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
    return (
        <>
            <div className="bg-gray-800 w-full ">
                <div className=" flex flex-col md:flex-row justify-around gap-4">
                    <div className="px-10 py-5 text-white ">
                        <h2 className="font-bold  text-2xl font-[Roboto]">About Us</h2>
                        <ul className="font-thin mt-2 ">
                            <li className="py-1 ">
                                <NavLink to='/community' className={({ isActive }) =>
                                    `${isActive ? 'text-orange-600 font-bold ' : "text-white font-[Itel]"}`
                                }>
                                    Community
                                </NavLink>
                            </li>
                            <li className="py-1">
                                <NavLink to='/about' className={({ isActive }) =>
                                    `${isActive ? 'text-orange-600 font-bold' : "text-white font-[Itel]"}`
                                }>
                                    About Us
                                </NavLink>
                            </li >
                            <li className="py-1" to>
                                <NavLink to='/career' className={({ isActive }) =>
                                    `${isActive ? 'text-orange-600 font-bold' : "text-white font-[Itel]"}`
                                }>
                                    Career
                                </NavLink>
                            </li>
                            <li className="py-1" >
                                <NavLink to='/team' className={({ isActive }) =>
                                    `${isActive ? 'text-orange-600 font-bold' : "text-white font-[Itel]"}`
                                }>
                                    Team
                                </NavLink>
                            </li>
                        </ul>
                    </div>


                    <div className="px-10 py-5 text-white  ">
                        <h2 className="font-bold text-2xl font-[Roboto]">Quick Links</h2>
                        <ul className="font-thin mt-2">
                            <li className="py-1">
                                <NavLink to='/documentation' className={({isActive})=>`
                                ${isActive? 'text-orange-600 font-bold':'text-white font-[Itel]'}`} >
                                    Documentation
                                </NavLink>
                            </li>
                            <li className="py-1">
                                <NavLink  to='/api' className={({isActive})=>`
                                ${isActive? "text-orange-600 font-bold": "text-white font-[Itel]"}`} >
                                    API References
                                </NavLink>
                            </li>
                            <li className="py-1">
                                <NavLink to='/blog' className={({isActive})=>`${isActive ?"text-orange-600 font-bold":"text-white font-[Itel]"}`}>
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="px-10  py-5 text-white ">
                        <h2 className="font-bold text-2xl font-[Roboto]">Contact Info</h2>
                        <ul className="font-thin mt-4">
                            <li className="py-1">
                                <NavLink to='/support' className={({isActive})=>`
                                ${isActive? "text-orange-600 font-bold": "text-white font-[Itel]"}`}>
                                    Support Center
                                </NavLink>
                            </li>
                            <li className="py-1">
                                <NavLink to='/privacy' className={({isActive})=>`${isActive?"text-orange-600 font-bold": "text-white font-[Itel]"}`}>
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li className="py-1">
                                <NavLink to='/contactus' className={({isActive})=>`
                                ${isActive? "text-orange-600 font-bold" :"text-white font-[Itel]"}`}>
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="px-10 py-5 text-white ">
                        <h2 className="font-bold text-xl font-[Roboto]">Social Links</h2>
                        <div className="flex gap-4 mt-4">
                            <div> <a href="https://facebook.com">
                                <i className="fab fa-facebook"></i>
                                </a> </div>
                            <div> <i className="fab fa-github"></i></div>
                            <div> <i className="fab fa-linkedin"></i></div>
                            <div> <i className="fab fa-twitter"></i></div>
                        </div>
                    </div>

                </div>
                <div className="text-white text-center px-4 mt-4 md:mt-0">
                    <p className="block  pb-6 font-semibold text-xl font-[Roboto]">&copy; CodeCompanion: All Rights Reserved</p>
                </div>

            </div>


        </>
    )
}

export default Footer;