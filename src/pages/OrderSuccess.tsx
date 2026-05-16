import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function OrderSuccess() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050816] to-[#0f172a] text-white">

      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-6xl font-bold text-cyan-400 mb-8">

          Order Successful 🎉

        </h1>

        <p className="text-gray-300 text-2xl max-w-2xl">

          Thank you for choosing Quantum Crypto Services.
          Your order has been placed successfully.

        </p>

        <Link
          to="/"
          className="mt-12 bg-cyan-500 hover:bg-cyan-600 text-black px-10 py-4 rounded-2xl font-bold text-lg transition"
        >

          Back To Home

        </Link>

      </section>

    </div>

  );
}

export default OrderSuccess;