"use client";

import { useEffect, useState } from "react";

export default function Clientes() {

const [clientes, setClientes] = useState<any[]>([]);
const [nombre, setNombre] = useState("");
const [telefono, setTelefono] = useState("");
const [email, setEmail] = useState("");
const [editando, setEditando] = useState<number | null>(null);


useEffect(()=>{

const guardados = localStorage.getItem("clientes");

if(guardados){
setClientes(JSON.parse(guardados));
}

},[]);


useEffect(()=>{

localStorage.setItem(
"clientes",
JSON.stringify(clientes)
);

},[clientes]);



function guardarCliente(){

if(!nombre){
alert("Ingresá un nombre");
return;
}


const cliente={
nombre,
telefono,
email
};


if(editando!==null){

setClientes(
clientes.map((c,index)=>
index===editando ? cliente : c
)
);

setEditando(null);

}else{

setClientes([
...clientes,
cliente
]);

}


limpiarFormulario();

}



function editarCliente(index:number){

const cliente=clientes[index];

setNombre(cliente.nombre);
setTelefono(cliente.telefono);
setEmail(cliente.email);

setEditando(index);

}



function eliminarCliente(index:number){

if(!confirm("¿Eliminar este cliente?")) return;

setClientes(
clientes.filter((_,i)=>i!==index)
);

}



function limpiarFormulario(){

setNombre("");
setTelefono("");
setEmail("");

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


<a href="/clientes" className="block font-bold text-green-400">
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


<a href="/horarios" className="block">
🗓️ Horarios
</a>


</nav>


</aside>



<section className="flex-1 p-8">


<h1 className="text-4xl font-bold text-black mb-2">
👥 Clientes
</h1>


<p className="text-zinc-600 mb-8">
Administrá los socios del gimnasio.
</p>



<div className="bg-white rounded-2xl shadow p-6 max-w-xl mb-8">


<h2 className="text-xl font-bold text-black mb-5">
{editando!==null ? "Editar socio" : "Nuevo socio"}
</h2>


<input
placeholder="Nombre"
value={nombre}
onChange={(e)=>setNombre(e.target.value)}
className="w-full border p-3 rounded-xl mb-3 text-black"
/>


<input
placeholder="Teléfono"
value={telefono}
onChange={(e)=>setTelefono(e.target.value)}
className="w-full border p-3 rounded-xl mb-3 text-black"
/>


<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border p-3 rounded-xl mb-5 text-black"
/>


<button
onClick={guardarCliente}
className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl w-full"
>
Guardar cliente
</button>


</div>



<div className="bg-white rounded-2xl shadow p-6">


<h2 className="text-xl font-bold text-black mb-6">
Lista de socios
</h2>



{clientes.length===0 ? (

<p className="text-zinc-600">
No hay clientes registrados.
</p>

):(


<div className="space-y-4">


{clientes.map((cliente,index)=>(


<div
key={index}
className="border rounded-xl p-5 flex justify-between items-center"
>


<div className="text-black">

<p className="font-bold text-lg">
{cliente.nombre}
</p>

<p>📱 {cliente.telefono}</p>

<p>📧 {cliente.email}</p>

</div>



<div className="space-x-2">


<button
onClick={()=>editarCliente(index)}
className="bg-blue-600 text-white px-4 py-2 rounded-xl"
>
✏️ Editar
</button>


<button
onClick={()=>eliminarCliente(index)}
className="bg-red-600 text-white px-4 py-2 rounded-xl"
>
🗑 Eliminar
</button>


</div>


</div>


))}


</div>

)}


</div>


</section>


</main>

);

}