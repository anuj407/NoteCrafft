import { type FormEvent, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import AuthPage from "./AuthPage";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // fake field just for demo

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login({ name, email }); // simulate login
  };

  const handleGoogleLogin = () => {
    // Simulate Google Login
    login({ name: "Google User", email: "google@example.com" });
  };

  return (
    <AuthPage>
      <h2 className="text-3xl font-bold text-center mb-2 text-blue-700">Welcome Back</h2>
      <p className="text-center text-gray-600 mb-6">Login to access your notes</p>

      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded hover:bg-gray-100 transition mb-6"
      >
        <FcGoogle className="text-xl" />
        <span className="text-gray-700 font-medium">Continue with Google</span>
      </button>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative text-center">
          <span className="bg-white px-2 text-gray-500 text-sm">or login with email</span>
        </div>
      </div>

      {/* Email Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded focus:outline-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded focus:outline-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline">Register</a>
      </p>
    </AuthPage>
  );
};

export default Login;
