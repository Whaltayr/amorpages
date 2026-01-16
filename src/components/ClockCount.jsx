import React, { useEffect, useState } from 'react'

export default function CountdownClock() {
  // calcula próximo 14 de Fevereiro (ou o deste ano se ainda não passou)
  const computeTarget = () => {
    const now = new Date()
    let year = now.getFullYear()
    // mês: 0-11 -> Fevereiro = 1; dia = 14
    const candidate = new Date(year, 1, 14, 0, 0, 0, 0)
    if (now > candidate) year = year + 1
    return new Date(year, 1, 14, 0, 0, 0, 0)
  }

  const [target] = useState(computeTarget)
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = target - new Date()
    return diff > 0 ? diff : 0
  })

  useEffect(() => {
    const id = setInterval(() => {
      const diff = target - new Date()
      setTimeLeft(diff > 0 ? diff : 0)
    }, 1000)
    return () => clearInterval(id)
  }, [target])

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)

  const two = n => String(n).padStart(2, '0')

  return (
    <div className="mt-8 max-w-3xl mx-auto px-6">
      <div className="inline-flex items-center gap-4 bg-pink-50 border border-pink-100 rounded-lg px-4 py-3 shadow-sm">
        <div className="text-sm text-grad2 font-medium">Faltam</div>

        <div className="flex items-baseline gap-4">
          <div className="text-center">
            <div className="text-2xl font-extrabold text-grad2">{days}</div>
            <div className="text-xs text-gray-500">dias</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-extrabold text-grad2">{two(hours)}</div>
            <div className="text-xs text-gray-500">horas</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-extrabold text-grad2">{two(minutes)}</div>
            <div className="text-xs text-gray-500">min</div>
          </div>
        </div>

        <div className="ml-4 text-xs text-gray-500">para o Dia dos Namorados</div>
      </div>
    </div>
  )
}
