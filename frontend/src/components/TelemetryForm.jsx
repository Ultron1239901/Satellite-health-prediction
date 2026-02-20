import { useState } from "react"
import ResultCard from "./ResultCard"

const FIELDS = [
  { key: "battery_voltage", label: "Battery Voltage", range: "24–30 V" },
  { key: "battery_current", label: "Battery Current", range: "3–7 A" },
  { key: "temperature", label: "Temperature", range: "0–60 °C" },
  { key: "cpu_load", label: "CPU Load", range: "10–70 %" },
  { key: "sensor_error_rate", label: "Sensor Error Rate", range: "< 0.15" },
]

export default function TelemetryForm() {
  const [form, setForm] = useState({})
  const [result, setResult] = useState(null)

  const submit = async () => {
    const res = await fetch("https://satellite-health-prediction-q7a8.onrender.com/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        battery_voltage: Number(form.battery_voltage),
        battery_current: Number(form.battery_current),
        temperature: Number(form.temperature),
        cpu_load: Number(form.cpu_load),
        sensor_error_rate: Number(form.sensor_error_rate),
      })
    })
    setResult(await res.json())
  }

  return (
    <main className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

      <section className="panel p-10">
        <h2 className="text-xl font-bold tracking-widest text-cyan-300 glow-text mb-10">
          TELEMETRY INPUT PANEL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {FIELDS.map(f => (
            <div key={f.key} className="instrument">
              <div className="text-xs uppercase tracking-widest text-cyan-400">
                {f.label}
              </div>
              <div className="text-xs text-gray-400 mb-4">
                Normal Range: {f.range}
              </div>
              <input
                type="number"
                onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                className="w-full h-12 bg-black/60 border border-cyan-400/40 rounded-lg px-4 text-lg text-white focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          ))}
        </div>

        <button
          onClick={submit}
          className="mt-14 w-full py-4 bg-cyan-400 text-black font-extrabold tracking-widest rounded-xl hover:brightness-110"
        >
          ANALYZE SATELLITE STATUS
        </button>
      </section>

      <ResultCard result={result} />
    </main>
  )
}
