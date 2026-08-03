"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Clientes() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const [clientes, setClientes] = useState<any[]>([]);
  const [editando, setEditando] = useState<string | null>(null);


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


    if (!nombre) {
      alert("Ingresá un nombre");
      return;
    }


    if(editando){

      const {error} = await supabase
        .from("clientes")
        .update({
          nombre,
          telefono,
          email
        })
        .eq("id", editando);


      if(error){
        console.log(error);
        return;
      }


      setEditando(null);


    }else{


      const { error } = await supabase
        .from("clientes")
        .insert([
          {
            nombre,
            telefono,
            email
          }
        ]);


      if(error){
        console.log(error);
        return;
      }

    }



    limpiarFormulario();
    cargarClientes();

  }




  function editarCliente(cliente:any){

    setNombre(cliente.nombre);
    setTelefono(cliente.telefono);
    setEmail(cliente.email);

    setEditando(cliente.id);

    setMostrarFormulario(true);

  }




  async function eliminarCliente(id:string){


    const confirmar = confirm(
      "¿Seguro que querés eliminar este cliente?"
    );


    if(!confirmar) return;



    const {error} = await supabase
      .from("clientes")
      .delete()
      .eq("id", id);



    if(error){
      console.log(error);
      return;
    }


    cargarClientes();

  }




  function limpiarFormulario(){

    setNombre("");
    setTelefono("");
    setEmail("");

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


        <h1 className="text-4xl font-bold text-black mb-2">
          👥 Clientes
        </h1>


        <p className="text-zinc-700 mb-8">
          Administrá los socios del gimnasio.
        </p>



        <button
          onClick={()=>{
            setMostrarFormulario(true)
          }}
          className="bg-black text-white px-6 py-3 rounded-xl mb-8"
        >
          + Agregar cliente
        </button>





        {mostrarFormulario && (

        <div className="bg-white rounded-2xl shadow p-6 max-w-md mb-8">


          <h2 className="text-xl font-bold text-black mb-4">
            {editando ? "Editar cliente" : "Nuevo cliente"}
          </h2>



          <input
            placeholder="Nombre"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            className="w-full border text-black p-3 rounded-xl mb-3"
          />


          <input
            placeholder="Teléfono"
            value={telefono}
            onChange={(e)=>setTelefono(e.target.value)}
            className="w-full border text-black p-3 rounded-xl mb-3"
          />


          <input
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border text-black p-3 rounded-xl mb-4"
          />



          <button
            onClick={guardarCliente}
            className="bg-green-600 text-white px-5 py-3 rounded-xl"
          >
            Guardar
          </button>



        </div>

        )}






        <div className="bg-white rounded-2xl shadow p-6">


          <h2 className="text-xl font-bold text-black mb-4">
            Lista de clientes
          </h2>




          {
          clientes.length === 0 ? (

            <p className="text-zinc-700">
              No hay clientes registrados.
            </p>


          ) : (


          clientes.map((cliente)=>(


          <div
            key={cliente.id}
            className="border-b py-4 flex justify-between items-center"
          >


            <div>

              <p className="font-bold text-black text-lg">
                {cliente.nombre}
              </p>

              <p className="text-zinc-700">
                📞 {cliente.telefono}
              </p>

              <p className="text-zinc-700">
                📧 {cliente.email}
              </p>

            </div>



            <div className="flex gap-2">


              <button
                onClick={()=>editarCliente(cliente)}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl"
              >
                ✏️ Editar
              </button>



              <button
                onClick={()=>eliminarCliente(cliente.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-xl"
              >
                🗑️ Eliminar
              </button>



            </div>


          </div>


          ))


          )}



        </div>



      </section>


    </main>

  );

}