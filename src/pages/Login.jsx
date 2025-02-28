import React from "react";

const Login = () => {
  return (
    <div class="min-h-screen flex">
      <div class="hidden md:block w-1/2 bg-green-800 p-12 text-white">
        <div class="flex flex-col justify-center items-center h-full">
          <h1 class="text-4xl font-bold mb-6">Admin Login</h1>
          <p class="text-2xl text-center">
            "Verily, the most beloved of people to Allah on the Day of
            Resurrection and the nearest to Him will be the just leader"
          </p>
        </div>
      </div>

      <div class="w-full md:w-1/2 flex items-center justify-center p-8">
        {/* <form id="signupForm" class="w-full max-w-md hidden">
          <h2 class="text-3xl font-bold text-green-800 mb-8">Create Account</h2>

          <div class="mb-4">
            <label class="block text-green-700 text-sm font-bold mb-2"
              >Email</label
            >
            <input
              type="email"
              id="signupEmail"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-green-700 text-sm font-bold mb-2"
              >Phone Number</label
            >
            <input
              type="tel"
              id="signupPhone"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-green-700 text-sm font-bold mb-2"
              >Username</label
            >
            <input
              type="text"
              id="signupUsername"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none"
              required
            />
          </div>

          <div class="mb-6">
            <label class="block text-green-700 text-sm font-bold mb-2"
              >Password</label
            >
            <input
              type="password"
              id="signupPassword"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none"
              minlength="6"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition duration-300"
          >
            Sign Up
          </button>

          <p class="mt-4 text-center">
            Already have an account?
            <a
              href="#"
              id="showLogin"
              class="text-green-600 hover:text-green-800 font-semibold"
              >Login here</a
            >
          </p>
        </form> */}

        <form id="loginForm" class="w-full max-w-md">
          <h2 class="text-3xl font-bold text-green-800 mb-8">Welcome Admin</h2>

          <div class="mb-4">
            <label class="block text-green-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="loginEmail"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none"
              required
            />
          </div>

          <div class="mb-6">
            <label class="block text-green-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="loginPassword"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition duration-300"
          >
            Login
          </button>

          {/* <p class="mt-4 text-center">
            Don't have an account?
            <a
              href="#"
              id="showSignup"
              class="text-green-600 hover:text-green-800 font-semibold"
            >
              Sign up here
            </a>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
