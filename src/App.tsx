function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-cyan-400">
          QuantumCrypto
        </h1>

        <div className="flex gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-6xl font-bold max-w-4xl leading-tight">
          Secure Hosting & Cybersecurity Solutions
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl text-lg">
          Enterprise-grade hosting, SSL protection,
          AI-powered security and cloud infrastructure
          for modern businesses.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold">
            Get Started
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-xl">
            View Services
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">

        <div className="bg-[#0b1120] p-8 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-3">
            SSL Security
          </h2>

          <p className="text-gray-400">
            Advanced SSL certificates and encryption
            for maximum trust and protection.
          </p>
        </div>

        <div className="bg-[#0b1120] p-8 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-3">
            Cloud Hosting
          </h2>

          <p className="text-gray-400">
            High performance cloud servers with
            99.9% uptime guarantee.
          </p>
        </div>

        <div className="bg-[#0b1120] p-8 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-3">
            AI Protection
          </h2>

          <p className="text-gray-400">
            AI-powered threat detection and
            cybersecurity automation.
          </p>
        </div>

      </section>
    </div>
  );
}

export default App;