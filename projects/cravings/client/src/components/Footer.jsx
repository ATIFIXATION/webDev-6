import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-[#8B4A28] text-white mt-20">
      <div className="max-w-7xl mx-auto px-10 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo" className="w-14" />
            <div>
              <h2 className="text-2xl font-bold">Cravings</h2>
              <p className="text-orange-100 text-sm">
                Delicious Delivered Fast
              </p>
            </div>
          </div>

          <p className="text-orange-100 text-sm leading-6">
            Bringing your favourite meals straight to your doorstep with
            freshness, speed, and quality you can trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3">
            <Link to="/" className="hover:text-orange-200">
              Home
            </Link>

            <Link to="/contact-us" className="hover:text-orange-200">
              Contact
            </Link>

            <Link to="/login" className="hover:text-orange-200">
              Login
            </Link>

            <Link to="/register" className="hover:text-orange-200">
              Register
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

          <p className="text-orange-100 mb-2">
            📧 support@cravings.com
          </p>

          <p className="text-orange-100 mb-2">
            📞 +91 98765 43210
          </p>

          <p className="text-orange-100">
            📍 Bhopal, Madhya Pradesh
          </p>
        </div>

      </div>

      <div className="border-t border-orange-300/30 py-5 text-center text-sm text-orange-100">
        © {new Date().getFullYear()} Cravings. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;