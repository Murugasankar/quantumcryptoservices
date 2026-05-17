import { useEffect, useRef, useState } from "react";

import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  ShoppingCart,
  Menu,
  X
} from "lucide-react";

import { auth } from "../firebase";

import { signOut } from "firebase/auth";

function Navbar() {

  const navigate = useNavigate();

  const location = useLocation();

  const [cartOpen, setCartOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const cartRef = useRef<HTMLDivElement>(null);

  const cartItems: string[] = JSON.parse(
    localStorage.getItem("qcsCart") || "[]"
  );

  const groupedItems = cartItems.reduce(
    (acc: any, item: string) => {

      acc[item] = (acc[item] || 0) + 1;

      return acc;

    },
    {}
  );

  const userData = JSON.parse(
    localStorage.getItem("qcsUser") || "{}"
  );

  const handleLogout = async () => {

    await signOut(auth);

    localStorage.removeItem("qcsUser");

    navigate("/");

  };

  useEffect(() => {

    const handleClickOutside = (event: any) => {

      if (
        cartRef.current &&
        !cartRef.current.contains(event.target)
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

  const navLinkClass = (path: string) =>
    `transition duration-300 hover:text-cyan-400 ${
      location.pathname === path
        ? "text-cyan-400"
        : "text-white"
    }`;

  return (

    <nav className="sticky top-0 z-50 bg-[#020617]/95 backdrop-blur border-b border-cyan-900/20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <img
            src="/logo.png"
            alt="QCS"
            className="w-14 h-14 object-contain"
          />

          <div>

            <h1 className="text-3xl font-bold text-cyan-400">

              QCS

            </h1>

            <p className="text-xs text-gray-400">

              Quantum Crypto Services

            </p>

          </div>

        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className={navLinkClass("/")}
          >
            Home
          </Link>

          <Link
            to="/services"
            className={navLinkClass("/services")}
          >
            Services
          </Link>

          <Link
            to="/pricing"
            className={navLinkClass("/pricing")}
          >
            Pricing
          </Link>

          <Link
            to="/contact"
            className={navLinkClass("/contact")}
          >
            Contact
          </Link>

          {/* CART */}
          <div
            className="relative"
            ref={cartRef}
          >

            <button
              onClick={() =>
                setCartOpen(!cartOpen)
              }
              className="relative cursor-pointer"
            >

              <ShoppingCart className="text-white hover:text-cyan-400 transition" />

              {cartItems.length > 0 && (

                <span className="absolute -top-2 -right-2 bg-cyan-500 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">

                  {cartItems.length}

                </span>

              )}

            </button>

            {/* CART POPUP */}
            {cartOpen && (

              <div className="absolute right-0 mt-4 w-80 bg-[#081028] border border-cyan-900/20 rounded-2xl p-5 shadow-2xl">

                <h3 className="text-xl font-bold mb-4 text-cyan-400">

                  Cart Items

                </h3>

                {cartItems.length === 0 ? (

                  <p className="text-gray-400">
                    Your cart is empty
                  </p>

                ) : (

                  <div className="space-y-4">

                    {Object.entries(groupedItems).map(
                      ([item, qty]: any) => (

                        <div
                          key={item}
                          className="flex justify-between"
                        >

                          <span>
                            {item}
                          </span>

                          <span className="text-cyan-400">
                            x{qty}
                          </span>

                        </div>

                      )
                    )}

                    <button
                      onClick={() => {

                        setCartOpen(false);

                        navigate("/checkout");

                      }}
                      className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 text-black py-3 rounded-xl font-bold transition"
                    >

                      Checkout

                    </button>

                  </div>

                )}

              </div>

            )}

          </div>

          {/* AUTH */}
          {auth.currentUser ? (

            <div className="flex items-center gap-4">

              <span className="text-cyan-400 font-semibold">

                Hi {userData.firstName}

              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl transition"
              >

                Logout

              </button>

            </div>

          ) : (

            <div className="flex items-center gap-4">

              <Link
                to="/login"
                className="text-white hover:text-cyan-400 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-cyan-500 hover:bg-cyan-600 text-black px-5 py-2 rounded-xl font-semibold transition"
              >
                Register
              </Link>

            </div>

          )}

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="md:hidden text-white"
        >

          {menuOpen
            ? <X size={30} />
            : <Menu size={30} />}

        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden bg-[#081028] border-t border-cyan-900/20 px-6 py-6 space-y-5">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`block ${navLinkClass("/")}`}
          >
            Home
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className={`block ${navLinkClass("/services")}`}
          >
            Services
          </Link>

          <Link
            to="/pricing"
            onClick={() => setMenuOpen(false)}
            className={`block ${navLinkClass("/pricing")}`}
          >
            Pricing
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={`block ${navLinkClass("/contact")}`}
          >
            Contact
          </Link>

          <button
            onClick={() => {

              setMenuOpen(false);

              navigate("/checkout");

            }}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black py-3 rounded-xl font-bold transition"
          >

            Cart ({cartItems.length})

          </button>

          {auth.currentUser ? (

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-bold transition"
            >

              Logout

            </button>

          ) : (

            <div className="space-y-3">

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-center border border-cyan-500 py-3 rounded-xl"
              >

                Login

              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-cyan-500 text-black py-3 rounded-xl font-bold"
              >

                Register

              </Link>

            </div>

          )}

        </div>

      )}

    </nav>

  );

}

export default Navbar;