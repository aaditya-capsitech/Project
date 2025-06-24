import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isStrongPassword = (password: string) =>
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*]/.test(password);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!isStrongPassword(formData.password)) {
      alert(
        "Password must be at least 8 characters and include an uppercase letter, lowercase letter, number, and special character."
      );
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5240/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        const errorData = await res.text();
        console.error("Login failed:", errorData);
        alert("Login failed: invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse: CredentialResponse) => {
    const token = credentialResponse.credential;
    if (!token) return;

    fetch("http://localhost:5240/api/auth/google-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        alert("Logged in with Google!");
        navigate("/");
      })
      .catch((err) => {
        console.error("Google login failed", err);
        alert("Google login error");
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/minimalist-white-abstract-background_23-2148816315.jpg?ga=GA1.1.1369281244.1750746897&semt=ais_items_boosted&w=740")',
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-8 shadow-xl max-w-md w-full space-y-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Log In</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
            required
          />

          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded w-full hover:bg-blue-800 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="text-center text-gray-600">or</div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={() => {
              console.log("Google Login Failed");
              alert("Google login failed");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
