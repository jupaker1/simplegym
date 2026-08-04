"use client";

import { useEffect, useState } from "react";

export default function Clases() {

const [clases, setClases] = useState<any[]>([]);
const [entrenadores, setEntrenadores] = useState<any[]>([]);
const [nombre, setNombre] = useState("");
const [horario, setHorario] = useState("");
const [entrenador, setEntrenador] = useState("");
const [editando, setEditando] = useState<number | null>(null);


useEffect(()=>{

const clasesGuardadas = localStorage.getItem("clases");
const entrenadoresGuardados = localStorage.getItem("entrenadores");

if(clasesGuardadas){
setClases(JSON.parse(clasesGuardadas));
}

if(entrenadoresGuardados){
setEntrenadores(JSON.parse(entrenadoresGuardados));
}

},[]);


useEffect(()=>{

localStorage.setItem(
"clases",
JSON.stringify(clases)
);

},[clases]);



function guardarClase(){

if(!nombre){
alert("Ingresá el nombre de la clase");
return;
}


const nuevaClase={
nombre,
horario,
entrenador
};


if(editando!==null){

setClases(
clases.map((c,index)=>
index===editando ? nuevaClase : c
)
);

setEditando(null);

}else{

setClases([
...clases,
nuevaClase
]);

}

limpiar();

}



function editarClase(index:number){

const clase=clases[index];

setNombre(clase.nombre);
setHorario(clase.horario);
setEntrenador(clase.entrenador);

setEditando(index);

}



function eliminarClase(index:number){

if(!confirm("¿Eliminar esta clase?")) return;

setClases(
clases.filter((_,i)=>i!==index)
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


<h1 className="text-2xl font-bold mb-10">
Gimnasio sencillo 💪
</h1>


<nav className="space-y-5">


<a href="/dashboard" className="block hover:text-green-400">
🏠 Inicio
</a>


<a href="/clientes" className="block hover:text-green-400">
👥 Clientes
</a>


<a href="/pagos" className="block hover:text-green-400">
💰 Pagos
</a>


<a href="/entrenadores" className="block hover:text-green-400">
🏋️ Entrenadores
</a>


<a href="/clases" className="block text-green-400 font-bold">
📅 Clases
</a>


<a href="/horarios" className="block hover:text-green-400">
🗓️ Horarios
</a>


</nav>

</aside>



<section className="flex-1 p-10">


<h1 className="text-4xl font-bold mb-8 text-black">
📅 Clases
</h1>



<div className="bg-white rounded-2xl shadow border p-6 max-w-xl">


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

<option key={index} value={e.nombre}>
{e.nombre}
</option>

))}


</select>



<button
onClick={guardarClase}
className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl w-full"
>

{editando!==null ? "Guardar cambios" : "Guardar clase"}

</button>


</div>



<div className="mt-8 space-y-4">


{clases.map((clase,index)=>(

<div
key={index}
className="bg-white rounded-2xl shadow border p-5"
>


<h2 className="text-2xl font-bold text-black">
{clase.nombre}
</h2>


<p className="text-zinc-600">
🕒 {clase.horario}
</p>


<p className="text-zinc-600">
🏋️ {clase.entrenador}
</p>



<div className="flex gap-3 mt-4">


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
🗑️ Eliminar
</button>


</div>


</div>

))}


</div>


</section>


</main>

);

}