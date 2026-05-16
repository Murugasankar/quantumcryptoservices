import { Link } from "react-router-dom";
import logo from "../assets/qcs logo.png.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-cyan-900/30 bg-[#050816] sticky top-0 z-50">

      {/* Left Logo */}
      <Link to="/" className="flex items-center gap-4">

        <img
          src={logo}
          alt="QCS Logo"
          className="w-16 h-16 object-contain"
        />

        <div>

          <h1 className="text-2xl font-bold text-cyan-400">
            QCS
          </h1>

          <p className="text-xs text-gray-400">
            Quantum Crypto Services
          </p>

        </div>

      </Link>

      {/* Right Menu */}
      <div className="flex gap-8 text-sm font-medium">

        <Link
          to="/"
          className="hover:text-cyan-400 transition"
        >
          Home
        </Link>

        <Link
          to="/services"
          className="hover:text-cyan-400 transition"
        >
          Services
        </Link>

        <Link
          to="#"
          className="hover:text-cyan-400 transition"
        >
          Pricing
        </Link>

        <Link
          to="#"
          className="hover:text-cyan-400 transition"
        >
          Contact
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;