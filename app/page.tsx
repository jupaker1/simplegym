"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center w-96">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Simple Gym
        </h1>

        <p className="text-gray-600 mb-8">
          Sistema de gestión de gimnasio
        </p>

        <button
          onClick={() => router.push("/dashboard")}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Entrar
        </button>
      </div>
    </main>
  );
}