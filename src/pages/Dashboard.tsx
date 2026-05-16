import Navbar from "../components/Navbar";

function Dashboard() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050816] to-[#0f172a] text-white">

      <Navbar />

      <div className="flex">

        {/* SIDEBAR */}
        <aside className="hidden md:flex flex-col w-64 min-h-screen border-r border-cyan-900/20 bg-[#081028] p-6">

          <h2 className="text-2xl font-bold text-cyan-400 mb-10">

            Dashboard

          </h2>

          <nav className="flex flex-col gap-5 text-gray-300">

            <button className="text-left hover:text-cyan-400 transition">
              Overview
            </button>

            <button className="text-left hover:text-cyan-400 transition">
              SSL Certificates
            </button>

            <button className="text-left hover:text-cyan-400 transition">
              Hosting
            </button>

            <button className="text-left hover:text-cyan-400 transition">
              Billing
            </button>

            <button className="text-left hover:text-cyan-400 transition">
              Support
            </button>

          </nav>

        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 md:p-10">

          <h1 className="text-4xl font-bold text-cyan-400 mb-10">

            Welcome Back 👋

          </h1>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-[#081028] border border-cyan-900/20 rounded-3xl p-8">

              <h3 className="text-gray-400 mb-4">
                Active SSL
              </h3>

              <p className="text-4xl font-bold text-cyan-400">
                12
              </p>

            </div>

            <div className="bg-[#081028] border border-cyan-900/20 rounded-3xl p-8">

              <h3 className="text-gray-400 mb-4">
                Hosting Plans
              </h3>

              <p className="text-4xl font-bold text-cyan-400">
                4
              </p>

            </div>

            <div className="bg-[#081028] border border-cyan-900/20 rounded-3xl p-8">

              <h3 className="text-gray-400 mb-4">
                Open Tickets
              </h3>

              <p className="text-4xl font-bold text-cyan-400">
                2
              </p>

            </div>

          </div>

          {/* SERVICES TABLE */}
          <div className="mt-12 bg-[#081028] border border-cyan-900/20 rounded-3xl p-8 overflow-x-auto">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">

              Recent Services

            </h2>

            <table className="w-full text-left">

              <thead>

                <tr className="border-b border-cyan-900/20 text-gray-400">

                  <th className="pb-4">Service</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Expiry</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-cyan-900/10">

                  <td className="py-4">
                    SSL Certificate
                  </td>

                  <td className="py-4 text-green-400">
                    Active
                  </td>

                  <td className="py-4">
                    Dec 2026
                  </td>

                </tr>

                <tr>

                  <td className="py-4">
                    Cloud Hosting
                  </td>

                  <td className="py-4 text-green-400">
                    Running
                  </td>

                  <td className="py-4">
                    Lifetime
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </main>

      </div>

    </div>

  );
}

export default Dashboard;