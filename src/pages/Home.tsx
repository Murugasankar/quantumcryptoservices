import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050816] to-[#0f172a] text-white">

      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-28">

  {/* Animated Background */}
  <ParticlesBackground />

  {/* Content */}
  
  <div className="relative z-10 flex flex-col items-center">



        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl">

          Securing Today.

          <br />

          <span className="text-cyan-400">
            Preparing for Tomorrow.
          </span>

        </h1>

        <p className="mt-10 max-w-3xl text-xl text-gray-300 leading-relaxed">

          Quantum Crypto Services delivers trusted SSL
          security solutions while helping organizations
          prepare for the future of post-quantum cryptography.

        </p>

        <div className="flex flex-wrap gap-6 mt-12 justify-center">

          <button className="bg-cyan-500 hover:bg-cyan-600 text-black px-10 py-4 rounded-2xl font-bold text-lg transition">

            Get Started

          </button>

          <a href="/services">

            <button className="border-2 border-cyan-400 hover:bg-cyan-400/10 px-10 py-4 rounded-2xl font-bold text-lg transition">

              Explore Services

            </button>

          </a>

        </div>
        </div>

      </section>

      {/* WHAT WE DO */}
      <section className="px-6 md:px-20 py-24">

        <h2 className="text-5xl font-bold text-cyan-400 text-center">
          What We Do
        </h2>

        <p className="max-w-4xl mx-auto text-center text-gray-300 text-2xl mt-10 leading-loose">

          Enterprise-grade trust infrastructure designed
          for modern digital security and the coming
          post-quantum transition.

        </p>

      </section>

      {/* SERVICES */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-20 pb-24">

        {/* SSL */}
        <div className="bg-[#081028] border border-cyan-900/30 rounded-3xl p-10">

          <h3 className="text-3xl font-bold text-cyan-400 mb-8">
            SSL Certificates
          </h3>

          <p className="text-gray-300 text-lg leading-loose">

            Secure websites, APIs and digital services using
            trusted encryption and globally recognized SSL certificates.

          </p>

        </div>

        {/* Quantum */}
        <div className="bg-[#081028] border border-cyan-900/30 rounded-3xl p-10">

          <h3 className="text-3xl font-bold text-cyan-400 mb-8">
            Quantum Readiness
          </h3>

          <p className="text-gray-300 text-lg leading-loose">

            Understand how quantum computing may impact
            cryptographic systems and enterprise security.

          </p>

        </div>

        {/* AI */}
        <div className="bg-[#081028] border border-cyan-900/30 rounded-3xl p-10">

          <h3 className="text-3xl font-bold text-cyan-400 mb-8">
            AI Protection
          </h3>

          <p className="text-gray-300 text-lg leading-loose">

            AI-powered monitoring, cyber threat analysis
            and enterprise-grade infrastructure protection.

          </p>

        </div>

      </section>

      {/* QUANTUM TRANSITION */}
      <section className="px-6 md:px-20 py-24">

        <h2 className="text-5xl font-bold text-cyan-400 text-center">
          The Quantum Transition
        </h2>

        <div className="bg-[#081028] border border-cyan-900/30 rounded-3xl p-10 mt-16 max-w-5xl mx-auto">

          <p className="text-gray-300 text-xl leading-loose">

            Quantum computers may eventually challenge
            current cryptographic standards used across the internet today.

          </p>

          <ul className="mt-10 space-y-6 text-gray-300 text-xl list-disc pl-8">

            <li>
              Governments and enterprises are preparing for post-quantum migration.
            </li>

            <li>
              NIST has introduced emerging post-quantum cryptography standards.
            </li>

            <li>
              Hybrid cryptography and quantum-safe TLS are becoming critical.
            </li>

          </ul>

        </div>

      </section>

      {/* SSL CHECKER */}
      <section className="px-6 md:px-20 py-24">

        <h2 className="text-5xl font-bold text-cyan-400 text-center">
          SSL Certificate Checker
        </h2>

        <p className="text-center text-gray-300 text-2xl mt-8">

          Analyze SSL certificate configuration
          and security posture for any public domain.

        </p>

        <div className="bg-[#081028] border border-cyan-900/30 rounded-3xl p-10 mt-16 max-w-3xl mx-auto">

          <input
            type="text"
            placeholder="Enter domain name"
            className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-6 py-5 text-xl outline-none"
          />

          <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-black px-10 py-4 rounded-2xl font-bold text-lg">

            Check SSL

          </button>

        </div>

      </section>

      {/* OUR VISION */}
      <section className="px-6 md:px-20 py-24">

        <h2 className="text-5xl font-bold text-cyan-400 text-center">
          Our Vision
        </h2>

        <p className="max-w-5xl mx-auto text-center text-gray-300 text-2xl mt-12 leading-loose">

          Quantum Crypto Services was founded with a single mission:
          helping organizations secure their infrastructure not just
          for today’s threats — but for tomorrow’s cryptographic challenges.

        </p>

      </section>

      {/* FEATURE CARDS */}
      <section className="grid md:grid-cols-3 gap-10 px-6 md:px-20 pb-24">

        <div className="bg-[#081028] border border-cyan-900/30 rounded-3xl p-10">

          <h3 className="text-3xl font-bold text-cyan-400 mb-8">
            Modern Trust
          </h3>

          <p className="text-gray-300 text-lg leading-loose">

            Delivering industry-standard SSL and digital trust
            solutions for businesses worldwide.

          </p>

        </div>

        <div className="bg-[#081028] border border-cyan-900/30 rounded-3xl p-10">

          <h3 className="text-3xl font-bold text-cyan-400 mb-8">
            Future Focused
          </h3>

          <p className="text-gray-300 text-lg leading-loose">

            Building awareness and readiness around
            the transition toward post-quantum cryptography.

          </p>

        </div>

        <div className="bg-[#081028] border border-cyan-900/30 rounded-3xl p-10">

          <h3 className="text-3xl font-bold text-cyan-400 mb-8">
            Security First
          </h3>

          <p className="text-gray-300 text-lg leading-loose">

            Combining enterprise-grade reliability with
            forward-thinking cryptographic innovation.

          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-900/20 text-center py-10 text-gray-400">

        © 2026 Quantum Crypto Services

      </footer>

    </div>
  );
}

export default Home;