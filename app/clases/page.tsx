"use client";

import { useEffect, useState } from "react";

export default function Clases() {

  const [clases, setClases] = useState<any[]>([]);
  const [entrenadores, setEntrenadores] = useState<any[]>([]);

  const [nombre, setNombre] = useState("");
  const [horario, setHorario] = useState("");
  const [entrenador, setEntrenador] = useState("");

  const [editando, setEditando] = useState<number | null>(null);


  useEffect(() => {

    const clasesGuardadas = localStorage.getItem("clases");
    const entrenadoresGuardados = localStorage.getItem("entrenadores");


    if(clasesGuardadas){
      setClases(JSON.parse(clasesGuardadas));
    }


    if(entrenadoresGuardados){
      setEntrenadores(JSON.parse(entrenadoresGuardados));
    }


  }, []);



  useEffect(() => {

    localStorage.setItem(
      "clases",
      JSON.stringify(clases)
    );

  }, [clases]);





  function guardarClase(){

    if(!nombre){
      alert("Ingresá el nombre de la clase");
      return;
    }


    const nuevaClase = {
      nombre,
      horario,
      entrenador
    };


    if(editando !== null){

      const actualizadas = clases.map((c,index)=>
        index === editando ? nuevaClase : c
      );

      setClases(actualizadas);
      setEditando(null);


    } else {

      setClases([
        ...clases,
        nuevaClase
      ]);

    }


    limpiar();

  }




  function editarClase(index:number){

    const clase = clases[index];

    setNombre(clase.nombre);
    setHorario(clase.horario);
    setEntrenador(clase.entrenador);

    setEditando(index);

  }





  function eliminarClase(index:number){

    if(!confirm("¿Eliminar esta clase?")) return;


    setClases(
      clases.filter((_,i)=>i !== index)
    );

  }





  function limpiar(){

    setNombre("");
    setHorario("");
    setEntrenador("");

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

<a href="/clases" className="block font-bold text-green-400">
📅 Clases
</a>

</nav>


</aside>





<section className="flex-1 p-8">


<h1 className="text-4xl font-bold text-black mb-2">
📅 Clases
</h1>


<p className="text-zinc-600 mb-8">
Administrá las clases del gimnasio.
</p>





<div className="bg-white rounded-2xl shadow p-6 max-w-xl mb-8">


<h2 className="text-xl font-bold text-black mb-5">
{editando !== null ? "Editar clase" : "Nueva clase"}
</h2>





<input
placeholder="Nombre de clase"
value={nombre}
onChange={(e)=>setNombre(e.target.value)}
className="w-full border p-3 rounded-xl mb-3 text-black"
/>





<input
placeholder="Horario"
value={horario}
onChange={(e)=>setHorario(e.target.value)}
className="w-full border p-3 rounded-xl mb-3 text-black"
/>





<select
value={entrenador}
onChange={(e)=>setEntrenador(e.target.value)}
className="w-full border p-3 rounded-xl mb-5 text-black"
>


<option value="">
Seleccionar entrenador
</option>


{entrenadores.map((e,index)=>(

<option key={index}>
{e.nombre}
</option>

))}


</select>





<button
onClick={guardarClase}
className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl w-full"
>

Guardar clase

</button>


</div>







<div className="bg-white rounded-2xl shadow p-6">


<h2 className="text-xl font-bold text-black mb-6">
Lista de clases
</h2>



<div className="space-y-4">


{clases.map((clase,index)=>(


<div
key={index}
className="border rounded-xl p-5 flex justify-between items-center"
>


<div className="text-black">


<p className="font-bold text-lg">
{clase.nombre}
</p>


<p>🕒 {clase.horario}</p>


<p>🏋️ {clase.entrenador}</p>


</div>



<div className="space-x-2">


<button
onClick={()=>editarClase(index)}
className="bg-blue-600 text-white px-4 py-2 rounded-xl"
>
✏️ Editar
</button>



<button
onClick={()=>eliminarClase(index)}
className="bg-red-600 text-white px-4 py-2 rounded-xl"
>
🗑 Eliminar
</button>


</div>


</div>


))}


</div>


</div>



</section>



</main>

);

}