
import { createContext, useContext, useState } from 'react'

const TasksContext = createContext(null)

const initialTasks = [
  {
    id: 1,
    titulo: 'Actualizar el estado de asistencias en días sin turno',
    descripcion: 'Revisar el módulo de asistencias para que refleje correctamente los días en los que un practicante no tiene horario asignado.',
    fecha: new Date().toISOString().slice(0, 10),
    tiempoEstimado: '2 horas',
    estado: 'PENDIENTE',
    tomadaPor: null,
  },
]

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks)

  const addTask = (data) => {
    const nueva = { id: Date.now(), estado: 'PENDIENTE', tomadaPor: null, ...data }
    setTasks((prev) => [nueva, ...prev])
    return nueva
  }

  const takeTask = (taskId, memberId) => {
    setTasks((prev) => prev.map((t) => (t.id === taskId ? { ...t, tomadaPor: memberId } : t)))
  }

  const completeTask = (taskId) => {
    setTasks((prev) => prev.map((t) => (t.id === taskId ? { ...t, estado: 'COMPLETADA' } : t)))
  }

  const removeTask = (taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId))
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, takeTask, completeTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const ctx = useContext(TasksContext)
  if (!ctx) throw new Error('useTasks debe usarse dentro de <TasksProvider>')
  return ctx
}