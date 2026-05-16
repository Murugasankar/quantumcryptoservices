import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Services() {

  const navigate = useNavigate();

  const isInCart = (service: string) => {

    const cart = JSON.parse(
      localStorage.getItem("qcsCart") || "[]"
    );

    return cart.includes(service);

  };

  const toggleCart = (service: string) => {

    let cart = JSON.parse(
      localStorage.getItem("qcsCart") || "[]"
    );

    if (cart.includes(service)) {

      cart = cart.filter(
        (item: string) => item !== service
      );

    } else {

      cart.push(service);

    }

    localStorage.setItem(
      "qcsCart",
      JSON.stringify(cart)
    );

    window.location.reload();

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-[#111827] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Services Section */}
      <section className="px-6 md:px-10 py-20">

        <h1 className="text-5xl font-bold text-center mb-16">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {/* SSL */}
          <div className="bg-[#0b1120] border border-cyan-900/30 rounded-3xl p-8 hover:scale-105 transition duration-300">

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              SSL Security
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Enterprise-grade SSL certificates,
              HTTPS encryption and cybersecurity protection.
            </p>

            <p className="text-3xl font-bold text-white mt-6">
              ₹4,999/year
            </p>

            <button
              onClick={() => toggleCart("SSL Security")}
              className={`mt-8 w-full px-5 py-3 rounded-2xl font-semibold transition duration-300 cursor-pointer ${
                isInCart("SSL Security")
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-cyan-500 hover:bg-cyan-600 text-black"
              }`}
            >

              {isInCart("SSL Security")
                ? "Remove From Cart"
                : "Add To Cart"}

            </button>

          </div>

          {/* Hosting */}
          <div className="bg-[#0b1120] border border-purple-900/30 rounded-3xl p-8 hover:scale-105 transition duration-300">

            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Web Hosting
            </h2>

            <p className="text-gray-400 leading-relaxed">
              High-speed hosting with SSD storage,
              uptime guarantee and cloud infrastructure.
            </p>

            <p className="text-3xl font-bold text-white mt-6">
              ₹9,999/year
            </p>

            <button
              onClick={() => toggleCart("Web Hosting")}
              className={`mt-8 w-full px-5 py-3 rounded-2xl font-semibold transition duration-300 cursor-pointer ${
                isInCart("Web Hosting")
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-purple-500 hover:bg-purple-600 text-white"
              }`}
            >

              {isInCart("Web Hosting")
                ? "Remove From Cart"
                : "Add To Cart"}

            </button>

          </div>

          {/* AI */}
          <div className="bg-[#0b1120] border border-cyan-900/30 rounded-3xl p-8 hover:scale-105 transition duration-300">

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              AI Protection
            </h2>

            <p className="text-gray-400 leading-relaxed">
              AI-powered cybersecurity monitoring
              and automated threat detection.
            </p>

            <p className="text-3xl font-bold text-white mt-6">
              ₹14,999/year
            </p>

            <button
              onClick={() => toggleCart("AI Protection")}
              className={`mt-8 w-full px-5 py-3 rounded-2xl font-semibold transition duration-300 cursor-pointer ${
                isInCart("AI Protection")
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-cyan-500 hover:bg-cyan-600 text-black"
              }`}
            >

              {isInCart("AI Protection")
                ? "Remove From Cart"
                : "Add To Cart"}

            </button>

          </div>

        </div>

        {/* CHECKOUT BUTTON */}
        <div className="flex justify-center mt-16">

          <button
            onClick={() => navigate("/checkout")}
            className="bg-cyan-500 hover:bg-cyan-600 text-black px-10 py-4 rounded-2xl font-bold text-lg transition duration-300 cursor-pointer"
          >

            Proceed To Checkout

          </button>

        </div>

      </section>

    </div>

  );
}

export default Services;