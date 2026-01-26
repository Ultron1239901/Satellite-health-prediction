export default function Header() {
  return (
    <header className="bg-black/40 backdrop-blur-xl border-b border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <h1 className="text-4xl font-extrabold tracking-widest text-cyan-400">
          SATELLITE HEALTH MONITORING
        </h1>
        <p className="mt-2 text-sm uppercase tracking-wider text-gray-400">
          Mission telemetry • Failure risk prediction • ML powered
        </p>
      </div>
    </header>
  )
}
