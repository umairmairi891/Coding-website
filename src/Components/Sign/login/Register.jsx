import React from "react";

function Register({ onSwitchToLogin }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      {/* Card Container */}
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/60 border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            Create Account
          </h2>
          <p className="text-gray-500 mt-2">Join us today! It only takes a minute.</p>
        </div>

        {/* Form */}
        <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">
              Full Name
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all duration-200 placeholder:text-gray-400"
              type="text"
              placeholder="John Doe"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">
              Email Address
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all duration-200 placeholder:text-gray-400"
              type="email"
              placeholder="name@company.com"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">
              Password
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all duration-200 placeholder:text-gray-400"
              type="password"
              placeholder="Create a password"
            />
          </div>

          {/* Register Button */}
          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 mt-2">
            Register
          </button>

          {/* Footer Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <button 
              type="button" 
              onClick={onSwitchToLogin}
              className="text-blue-600 font-bold hover:underline cursor-pointer"
            >
              Sign In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;