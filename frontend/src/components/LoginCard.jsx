import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginCard() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-green-100 px-4">
      {/* Card */}
      <div className="w-[420px] bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-3xl p-8 hover:shadow-green-200 transition-all duration-300">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-green-800 mb-8">
          Welcome Back
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="border p-3.5 rounded-xl bg-gray-50 outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="border p-3.5 rounded-xl bg-gray-50 outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl mt-2 transition transform hover:-translate-y-1 active:scale-95 shadow-md hover:shadow-xl"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-8 text-sm">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-green-600 font-bold hover:underline hover:text-green-700 transition"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
