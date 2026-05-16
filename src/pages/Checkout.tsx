import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Checkout() {

  const navigate = useNavigate();

  const paymentRef = useRef<HTMLDivElement>(null);

  const [showPayment, setShowPayment] = useState(false);

  const cartItems: string[] = JSON.parse(
    localStorage.getItem("qcsCart") || "[]"
  );

  const servicePrices: any = {
    "SSL Security": 4999,
    "Web Hosting": 9999,
    "AI Protection": 14999,
  };

  const groupedItems = cartItems.reduce(
    (acc: any, item: string) => {

      acc[item] = (acc[item] || 0) + 1;

      return acc;

    },
    {}
  );

  const total = Object.entries(groupedItems).reduce(
    (sum: number, [item, qty]: any) => {

      return sum + servicePrices[item] * qty;

    },
    0
  );

  const handleProceedPayment = () => {

    setShowPayment(true);

    setTimeout(() => {

      paymentRef.current?.scrollIntoView({
        behavior: "smooth",
      });

    }, 100);

  };

  const handleCompletePayment = () => {

    localStorage.removeItem("qcsCart");

    navigate("/order-success");

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050816] to-[#0f172a] text-white">

      <Navbar />

<section className="max-w-5xl mx-auto px-6 py-10">
<h1 className="text-5xl font-bold text-cyan-400 mb-10">
          Checkout

        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* BILLING DETAILS */}
          <div className="bg-[#081028] border border-cyan-900/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-8">

              Billing Details

            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
              />

              <textarea
                placeholder="Billing Address"
                rows={4}
                className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
              ></textarea>

             

            </div>

          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-[#081028] border border-cyan-900/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-8">

              Order Summary

            </h2>

            <div className="space-y-5">

              {Object.entries(groupedItems).map(
                ([item, qty]: any) => (

                  <div
                    key={item}
                    className="flex justify-between border-b border-cyan-900/10 pb-4"
                  >

                    <div>

                      <p className="font-semibold">

                        {item}

                      </p>

                      <div className="flex items-center gap-3 mt-2">

  <span className="text-sm text-gray-300">
    Quantity:
  </span>

  <div className="flex items-center gap-2">

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

        window.location.reload();

      }}
      className="text-red-400 hover:text-red-500 text-lg font-bold cursor-pointer transition"
    >

      -

    </button>

    {/* NUMBER */}
    <span className="text-cyan-400 font-semibold min-w-[20px] text-center">

      {qty}

    </span>

    {/* PLUS */}
    <button
      onClick={() => {

        const updatedCart = [...cartItems, item];

        localStorage.setItem(
          "qcsCart",
          JSON.stringify(updatedCart)
        );

        window.location.reload();

      }}
      className="text-cyan-400 hover:text-cyan-300 text-lg font-bold cursor-pointer transition"
    >

      +

    </button>

  </div>

</div>

                    </div>

                    <p className="font-bold text-cyan-400">

                      ₹{servicePrices[item] * qty}

                    </p>

                  </div>

                )
              )}

            </div>

            <div className="flex justify-between items-center mt-10 text-2xl font-bold">

              <span>Total</span>

              <span className="text-cyan-400">

                ₹{total}

              </span>

            </div>
            <button
  onClick={handleProceedPayment}
  className="w-full mt-10 bg-cyan-500 hover:bg-cyan-600 text-black py-4 rounded-2xl font-bold text-lg transition duration-300 cursor-pointer"
>

  Proceed To Payment

</button>

          </div>

        </div>

        {/* PAYMENT SECTION */}
        {showPayment && (

          <div
            ref={paymentRef}
            className="mt-24 bg-[#081028] border border-cyan-900/20 rounded-3xl p-10 animate-fadeIn"
          >

            <h2 className="text-4xl font-bold text-cyan-400 mb-10">

              Payment Details

            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              <div className="space-y-5">

                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
                />

                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
                />

                <div className="grid grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
                  />

                  <input
                    type="password"
                    placeholder="CVV"
                    className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
                  />

                </div>

              </div>

              <div className="flex flex-col justify-center">

                <div className="bg-[#0f172a] rounded-3xl p-8">

                  <h3 className="text-2xl font-bold mb-6">

                    Final Amount

                  </h3>

                  <p className="text-5xl font-extrabold text-cyan-400">

                    ₹{total}

                  </p>

                  <button
                    onClick={handleCompletePayment}
                    className="w-full mt-10 bg-cyan-500 hover:bg-cyan-600 text-black py-4 rounded-2xl font-bold text-lg transition cursor-pointer"
                  >

                    Complete Payment

                  </button>

                </div>

              </div>

            </div>

          </div>

        )}

      </section>

    </div>

  );
}

export default Checkout;