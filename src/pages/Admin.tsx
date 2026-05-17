import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import {
  collection,
  getDocs,
  orderBy,
  query
} from "firebase/firestore";

import { db } from "../firebase";

function Admin() {

  const [orders, setOrders] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const q = query(
          collection(db, "orders"),
          orderBy("createdAt", "desc")
        );

        const querySnapshot = await getDocs(q);

        const fetchedOrders: any[] = [];

        querySnapshot.forEach((doc) => {

          fetchedOrders.push({
            id: doc.id,
            ...doc.data()
          });

        });

        setOrders(fetchedOrders);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchOrders();

  }, []);

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050816] to-[#0f172a] text-white">

      <Navbar />

      <section className="px-6 md:px-12 py-16">

        <h1 className="text-5xl font-bold text-cyan-400 mb-12">

          Admin Dashboard

        </h1>

        {loading ? (

          <p className="text-gray-400">

            Loading orders...

          </p>

        ) : orders.length === 0 ? (

          <p className="text-gray-400">

            No orders found.

          </p>

        ) : (

          <div className="grid gap-8">

            {orders.map((order) => (

              <div
                key={order.id}
                className="bg-[#081028] border border-cyan-900/20 rounded-3xl p-8"
              >

                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">

                  <div>

                    <h2 className="text-2xl font-bold text-cyan-400">

                      {order.customerName}

                    </h2>

                    <p className="text-gray-400 mt-2">

                      {order.email}

                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-3xl font-extrabold text-green-400">

                      ₹{order.totalAmount}

                    </p>

                    <p className="text-sm text-gray-400 mt-2">

                      {order.paymentStatus}

                    </p>

                  </div>

                </div>

                <div className="space-y-3">

                  <h3 className="text-lg font-bold text-white">

                    Ordered Services

                  </h3>

                  {order.items?.map(
                    (item: string, index: number) => (

                      <div
                        key={index}
                        className="bg-[#111827] rounded-xl p-4"
                      >

                        {item}

                      </div>

                    )
                  )}

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>

  );
}

export default Admin;