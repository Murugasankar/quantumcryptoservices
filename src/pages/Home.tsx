import logo from "../assets/qcs logo.png.png";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-[#111827] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-cyan-900/30">

        <div className="flex items-center gap-4">

          <img
            src={logo}
            alt="QCS Logo"
            className="w-16 h-16 object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold text-cyan-400">
              QCS
            </h1>

            <p className="text-xs text-gray-400">
              Quantum Crypto Services
            </p>
          </div>

        </div>

        <div className="flex gap-8 text-sm font-medium">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">

        <img
          src={logo}
          alt="QCS"
          className="w-40 mb-8"
        />

        <h1 className="text-6xl font-extrabold max-w-5xl leading-tight">

          Secure The Future With{" "}

          <span className="text-cyan-400">
            Quantum Crypto
          </span>

        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-400">

          Enterprise-grade hosting, cybersecurity,
          SSL protection and AI-powered infrastructure.

        </p>

        <div className="flex gap-6 mt-12">

          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl">
            Get Started
          </button>

          <a href="/services">

            <button className="border border-purple-500 px-8 py-4 rounded-2xl">
              Explore Services
            </button>

          </a>

        </div>

      </section>

    </div>
  );
}

export default Home;