import { Outlet, Navigate } from 'react-router'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import TopHeader from '../components/TopHeader'

export default function AppLayout() {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopHeader />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}