import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    if (!email || !password) {

      alert("Please fill all fields");

      return;
    }
    

    try {

      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/dashboard");

    } catch (error: any) {

      console.error(error);

      alert(error.message);

    } finally {

      setLoading(false);

    }

  };
if (auth.currentUser) {

  return <Navigate to="/dashboard" />;

}
  return (
    

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050816] to-[#0f172a] text-white">

      <Navbar />

      <section className="flex items-center justify-center px-6 py-24">

        <div className="w-full max-w-md bg-[#081028] border border-cyan-900/30 rounded-3xl p-10">

          <h1 className="text-4xl font-bold text-cyan-400 text-center mb-10">

            Login

          </h1>

          <div className="space-y-6">

            <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  }}
  className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
/>

           <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  }}
  className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
/>

<button
  onClick={handleLogin}
  disabled={loading}
  className="w-full bg-cyan-500 hover:bg-cyan-600 text-black py-4 rounded-2xl font-bold text-lg transition cursor-pointer"
>

  {loading ? "Logging in..." : "Login"}

</button>

            <p className="text-center text-gray-400">

              No account?

              <Link
                to="/register"
                className="text-cyan-400 ml-2"
              >
                Register
              </Link>

            </p>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Login;