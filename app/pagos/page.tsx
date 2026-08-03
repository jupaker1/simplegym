"use client";

import { useState, useEffect } from "react";

export default function Pagos() {
  const [pagos, setPagos] = useState<any[]>([]);

  const [cliente, setCliente] = useState("");
  const [plan, setPlan] = useState("Mensual");
  const [monto, setMonto] = useState("");
  const [vencimiento, setVencimiento] = useState("");
  const [metodo, setMetodo] = useState("Efectivo");
  const [estado, setEstado] = useState("Pagado");

  // Cargar pagos guardados
  useEffect(() => {
    const pagosGuardados = localStorage.getItem("pagos");

    if (pagosGuardados) {
      setPagos(JSON.parse(pagosGuardados));
    }
  }, []);

  // Guardar pagos automáticamente
  useEffect(() => {
    localStorage.setItem("pagos", JSON.stringify(pagos));
  }, [pagos]);

  function guardarPago() {
    if (!cliente || !monto) return;

    const nuevoPago = {
      cliente,
      plan,
      monto,
      vencimiento,
      metodo,
      estado,
    };

    setPagos([...pagos, nuevoPago]);

    setCliente("");
    setMonto("");
    setPlan("Mensual");
    setVencimiento("");
    setMetodo("Efectivo");
    setEstado("Pagado");
  }

  function eliminarPago(index: number) {
    if (!confirm("¿Eliminar este pago?")) return;

    const nuevosPagos = pagos.filter((_, i) => i !== index);

    setPagos(nuevosPagos);
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

          <a href="/pagos" className="block font-bold text-green-400">
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
          💰 Pagos
        </h1>

        <p className="text-zinc-600 mb-8">
          Administrá los pagos de los socios.
        </p>

        <div className="bg-white rounded-2xl shadow p-6 max-w-xl mb-8">
          <h2 className="text-xl font-bold text-black mb-5">
            Registrar pago
          </h2>

          <input
            placeholder="Cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            className="w-full border p-3 rounded-xl mb-3 text-black"
          />

          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full border p-3 rounded-xl mb-3 text-black"
          >
            <option>Mensual</option>
            <option>Trimestral</option>
            <option>Semestral</option>
            <option>Anual</option>
          </select>

          <input
            placeholder="Monto"
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            className="w-full border p-3 rounded-xl mb-3 text-black"
          />

          <input
            type="date"
            value={vencimiento}
            onChange={(e) => setVencimiento(e.target.value)}
            className="w-full border p-3 rounded-xl mb-3 text-black"
          />

          <select
            value={metodo}
            onChange={(e) => setMetodo(e.target.value)}
            className="w-full border p-3 rounded-xl mb-3 text-black"
          >
            <option>Efectivo</option>
            <option>Transferencia</option>
            <option>Tarjeta</option>
            <option>Mercado Pago</option>
          </select>

          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="w-full border p-3 rounded-xl mb-5 text-black"
          >
            <option>Pagado</option>
            <option>Pendiente</option>
          </select>

          <button
            onClick={guardarPago}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl w-full"
          >
            Guardar pago
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold text-black mb-6">
            Lista de pagos
          </h2>

          {pagos.length === 0 ? (
            <p className="text-zinc-600">
              No hay pagos registrados.
            </p>
          ) : (
            <div className="space-y-4">
              {pagos.map((pago, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-5 flex justify-between items-center"
                >
                  <div className="text-black space-y-1">
                    <p className="font-bold text-lg">
                      {pago.cliente}
                    </p>

                    <p>📋 Plan: {pago.plan}</p>
                    <p>💵 ${pago.monto}</p>
                    <p>📅 Vence: {pago.vencimiento}</p>
                    <p>💳 {pago.metodo}</p>

                    <p>
                      Estado:
                      <span
                        className={
                          pago.estado === "Pagado"
                            ? "text-green-600 font-bold"
                            : "text-red-600 font-bold"
                        }
                      >
                        {" "}
                        {pago.estado}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={() => eliminarPago(index)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl"
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