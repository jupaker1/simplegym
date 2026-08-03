"use client";

import { useEffect, useState } from "react";

export default function Pagos() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [cliente, setCliente] = useState("");
  const [monto, setMonto] = useState("");

  const [pagos, setPagos] = useState<any[]>([]);



  // Cargar pagos guardados
  useEffect(() => {

    const datos = localStorage.getItem("pagos");

    if (datos) {
      setPagos(JSON.parse(datos));
    }

  }, []);




  function guardarPago() {

    const nuevosPagos = [
      ...pagos,
      {
        cliente,
        monto,
        estado: "Pagado"
      }
    ];


    setPagos(nuevosPagos);


    localStorage.setItem(
      "pagos",
      JSON.stringify(nuevosPagos)
    );


    setCliente("");
    setMonto("");
    setMostrarFormulario(false);

  }




  return (
    <main className="min-h-screen bg-zinc-100 flex">


      {/* MENÚ */}

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




      {/* CONTENIDO */}

      <section className="flex-1 p-8">


        <h1 className="text-4xl font-bold mb-2">
          💰 Pagos
        </h1>


        <p className="text-zinc-500 mb-8">
          Controlá las cuotas de tus clientes.
        </p>




        <button
          onClick={() => setMostrarFormulario(true)}
          className="bg-black text-white px-6 py-3 rounded-xl mb-8"
        >
          + Registrar pago
        </button>




        {mostrarFormulario && (

          <div className="bg-white rounded-2xl shadow p-6 max-w-md mb-8">


            <h2 className="text-xl font-bold mb-4">
              Nuevo pago
            </h2>



            <input
              placeholder="Nombre del cliente"
              value={cliente}
              onChange={(e)=>setCliente(e.target.value)}
              className="w-full border p-3 rounded-xl mb-3"
            />



            <input
              placeholder="Monto"
              value={monto}
              onChange={(e)=>setMonto(e.target.value)}
              className="w-full border p-3 rounded-xl mb-4"
            />



            <button
              onClick={guardarPago}
              className="bg-black text-white px-5 py-3 rounded-xl"
            >
              Guardar pago
            </button>


          </div>

        )}






        <div className="bg-white rounded-2xl shadow p-6">


          <h2 className="text-xl font-bold mb-4">
            Historial de pagos
          </h2>




          {pagos.length === 0 ? (

            <p className="text-zinc-500">
              No hay pagos registrados.
            </p>


          ) : (


            pagos.map((pago,index)=>(

              <div
                key={index}
                className="border-b py-4"
              >

                <p className="font-bold">
                  {pago.cliente}
                </p>


                <p>
                  💰 ${pago.monto}
                </p>


                <p>
                  🟢 {pago.estado}
                </p>


              </div>


            ))

          )}



        </div>


      </section>


    </main>
  );
}