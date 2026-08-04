"use client";

import { useEffect, useState } from "react";

export default function Entrenadores(){

const [entrenadores,setEntrenadores]=useState<any[]>([]);
const [nombre,setNombre]=useState("");
const [especialidad,setEspecialidad]=useState("");
const [telefono,setTelefono]=useState("");


useEffect(()=>{

const guardados=localStorage.getItem("entrenadores");

if(guardados){
setEntrenadores(JSON.parse(guardados));
}

},[]);


useEffect(()=>{

localStorage.setItem(
"entrenadores",
JSON.stringify(entrenadores)
);

},[entrenadores]);



function guardarEntrenador(){

if(!nombre){
alert("Ingresá un nombre");
return;
}


const nuevo={
nombre,
especialidad,
telefono
};


setEntrenadores([
...entrenadores,
nuevo
]);


setNombre("");
setEspecialidad("");
setTelefono("");

}



function eliminarEntrenador(index:number){

setEntrenadores(
entrenadores.filter((_,i)=>i!==index)
);

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


<a href="/entrenadores" className="block text-green-400 font-bold">
🏋️ Entrenadores
</a>


<a href="/clases" className="block">
📅 Clases
</a>


<a href="/horarios" className="block">
🗓️ Horarios
</a>


</nav>


</aside>



<section className="flex-1 p-8">


<h1 className="text-4xl font-bold text-black mb-2">
🏋️ Entrenadores
</h1>


<p className="text-zinc-600 mb-8">
Gestioná tu equipo.
</p>



<div className="bg-white rounded-2xl shadow p-6 max-w-xl">


<input
placeholder="Nombre"
value={nombre}
onChange={(e)=>setNombre(e.target.value)}
className="w-full border p-3 rounded-xl mb-3 text-black"
/>


<input
placeholder="Especialidad"
value={especialidad}
onChange={(e)=>setEspecialidad(e.target.value)}
className="w-full border p-3 rounded-xl mb-3 text-black"
/>


<input
placeholder="Teléfono"
value={telefono}
onChange={(e)=>setTelefono(e.target.value)}
className="w-full border p-3 rounded-xl mb-5 text-black"
/>



<button
onClick={guardarEntrenador}
className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl w-full"
>
Guardar entrenador
</button>


</div>




<div className="mt-8 bg-white rounded-2xl shadow p-6">


<h2 className="text-xl font-bold text-black mb-5">
Equipo
</h2>



{entrenadores.length===0 ? (

<p className="text-zinc-600">
No hay entrenadores registrados.
</p>

):(


<div className="space-y-4">


{entrenadores.map((e,index)=>(


<div
key={index}
className="border rounded-xl p-5 flex justify-between items-center"
>


<div className="text-black">

<p className="font-bold text-lg">
{e.nombre}
</p>

<p>
🏋️ {e.especialidad}
</p>

<p>
📱 {e.telefono}
</p>

</div>



<button
onClick={()=>eliminarEntrenador(index)}
className="bg-red-600 text-white px-4 py-2 rounded-xl"
>
🗑 Eliminar
</button>



</div>


))}


</div>


)}


</div>


</section>


</main>

);

}