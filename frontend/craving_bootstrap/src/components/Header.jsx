import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger py-3">

        <div className="container">

          <Link className="navbar-brand fw-bold fs-2" to="/">
            cravings
          </Link>

          <ul className="navbar-nav ms-auto d-flex flex-row gap-3">

            <li className="nav-item">
              <Link className="btn btn-light" to="/register">
                Register
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fs-5" to="/login">
                Login
              </Link>
            </li>

          </ul>

        </div>

      </nav>
    </>
  );
}

export default Header;