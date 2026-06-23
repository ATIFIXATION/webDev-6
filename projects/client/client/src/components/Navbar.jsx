import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[var(--secondary)] text-[var(--primary-text)] px-8 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">
    
      </h1>

      <div className="flex gap-8 text-lg">
        <Link
          to="/"
          className="hover:text-[var(--accent)] transition duration-300"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="hover:text-[var(--accent)] transition duration-300"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="hover:text-[var(--accent)] transition duration-300"
        >
          Register
        </Link>

        <Link
          to="/contact"
          className="hover:text-[var(--accent)] transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;