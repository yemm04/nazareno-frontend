import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [codigo, setCodigo] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!codigo || !password) {
      setError('Completa tu código de usuario y contraseña.')
      return
    }

    setLoading(true)
    try {
      const data = await login(codigo, password)
      navigate(data.rol === 'ADMIN' ? '/dashboard' : '/marcar-entrada')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Panel izquierdo - branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-purple-950 items-center justify-center relative overflow-hidden">
        <div className="text-center px-10 z-10">
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            PORTAL DE
            <br />
            <span className="italic">ASISTENCIAS</span>
          </h1>
          <p className="text-amber-300 mt-4 text-lg">Colegio El Nazareno</p>
        </div>
      </div>

      {/* Panel derecho - formulario */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8">
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-2 mb-8">
            <span className="font-extrabold text-xl">
              PORTAL DE <span className="text-purple-800">ASISTENCIAS</span>
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-1">¡Hola!</h2>
          <p className="text-gray-500 mb-6">
            Ingresa tus datos para <span className="font-semibold">iniciar sesión</span>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Código de Usuario
              </label>
              <input
                type="text"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                placeholder="Ingresa tu usuario"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <p className="text-xs text-gray-400 mt-1">
                Ejemplo de usuario: P12345 o C12345
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-700 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-6 9.75-6 9.75 6 9.75 6-3.75 6-9.75 6-9.75-6-9.75-6Z" />
                      <circle cx="12" cy="12" r="2.5" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.58 10.59a2 2 0 0 0 2.83 2.83M9.88 5.08A10.84 10.84 0 0 1 12 4.88c6 0 9.75 6 9.75 6a17.42 17.42 0 0 1-3.26 3.78M6.23 6.23C3.62 7.84 2.25 10.88 2.25 10.88s3.75 6 9.75 6c1.1 0 2.11-.2 3.02-.52" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-purple-950 font-semibold py-3 rounded-lg transition-colors"
            >
              {loading ? 'Ingresando...' : 'Iniciar sesión'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}