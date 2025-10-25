import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validatePassword = (password) => {
    const strongPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return strongPass.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      return setError("All fields are required.");
    }

    if (!validatePassword(password)) {
      return setError(
        "Password must include uppercase, lowercase, number, special character, and be 8+ characters long."
      );
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      const res = await api.post("/api/auth/register", {
        name,
        email,
        password,
      });

      if (res.status === 200 || res.status === 201) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (err) {
      console.error("Register error:", err.response?.data || err.message);
      setError(err.response?.data?.msg || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-6">
      <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Create Your Account
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-3 font-medium">{error}</p>
        )}
        {success && (
          <p className="text-green-600 text-center mb-3 font-medium">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-1 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block font-semibold mb-1 dark:text-gray-300">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter a strong password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400"
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block font-semibold mb-1 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400"
              title={
                showConfirmPassword ? "Hide password" : "Show password"
              }
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>

          <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-blue-600 font-semibold cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
