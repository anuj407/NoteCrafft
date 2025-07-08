import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            NoteCrafft
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {user ? (
              <>
                <span className="bg-white text-blue-600 font-medium px-3 py-1 rounded-full">
                  {user.name}
                </span>
                <button
                  onClick={logout}
                  className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-200 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:underline hover:text-gray-200 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="hover:underline hover:text-gray-200 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            {user ? (
              <>
                <span className="bg-white text-blue-600 font-medium px-3 py-1 rounded-full w-fit">
                  {user.name}
                </span>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-200 transition w-fit"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="hover:underline hover:text-gray-200 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="hover:underline hover:text-gray-200 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
