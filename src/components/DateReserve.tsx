'use client'

import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'

export default function DateReserve() {
  const [date, setDate] = useState<Dayjs | null>(null)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={date}
        onChange={(newValue) => setDate(newValue)}
      />
    </LocalizationProvider>
  )
}
