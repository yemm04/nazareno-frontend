import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { MembersProvider } from './context/MembersContext'
import { AttendanceProvider } from './context/AttendanceContext'
import AppLayout from './layouts/AppLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Miembros from './pages/Miembros'
import NuevoMiembro from './pages/NuevoMiembro'
import MarcarEntrada from './pages/MarcarEntrada'
import RegistroAsistencias from './pages/RegistroAsistencias'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  return (
    <MembersProvider>
      <AttendanceProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/miembros" element={<Miembros />} />
              <Route path="/miembros/nuevo" element={<NuevoMiembro />} />
              <Route path="/marcar-entrada" element={<MarcarEntrada />} />
              <Route path="/control-ingreso" element={<ComingSoon title="Control de Ingreso" />} />
              <Route path="/asistencias" element={<RegistroAsistencias />} />
              <Route path="/tareas" element={<ComingSoon title="Tareas del Día" />} />
              <Route path="/calendario" element={<ComingSoon title="Calendario" />} />
              <Route path="/comunicaciones" element={<ComingSoon title="Comunicaciones" />} />
              <Route path="/reportes" element={<ComingSoon title="Reportes" />} />
            </Route>

            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </AttendanceProvider>
    </MembersProvider>
  )
}