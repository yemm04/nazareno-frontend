import { createContext, useContext, useState } from 'react'
import { mockMembers as initialMembers } from '../data/mockMembers'
import { ROLES } from '../constants/roles'

const MembersContext = createContext(null)

export function MembersProvider({ children }) {
  const [members, setMembers] = useState(initialMembers)

  const addMember = (data) => {
    const roleConfig = ROLES[data.rol]
    const countWithRole = members.filter((m) => m.rol === data.rol).length
    const codigo = `${roleConfig.prefix}${2600 + countWithRole + 1}`
    const nuevo = { id: Date.now(), codigo, estado: 'ACTIVO', ...data }
    setMembers((prev) => [...prev, nuevo])
    return nuevo
  }

  const removeMember = (id) => {
    setMembers((prev) => prev.filter((m) => m.id !== id))
  }

  return (
    <MembersContext.Provider value={{ members, addMember, removeMember }}>
      {children}
    </MembersContext.Provider>
  )
}

export function useMembers() {
  const ctx = useContext(MembersContext)
  if (!ctx) throw new Error('useMembers debe usarse dentro de <MembersProvider>')
  return ctx
}

export function useCurrentUser() {
  const { members } = useMembers()
  return members.find((m) => m.rol === ROLES.COORDINADOR.id) || members[0] || null
}