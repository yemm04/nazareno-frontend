import { useState } from 'react'
import { Plus, Clock, Trash2, CheckCircle2 } from 'lucide-react'
import { useTasks } from '../context/TasksContext'
import { useMembers, useCurrentUser } from '../context/MembersContext'
import { formatFecha } from '../utils/dates'

const TIEMPOS = ['15 min', '30 min', '1 hora', '2 horas', 'Medio día', 'Todo el día']
const emptyForm = { titulo: '', descripcion: '', fecha: new Date().toISOString().slice(0, 10), tiempoEstimado: TIEMPOS[0] }

export default function Tareas() {
  const { tasks, addTask, takeTask, completeTask, removeTask } = useTasks()
  const { members } = useMembers()
  const currentUser = useCurrentUser()

  const [tab, setTab] = useState('pendientes')
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(emptyForm)

  const visibleTasks = tasks.filter((t) => (tab === 'pendientes' ? t.estado === 'PENDIENTE' : t.estado === 'COMPLETADA'))
  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.titulo.trim()) return
    addTask(form)
    setForm(emptyForm)
    setShowForm(false)
  }

  const memberName = (id) => {
    const m = members.find((mm) => mm.id === id)
    return m ? `${m.nombre} ${m.apellido}` : '—'
  }

  return (
    <>
      <div className="flex items-center justify-between mb-1">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tareas del día</h1>
          <p className="text-sm text-gray-400">Elige la tarea en la que trabajarás, o crea una nueva para el equipo.</p>
        </div>
        <button onClick={() => setShowForm((v) => !v)} className="flex items-center gap-2 bg-purple-950 hover:bg-purple-900 text-white text-sm font-semibold px-4 py-2.5 rounded-lg">
          <Plus size={16} />
          Nueva tarea
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mt-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
            <input value={form.titulo} onChange={handleChange('titulo')} placeholder="Ej: Organizar archivador de matrículas" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-800" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descripción (opcional)</label>
            <textarea value={form.descripcion} onChange={handleChange('descripcion')} rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-800" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
              <input type="date" value={form.fecha} onChange={handleChange('fecha')} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tiempo estimado</label>
              <select value={form.tiempoEstimado} onChange={handleChange('tiempoEstimado')} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm">
                {TIEMPOS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-1">
            <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50">Cancelar</button>
            <button type="submit" className="bg-purple-950 hover:bg-purple-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg">Crear tarea</button>
          </div>
        </form>
      )}

      <div className="flex gap-1 mt-6 mb-5 bg-white rounded-lg border border-gray-200 p-1 max-w-xs">
        <button onClick={() => setTab('pendientes')} className={`flex-1 text-sm font-medium py-2 rounded-md ${tab === 'pendientes' ? 'bg-purple-950 text-white' : 'text-gray-500'}`}>Pendientes</button>
        <button onClick={() => setTab('completadas')} className={`flex-1 text-sm font-medium py-2 rounded-md ${tab === 'completadas' ? 'bg-purple-950 text-white' : 'text-gray-500'}`}>Completadas</button>
      </div>

      <div className="space-y-4">
        {visibleTasks.map((t) => (
          <div key={t.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-start justify-between">
              <h3 className="font-bold text-gray-900">{t.titulo}</h3>
              <button onClick={() => removeTask(t.id)} className="text-gray-300 hover:text-red-500">
                <Trash2 size={16} />
              </button>
            </div>
            {t.descripcion && <p className="text-sm text-gray-500 mt-1">{t.descripcion}</p>}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-3">
              <Clock size={14} />
              {t.tiempoEstimado} · {formatFecha(t.fecha)}
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
              {t.estado === 'COMPLETADA' ? (
                <span className="flex items-center gap-1.5 text-sm text-green-700 font-medium">
                  <CheckCircle2 size={16} />
                  Completada por {memberName(t.tomadaPor)}
                </span>
              ) : t.tomadaPor ? (
                <>
                  <span className="text-sm text-gray-500">Tomada por <strong className="text-gray-800">{memberName(t.tomadaPor)}</strong></span>
                  <button onClick={() => completeTask(t.id)} className="text-xs font-semibold text-white bg-purple-950 hover:bg-purple-900 px-3.5 py-2 rounded-lg">
                    Marcar como completada
                  </button>
                </>
              ) : (
                <>
                  <span className="text-sm text-gray-400">Nadie ha tomado esta tarea todavía.</span>
                  <button onClick={() => currentUser && takeTask(t.id, currentUser.id)} className="text-xs font-semibold text-white bg-green-600 hover:bg-green-700 px-3.5 py-2 rounded-lg">
                    Tomar tarea
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
        {visibleTasks.length === 0 && (
          <p className="text-center text-gray-400 text-sm py-10 bg-white rounded-xl border border-gray-100">
            {tab === 'pendientes' ? 'No hay tareas pendientes.' : 'Nadie ha completado tareas todavía.'}
          </p>
        )}
      </div>
    </>
  )
}