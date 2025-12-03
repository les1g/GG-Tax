"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value;
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const password = (e.currentTarget.elements.namedItem("password") as HTMLInputElement).value;

    // TODO: Replace with real signup logic
    if (name && email && password) {
      setSuccess("Account created successfully! You can now log in.");
      setError("");
    } else {
      setError("Please fill out all fields.");
      setSuccess("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 px-4">
      <h1 className="text-2xl font-bold mb-6 text-green-400">Create Your Account</h1>

      {/* Signup form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="p-3 w-full rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 w-full rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="p-3 w-full rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-400">or</div>

      {/* OAuth buttons */}
      <div className="mt-6 space-y-4 w-full max-w-sm">
        {[
          { provider: "google", label: "Google", icon: "google.svg" },
          { provider: "apple", label: "Apple", icon: "apple.svg" },
          { provider: "microsoft", label: "Microsoft", icon: "microsoft.svg" },
        ].map(({ provider, label, icon }) => (
          <button
            key={provider}
            onClick={() => signIn(provider, { callbackUrl: "/dashboard" })}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-gray-100 hover:border-green-400 flex items-center"
          >
            <div className="w-6 h-6 flex items-center justify-center mr-3">
              <img
                src={`/icons/${icon}`}
                alt={label}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex-1 text-center">
              <span className="font-medium">Sign up with {label}</span>
            </div>
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-400">
        Already have an account?{" "}
        <a href="/login" className="text-green-400 hover:underline">
          Login here
        </a>
      </p>
    </div>
  );
}
