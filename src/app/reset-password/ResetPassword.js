"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPassword() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const email = session?.user?.email;
  const token = session?.user?.token;

  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  if (status === "loading") {
    return <p className="text-center">Loading...</p>;
  }

  if (!session) {
    return (
      <p className="text-center text-red-500">
        Please login to reset password.
      </p>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !token) {
      setError("Missing session information.");
      return;
    }

    const res = await fetch("/api/reset-password", {
      method: "POST",
      body: JSON.stringify({ email, token, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (res.ok) {
      setSuccess(data.message);
      setError("");
      setTimeout(() => router.push("/login"), 2000);
    } else {
      setError(data.error);
      setSuccess("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full p-6 bg-white rounded-lg border"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
      {success && <p className="text-green-600 mb-3">{success}</p>}
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <input
        type="password"
        required
        className="w-full border rounded-lg p-3 mb-4"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-primary hover:bg-black text-white p-3 rounded-lg"
      >
        Update Password
      </button>
    </form>
  );
}
