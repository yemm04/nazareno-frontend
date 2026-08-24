import { ROLES } from '../constants/roles'

export const AREAS = ['Tecnología', 'Administración', 'Psicología']

export const mockMembers = [
  { id: 1, codigo: 'P2601', nombre: 'Camila Fiorella', apellido: 'Huamán Torres', dni: '75841203', rol: ROLES.PRACTICANTE.id, area: 'Tecnología', fechaIngreso: '2026-03-10', estado: 'ACTIVO' },
  { id: 2, codigo: 'P2602', nombre: 'Diego Alonso', apellido: 'Vargas Ruiz', dni: '76932014', rol: ROLES.PRACTICANTE.id, area: 'Tecnología', fechaIngreso: '2026-03-10', estado: 'ACTIVO' },
  { id: 3, codigo: 'P2603', nombre: 'Rodrigo Sebastián', apellido: 'Chumpitaz León', dni: '74625198', rol: ROLES.PRACTICANTE.id, area: 'Tecnología', fechaIngreso: '2026-04-02', estado: 'ACTIVO' },
  { id: 4, codigo: 'P2604', nombre: 'Valeria Nicole', apellido: 'Espinoza Quiroz', dni: '77103456', rol: ROLES.PRACTICANTE.id, area: 'Administración', fechaIngreso: '2026-04-15', estado: 'ACTIVO' },
  { id: 5, codigo: 'C2601', nombre: 'Milagros Elena', apellido: 'Cárdenas Ponce', dni: '45298761', rol: ROLES.COORDINADOR.id, area: 'Tecnología', fechaIngreso: '2025-01-08', estado: 'ACTIVO' },
  { id: 6, codigo: 'C2602', nombre: 'Renzo Gabriel', apellido: 'Ortega Salas', dni: '43871209', rol: ROLES.COORDINADOR.id, area: 'Psicología', fechaIngreso: '2025-02-20', estado: 'ACTIVO' },
]