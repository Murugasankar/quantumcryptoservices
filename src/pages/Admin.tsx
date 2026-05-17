import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  ShieldCheck,
} from "lucide-react";

import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

function Admin() {

  const [activeTab, setActiveTab] =
    useState("dashboard");

  const [orders, setOrders] = useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);
    const [sslMonitors, setSslMonitors] =
  useState<any[]>([]);

  const [search, setSearch] =
    useState("");

 useEffect(() => {
    const unsubscribeSSL = onSnapshot(

  collection(db, "ssl_monitors"),

  (snapshot) => {

    const monitors =
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    setSslMonitors(monitors);

  }

);

  const unsubscribe = onSnapshot(

    collection(db, "orders"),

    (snapshot) => {

      const fetchedOrders =
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

      setOrders(fetchedOrders);

      setLoading(false);

    },

    (error) => {

      console.error(error);

      setLoading(false);

    }

  );

return () => {

  unsubscribe();

  unsubscribeSSL();

};
}, []);


  const updateOrderStatus = async (
    id: string,
    status: string
  ) => {

    try {

      await updateDoc(
        doc(db, "orders", id),
        {
          orderStatus: status,
        }
      );

      setOrders((prev) =>
        prev.map((order) =>
          order.id === id
            ? {
                ...order,
                orderStatus: status,
              }
            : order
        )
      );

    } catch (error) {

      console.error(error);

    }

  };

  const filteredOrders = orders.filter(
    (order: any) => {

      const customer =
        order.customerName
          ?.toLowerCase() || "";

      const email =
        order.email?.toLowerCase() || "";

      return (
        customer.includes(
          search.toLowerCase()
        ) ||
        email.includes(
          search.toLowerCase()
        )
      );

    }
  );

  const totalRevenue = orders.reduce(
    (acc, order: any) =>
      acc + (order.totalAmount || 0),
    0
  );

  const completedOrders = orders.filter(
    (order: any) =>
      order.orderStatus === "Completed"
  ).length;

  const processingOrders = orders.filter(
    (order: any) =>
      order.orderStatus === "Processing"
  ).length;

  const uniqueCustomers = new Set(
    
    orders.map(
      (order: any) => order.email
    )
  ).size;
const revenueMap: any = {};

orders.forEach((order: any) => {

  const date =
    order.createdAt?.seconds
      ? new Date(
          order.createdAt.seconds * 1000
        )
      : new Date();

  const month =
    date.toLocaleString("default", {
      month: "short",
    });

  revenueMap[month] =
    (revenueMap[month] || 0) +
    (order.totalAmount || 0);

});


