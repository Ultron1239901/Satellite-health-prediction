import { useEffect, useRef } from "react"

export default function SpaceBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // ---- Stars ----
    const stars = Array.from({ length: 600 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5,
      a: Math.random(),
      speed: Math.random() * 0.05 + 0.02,
    }))

    // ---- Meteors ----
    const meteors = []

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background gradient
      const g = ctx.createRadialGradient(
        canvas.width * 0.7,
        canvas.height * 0.3,
        100,
        canvas.width * 0.7,
        canvas.height * 0.3,
        canvas.width
      )
      g.addColorStop(0, "#0b3c5d")
      g.addColorStop(1, "#020617")
      ctx.fillStyle = g
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Stars
      stars.forEach(s => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,220,${s.a})`
        ctx.fill()
        s.a += (Math.random() - 0.5) * 0.02
        s.y += s.speed
        if (s.y > canvas.height) s.y = 0
      })

      // Meteors
      if (Math.random() < 0.01) {
        meteors.push({
          x: Math.random() * canvas.width,
          y: -50,
          vx: -6,
          vy: 10,
          life: 60,
        })
      }

      meteors.forEach((m, i) => {
        ctx.strokeStyle = "rgba(0,243,255,0.8)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(m.x, m.y)
        ctx.lineTo(m.x - 30, m.y + 60)
        ctx.stroke()

        m.x += m.vx
        m.y += m.vy
        m.life--
        if (m.life <= 0) meteors.splice(i, 1)
      })

      requestAnimationFrame(draw)
    }

    draw()
    return () => window.removeEventListener("resize", resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  )
}
