/* eslint-disable arrow-body-style */
import { DateCalendar } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import * as React from 'react'

const Calendar = ({ onDateChange }: any) => {
  const handleDateChange = (date: any) => {
    onDateChange(date)
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div
          style={{
            textAlign: 'center',
            width: 300,
            transform: `scale(${1.9})`,
          }}
        >
          <style>
            {`
              .Mui-selected {
              background-color: #fa4616 !important;
              color: white !important;
              }
            `}
          </style>
          <DateCalendar
            onChange={handleDateChange}
            // sx={{
            //   color: 'red',
            //   backgroundColor: 'orange', // Background color for selected date
            // }}
          />
        </div>
      </LocalizationProvider>
    </div>
  )
}

export default Calendar
