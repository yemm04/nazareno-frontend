export const ROLES = {
  PRACTICANTE: {
    id: 'PRACTICANTE',
    label: 'Practicante',
    prefix: 'P',
    badgeClass: 'bg-purple-100 text-purple-800',
  },
  COORDINADOR: {
    id: 'COORDINADOR',
    label: 'Coordinador',
    prefix: 'C',
    badgeClass: 'bg-amber-100 text-amber-800',
  },
  // Cuando agreguemos "Docente" o "Ingeniero" más adelante,
  // solo se añade una entrada aquí — nada más del código cambia.
}

export const ROLE_LIST = Object.values(ROLES)

export function getRoleByCodigo(codigo) {
  const prefix = codigo?.charAt(0)?.toUpperCase()
  return ROLE_LIST.find((r) => r.prefix === prefix) || null
}