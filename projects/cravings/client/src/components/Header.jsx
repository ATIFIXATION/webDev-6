import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-orange-700 flex justify-between items-center px-10 py-4">

      <Link to="/">
        <img src={logo} alt="logo" className="w-20" />
      </Link>

      <div className="flex gap-4">

        <Link
          to="/login"
          className="text-white text-lg"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-white px-5 py-2 rounded"
        >
          Register
        </Link>

      </div>

    </header>
  );
}

export default Header;