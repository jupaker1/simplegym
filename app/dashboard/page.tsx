"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [clientes,setClientes] = useState(0);
  const [pagos,setPagos] = useState(0);
  const [entrenadores,setEntrenadores] = useState(0);
  const [clases,setClases] = useState(0);
  const [ingresos,setIngresos] = useState(0);


  useEffect(()=>{

    const clientesData = JSON.parse(localStorage.getItem("clientes") || "[]");
    const pagosData = JSON.parse(localStorage.getItem("pagos") || "[]");
    const entrenadoresData = JSON.parse(localStorage.getItem("entrenadores") || "[]");
    const clasesData = JSON.parse(localStorage.getItem("clases") || "[]");


    setClientes(clientesData.length);
    setPagos(pagosData.length);
    setEntrenadores(entrenadoresData.length);
    setClases(clasesData.length);


    const total = pagosData.reduce(
      (suma:any,pago:any)=> suma + Number(pago.monto || 0),
      0
    );

    setIngresos(total);


  },[]);



return (

<main className="min-h-screen bg-zinc-100 flex">


<aside className="w-64 bg-black text-white p-6">


<h1 className="text-2xl font-bold mb-10">
Simple Gym 💪
</h1>


<nav className="space-y-5">


<a href="/dashboard" className="block text-green-400 font-bold">
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


</nav>


</aside>





<section className="flex-1 p-10">


<h1 className="text-4xl font-bold text-black mb-2">
Dashboard
</h1>


<p className="text-zinc-600 mb-8">
Bienvenido al panel de administración del gimnasio.
</p>





<div className="grid grid-cols-4 gap-6 mb-8">



<div className="bg-white rounded-2xl shadow border p-6">

<p className="text-zinc-700 font-bold">
👥 Socios
</p>

<h2 className="text-4xl font-bold text-black mt-3">
{clientes}
</h2>

<p className="text-zinc-500">
Registrados
</p>

</div>





<div className="bg-white rounded-2xl shadow border p-6">

<p className="text-zinc-700 font-bold">
💰 Ingresos
</p>

<h2 className="text-3xl font-bold text-black mt-3">
${ingresos}
</h2>

<p className="text-zinc-500">
Este mes
</p>

</div>





<div className="bg-white rounded-2xl shadow border p-6">

<p className="text-zinc-700 font-bold">
🏋️ Entrenadores
</p>

<h2 className="text-4xl font-bold text-black mt-3">
{entrenadores}
</h2>

<p className="text-zinc-500">
Equipo
</p>

</div>





<div className="bg-white rounded-2xl shadow border p-6">

<p className="text-zinc-700 font-bold">
📅 Clases
</p>

<h2 className="text-4xl font-bold text-black mt-3">
{clases}
</h2>

<p className="text-zinc-500">
Programadas
</p>

</div>


</div>





<div className="grid grid-cols-2 gap-6">



<a
href="/clientes"
className="bg-white rounded-2xl shadow border p-6 hover:shadow-xl"
>

<h2 className="text-2xl font-bold text-black mb-2">
👥 Clientes
</h2>

<p className="text-zinc-600">
Administrá los socios del gimnasio.
</p>

</a>





<a
href="/pagos"
className="bg-white rounded-2xl shadow border p-6 hover:shadow-xl"
>

<h2 className="text-2xl font-bold text-black mb-2">
💰 Pagos
</h2>

<p className="text-zinc-600">
Controlá cuotas e ingresos.
</p>

</a>





<a
href="/entrenadores"
className="bg-white rounded-2xl shadow border p-6 hover:shadow-xl"
>

<h2 className="text-2xl font-bold text-black mb-2">
🏋️ Entrenadores
</h2>

<p className="text-zinc-600">
Gestioná tu equipo.
</p>

</a>





<a
href="/clases"
className="bg-white rounded-2xl shadow border p-6 hover:shadow-xl"
>

<h2 className="text-2xl font-bold text-black mb-2">
📅 Clases
</h2>

<p className="text-zinc-600">
Organizá horarios.
</p>

</a>



</div>



</section>


</main>

);

}