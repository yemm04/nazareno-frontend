import { Bell } from 'lucide-react'

export default function TopHeader({ userName = 'Administrador', userRole = 'Administrador' }) {
  return (
    <header className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100 print:hidden">
      <p className="text-gray-500">
        Bienvenido de nuevo, <span className="font-semibold text-gray-800">{userName}</span>
      </p>
      <div className="flex items-center gap-3">
        <button className="text-gray-500">
          <Bell size={20} />
        </button>
        <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-sm font-bold text-purple-900">
          {userName.charAt(0)}
        </div>
        <div className="text-sm leading-tight">
          <p className="font-semibold">{userName}</p>
          <p className="text-gray-400 text-xs">{userRole}</p>
        </div>
      </div>
    </header>
  )
}