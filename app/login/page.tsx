"use client";

import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-100 p-6">


      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full">


        <h1 className="text-4xl font-bold text-center mb-2">
          FITNESS GYM 💪
        </h1>


        <p className="text-zinc-500 text-center mb-8">
          La forma más simple y ágil de administrar tu gimnasio.
        </p>



        <h2 className="text-2xl font-bold mb-6 text-center">
          Iniciar sesión
        </h2>



        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-4"
        />


        <input
          type="password"
          placeholder="Contraseña"
          className="w-full border p-3 rounded-xl mb-6"
        />



        <button
          onClick={() => router.push("/dashboard")}
          className="w-full bg-black text-white py-3 rounded-xl"
        >
          Entrar
        </button>



      </div>


    </main>
  );
}