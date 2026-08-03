export default function Dashboard() {
  return (
    <main className="min-h-screen bg-zinc-100 flex">

      <aside className="w-64 bg-black text-white p-6">

        <h1 className="text-2xl font-bold mb-8">
          FITNESS GYM 💪
        </h1>

        <nav className="space-y-4">

          <a href="/dashboard" className="block hover:text-gray-300">
            🏠 Inicio
          </a>

          <a href="/clientes" className="block hover:text-gray-300">
            👥 Clientes
          </a>

          <a href="/pagos" className="block hover:text-gray-300">
            💰 Pagos
          </a>

          <a href="/entrenadores" className="block hover:text-gray-300">
            🏋️ Entrenadores
          </a>

          <a href="/clases" className="block hover:text-gray-300">
            📅 Clases
          </a>

        </nav>

      </aside>



      <section className="flex-1 p-8">

        <h2 className="text-4xl font-bold mb-2">
          Dashboard
        </h2>

        <p className="text-zinc-600 mb-8">
          Bienvenido al panel de administración de tu gimnasio.
        </p>



        <div className="grid grid-cols-4 gap-6 mb-8">


          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-zinc-500">
              Clientes
            </p>

            <h3 className="text-4xl font-bold mt-2">
              1
            </h3>

            <p className="text-sm text-zinc-500">
              Socios registrados
            </p>
          </div>



          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-zinc-500">
              Ingresos
            </p>

            <h3 className="text-4xl font-bold mt-2">
              $0
            </h3>

            <p className="text-sm text-zinc-500">
              Este mes
            </p>
          </div>



          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-zinc-500">
              Pagos pendientes
            </p>

            <h3 className="text-4xl font-bold mt-2">
              0
            </h3>

            <p className="text-sm text-zinc-500">
              Socios con deuda
            </p>
          </div>



          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-zinc-500">
              Clases hoy
            </p>

            <h3 className="text-4xl font-bold mt-2">
              0
            </h3>

            <p className="text-sm text-zinc-500">
              Programadas
            </p>
          </div>


        </div>



        <div className="grid grid-cols-2 gap-6">


          <a
            href="/clientes"
            className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition"
          >

            <h3 className="text-2xl font-bold mb-2">
              👥 Gestionar clientes
            </h3>

            <p className="text-zinc-600">
              Agregá socios, editá información y controlá sus datos.
            </p>

          </a>




          <a
            href="/pagos"
            className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition"
          >

            <h3 className="text-2xl font-bold mb-2">
              💰 Control de pagos
            </h3>

            <p className="text-zinc-600">
              Revisá pagos realizados y pendientes.
            </p>

          </a>



          <a
            href="/entrenadores"
            className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition"
          >

            <h3 className="text-2xl font-bold mb-2">
              🏋️ Equipo
            </h3>

            <p className="text-zinc-600">
              Administrá tus entrenadores.
            </p>

          </a>



          <a
            href="/clases"
            className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition"
          >

            <h3 className="text-2xl font-bold mb-2">
              📅 Clases
            </h3>

            <p className="text-zinc-600">
              Organizá horarios y actividades.
            </p>

          </a>


        </div>


      </section>

    </main>
  );
}