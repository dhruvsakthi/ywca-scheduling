import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateField } from '@mui/x-date-pickers/DateField'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import * as React from 'react'

const today = dayjs()
// const yesterday = dayjs().subtract(1, 'day');
// const tomorrow = dayjs().add(1, 'day');

export default function DateFieldValue() {
  //   const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'))

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField', 'DateField']}>
        <DateField
          label="Current Day"
          defaultValue={today}
          disableFuture
          color="warning"
          required
          minDate={today}
          maxDate={today}
        />
      </DemoContainer>
    </LocalizationProvider>
  )
}