const revenueData = Object.keys(
  revenueMap
).map((month) => ({
  month,
  revenue: revenueMap[month],
}));
const recentActivities = orders
  .slice(0, 5)
  .map((order: any) => {

    const createdDate =
      order.createdAt?.seconds
        ? new Date(
            order.createdAt.seconds * 1000
          )
        : new Date();

    return {
      id: order.id,
      customer:
        order.customerName,
      service:
        order.items?.[0] ||
        "Security Service",
      amount:
        order.totalAmount,
      time:
        createdDate.toLocaleString(),
    };

  });
  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050816] to-[#0f172a] text-white">

      <Navbar />

      <div className="flex flex-col lg:flex-row">

        {/* SIDEBAR */}
        <aside className="w-full lg:w-72 bg-[#081028] border-r border-cyan-900/20 min-h-screen p-6">

          <h1 className="text-4xl font-bold text-cyan-400 mb-10">

            Admin Panel

          </h1>

          <div className="space-y-4">

            <button
              onClick={() =>
                setActiveTab("dashboard")
              }
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition duration-300 ${
                activeTab === "dashboard"
                  ? "bg-cyan-500 text-black"
                  : "bg-[#0f172a] hover:bg-cyan-500/10"
              }`}
            >

              <LayoutDashboard />

              Dashboard

            </button>

            <button
              onClick={() =>
                setActiveTab("orders")
              }
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition duration-300 ${
                activeTab === "orders"
                  ? "bg-cyan-500 text-black"
                  : "bg-[#0f172a] hover:bg-cyan-500/10"
              }`}
            >

              <ShoppingCart />

              Orders

            </button>

            <button
              onClick={() =>
                setActiveTab("customers")
              }
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition duration-300 ${
                activeTab === "customers"
                  ? "bg-cyan-500 text-black"
                  : "bg-[#0f172a] hover:bg-cyan-500/10"
              }`}
            >

              <Users />

              Customers

            </button>

            <button
              onClick={() =>
                setActiveTab("ssl")
              }
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition duration-300 ${
                activeTab === "ssl"
                  ? "bg-cyan-500 text-black"
                  : "bg-[#0f172a] hover:bg-cyan-500/10"
              }`}
            >

              <ShieldCheck />

              SSL Monitoring

            </button>

          </div>

        </aside>

        {/* MAIN */}
        <main className="flex-1 p-6 md:p-10">

        {/* DASHBOARD */}
{activeTab === "dashboard" && (

  <div>

    <h2 className="text-5xl font-bold text-cyan-400 mb-10">

      Dashboard

    </h2>

    {/* STATS */}
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      <div className="bg-[#081028] rounded-3xl p-8 border border-cyan-900/20">

        <p className="text-gray-400">
          Total Revenue
        </p>

        <h3 className="text-5xl font-extrabold text-cyan-400 mt-4">

          ₹{totalRevenue}

        </h3>

      </div>

      <div className="bg-[#081028] rounded-3xl p-8 border border-cyan-900/20">

        <p className="text-gray-400">
          Total Orders
        </p>

        <h3 className="text-5xl font-extrabold text-cyan-400 mt-4">

          {orders.length}

        </h3>

      </div>

      <div className="bg-[#081028] rounded-3xl p-8 border border-cyan-900/20">

        <p className="text-gray-400">
          Completed Orders
        </p>

        <h3 className="text-5xl font-extrabold text-green-400 mt-4">

          {completedOrders}

        </h3>

      </div>

      <div className="bg-[#081028] rounded-3xl p-8 border border-cyan-900/20">

        <p className="text-gray-400">
          Customers
        </p>

        <h3 className="text-5xl font-extrabold text-purple-400 mt-4">

          {uniqueCustomers}

        </h3>

      </div>

    </div>

    {/* REVENUE CHART */}
  {/* DASHBOARD GRID */}
<div className="grid xl:grid-cols-3 gap-8 mt-10">

  {/* ACTIVITY FEED */}
  <motion.div
    whileHover={{
      y: -5,
    }}
    className="xl:col-span-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-[0_0_60px_rgba(6,182,212,0.08)]"
  >

    <div className="flex items-center justify-between mb-10">

      <div>

        <p className="text-cyan-300 font-semibold">

          Live Activity

        </p>

        <h3 className="text-4xl font-bold text-white mt-3">

          System Events

        </h3>

      </div>

      <div className="flex items-center gap-3 text-green-400 font-semibold">

        <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>

        Live

      </div>

    </div>

    <div className="space-y-5">

      {recentActivities.map(
        (activity: any) => (

          <div
            key={activity.id}
            className="flex items-start gap-5 bg-[#0f172a]/70 rounded-2xl p-5"
          >

            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-2xl">

              🛒

            </div>

            <div className="flex-1">

              <h4 className="text-white font-bold text-lg">

                New Order Received

              </h4>

              <p className="text-gray-400 mt-2">

                {activity.customer}
                {" "}
                purchased
                {" "}
                {activity.service}

              </p>

              <p className="text-cyan-400 mt-2 font-semibold">

                ₹{activity.amount}

              </p>

            </div>

            <span className="text-gray-500 text-sm">

              {activity.time}

            </span>

          </div>

        )
      )}

    </div>

  </motion.div>

  {/* SYSTEM STATUS */}
  <motion.div
    whileHover={{
      y: -5,
    }}
    className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-[0_0_60px_rgba(6,182,212,0.08)]"
  >

    <p className="text-cyan-300 font-semibold">

      Infrastructure

    </p>

    <h3 className="text-4xl font-bold text-white mt-3 mb-10">

      System Status

    </h3>

    <div className="space-y-5">

      <div className="bg-[#0f172a]/70 rounded-2xl p-5 flex items-center justify-between">

        <span className="text-gray-300">

          SSL Servers

        </span>

        <span className="text-green-400 font-bold">

          Online

        </span>

      </div>

      <div className="bg-[#0f172a]/70 rounded-2xl p-5 flex items-center justify-between">

        <span className="text-gray-300">

          AI Monitoring

        </span>

        <span className="text-green-400 font-bold">

          Active

        </span>

      </div>

      <div className="bg-[#0f172a]/70 rounded-2xl p-5 flex items-center justify-between">

        <span className="text-gray-300">

          Firewall

        </span>

        <span className="text-green-400 font-bold">

          Secured

        </span>

      </div>

      <div className="bg-[#0f172a]/70 rounded-2xl p-5 flex items-center justify-between">

        <span className="text-gray-300">

          Threat Engine

        </span>

        <span className="text-green-400 font-bold">

          Running

        </span>

      </div>

    </div>

  </motion.div>

</div>
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="mt-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-[0_0_60px_rgba(6,182,212,0.08)]"
    >

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="text-cyan-300 font-semibold">

            Revenue Analytics

          </p>

          <h3 className="text-4xl font-bold text-white mt-3">

            Business Growth

          </h3>

        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/20 px-5 py-3 rounded-2xl text-cyan-300 font-semibold">

          +28.4%

        </div>

      </div>

      <div className="h-[350px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart data={revenueData}>

            <defs>

              <linearGradient
                id="colorRevenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#06b6d4"
                  stopOpacity={0.4}
                />

                <stop
                  offset="95%"
                  stopColor="#06b6d4"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#06b6d4"
              fillOpacity={1}
              fill="url(#colorRevenue)"
              strokeWidth={4}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </motion.div>

  </div>

)}

          {/* ORDERS */}
          {activeTab === "orders" && (

            <div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

                <h2 className="text-5xl font-bold text-cyan-400">

                  Orders

                </h2>

                <input
                  type="text"
                  placeholder="Search customer or email"
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  className="bg-[#081028] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none w-full md:w-80"
                />

              </div>

              {loading ? (

                <div className="text-center py-20 text-cyan-400 text-xl">

                  Loading orders...

                </div>

              ) : (

                <div className="grid gap-6">

                  {filteredOrders.map(
                    (order: any) => (

                      <div
                        key={order.id}
                        className="bg-[#081028] border border-cyan-900/20 rounded-3xl p-8"
                      >

                        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

                          <div className="space-y-4 flex-1">

                            <div>

                              <h3 className="text-3xl font-bold text-white">

                                {
                                  order.customerName
                                }

                              </h3>

                              <p className="text-gray-400 mt-2">

                                {order.email}

                              </p>

                              <p className="text-gray-400">

                                {order.phone}

                              </p>

                            </div>

                            <div className="flex flex-wrap gap-3">

                              {order.items?.map(
                                (
                                  item: string,
                                  index: number
                                ) => (

                                  <div
                                    key={index}
                                    className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-4 py-2 rounded-xl"
                                  >

                                    {item}

                                  </div>

                                )
                              )}

                            </div>

                          </div>

                          <div className="w-full lg:w-72 bg-[#0f172a] rounded-3xl p-6 space-y-5">

                            <div>

                              <p className="text-gray-400 text-sm">

                                Total Amount

                              </p>

                              <h4 className="text-5xl font-extrabold text-cyan-400 mt-3">

                                ₹
                                {
                                  order.totalAmount
                                }

                              </h4>

                            </div>

                            <div>

                              <p className="text-gray-400 text-sm mb-2">

                                Payment Status

                              </p>

                              <div className="inline-block bg-green-500/15 text-green-400 px-4 py-2 rounded-xl">

                                {
                                  order.paymentStatus
                                }

                              </div>

                            </div>

                            <div>

                              <p className="text-gray-400 text-sm mb-2">

                                Order Status

                              </p>

                              <select
                                value={
                                  order.orderStatus
                                }
                                onChange={(
                                  e
                                ) =>
                                  updateOrderStatus(
                                    order.id,
                                    e.target
                                      .value
                                  )
                                }
                                className="w-full bg-[#081028] border border-cyan-900/30 rounded-2xl px-4 py-3 outline-none"
                              >

                                <option value="Processing">

                                  Processing

                                </option>

                                <option value="Completed">

                                  Completed

                                </option>

                                <option value="Cancelled">

                                  Cancelled

                                </option>

                                <option value="Refunded">

                                  Refunded

                                </option>

                              </select>

                            </div>

                          </div>

                        </div>

                      </div>

                    )
                  )}

                </div>

              )}

            </div>

          )}

          {/* CUSTOMERS */}
          {activeTab ===
            "customers" && (

            <div>

              <h2 className="text-5xl font-bold text-cyan-400 mb-10">

                Customers

              </h2>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                {orders.map(
                  (order: any) => (

                    <div
                      key={order.id}
                      className="bg-[#081028] border border-cyan-900/20 rounded-3xl p-8"
                    >

                      <h3 className="text-2xl font-bold text-white">

                        {
                          order.customerName
                        }

                      </h3>

                      <p className="text-gray-400 mt-3 break-all">

                        {order.email}

                      </p>

                      <p className="text-gray-400 mt-2">

                        {order.phone}

                      </p>

                      <div className="mt-6 bg-[#0f172a] rounded-2xl p-5">

                        <p className="text-gray-400 text-sm">

                          Total Purchased

                        </p>

                        <h4 className="text-3xl font-bold text-cyan-400 mt-3">

                          ₹
                          {
                            order.totalAmount
                          }

                        </h4>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          )}

          {/* SSL */}
          {/* SSL */}
{activeTab === "ssl" && (

  <div>

    <div className="flex items-center justify-between mb-10">

      <div>

        <h2 className="text-5xl font-bold text-cyan-400">

          SSL Monitoring

        </h2>

        <p className="text-gray-400 mt-3">

          Real-time SSL infrastructure monitoring

        </p>

      </div>

      <div className="bg-cyan-500/10 border border-cyan-500/20 px-5 py-3 rounded-2xl text-cyan-300 font-semibold">

        {sslMonitors.length} Domains

      </div>

    </div>

    <div className="grid gap-6">

      {sslMonitors.map(
        (ssl: any) => (

          <motion.div
            key={ssl.id}
            whileHover={{
              y: -5,
            }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-[0_0_60px_rgba(6,182,212,0.08)]"
          >

            <div className="grid lg:grid-cols-5 gap-6 items-center">

              <div>

                <p className="text-gray-400">

                  Domain

                </p>

                <h3 className="text-2xl font-bold text-white mt-2">

                  {ssl.domain}

                </h3>

              </div>

              <div>

                <p className="text-gray-400">

                  SSL Grade

                </p>

                <h3 className="text-4xl font-extrabold text-cyan-400 mt-2">

                  {ssl.grade}

                </h3>

              </div>

              <div>

                <p className="text-gray-400">

                  Issuer

                </p>

                <h3 className="text-lg font-bold text-white mt-2">

                  {ssl.issuer}

                </h3>

              </div>

              <div>

                <p className="text-gray-400">

                  Expiry Date

                </p>

                <h3 className="text-lg font-bold text-white mt-2">

                  {ssl.expiryDate}

                </h3>

                <p className="text-cyan-400 mt-2">

                  {ssl.daysRemaining}
                  {" "}
                  days left

                </p>

              </div>

              <div>

                <p className="text-gray-400 mb-3">

                  Status

                </p>

                <div
                  className={`inline-block px-5 py-3 rounded-2xl font-bold ${
                    ssl.status === "Secure"
                      ? "bg-green-500/15 text-green-400"
                      : "bg-red-500/15 text-red-400"
                  }`}
                >

                  {ssl.status}

                </div>

              </div>

            </div>

          </motion.div>

        )
      )}

    </div>

  </div>

)}

        </main>

      </div>

    </div>

  );

}

export default Admin;