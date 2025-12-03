"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const password = (e.currentTarget.elements.namedItem("password") as HTMLInputElement).value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard",
    });

    if (result?.error) {
      setError("Invalid email or password.");
    }
    // No need for manual redirect here — NextAuth handles it
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 px-4">
      <h1 className="text-2xl font-bold mb-6 text-green-400">Client Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm">
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
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded"
        >
          Login
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-400">or</div>

      {/* OAuth buttons */}
      <div className="mt-6 space-y-4 w-full max-w-sm">
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-gray-100 hover:border-green-400 flex items-center space-x-3 justify-center"
        >
          <img src="/icons/google.svg" alt="Google" className="h-5 w-5" />
          <span className="font-medium">Continue with Google</span>
        </button>

        <button
          onClick={() => signIn("apple", { callbackUrl: "/dashboard" })}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-gray-100 hover:border-green-400 flex items-center space-x-3 justify-center"
        >
          <img src="/icons/apple.svg" alt="Apple" className="h-5 w-5" />
          <span className="font-medium">Continue with Apple</span>
        </button>

        <button
          onClick={() => signIn("microsoft", { callbackUrl: "/dashboard" })}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-gray-100 hover:border-green-400 flex items-center space-x-3 justify-center"
        >
          <img src="/icons/microsoft.svg" alt="Microsoft" className="h-5 w-5" />
          <span className="font-medium">Continue with Microsoft</span>
        </button>
      </div>

      <div className="mt-6 text-sm text-gray-400">Don't have an account yet?</div>

      <button
        type="button"
        onClick={() => router.push("/signup")}
        className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Sign Up
      </button>
    </div>
  );
}
