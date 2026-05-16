import Navbar from "../components/Navbar";

function Register() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050816] to-[#0f172a] text-white">

      <Navbar />

      <section className="flex items-center justify-center px-6 py-24">

        <div className="w-full max-w-md bg-[#081028] border border-cyan-900/30 rounded-3xl p-10">

          <h1 className="text-4xl font-bold text-cyan-400 text-center mb-10">

            Register

          </h1>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black py-4 rounded-2xl font-bold text-lg transition">

              Create Account

            </button>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Register;