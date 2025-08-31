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
                            <li className="py-1">
                                <NavLink>
                                    Community
                                </NavLink>
                            </li>
                            <li className="py-1">
                                <NavLink to='/about' className={({ isActive }) =>
                                    `${isActive ? 'text-orange-600 font-bold' : "text-white"}`
                                }>
                                    About Us
                                </NavLink>
                            </li >
                            <li className="py-1">
                                <NavLink>
                                    Career
                                </NavLink>
                            </li>
                            <li className="py-1">
                                <NavLink>
                                    Team
                                </NavLink>
                            </li>
                        </ul>
                    </div>


                    <div className="px-10 py-5 text-white  ">
                        <h2 className="font-bold text-2xl font-[Roboto]">Quick Links</h2>
                        <ul className="font-thin mt-2">
                            <li className="py-1">
                                <NavLink>
                                    Documentation
                                </NavLink>
                            </li>
                            <li className="py-1">
                                <NavLink   >
                                    API References
                                </NavLink>
                            </li>
                            <li className="py-1">
                                <NavLink>
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="px-10 sm:px-0 py-5 text-white ">
                        <h2 className="font-bold text-2xl font-[Roboto]">Contact Info</h2>
                        <ul className="font-thin mt-4">
                            <li className="py-1">
                                <NavLink>
                                    Support Center
                                </NavLink>
                            </li>
                            <li className="py-1">
                                <NavLink >
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li className="py-1">
                                <NavLink to='/contactus' className={({isActive})=>`
                                ${isActive? "text-orange-600 font-bold" :"text-white"}`}>
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="px-10 py-5 text-white ">
                        <h2 className="font-bold text-xl font-[Roboto]">Social Links</h2>
                        <div className="flex gap-4 mt-4">
                            <div> <i className="fa-solid fa-facebook"></i></div>
                            <div> <i className="fa-solid fa-facebook"></i></div>
                            <div> <i className="fa-solid fa-facebook"></i></div>
                            <div> <i className="fa-solid fa-facebook"></i></div>
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