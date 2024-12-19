import React, { useState } from "react";
import { FaPlus, FaRedoAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const RepositoryPage = () => {
  const [repositories, ] = useState([
    { name: "design-system", language: "React", size: "7320 KB", visibility: "Public", updated: "1 day ago" },
    { name: "codeant-ci-app", language: "Javascript", size: "5871 KB", visibility: "Private", updated: "2 days ago" },
    { name: "analytics-dashboard", language: "Python", size: "4521 KB", visibility: "Private", updated: "5 days ago" },
    { name: "mobile-app", language: "Swift", size: "3096 KB", visibility: "Public", updated: "3 days ago" },
    { name: "e-commerce-platform", language: "Java", size: "6210 KB", visibility: "Private", updated: "6 days ago" },
    { name: "blog-website", language: "HTML/CSS", size: "1876 KB", visibility: "Public", updated: "4 days ago" },
    { name: "social-network", language: "PHP", size: "5432 KB", visibility: "Private", updated: "7 days ago" },
  ]);

  const handleAddRepository = () => {
    alert("Add Repository feature coming soon!");
  };

  const handleRefresh = () => {
    alert("Refreshing repositories...");
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 flex flex-col">
        <div className="p-6 text-xl font-bold text-gray-100">CodeAnt AI</div>
        <nav className="flex-1 mt-4">
          <ul className="space-y-4 px-6">
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="text-blue-400 font-semibold cursor-pointer"
            >
              Repositories
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
              AI Code Review
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
              Cloud Security
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
              How to Use
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
              Settings
            </motion.li>
          </ul>
        </nav>
        <div className="px-6 py-4 space-y-2 text-sm">
          <button className="text-gray-400 hover:underline">Support</button>
          <button className="text-gray-400 hover:underline">Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-100">Repositories</h1>
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRefresh}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 flex items-center space-x-2 transition shadow-md"
            >
              <FaRedoAlt />
              <span className="font-medium">Refresh</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddRepository}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 flex items-center space-x-2 transition shadow-md"
            >
              <FaPlus />
              <span className="font-medium">Add Repository</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Search Repositories"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </motion.div>

        {/* Repository List */}
        <motion.div
          className="bg-gray-800 shadow-lg rounded-lg divide-y divide-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {repositories.map((repo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between p-4 hover:bg-gray-700 transition rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="text-lg font-semibold text-gray-100">{repo.name}</div>
                <div
                  className={`text-sm ${
                    repo.visibility === "Public"
                      ? "text-green-400"
                      : "text-gray-500"
                  }`}
                >
                  {repo.visibility}
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div>{repo.language}</div>
                <div>{repo.size}</div>
                <div>Updated {repo.updated}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default RepositoryPage;
