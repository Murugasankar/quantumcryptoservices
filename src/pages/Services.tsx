import Navbar from "../components/Navbar";

function Services() {
  return (
<div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-[#111827] text-white">
      {/* Navbar */}
     <Navbar />

      {/* Services Section */}
      <section className="px-10 py-20">

        <h1 className="text-5xl font-bold text-center mb-16">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {/* SSL */}
          <div className="bg-[#0b1120] border border-cyan-900/30 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              SSL Security
            </h2>

            <p className="text-gray-400">
              Enterprise-grade SSL certificates,
              HTTPS encryption and cybersecurity protection.
            </p>

          </div>

          {/* Hosting */}
          <div className="bg-[#0b1120] border border-purple-900/30 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Web Hosting
            </h2>

            <p className="text-gray-400">
              High-speed hosting with SSD storage,
              uptime guarantee and cloud infrastructure.
            </p>

          </div>

          {/* AI */}
          <div className="bg-[#0b1120] border border-cyan-900/30 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              AI Protection
            </h2>

            <p className="text-gray-400">
              AI-powered cybersecurity monitoring
              and automated threat detection.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Services;