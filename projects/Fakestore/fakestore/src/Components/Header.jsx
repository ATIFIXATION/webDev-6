import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">

      <h1 className="text-2xl font-bold">
        Fake Store
      </h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-orange-400 duration-300">
          Home
        </Link>

        <Link to="/about" className="hover:text-orange-400 duration-300">
          About
        </Link>

        <Link to="/products" className="hover:text-orange-400 duration-300">
          Products
        </Link>

        <Link to="/contact" className="hover:text-orange-400 duration-300">
          Contact
        </Link>
      </div>

    </div>
  );
};

export default Header;