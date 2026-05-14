import { useState } from "react";
import { Link } from "react-router-dom";
import { postRegister } from "../services/auth.service";

export default function SignupCard() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    const userObject = {
      name:fullName,
      email,
      password
    }

    try {
      const result = await postRegister(userObject)
      alert(result.message)
      setFullName("")
      setEmail("")
      setPassword("")

    } catch (error) {
      console.log(error)
    }


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-green-100 px-4">
      {/* Card */}
      <div className="w-[420px] bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-3xl p-8 hover:shadow-green-200 transition-all duration-300">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-green-800 mb-8">
          Create Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your name"
              className="border p-3.5 rounded-xl bg-gray-50 outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
              autoComplete="new-password"
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
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-8 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-bold hover:underline hover:text-green-700 transition"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
