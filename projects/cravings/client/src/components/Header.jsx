import logo from "../assets/logo.png";
import headerVines from "../assets/ingredients/vinnes_header.png";

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AiOutlineLogout } from "react-icons/ai";

function Header() {
  const { isLogin, logout } = useAuth();

  return (
    <header className="relative bg-[#eb7340] shadow-lg sticky top-0 z-50">
      {/* Background Vines */}
      <img
        src={headerVines}
        alt="Header Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Cravings Logo" className="w-14" />

          <div>
            <h1 className="text-2xl font-bold text-black">Cravings</h1>
            <p className="text-xs text-black/80">Delicious Delivered</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-orange-900/80 backdrop-blur-xl rounded-3xl px-2 py-2 border border-white/10 shadow-xl">
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
            <Link
              to="/register"
              className="bg-white text-[#C95F31] px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
            >
              Register
            </Link>
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
                className="text-white text-2xl hover:text-red-300 transition"
                title="Logout"
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