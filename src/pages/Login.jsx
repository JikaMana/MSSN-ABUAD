import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log("Sending login request:", { username, password });
      const response = await axios.post("http://127.0.0.1:5000/api/login", {
        username,
        password,
      });

      // Store the token in local storage
      const token = response.data.token;
      localStorage.setItem("auth_token", token);
      console.log("Login response:", response.data);
      alert(response.data.message);
      navigate("/admin");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:block w-1/2 bg-green-800 p-12 text-white">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="max-w-32 mb-12">
            <img
              src="/mssn-logo.jpeg"
              alt="MSSN"
              className="rounded-full overflow-hidden w-full"
            />
          </div>
          <h1 className="text-4xl font-bold mb-6">Admin Login</h1>
          <p className="text-xl text-gray-300 text-center">
            "Verily, the most beloved of people to Allah on the Day of
            Resurrection and the nearest to Him will be the just leader"
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <form id="loginForm" className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-green-800 mb-8">
            Welcome Admin
          </h2>

          <div className="mb-4">
            <label className="block text-green-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-green-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
