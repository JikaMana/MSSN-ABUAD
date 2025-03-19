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
            const response = await axios.post("http://127.0.0.1:5000/api/login", { username, password });

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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <button onClick={handleLogin} className="w-full p-2 bg-blue-500 text-white rounded">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;