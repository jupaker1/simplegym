"use client";

import { useEffect, useState } from "react";

export default function Horarios(){

const [entrenadores,setEntrenadores]=useState<any[]>([]);
const [horarios,setHorarios]=useState<any[]>([]);

const [dia,setDia]=useState("Lunes");
const [hora,setHora]=useState("08:00");
const [entrenador,setEntrenador]=useState("");

const [editando,setEditando]=useState<number|null>(null);


useEffect(()=>{

const e=localStorage.getItem("entrenadores");
const h=localStorage.getItem("horarios");

if(e) setEntrenadores(JSON.parse(e));
if(h) setHorarios(JSON.parse(h));

},[]);


useEffect(()=>{

localStorage.setItem(
"horarios",
JSON.stringify(horarios)
);

},[horarios]);



function guardarHorario(){

if(!entrenador){
alert("Elegí un entrenador");
return;
}


const nuevo={
dia,
hora,
entrenador
};


if(editando!==null){

setHorarios(
horarios.map((h,index)=>
index===editando ? nuevo : h
)
);

setEditando(null);

}else{

setHorarios([
...horarios,
nuevo
]);

}

setEntrenador("");

}



function editarHorario(index:number){

const h=horarios[index];

setDia(h.dia);
setHora(h.hora);
setEntrenador(h.entrenador);
setEditando(index);

}



function eliminarHorario(index:number){

if(!confirm("¿Eliminar este horario?")) return;

setHorarios(
horarios.filter((_,i)=>i!==index)
);

}



const dias=[
"Lunes",
"Martes",
"Miércoles",
"Jueves",
"Viernes",
"Sábado"
];


const horas=[];

for(let i=8;i<=22;i++){

horas.push(
`${i.toString().padStart(2,"0")}:00`
);

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

<a href="/clases" className="block hover:text-green-400">
📅 Clases
</a>

<a href="/horarios" className="block text-green-400 font-bold">
🗓️ Horarios
</a>

</nav>

</aside>



<section className="flex-1 p-10">


<h1 className="text-4xl font-bold text-black mb-8">
🗓️ Horarios de profesores
</h1>



<div className="bg-white rounded-2xl shadow p-6">


<select
value={dia}
onChange={(e)=>setDia(e.target.value)}
className="w-full border p-3 rounded-xl mb-3 text-black"
>

{dias.map(d=>
<option key={d}>{d}</option>
)}

</select>



<select
value={hora}
onChange={(e)=>setHora(e.target.value)}
className="w-full border p-3 rounded-xl mb-3 text-black"
>

{horas.map(h=>
<option key={h}>{h}</option>
)}

</select>



<select
value={entrenador}
onChange={(e)=>setEntrenador(e.target.value)}
className="w-full border p-3 rounded-xl mb-5 text-black"
>

<option value="">
Seleccionar profesor
</option>


{entrenadores.map((e,index)=>
<option key={index}>
{e.nombre}
</option>
)}

</select>



<button
onClick={guardarHorario}
className="bg-green-600 text-white px-6 py-3 rounded-xl w-full"
>

{editando!==null ? "Guardar cambios":"Asignar horario"}

</button>


</div>



<div className="bg-white rounded-2xl shadow p-6 mt-8">


<h2 className="text-2xl font-bold text-black mb-5">
Horarios asignados
</h2>


{horarios.length===0 && (

<p className="text-zinc-600">
Todavía no hay horarios cargados.
</p>

)}



{horarios.map((h,index)=>(

<div key={index} className="border-b py-4 flex justify-between">


<div>

<p className="font-bold text-black">
{h.dia} - {h.hora}
</p>

<p className="text-zinc-600">
🏋️ {h.entrenador}
</p>

</div>


<div className="flex gap-2">


<button
onClick={()=>editarHorario(index)}
className="bg-blue-600 text-white px-4 py-2 rounded-xl"
>
✏️ Editar
</button>


<button
onClick={()=>eliminarHorario(index)}
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