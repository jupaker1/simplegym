"use client";

import { useEffect, useState } from "react";

export default function Entrenadores() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [telefono, setTelefono] = useState("");

  const [entrenadores, setEntrenadores] = useState<any[]>([]);



  // Cargar entrenadores guardados
  useEffect(() => {

    const datos = localStorage.getItem("entrenadores");

    if (datos) {
      setEntrenadores(JSON.parse(datos));
    }

  }, []);




  function guardarEntrenador() {

    const nuevosEntrenadores = [
      ...entrenadores,
      {
        nombre,
        especialidad,
        telefono
      }
    ];


    setEntrenadores(nuevosEntrenadores);


    localStorage.setItem(
      "entrenadores",
      JSON.stringify(nuevosEntrenadores)
    );


    setNombre("");
    setEspecialidad("");
    setTelefono("");
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
          🏋️ Entrenadores
        </h1>


        <p className="text-zinc-500 mb-8">
          Administrá el equipo del gimnasio.
        </p>




        <button
          onClick={() => setMostrarFormulario(true)}
          className="bg-black text-white px-6 py-3 rounded-xl mb-8"
        >
          + Agregar entrenador
        </button>




        {mostrarFormulario && (

          <div className="bg-white rounded-2xl shadow p-6 max-w-md mb-8">


            <h2 className="text-xl font-bold mb-4">
              Nuevo entrenador
            </h2>



            <input
              placeholder="Nombre"
              value={nombre}
              onChange={(e)=>setNombre(e.target.value)}
              className="w-full border p-3 rounded-xl mb-3"
            />



            <input
              placeholder="Especialidad"
              value={especialidad}
              onChange={(e)=>setEspecialidad(e.target.value)}
              className="w-full border p-3 rounded-xl mb-3"
            />



            <input
              placeholder="Teléfono"
              value={telefono}
              onChange={(e)=>setTelefono(e.target.value)}
              className="w-full border p-3 rounded-xl mb-4"
            />



            <button
              onClick={guardarEntrenador}
              className="bg-black text-white px-5 py-3 rounded-xl"
            >
              Guardar entrenador
            </button>


          </div>

        )}






        <div className="bg-white rounded-2xl shadow p-6">


          <h2 className="text-xl font-bold mb-4">
            Lista de entrenadores
          </h2>




          {entrenadores.length === 0 ? (

            <p className="text-zinc-500">
              No hay entrenadores registrados.
            </p>


          ) : (


            entrenadores.map((entrenador,index)=>(

              <div
                key={index}
                className="border-b py-4"
              >

                <p className="font-bold">
                  {entrenador.nombre}
                </p>


                <p>
                  🏋️ {entrenador.especialidad}
                </p>


                <p>
                  📞 {entrenador.telefono}
                </p>


              </div>

            ))

          )}



        </div>


      </section>


    </main>
  );
}