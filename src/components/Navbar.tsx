import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { ShoppingCart } from "lucide-react";

import logo from "../assets/qcs logo.png.png";
import { auth } from "../firebase";

function Navbar() {

  const navigate = useNavigate();

  const location = useLocation();

  const cartRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);

  const user = auth.currentUser;

  const storedUser = localStorage.getItem("qcsUser");

  const parsedUser = storedUser
    ? JSON.parse(storedUser)
    : null;

  const [cartItems, setCartItems] = useState<string[]>(
    JSON.parse(
      localStorage.getItem("qcsCart") || "[]"
    )
  );

  const handleLogout = async () => {

    localStorage.removeItem("qcsUser");

    await signOut(auth);

    navigate("/");

  };

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {

      if (
        cartRef.current &&
        !cartRef.current.contains(event.target as Node)
      ) {

        setCartOpen(false);

      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);

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

            <h1 className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-wide flex">

              <span className="animate-q">Q</span>

              <span className="animate-c">C</span>

              <span className="animate-s">S</span>

            </h1>

            <p className="text-[10px] sm:text-xs text-gray-400 leading-tight truncate">

              Quantum Crypto Services

            </p>

          </div>

        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-semibold">

          {/* NAVIGATION */}
          <div className="flex items-center gap-8">

            <Link
              to="/"
              className={`transition duration-300 cursor-pointer ${
                location.pathname === "/"
                  ? "text-cyan-400"
                  : "hover:text-cyan-400"
              }`}
            >
              Home
            </Link>

            <Link
              to="/services"
              className={`transition duration-300 cursor-pointer ${
                location.pathname === "/services"
                  ? "text-cyan-400"
                  : "hover:text-cyan-400"
              }`}
            >
              Services
            </Link>

            <Link
              to="/pricing"
              className={`transition duration-300 cursor-pointer ${
                location.pathname === "/pricing"
                  ? "text-cyan-400"
                  : "hover:text-cyan-400"
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/contact"
              className={`transition duration-300 cursor-pointer ${
                location.pathname === "/contact"
                  ? "text-cyan-400"
                  : "hover:text-cyan-400"
              }`}
            >
              Contact
            </Link>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6 relative">

            {/* CART */}
            <div
              ref={cartRef}
              className="relative"
            >

              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="relative cursor-pointer"
              >

                <ShoppingCart className="w-6 h-6 text-white hover:text-cyan-400 transition duration-300" />

                <span className="absolute -top-2 -right-2 bg-cyan-500 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">

                  {cartItems.length}

                </span>

              </button>

              {/* CART POPUP */}
              {cartOpen && (

                <div className="absolute top-14 right-0 w-72 bg-[#081028] border border-cyan-900/30 rounded-2xl shadow-2xl p-5 z-50">

                  {cartItems.length === 0 ? (

                    <p className="text-gray-400">

                      Your cart is empty

                    </p>

                  ) : (

                    <>

                      <div className="flex flex-col gap-3">

                        {Object.entries(

                          cartItems.reduce(
                            (acc: any, item: string) => {

                              acc[item] = (acc[item] || 0) + 1;

                              return acc;

                            },
                            {}
                          )

                        ).map(([item, quantity]: any) => (

                          <div
                            key={item}
                            className="bg-[#0f172a] px-4 py-3 rounded-xl flex items-center justify-between gap-4"
                          >

                            {/* SERVICE NAME */}
                            <p className="text-sm text-white">

                              {item}

                            </p>

                            {/* QUANTITY */}
                            <div className="flex items-center gap-4">

                              {/* MINUS */}
                              <button
                                onClick={() => {

                                  let updatedCart = [...cartItems];

                                  const index = updatedCart.indexOf(item);

                                  if (index > -1) {

                                    updatedCart.splice(index, 1);

                                  }

                                  localStorage.setItem(
                                    "qcsCart",
                                    JSON.stringify(updatedCart)
                                  );

                                  setCartItems(updatedCart);

                                }}
                                className="text-red-400 hover:text-red-500 text-xl font-bold cursor-pointer transition"
                              >

                                -

                              </button>

                              {/* COUNT */}
                              <span className="text-cyan-400 font-bold min-w-[20px] text-center">

                                {quantity}

                              </span>

                              {/* PLUS */}
                              <button
                                onClick={() => {

                                  const updatedCart = [...cartItems, item];

                                  localStorage.setItem(
                                    "qcsCart",
                                    JSON.stringify(updatedCart)
                                  );

                                  setCartItems(updatedCart);

                                }}
                                className="text-cyan-400 hover:text-cyan-300 text-xl font-bold cursor-pointer transition"
                              >

                                +

                              </button>

                            </div>

                          </div>

                        ))}

                      </div>

                      {/* CHECKOUT */}
                      <button
                        onClick={() => navigate("/checkout")}
                        className="w-full mt-5 bg-cyan-500 hover:bg-cyan-600 text-black py-3 rounded-xl font-bold transition duration-300 cursor-pointer"
                      >

                        Checkout

                      </button>

                    </>

                  )}

                </div>

              )}

            </div>

            {/* USER */}
            {user ? (

              <div className="flex items-center gap-4">

                <p className="text-cyan-400 font-semibold">

                  Hi {parsedUser?.firstName || "User"}

                </p>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition duration-300 font-semibold cursor-pointer"
                >

                  Logout

                </button>

              </div>

            ) : (

              <div className="flex items-center gap-4">

                <Link
                  to="/login"
                  className={`transition duration-300 cursor-pointer ${
                    location.pathname === "/login"
                      ? "text-cyan-400"
                      : "hover:text-cyan-400"
                  }`}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-cyan-500 hover:bg-cyan-600 text-black px-5 py-2 rounded-xl font-semibold transition duration-300 cursor-pointer"
                >
                  Register
                </Link>

              </div>

            )}

          </div>

        </div>

        {/* MOBILE MENU BUTTON */}


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
{menuOpen && (

  <div className="lg:hidden absolute top-full left-0 w-full bg-[#081028] border-t border-cyan-900/30 z-[9999] shadow-2xl">

    <div className="flex flex-col px-6 py-6 gap-5">

      {/* HOME */}
      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
        className={`text-lg font-semibold transition duration-300 ${
          location.pathname === "/"
            ? "text-cyan-400"
            : "text-white hover:text-cyan-400"
        }`}
      >

        Home

      </Link>

      {/* SERVICES */}
      <Link
        to="/services"
        onClick={() => setMenuOpen(false)}
        className={`text-lg font-semibold transition duration-300 ${
          location.pathname === "/services"
            ? "text-cyan-400"
            : "text-white hover:text-cyan-400"
        }`}
      >

        Services

      </Link>

      {/* PRICING */}
      <Link
        to="/pricing"
        onClick={() => setMenuOpen(false)}
        className={`text-lg font-semibold transition duration-300 ${
          location.pathname === "/pricing"
            ? "text-cyan-400"
            : "text-white hover:text-cyan-400"
        }`}
      >

        Pricing

      </Link>

      {/* CONTACT */}
      <Link
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className={`text-lg font-semibold transition duration-300 ${
          location.pathname === "/contact"
            ? "text-cyan-400"
            : "text-white hover:text-cyan-400"
        }`}
      >

        Contact

      </Link>

      {/* CART BUTTON */}
      <button
        onClick={() => {

          navigate("/checkout");

          setMenuOpen(false);

        }}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-black py-3 rounded-2xl font-bold transition duration-300"
      >

        Cart ({cartItems.length})

      </button>

      {/* AUTH */}
      {user ? (

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-bold transition duration-300"
        >

          Logout

        </button>

      ) : (

        <div className="flex flex-col gap-3">

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="w-full border border-cyan-500 text-center py-3 rounded-2xl font-semibold text-white"
          >

            Login

          </Link>

          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black text-center py-3 rounded-2xl font-bold transition duration-300"
          >

            Register

          </Link>

        </div>

      )}

    </div>

  </div>

)}
    </nav>

  );
}

export default Navbar;