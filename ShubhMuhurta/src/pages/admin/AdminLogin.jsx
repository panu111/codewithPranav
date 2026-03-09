import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

 const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");
    } else {
      setError(data.message || "Invalid login credentials");
    }

  } catch (err) {
    console.error(err);
    setError("Server error. Please try again.");
  }

  setLoading(false);
};

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-4">

      <form
        onSubmit={handleLogin}
        className="bg-[#0f172a] p-8 rounded-2xl w-full max-w-md space-y-4 border border-yellow-400/10 shadow-xl"
      >

        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-2">
          🔐 Admin Login
        </h2>

        <p className="text-gray-400 text-center text-sm mb-4">
          Only authorized access allowed
        </p>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
        />

        {/* Error message */}
        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        {/* Button */}
        <button
          disabled={loading}
          className="w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

    </section>
  );
}