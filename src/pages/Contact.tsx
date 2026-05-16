import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050816] to-[#0f172a] text-white">

      <Navbar />

      <section className="text-center px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-extrabold">

          Contact <span className="text-cyan-400">Us</span>

        </h1>

        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">

          Have questions about SSL security,
          hosting or cybersecurity solutions?

        </p>

      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">

        <div className="bg-[#081028] border border-cyan-900/30 rounded-3xl p-10">

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-6 py-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-6 py-4"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-6 py-4"
            />

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-10 py-4 rounded-2xl font-bold"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;