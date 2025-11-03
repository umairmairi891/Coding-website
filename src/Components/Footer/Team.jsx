import React from "react";

function Team() {

    return (
        <div className="dark:bg-black dark:text-white">
                    <div className="py-5 mx-3 md:mx-10 ">
            <div>
                <div className="w-full p-5 dark:border-1" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]"><i className="fa fa-users "></i> Meet Our Team</h2>

                    <p class="font-serif text-lg mt-3"> At CodeCompanion.com, we are more then just developers and content
                        creators. We are a community of educators, learners and coding enthusiasts dedicated to building a centralized platform for all programming languages. Our goal is simple: make programming easy,
                        accessible and enjoyable for everyone around the world</p>
                </div>



                <div className="w-full p-5 mt-4 dark:border-1" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]"><i className="fa fa-desktop mr-3"></i>Who We Are</h2>

                    <ol class=" mt-4 font-serif text-lg">
                        <li><span><span className="me-2">✅</span> Developers:</span> crafting responsive and
                            user-friendly web experience</li>
                        <li><span><span className="me-2">✅</span> Writers</span> simplifying complex syntax and
                            concepts</li>
                        <li><span> <span className="me-2">✅</span>Educators</span> who love to tech and share
                            knowledge</li>
                        <li><span> <span className="me-2">✅</span>Contributors</span> from different parts of the
                            world, working remotely and
                            collaboratievely</li>
                        <li><span> <span className="me-2">✅</span>Students and Interns</span> passionate about
                            laerning and growing</li>
                    </ol>
                </div>

                <div className="w-full p-5 mt-4 dark:border-1" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]"><i className="fa fa-star mr-3"></i>Our Mission</h2>

                    <p class=" mt-4 font-serif text-lg ">To empower learners, developers and educators by providing
                        well structured, language specific resource al in one place. We believe that knowledge should
                        be free, and our team works tirelessly to make coding more approachable for everyone, regardless of background or experience.</p>
                </div>


                <div className="w-full p-3 md:p-5 mt-4 dark:border-1" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]">⚙   Our Roles</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 py-5 h-auto">
                        <div className=" sm:col-span-4 bg-teal-950 h-auto text-center text-white rounded ">
                            <img className=" w-full  rounded text-center " src="/Images/Gemini_Generated_Image_jtostqjtostqjtos.png" alt="" />
                            <h2 className="text-2xl font-bold text-center mt-3 font-[Popins]">Edward</h2>
                            <p className="font-serif text-lg mt-2">Frontend Developer</p>
                            <p className="font-serif text-lg">Expertise:HTML,CSS,JavaScript</p>
                        </div>
                        <div className=" sm:col-span-4 bg-teal-950 text-center  text-white rounded ">
                            <img className=" w-full  rounded text-center " src="/Images/Gemini_Generated_Image_jtostqjtostqjtos.png" alt="" />
                            <h2 className="text-2xl font-bold text-center mt-3 font-[Popins]">Fatima Rehman</h2>
                            <p className="font-serif text-lg mt-2">Content lead </p>
                            <p className="font-serif text-lg">Expertise :Python, Java , C++</p>
                        </div>
                        <div className=" sm:col-span-4 bg-teal-950 text-center max-h-[600px] text-white rounded ">
                            <img className=" w-full  rounded text-center " src="/Images/Gemini_Generated_Image_jtostqjtostqjtos.png" alt="" />
                            <h2 className="text-2xl font-bold text-center mt-3 font-[Popins]">Jack Will</h2>
                            <p className="font-serif text-lg mt-3">UI/UX Designer</p>
                            <p className="font-serif text-lg ">Expertise : Web Design, figma</p>
                        </div>
                    </div>

                </div>


                <div className="w-full p-5 mt-4 dark:border-1" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]"><i className="fa fa-handshake mr-3"></i>A Collaborative Effort</h2>

                    <p class="font-serif text-lg mt-3">Weather we are writing syntax examples, building interface components, or
                        answering
                        community questions, we work as a tight-knit team focused on helping others learn. We learn
                        from
                        each other and from you, our visitors</p>
                </div>

            </div>
        </div>
        </div>

    )
}

export default Team;