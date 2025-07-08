import { type FormEvent, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import AuthPage from "./AuthPage";
import { UserPlus, MoveRight } from "lucide-react";

const Register = () => {
  const { login } = useAuth(); // simulate register → login
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login({ name, email });
  };

  const handleGoogleSignup = () => {
    login({ name: "Google User", email: "google@example.com" });
  };

  return (
    <AuthPage>
      <div className="text-center mb-6">
        <UserPlus className="mx-auto h-10 w-10 text-blue-600" />
        <h2 className="text-3xl font-bold text-blue-700 mt-2">Create an Account</h2>
        <p className="text-gray-600 mt-1 text-sm">Join NoteCrafft to manage your notes smartly</p>
      </div>

      {/* Google Signup Button */}
      <button
        onClick={handleGoogleSignup}
        className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-2 rounded hover:bg-gray-100 transition mb-6"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5"
        />
        <span className="text-gray-700 font-medium">Sign up with Google</span>
      </button>

      {/* Divider */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative text-center">
          <span className="bg-white px-2 text-gray-500 text-sm">or register with email</span>
        </div>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
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
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2"
        >
          Register <MoveRight className="w-4 h-4" />
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 hover:underline">Login</a>
      </p>
    </AuthPage>
  );
};

export default Register;
