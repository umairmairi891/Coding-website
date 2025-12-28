import React from "react";

function Login({onSwitchToSignUp}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/60 border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-gray-500 mt-2">Please enter your details to sign in</p>
        </div>

        <form className="flex flex-col space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">
              Email Address
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all duration-200 placeholder:text-gray-400"
              type="email"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1 ml-1">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <a href="#" className="text-xs text-blue-600 hover:underline">Forgot?</a>
            </div>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all duration-200 placeholder:text-gray-400"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
            Sign In
          </button>

          <p className="text-center text-gray-600 text-sm mt-4">
            Don't have an account?{" "}
            <button onClick={onSwitchToSignUp} type="button" className="text-blue-600 font-bold hover:underline">
              Create one
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;