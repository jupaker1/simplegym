export default function Dashboard() {
  return (
    <main className="min-h-screen bg-zinc-100 flex">

      {/* MENÚ LATERAL */}
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

          <a href="#" className="block">
            ⚙️ Configuración
          </a>

        </nav>

      </aside>


      {/* CONTENIDO */}
      <section className="flex-1 p-8">

        <h2 className="text-4xl font-bold mb-2">
          Panel de administración
        </h2>

        <p className="text-zinc-500 mb-8">
          Controlá todo tu gimnasio desde un solo lugar.
        </p>


        <div className="grid grid-cols-2 gap-6">


          <a
            href="/clientes"
            className="bg-white p-6 rounded-2xl shadow block hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">
              👥 Clientes
            </h3>

            <p className="text-zinc-500">
              0 registrados
            </p>
          </a>



          <a
            href="/pagos"
            className="bg-white p-6 rounded-2xl shadow block hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">
              💰 Pagos
            </h3>

            <p className="text-zinc-500">
              $0 pendientes
            </p>
          </a>



          <a
            href="/entrenadores"
            className="bg-white p-6 rounded-2xl shadow block hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">
              🏋️ Entrenadores
            </h3>

            <p className="text-zinc-500">
              0 registrados
            </p>
          </a>



          <a
            href="/clases"
            className="bg-white p-6 rounded-2xl shadow block hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">
              📅 Clases
            </h3>

            <p className="text-zinc-500">
              0 programadas
            </p>
          </a>


        </div>

      </section>

    </main>
  );
}