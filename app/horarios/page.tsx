"use client";

import { useEffect, useState } from "react";

export default function Horarios(){

const [entrenadores,setEntrenadores] = useState<any[]>([]);
const [horarios,setHorarios] = useState<any[]>([]);

const [dia,setDia] = useState("Lunes");
const [hora,setHora] = useState("08:00");
const [entrenador,setEntrenador] = useState("");

const [editando,setEditando] = useState<number | null>(null);


useEffect(()=>{

const e = localStorage.getItem("entrenadores");
const h = localStorage.getItem("horarios");

if(e){
setEntrenadores(JSON.parse(e));
}

if(h){
setHorarios(JSON.parse(h));
}

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


const nuevo = {
dia,
hora,
entrenador
};



if(editando !== null){

setHorarios(
horarios.map((h,index)=>
index === editando ? nuevo : h
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

const h = horarios[index];

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
`${i}:00`
);

}



return (

<main className="min-h-screen bg-zinc-100 flex">


<aside className="w-64 bg-black text-white p-6">


<h1 className="text-2xl font-bold mb-10">
FITNESS GYM 💪
</h1>


<nav className="space-y-5">


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


<a href="/horarios" className="block text-green-400 font-bold">
🗓️ Horarios
</a>


</nav>


</aside>



<section className="flex-1 p-8">


<h1 className="text-4xl font-bold text-black mb-2">
🗓️ Horarios de profesores
</h1>


<p className="text-zinc-600 mb-8">
Organizá los horarios de entrenamiento.
</p>



<div className="bg-white rounded-2xl shadow p-6 max-w-xl mb-8">


<h2 className="text-xl font-bold text-black mb-5">
Asignar horario
</h2>



<select
value={dia}
onChange={(e)=>setDia(e.target.value)}
className="w-full border p-3 rounded-xl mb-3 text-black"
>

{
dias.map((d,index)=>(
<option key={index}>
{d}
</option>
))
}

</select>




<select
value={hora}
onChange={(e)=>setHora(e.target.value)}
className="w-full border p-3 rounded-xl mb-3 text-black"
>


{
horas.map((h,index)=>(
<option key={index}>
{h}
</option>
))
}


</select>





<select
value={entrenador}
onChange={(e)=>setEntrenador(e.target.value)}
className="w-full border p-3 rounded-xl mb-5 text-black"
>


<option value="">
Seleccionar profesor
</option>


{
entrenadores.map((e,index)=>(

<option key={index}>
{e.nombre}
</option>

))
}


</select>



<button
onClick={guardarHorario}
className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl w-full"
>

{
editando !== null
?
"Guardar cambios"
:
"Asignar horario"
}

</button>


</div>




<div className="bg-white rounded-2xl shadow p-6">


<h2 className="text-xl font-bold text-black mb-6">
Horarios asignados
</h2>



{
horarios.length===0 ?

<p className="text-zinc-600">
No hay horarios asignados.
</p>

:

<div className="space-y-4">


{
horarios.map((h,index)=>(


<div
key={index}
className="border rounded-xl p-5 flex justify-between items-center"
>


<div className="text-black">


<p className="font-bold text-lg">
{h.dia} - {h.hora}
</p>


<p>
🏋️ {h.entrenador}
</p>


</div>



<div className="space-x-2">


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


))
}


</div>

}


</div>


</section>


</main>

);

}