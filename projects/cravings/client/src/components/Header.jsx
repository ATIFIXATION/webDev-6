import logo from "../assets/hero.png";

function Header() {
  return (
    <header className="bg-orange-700 flex justify-between items-center px-10 py-4">

      <img src={logo} alt="logo" className="w-20" />

      <div className="flex gap-4">
        <button className="text-white text-lg">
          Login
        </button>

        <button className="bg-white px-5 py-2 rounded">
          Register
        </button>
      </div>

    </header>
  );
}

export default Header;