import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/qcs logo.png.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#050816]/80 border-b border-cyan-900/20">

      <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-10 py-4">

        {/* LEFT LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 sm:gap-4 group min-w-0"
        >

          <img
            src={logo}
            alt="QCS Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain transition duration-500 group-hover:scale-110 flex-shrink-0"
          />

          <div className="min-w-0">

            {/* QCS Animated */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-wide flex">

              <span className="animate-q">
                Q
              </span>

              <span className="animate-c">
                C
              </span>

              <span className="animate-s">
                S
              </span>

            </h1>

            <p className="text-[10px] sm:text-xs text-gray-400 leading-tight truncate">

              Quantum Crypto Services

            </p>

          </div>

        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-semibold">

          {/* Main Navigation */}
          <div className="flex items-center gap-8">

            <Link
              to="/"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="hover:text-cyan-400 transition duration-300"
            >
              Services
            </Link>

            <Link
              to="/pricing"
              className="hover:text-cyan-400 transition duration-300"
            >
              Pricing
            </Link>

            <Link
              to="/contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </Link>

          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4 ml-4">

            <Link
              to="/login"
              className="hover:text-cyan-400 transition duration-300"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-5 py-2 rounded-xl transition duration-300 font-bold"
            >
              Register
            </Link>

          </div>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1 ml-3"
        >

          <span
            className={`w-6 h-0.5 bg-cyan-400 transition duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>

          <span
            className={`w-6 h-0.5 bg-cyan-400 transition duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`w-6 h-0.5 bg-cyan-400 transition duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>

        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="flex flex-col px-6 py-6 gap-5 bg-[#050816]/95 border-t border-cyan-900/20 text-base font-medium">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Services
          </Link>

          <Link
            to="/pricing"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Pricing
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Contact
          </Link>

          <div className="border-t border-cyan-900/20 pt-5 flex flex-col gap-4">

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-5 py-3 rounded-xl transition duration-300 font-bold text-center"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;