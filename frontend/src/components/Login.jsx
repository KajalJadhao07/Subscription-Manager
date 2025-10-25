import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
      <div className="w-96 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
          Welcome Back 👋
        </h2>
      </div>
    </div>
  );
}
