import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import AppLayout from './layouts/AppLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/miembros" element={<ComingSoon title="Miembros" />} />
          <Route path="/marcar-entrada" element={<ComingSoon title="Marcar Entrada" />} />
          <Route path="/control-ingreso" element={<ComingSoon title="Control de Ingreso" />} />
          <Route path="/asistencias" element={<ComingSoon title="Registro de Asistencias" />} />
          <Route path="/tareas" element={<ComingSoon title="Tareas del Día" />} />
          <Route path="/calendario" element={<ComingSoon title="Calendario" />} />
          <Route path="/comunicaciones" element={<ComingSoon title="Comunicaciones" />} />
          <Route path="/reportes" element={<ComingSoon title="Reportes" />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}