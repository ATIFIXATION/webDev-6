import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#C95F31] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-14" />
          <div>
            <h1 className="text-white text-2xl font-bold tracking-wide">
              Cravings
            </h1>
            <p className="text-orange-100 text-xs">
              Delicious Delivered
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-3 py-2">
          <Link
            to="/"
            className="text-white px-5 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Home
          </Link>

          <Link
            to="/contact-us"
            className="text-white px-5 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="text-white px-5 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Login
          </Link>
        </nav>

        {/* Register Button */}
        <Link
          to="/register"
          className="bg-white text-[#C95F31] font-semibold px-6 py-3 rounded-full hover:scale-105 hover:bg-orange-100 transition-all duration-300"
        >
          Register
        </Link>

      </div>
    </header>
  );
}

export default Header;