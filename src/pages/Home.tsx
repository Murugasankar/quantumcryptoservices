import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import SSLChecker from "../components/SSLChecker";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050816] to-[#0f172a] text-white">

      {/* Navbar */}
      <Navbar />

      {/* HERO */}
     {/* HERO */}
<section className="relative overflow-hidden min-h-[92vh] flex items-center justify-center px-6">

  {/* PARTICLES */}
  <ParticlesBackground />

  {/* GLOW BACKGROUND */}
  <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      {/* BADGE */}
      <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 px-5 py-3 rounded-full text-cyan-300 font-medium mb-8 backdrop-blur-xl">

        <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>

        Enterprise Quantum Security Platform

      </div>

      {/* TITLE */}
      <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-tight">

        Secure Your

        <span className="block text-cyan-400">

          Digital Future

        </span>

      </h1>

      {/* DESCRIPTION */}
      <p className="mt-10 text-xl text-gray-300 leading-relaxed max-w-2xl">

        Advanced SSL security, AI-powered cyber defense,
        and post-quantum cryptography solutions built for
        modern enterprises.

      </p>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-5 mt-12">

        <button className="bg-cyan-500 hover:bg-cyan-600 text-black px-10 py-4 rounded-2xl font-bold text-lg transition duration-300 shadow-[0_0_40px_rgba(6,182,212,0.35)]">

          Protect Now

        </button>

        <a href="/services">

          <button className="border border-cyan-500/30 hover:bg-cyan-500/10 backdrop-blur-xl px-10 py-4 rounded-2xl font-bold text-lg transition duration-300">

            Explore Services

          </button>

        </a>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-16">

        <div>

          <h3 className="text-4xl font-extrabold text-cyan-400">

            10K+

          </h3>

          <p className="text-gray-400 mt-2">

            Protected Domains

          </p>

        </div>

        <div>

          <h3 className="text-4xl font-extrabold text-cyan-400">

            99.99%

          </h3>

          <p className="text-gray-400 mt-2">

            Uptime

          </p>

        </div>

        <div>

          <h3 className="text-4xl font-extrabold text-cyan-400">

            256-bit

          </h3>

          <p className="text-gray-400 mt-2">

            Encryption

          </p>

        </div>

        <div>

          <h3 className="text-4xl font-extrabold text-cyan-400">

            24/7

          </h3>

          <p className="text-gray-400 mt-2">

            AI Monitoring

          </p>

        </div>

      </div>

    </motion.div>

    {/* RIGHT SIDE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >

      {/* MAIN CARD */}
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-[0_0_80px_rgba(6,182,212,0.15)]">

        <div className="flex items-center justify-between mb-8">

          <div>

            <p className="text-gray-400">
              Security Status
            </p>

            <h3 className="text-3xl font-bold text-white mt-2">

              Quantum Protected

            </h3>

          </div>

          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl">

            🛡️

          </div>

        </div>

        <div className="space-y-5">

          <div className="bg-[#0f172a]/70 rounded-2xl p-5 flex items-center justify-between">

            <span className="text-gray-300">

              SSL Protection

            </span>

            <span className="text-green-400 font-bold">

              Active

            </span>

          </div>

          <div className="bg-[#0f172a]/70 rounded-2xl p-5 flex items-center justify-between">

            <span className="text-gray-300">

              Threat Monitoring

            </span>

            <span className="text-green-400 font-bold">

              Enabled

            </span>

          </div>

          <div className="bg-[#0f172a]/70 rounded-2xl p-5 flex items-center justify-between">

            <span className="text-gray-300">

              AI Security Engine

            </span>

            <span className="text-cyan-400 font-bold">

              Running

            </span>

          </div>

        </div>

      </div>

      {/* FLOATING CARD */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute -bottom-10 -left-10 bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 shadow-2xl"
      >

        <p className="text-gray-400 text-sm">

          SSL Grade

        </p>

        <h4 className="text-6xl font-extrabold text-cyan-400 mt-3">

          A+

        </h4>

      </motion.div>

    </motion.div>

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
<section className="px-6 md:px-20 py-28 relative overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

  {/* TITLE */}
  <div className="relative z-10 text-center">

    <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 px-5 py-3 rounded-full text-cyan-300 font-medium mb-8 backdrop-blur-xl">

      <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>

      Enterprise Cybersecurity Solutions

    </div>

    <h2 className="text-5xl md:text-6xl font-extrabold text-white">

      Advanced Security

      <span className="block text-cyan-400 mt-3">

        For Modern Infrastructure

      </span>

    </h2>

    <p className="max-w-3xl mx-auto text-gray-300 text-xl mt-10 leading-relaxed">

      Protect websites, APIs, cloud infrastructure,
      and enterprise systems using next-generation
      cybersecurity technologies.

    </p>

  </div>

  {/* CARDS */}
  <div className="relative z-10 grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

    {/* SSL */}
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 shadow-[0_0_50px_rgba(6,182,212,0.08)] hover:shadow-[0_0_70px_rgba(6,182,212,0.18)] transition duration-500"
    >

      {/* ICON */}
      <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition duration-300">

        🔐

      </div>

      {/* BADGE */}
      <div className="inline-block bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">

        SSL Security

      </div>

      <h3 className="text-3xl font-bold text-white mb-6">

        Enterprise SSL Protection

      </h3>

      <p className="text-gray-300 text-lg leading-relaxed">

        Secure websites, APIs, and enterprise
        systems using trusted SSL certificates,
        HTTPS encryption, and modern TLS protection.

      </p>

      {/* FEATURES */}
      <div className="space-y-4 mt-10">

        <div className="flex items-center gap-3">

          <span className="text-cyan-400">
            ✓
          </span>

          <span className="text-gray-300">

            256-bit Encryption

          </span>

        </div>

        <div className="flex items-center gap-3">

          <span className="text-cyan-400">
            ✓
          </span>

          <span className="text-gray-300">

            HTTPS Security

          </span>

        </div>

        <div className="flex items-center gap-3">

          <span className="text-cyan-400">
            ✓
          </span>

          <span className="text-gray-300">

            Enterprise Trust

          </span>

        </div>

      </div>

    </motion.div>

    {/* QUANTUM */}
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 shadow-[0_0_50px_rgba(6,182,212,0.08)] hover:shadow-[0_0_70px_rgba(6,182,212,0.18)] transition duration-500"
    >

      <div className="w-20 h-20 rounded-3xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition duration-300">

        ⚛️

      </div>

      <div className="inline-block bg-purple-500/10 text-purple-300 border border-purple-500/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">

        Quantum Readiness

      </div>

      <h3 className="text-3xl font-bold text-white mb-6">

        Post-Quantum Security

      </h3>

      <p className="text-gray-300 text-lg leading-relaxed">

        Prepare organizations for the future
        of cryptography with post-quantum
        readiness strategies and hybrid TLS systems.

      </p>

      <div className="space-y-4 mt-10">

        <div className="flex items-center gap-3">

          <span className="text-purple-400">
            ✓
          </span>

          <span className="text-gray-300">

            NIST Standards

          </span>

        </div>

        <div className="flex items-center gap-3">

          <span className="text-purple-400">
            ✓
          </span>

          <span className="text-gray-300">

            Hybrid Cryptography

          </span>

        </div>

        <div className="flex items-center gap-3">

          <span className="text-purple-400">
            ✓
          </span>

          <span className="text-gray-300">

            Quantum Migration

          </span>

        </div>

      </div>

    </motion.div>

    {/* AI */}
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 shadow-[0_0_50px_rgba(6,182,212,0.08)] hover:shadow-[0_0_70px_rgba(6,182,212,0.18)] transition duration-500"
    >

      <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition duration-300">

        🤖

      </div>

      <div className="inline-block bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">

        AI Protection

      </div>

      <h3 className="text-3xl font-bold text-white mb-6">

        AI Threat Monitoring

      </h3>

      <p className="text-gray-300 text-lg leading-relaxed">

        AI-powered cyber threat detection,
        anomaly monitoring, and advanced
        infrastructure protection systems.

      </p>

      <div className="space-y-4 mt-10">

        <div className="flex items-center gap-3">

          <span className="text-cyan-400">
            ✓
          </span>

          <span className="text-gray-300">

            Threat Analysis

          </span>

        </div>

        <div className="flex items-center gap-3">

          <span className="text-cyan-400">
            ✓
          </span>

          <span className="text-gray-300">

            Real-time Monitoring

          </span>

        </div>

        <div className="flex items-center gap-3">

          <span className="text-cyan-400">
            ✓
          </span>

          <span className="text-gray-300">

            AI Security Engine

          </span>

        </div>

      </div>

    </motion.div>

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
{/* REAL SSL CHECKER */}
<section className="px-6 md:px-20 py-24">

  <h2 className="text-5xl font-bold text-cyan-400 text-center">
    SSL Certificate Checker
  </h2>

  <p className="text-center text-gray-300 text-2xl mt-8 max-w-4xl mx-auto leading-relaxed">

    Analyze real-time SSL certificate configuration,
    HTTPS security posture, TLS support and certificate grade
    for any public domain.

  </p>

  <SSLChecker />

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

     {/* TESTIMONIALS */}
<section className="px-6 md:px-20 py-28 relative overflow-hidden">

  {/* GLOW */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

  <div className="relative z-10">

    {/* TITLE */}
    <div className="text-center">

      <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 px-5 py-3 rounded-full text-cyan-300 font-medium mb-8 backdrop-blur-xl">

        <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>

        Trusted Worldwide

      </div>

      <h2 className="text-5xl md:text-6xl font-extrabold text-white">

        Trusted By

        <span className="block text-cyan-400 mt-3">

          Modern Businesses

        </span>

      </h2>

      <p className="max-w-3xl mx-auto text-gray-300 text-xl mt-10 leading-relaxed">

        Organizations worldwide trust Quantum Crypto Services
        to secure digital infrastructure, SSL systems,
        and enterprise cloud environments.

      </p>

    </div>

    {/* TESTIMONIAL GRID */}
    <div className="grid lg:grid-cols-3 gap-8 mt-20">

      {/* CARD 1 */}
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 shadow-[0_0_60px_rgba(6,182,212,0.08)] hover:shadow-[0_0_80px_rgba(6,182,212,0.15)]"
      >

        <div className="flex items-center gap-4 mb-8">

          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl">

            👨‍💼

          </div>

          <div>

            <h3 className="text-xl font-bold text-white">

              Daniel Carter

            </h3>

            <p className="text-gray-400">

              CTO, SecureNet

            </p>

          </div>

        </div>

        <p className="text-gray-300 text-lg leading-relaxed">

          Quantum Crypto Services transformed our SSL
          infrastructure and significantly improved
          enterprise security visibility.

        </p>

      </motion.div>

      {/* CARD 2 */}
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 shadow-[0_0_60px_rgba(6,182,212,0.08)] hover:shadow-[0_0_80px_rgba(6,182,212,0.15)]"
      >

        <div className="flex items-center gap-4 mb-8">

          <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-2xl">

            👩‍💻

          </div>

          <div>

            <h3 className="text-xl font-bold text-white">

              Sophia Lee

            </h3>

            <p className="text-gray-400">

              Security Engineer

            </p>

          </div>

        </div>

        <p className="text-gray-300 text-lg leading-relaxed">

          Their SSL monitoring and AI-driven protection
          systems gave our infrastructure a much stronger
          security posture.

        </p>

      </motion.div>

      {/* CARD 3 */}
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 shadow-[0_0_60px_rgba(6,182,212,0.08)] hover:shadow-[0_0_80px_rgba(6,182,212,0.15)]"
      >

        <div className="flex items-center gap-4 mb-8">

          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl">

            🧑‍🚀

          </div>

          <div>

            <h3 className="text-xl font-bold text-white">

              Michael Brown

            </h3>

            <p className="text-gray-400">

              Cloud Architect

            </p>

          </div>

        </div>

        <p className="text-gray-300 text-lg leading-relaxed">

          Their post-quantum security strategy is highly
          forward-thinking and ideal for modern enterprise
          cloud environments.

        </p>

      </motion.div>

    </div>

    {/* CTA SECTION */}
    <motion.div
      whileHover={{
        scale: 1.01,
      }}
      transition={{ duration: 0.3 }}
      className="mt-24 bg-cyan-500/10 backdrop-blur-2xl border border-cyan-500/20 rounded-[40px] p-12 md:p-16 shadow-[0_0_80px_rgba(6,182,212,0.12)] text-center"
    >

      <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 px-5 py-3 rounded-full text-cyan-300 font-medium mb-8 backdrop-blur-xl">

        <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>

        Future-Ready Cybersecurity

      </div>

      <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">

        Secure Your Business

        <span className="block text-cyan-400 mt-4">

          Before Threats Evolve

        </span>

      </h2>

      <p className="max-w-3xl mx-auto text-gray-300 text-xl mt-10 leading-relaxed">

        Protect infrastructure, monitor SSL security,
        and prepare your organization for the future
        of cybersecurity and quantum-safe encryption.

      </p>

      <div className="flex flex-wrap justify-center gap-5 mt-12">

        {/* BUTTON 1 */}
        <button className="bg-cyan-500 hover:bg-cyan-600 text-black px-10 py-4 rounded-2xl font-bold text-lg transition duration-300 shadow-[0_0_40px_rgba(6,182,212,0.35)]">

          Get Started

        </button>

        {/* BUTTON 2 */}
        <button className="border border-cyan-500/30 hover:bg-cyan-500/10 backdrop-blur-xl px-10 py-4 rounded-2xl font-bold text-lg transition duration-300">

          Contact Security Team

        </button>

      </div>

    </motion.div>

  </div>

</section>

{/* PREMIUM FOOTER */}
<footer className="relative overflow-hidden border-t border-cyan-900/20 mt-10">

  {/* GLOW */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

  <div className="relative z-10 px-6 md:px-20 py-20">

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12">

      {/* BRAND */}
      <div>

        <h2 className="text-3xl font-extrabold text-cyan-400">

          Quantum Crypto Services

        </h2>

        <p className="text-gray-400 leading-relaxed mt-6">

          Advanced SSL protection, AI-powered
          cybersecurity, and quantum-safe
          infrastructure solutions for modern enterprises.

        </p>

      </div>

      {/* SERVICES */}
      <div>

        <h3 className="text-xl font-bold text-white mb-6">

          Services

        </h3>

        <div className="space-y-4 text-gray-400">

          <p>SSL Security</p>

          <p>AI Protection</p>

          <p>Threat Monitoring</p>

          <p>Cloud Security</p>

        </div>

      </div>

      {/* COMPANY */}
      <div>

        <h3 className="text-xl font-bold text-white mb-6">

          Company

        </h3>

        <div className="space-y-4 text-gray-400">

          <p>About Us</p>

          <p>Security Research</p>

          <p>Careers</p>

          <p>Contact</p>

        </div>

      </div>

      {/* SECURITY */}
      <div>

        <h3 className="text-xl font-bold text-white mb-6">

          Security Status

        </h3>

        <div className="space-y-5">

          <div className="flex items-center gap-3">

            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>

            <span className="text-gray-300">

              SSL Systems Operational

            </span>

          </div>

          <div className="flex items-center gap-3">

            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>

            <span className="text-gray-300">

              AI Monitoring Active

            </span>

          </div>

          <div className="flex items-center gap-3">

            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>

            <span className="text-gray-300">

              Infrastructure Secured

            </span>

          </div>

        </div>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="border-t border-cyan-900/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

      <p className="text-gray-500 text-center">

        © 2026 Quantum Crypto Services.
        All rights reserved.

      </p>

      <div className="flex items-center gap-6 text-gray-400">

        <p className="hover:text-cyan-400 transition cursor-pointer">

          Privacy Policy

        </p>

        <p className="hover:text-cyan-400 transition cursor-pointer">

          Terms of Service

        </p>

        <p className="hover:text-cyan-400 transition cursor-pointer">

          Security

        </p>

      </div>

    </div>

  </div>

</footer>

      {/* FOOTER */}
      <footer className="border-t border-cyan-900/20 text-center py-10 text-gray-400">

        © 2026 Quantum Crypto Services

      </footer>

    </div>
  );
}

export default Home;