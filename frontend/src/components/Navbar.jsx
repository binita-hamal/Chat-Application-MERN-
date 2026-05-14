import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div>
        {/* Navbar */}
        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>

          <div className="flex items-center gap-6">
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About
            </Link>

            <Link to="/signUp">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
                Sign Up
              </button>
            </Link>

            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
