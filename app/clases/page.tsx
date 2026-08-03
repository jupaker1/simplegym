"use client";

import { useEffect, useState } from "react";

export default function Clases() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [nombre, setNombre] = useState("");
  const [dia, setDia] = useState("");
  const [horario, setHorario] = useState("");
  const [cupos, setCupos] = useState("");

  const [clases, setClases] = useState<any[]>([]);



  // Cargar clases guardadas
  useEffect(() => {

    const datos = localStorage.getItem("clases");

    if (datos) {
      setClases(JSON.parse(datos));
    }

  }, []);




  function guardarClase() {

    const nuevasClases = [
      ...clases,
      {
        nombre,
        dia,
        horario,
        cupos
      }
    ];


    setClases(nuevasClases);


    localStorage.setItem(
      "clases",
      JSON.stringify(nuevasClases)
    );


    setNombre("");
    setDia("");
    setHorario("");
    setCupos("");
    setMostrarFormulario(false);

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


        <h1 className="text-4xl font-bold mb-2">
          📅 Clases
        </h1>


        <p className="text-zinc-500 mb-8">
          Organizá horarios y actividades del gimnasio.
        </p>




        <button
          onClick={() => setMostrarFormulario(true)}
          className="bg-black text-white px-6 py-3 rounded-xl mb-8"
        >
          + Agregar clase
        </button>




        {mostrarFormulario && (

          <div className="bg-white rounded-2xl shadow p-6 max-w-md mb-8">


            <h2 className="text-xl font-bold mb-4">
              Nueva clase
            </h2>



            <input
              placeholder="Nombre de la clase"
              value={nombre}
              onChange={(e)=>setNombre(e.target.value)}
              className="w-full border p-3 rounded-xl mb-3"
            />



            <input
              placeholder="Día"
              value={dia}
              onChange={(e)=>setDia(e.target.value)}
              className="w-full border p-3 rounded-xl mb-3"
            />



            <input
              placeholder="Horario"
              value={horario}
              onChange={(e)=>setHorario(e.target.value)}
              className="w-full border p-3 rounded-xl mb-3"
            />



            <input
              placeholder="Cantidad de cupos"
              value={cupos}
              onChange={(e)=>setCupos(e.target.value)}
              className="w-full border p-3 rounded-xl mb-4"
            />



            <button
              onClick={guardarClase}
              className="bg-black text-white px-5 py-3 rounded-xl"
            >
              Guardar clase
            </button>


          </div>

        )}






        <div className="bg-white rounded-2xl shadow p-6">


          <h2 className="text-xl font-bold mb-4">
            Lista de clases
          </h2>




          {clases.length === 0 ? (

            <p className="text-zinc-500">
              No hay clases registradas.
            </p>


          ) : (


            clases.map((clase,index)=>(

              <div
                key={index}
                className="border-b py-4"
              >

                <p className="font-bold">
                  {clase.nombre}
                </p>


                <p>
                  📅 {clase.dia}
                </p>


                <p>
                  ⏰ {clase.horario}
                </p>


                <p>
                  👥 {clase.cupos} cupos
                </p>


              </div>

            ))

          )}



        </div>


      </section>


    </main>
  );
}