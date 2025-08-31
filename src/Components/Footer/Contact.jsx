import React from "react";

function ContactUs(){
      
    return(
        <>
        <div className="flex justify-center items-center h-[100vh] md:h-[80vh] flex-row" >
            <div className="bg-gray-500 p-7 rounded max-w-[300px] md:max-w-[600px] " style={{boxShadow:"0 4px 6px rgba()0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.08)"}} >
                    <h2 className="text-center text-2xl font-bold">Get in Touch</h2>
                    <div className="flex flex-col md:flex-row">
                <div className="text-xl">
                    <h3 className="mt-4 font-semibold">Email Support</h3>
                    <p className="font-thin text-white">CodeCompanion@gmail.com</p>

                    <h3 className="mt-2 font-semibold">Email</h3>
                    <p className="font-thin text-white">umairmairi891@gmail.com</p>
                    <h3 className="font-semibold mt-2">Mobile Number:</h3>
                    <p className="font-thin text-white"> 03205803396</p>
                </div>


                <div className="text-xl mt-4 w-[250px] md:w-[500px] bg-white ml-0 md:ml-2 rounded text-center py-2">
                    <h2 className="text-2xl font-[Roboto] text-center">Contact Form</h2>
                    <form action="" className="flex flex-col mt-4 px-5">
                        <label htmlFor="" className="text-xl font-thin font-[Popins] text-start">Your Name</label>
                        <input type="text"  className="border border-black rounded mt-1"/>
                        <label htmlFor="" className="text-xl font-thin font-[Popins] text-start">Your Email Address</label>
                        <input type="email" className="border border-black rounded mt-1" />
                        <label htmlFor="" className="text-xl font-thin font-[Popins] text-start">Subject</label>
                        <input type="text" className="border border-black rounded mt-1"  />
                        <label htmlFor="" className="text-xl font-thin font-[Popins] text-start">Your Message</label>
                        <textarea name="" id="" className="border border-black rounded mt-1 mb-2"></textarea>
                    </form>
                    <button className="bg-blue-800 px-5 py-1 font-[Popins] text-white cursor-pointer  rounded hover:bg-blue-950">Submit</button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}


export default ContactUs;

