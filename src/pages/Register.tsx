import { useState } from "react";

import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";

import {
  useNavigate,
  Link,
  Navigate,
  useSearchParams
} from "react-router-dom";

import Navbar from "../components/Navbar";

function Register() {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const redirect =
    searchParams.get("redirect");

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {

    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !password
    ) {

      alert("Please fill all fields");

      return;

    }

    try {

      setLoading(true);

      // CREATE FIREBASE ACCOUNT
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // SAVE USER DATA
      localStorage.setItem(
        "qcsUser",
        JSON.stringify({
          firstName,
          lastName,
          phone,
          email
        })
      );

      // RETURN TO CHECKOUT FLOW
      if (redirect === "checkout") {

        navigate("/checkout?redirect=checkout");

      } else {

        navigate("/dashboard");

      }

    } catch (error: any) {

      console.error(error);

      alert(error.message);

    } finally {

      setLoading(false);

    }

  };

  // ALREADY LOGGED IN
  if (auth.currentUser && !redirect) {

    return <Navigate to="/dashboard" />;

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050816] to-[#0f172a] text-white">

      <Navbar />

      <section className="flex items-center justify-center px-6 py-8">

        <div className="w-full max-w-md bg-[#081028] border border-cyan-900/30 rounded-3xl p-10">

          <h1 className="text-4xl font-bold text-cyan-400 text-center mb-10">

            Create Account

          </h1>

          <div className="space-y-6">

            {/* FIRST NAME */}
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.target.value)
              }
              className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
            />

            {/* LAST NAME */}
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value)
              }
              className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
            />

            {/* PHONE */}
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  handleRegister();

                }

              }}
              className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  handleRegister();

                }

              }}
              className="w-full bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-5 py-4 outline-none"
            />

            {/* REGISTER BUTTON */}
            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black py-4 rounded-2xl font-bold text-lg transition duration-300 cursor-pointer"
            >

              {loading
                ? "Creating..."
                : "Create Account"}

            </button>

            {/* LOGIN LINK */}
            <p className="text-center text-gray-400">

              Already have account?

              <Link
                to="/login"
                className="text-cyan-400 ml-2 hover:text-cyan-300 transition"
              >

                Login

              </Link>

            </p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default Register;