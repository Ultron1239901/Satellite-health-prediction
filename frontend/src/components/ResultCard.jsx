export default function ResultCard({ result }) {
  if (!result) {
    return (
      <section className="flex items-center justify-center bg-black/40 border border-dashed border-gray-600 rounded-2xl text-gray-400">
        Awaiting telemetry data…
      </section>
    )
  }

  const styles = {
    Healthy: {
      text: "text-green-400",
      border: "border-green-500/40",
      glow: "shadow-[0_0_70px_rgba(34,197,94,0.35)]"
    },
    "At Risk": {
      text: "text-yellow-400",
      border: "border-yellow-500/40",
      glow: "shadow-[0_0_70px_rgba(234,179,8,0.35)]"
    },
    Failure: {
      text: "text-red-500",
      border: "border-red-500/50",
      glow: "shadow-[0_0_90px_rgba(239,68,68,0.55)]"
    }
  }

  const s = styles[result.prediction]

  return (
    <section
      className={`
        bg-black/70 border-2 rounded-2xl p-12
        ${s.border} ${s.glow}
      `}
    >
      <h2 className="text-sm tracking-widest text-gray-400 mb-4">
        SYSTEM STATUS
      </h2>

      <div className={`text-5xl font-extrabold mb-8 ${s.text}`}>
        {result.prediction}
      </div>

      <p className="text-sm uppercase tracking-wider text-gray-400">
        Risk Confidence
      </p>

      <div className="text-3xl font-bold mt-2">
        {(result.risk_score * 100).toFixed(0)}%
      </div>

      <div className="mt-8 h-3 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${s.text}`}
          style={{ width: `${result.risk_score * 100}%` }}
        />
      </div>
    </section>
  )
}
