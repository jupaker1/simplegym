"use client";

import { useState } from "react";

export default function Pagos() {

  const [pagos, setPagos] = useState<any[]>([]);
  const [cliente, setCliente] = useState("");
  const [monto, setMonto] = useState("");

  function guardarPago() {

    if (!cliente || !monto) return;

    setPagos([
      ...pagos,
      {
        cliente,
        monto
      }
    ]);

    setCliente("");
    setMonto("");
  }


  return (

    <main className="min-h-screen bg-zinc-100 flex">


      <aside className="w-64 bg-black text-white p-6">

        <h1 className="text-2xl font-bold mb-8">
          FITNESS GYM 💪
        </h1>


        <nav className="space-y-4">

          <a href="/dashboard" className="block">
            🏠 Inicio
          </a>

          <a href="/clientes" className="block">
            👥 Clientes
          </a>

          <a href="/pagos" className="block">
            💰 Pagos
          </a>

          <a href="/entrenadores" className="block">
            🏋️ Entrenadores
          </a>

          <a href="/clases" className="block">
            📅 Clases
          </a>

        </nav>

      </aside>



      <section className="flex-1 p-8">


        <h1 className="text-4xl font-bold mb-2 text-black">
          💰 Pagos
        </h1>


        <p className="text-zinc-600 mb-8">
          Administrá los pagos de los socios.
        </p>



        <div className="bg-white rounded-2xl shadow p-6 max-w-md mb-8">


          <h2 className="text-xl font-bold mb-4 text-black">
            Nuevo pago
          </h2>


          <input
            placeholder="Cliente"
            value={cliente}
            onChange={(e)=>setCliente(e.target.value)}
            className="w-full border p-3 rounded-xl mb-3 text-black"
          />


          <input
            placeholder="Monto"
            value={monto}
            onChange={(e)=>setMonto(e.target.value)}
            className="w-full border p-3 rounded-xl mb-4 text-black"
          />


          <button
            onClick={guardarPago}
            className="bg-black text-white px-5 py-3 rounded-xl"
          >
            Guardar pago
          </button>


        </div>



        <div className="bg-white rounded-2xl shadow p-6">


          <h2 className="text-xl font-bold mb-4 text-black">
            Lista de pagos
          </h2>


          {
            pagos.length === 0 ? (

              <p className="text-zinc-600">
                No hay pagos registrados.
              </p>

            ) : (

              pagos.map((pago,index)=>(

                <div
                  key={index}
                  className="border-b py-4 text-black"
                >

                  <p className="font-bold">
                    {pago.cliente}
                  </p>

                  <p>
                    💵 ${pago.monto}
                  </p>

                </div>

              ))

            )
          }


        </div>


      </section>


    </main>

  );
}