// Franjas recurrentes semanales (mock). Cuando conectes tu Excel real de
// disponibilidad, esto se reemplaza por datos reales con la misma forma:
// { memberId, dia, modalidad, horaInicio, horaFin }
export const mockSchedule = [
  { id: 1, memberId: 1, dia: 'LUN', modalidad: 'PRESENCIAL', horaInicio: '08:00', horaFin: '13:00' },
  { id: 2, memberId: 2, dia: 'LUN', modalidad: 'PRESENCIAL', horaInicio: '09:00', horaFin: '14:00' },
  { id: 3, memberId: 3, dia: 'LUN', modalidad: 'VIRTUAL', horaInicio: '08:00', horaFin: '12:00' },

  { id: 4, memberId: 1, dia: 'MAR', modalidad: 'PRESENCIAL', horaInicio: '08:00', horaFin: '13:00' },
  { id: 5, memberId: 2, dia: 'MAR', modalidad: 'PRESENCIAL', horaInicio: '09:00', horaFin: '14:00' },
  { id: 6, memberId: 4, dia: 'MAR', modalidad: 'PRESENCIAL', horaInicio: '09:00', horaFin: '13:00' },

  { id: 7, memberId: 1, dia: 'MIE', modalidad: 'PRESENCIAL', horaInicio: '08:00', horaFin: '13:00' },
  { id: 8, memberId: 2, dia: 'MIE', modalidad: 'PRESENCIAL', horaInicio: '09:00', horaFin: '14:00' },
  { id: 9, memberId: 3, dia: 'MIE', modalidad: 'VIRTUAL', horaInicio: '08:00', horaFin: '12:00' },

  { id: 10, memberId: 1, dia: 'JUE', modalidad: 'PRESENCIAL', horaInicio: '08:00', horaFin: '13:00' },
  { id: 11, memberId: 2, dia: 'JUE', modalidad: 'PRESENCIAL', horaInicio: '09:00', horaFin: '14:00' },
  { id: 12, memberId: 4, dia: 'JUE', modalidad: 'PRESENCIAL', horaInicio: '09:00', horaFin: '13:00' },

  { id: 13, memberId: 1, dia: 'VIE', modalidad: 'PRESENCIAL', horaInicio: '08:00', horaFin: '13:00' },
  { id: 14, memberId: 2, dia: 'VIE', modalidad: 'PRESENCIAL', horaInicio: '09:00', horaFin: '14:00' },
  { id: 15, memberId: 3, dia: 'VIE', modalidad: 'VIRTUAL', horaInicio: '08:00', horaFin: '12:00' },

  { id: 16, memberId: 2, dia: 'SAB', modalidad: 'PRESENCIAL', horaInicio: '09:00', horaFin: '12:00' },
  { id: 17, memberId: 4, dia: 'SAB', modalidad: 'PRESENCIAL', horaInicio: '09:00', horaFin: '13:00' },

  // DOM: sin franjas — día libre
]