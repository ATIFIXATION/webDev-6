import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-black text-white p-5 flex justify-between">
      <h1 className="text-2xl font-bold">FakeStore</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;