import React from "react";
import { FaGithub, FaBitbucket, FaGitlab } from "react-icons/fa"; // Importing icons
import { motion } from "framer-motion"; // Importing Framer Motion

const SignupPage = () => {
  // Replace this with the actual GitHub login URL from your backend
  const GITHUB_LOGIN_URL = "http://localhost:8080/auth/github";

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Left Panel */}
      <motion.div
        className="flex-1 flex justify-center items-center p-8 bg-gradient-to-b from-gray-900 via-gray-800 to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md text-center">
          <h3 className="text-3xl font-bold mb-6">AI to Detect & Autofix Bad Code</h3>
          <p className="text-gray-400 mb-6 text-lg">Supports 30+ Programming Languages</p>
          <div className="space-y-6">
            <div>
              <p className="text-2xl font-semibold">10K+ Developers</p>
              <p className="text-gray-400 text-sm">100K+ Hours Saved</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">500K+ Issues Fixed</p>
              <p className="text-gray-400 text-sm">14% Growth This Week</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Panel */}
      <motion.div
        className="flex-1 flex justify-center items-center bg-black p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="max-w-sm w-full">
          <h2 className="text-4xl font-extrabold text-center mb-10">
            Welcome to <span className="text-blue-400">CodeAnt AI</span>
          </h2>

          {/* Plan Selection */}
          <div className="flex justify-center space-x-6 mb-10">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 focus:outline-none transition">
              SAAS
            </button>
            <button className="bg-gray-700 text-white px-8 py-3 rounded-full hover:bg-gray-600 focus:outline-none transition">
              Self Hosted
            </button>
          </div>

          {/* Social Sign-In */}
          <div className="space-y-6">
            {/* GitHub Login */}
            <button
              onClick={() => window.location.href = GITHUB_LOGIN_URL} // Redirect to GitHub OAuth
              className="w-full bg-gray-900 text-white py-3 rounded-lg flex items-center justify-center space-x-4 hover:bg-gray-800 focus:outline-none transition"
            >
              <FaGithub className="text-2xl" />
              <span>Sign in with GitHub</span>
            </button>

            {/* Other OAuth Buttons */}
            <button className="w-full bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center space-x-4 hover:bg-gray-700 focus:outline-none transition">
              <FaBitbucket className="text-2xl" />
              <span>Sign in with Bitbucket</span>
            </button>
            <button className="w-full bg-gray-700 text-white py-3 rounded-lg flex items-center justify-center space-x-4 hover:bg-gray-600 focus:outline-none transition">
              <FaGithub className="text-2xl" />
              <span>Sign in with Azure DevOps</span>
            </button>
            <button className="w-full bg-red-600 text-white py-3 rounded-lg flex items-center justify-center space-x-4 hover:bg-red-500 focus:outline-none transition">
              <FaGitlab className="text-2xl" />
              <span>Sign in with GitLab</span>
            </button>
          </div>

          {/* Privacy Policy */}
          <div className="mt-10 text-center text-sm text-gray-400">
            <p>
              By signing up, you agree to our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-400 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
