"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Clientes() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const [clientes, setClientes] = useState<any[]>([]);



  // Cargar clientes desde Supabase
  useEffect(() => {

    cargarClientes();

  }, []);



  async function cargarClientes() {

    const { data, error } = await supabase
      .from("clientes")
      .select("*")
      .order("created_at", { ascending: false });


    if (error) {
      console.log(error);
      return;
    }


    setClientes(data || []);

  }




  async function guardarCliente() {


    const { error } = await supabase
      .from("clientes")
      .insert([
        {
          nombre,
          telefono,
          email
        }
      ]);



    if (error) {

      console.log(error);
      return;

    }



    setNombre("");
    setTelefono("");
    setEmail("");

    setMostrarFormulario(false);


    cargarClientes();

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
          👥 Clientes
        </h1>


        <p className="text-zinc-500 mb-8">
          Administrá los socios del gimnasio.
        </p>



        <button
          onClick={() => setMostrarFormulario(true)}
          className="bg-black text-white px-6 py-3 rounded-xl mb-8"
        >
          + Agregar cliente
        </button>





        {mostrarFormulario && (

          <div className="bg-white rounded-2xl shadow p-6 max-w-md mb-8">


            <h2 className="text-xl font-bold mb-4">
              Nuevo cliente
            </h2>


            <input
              placeholder="Nombre"
              value={nombre}
              onChange={(e)=>setNombre(e.target.value)}
              className="w-full border p-3 rounded-xl mb-3"
            />



            <input
              placeholder="Teléfono"
              value={telefono}
              onChange={(e)=>setTelefono(e.target.value)}
              className="w-full border p-3 rounded-xl mb-3"
            />



            <input
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border p-3 rounded-xl mb-4"
            />



            <button
              onClick={guardarCliente}
              className="bg-black text-white px-5 py-3 rounded-xl"
            >
              Guardar cliente
            </button>


          </div>

        )}






        <div className="bg-white rounded-2xl shadow p-6">


          <h2 className="text-xl font-bold mb-4">
            Lista de clientes
          </h2>




          {clientes.length === 0 ? (

            <p className="text-zinc-500">
              No hay clientes registrados.
            </p>


          ) : (


            clientes.map((cliente)=>(

              <div
                key={cliente.id}
                className="border-b py-4"
              >

                <p className="font-bold">
                  {cliente.nombre}
                </p>


                <p>
                  📞 {cliente.telefono}
                </p>


                <p>
                  📧 {cliente.email}
                </p>


              </div>


            ))

          )}



        </div>


      </section>


    </main>
  );
}