import { createContext, useContext, useState } from 'react'

const AttendanceContext = createContext(null)

export function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

function nowTime() {
  return new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', hour12: false })
}

export function AttendanceProvider({ children }) {
  const [records, setRecords] = useState([])

  const getTodayRecord = (memberId) =>
    records.find((r) => r.memberId === memberId && r.fecha === todayISO())

  const markEntrada = (memberId, metodo = 'MANUAL') => {
    const existing = getTodayRecord(memberId)
    if (existing) return existing
    const nuevo = { id: Date.now(), memberId, fecha: todayISO(), horaEntrada: nowTime(), horaSalida: null, metodo }
    setRecords((prev) => [...prev, nuevo])
    return nuevo
  }

  const markSalida = (memberId) => {
    const existing = getTodayRecord(memberId)
    if (!existing || existing.horaSalida) return existing
    const actualizado = { ...existing, horaSalida: nowTime() }
    setRecords((prev) => prev.map((r) => (r.id === existing.id ? actualizado : r)))
    return actualizado
  }

  return (
    <AttendanceContext.Provider value={{ records, markEntrada, markSalida, getTodayRecord }}>
      {children}
    </AttendanceContext.Provider>
  )
}

export function useAttendance() {
  const ctx = useContext(AttendanceContext)
  if (!ctx) throw new Error('useAttendance debe usarse dentro de <AttendanceProvider>')
  return ctx
}