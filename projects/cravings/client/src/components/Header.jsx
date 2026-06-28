import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#C95F31] flex justify-between items-center px-10 py-4">

      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="logo" className="w-20" />
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-6">

        <Link
          to="/"
          className="text-white text-lg hover:text-orange-200 transition"
        >
          Home
        </Link>

        <Link
          to="/contact-us"
          className="text-white text-lg hover:text-orange-200 transition"
        >
          Contact
        </Link>

        <Link
          to="/login"
          className="text-white text-lg hover:text-orange-200 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Register
        </Link>

      </nav>

    </header>
  );
}

export default Header;