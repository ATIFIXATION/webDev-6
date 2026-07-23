import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AiOutlineLogout } from "react-icons/ai";
import headerVines from "../assets/ingredients/vinnes_header.png";

function Header() {
  const { isLogin, logout } = useAuth();

  return (
  <header className="relative bg-[#eb7340]">
     <img
    src={headerVines}
    className="absolute inset-0 w-full h-full object-cover opacity-20"
/>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-14" />

          <div>
            <h1 className="text-black text-2xl font-bold">
              Cravings
            </h1>

            <p className="text-black-100 text-xs">
              Delicious Delivered
            </p>
          </div>
        </Link>

        {/* Navigation */}
       <nav className="hidden md:flex items-center gap-1 bg-orange-900/80 backdrop-blur-xl rounded-3xl px-2 py-2 border border-white/5 shadow-2xl">

          <Link
            to="/"
            className="text-white px-5 py-2 rounded-full hover:bg-white/20 transition"
          >
            Home
          </Link>

          <Link
            to="/contact"
            className="text-white px-5 py-2 rounded-full hover:bg-white/20 transition"
          >
            Contact
          </Link>

          {!isLogin && (
            <Link
              to="/login"
              className="text-white px-5 py-2 rounded-full hover:bg-white/20 transition"
            >
              Login
            </Link>
          )}

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {!isLogin ? (
            <>
              <Link
                to="/register"
                className="bg-white text-[#C95F31] px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
              >
                Register
              </Link>

              <Link
                to="/dashboard/overview"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard/overview"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="text-white text-2xl hover:text-red-300"
              >
                <AiOutlineLogout />
              </button>
            </>
          )}

        </div>

      </div>
    </header>
  );
}

export default Header;