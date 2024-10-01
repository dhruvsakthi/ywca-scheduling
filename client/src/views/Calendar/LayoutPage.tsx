import { Box, Container } from '@mui/material'
import React, { useState } from 'react'

import Appbar from 'components/Appbar'
import Calendar from 'components/Calendar'
import ColorButton from 'components/ColorButton'
import Notes from 'components/Notes'

export default function LayoutPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  // Use this to access date info
  // {selectedDate ? selectedDate.toString() : 'None'}

  const handleDateChange = (date: Date) => {
    setSelectedDate(date) // Update the selected date in the state
  }
  return (
    <div>
      <Appbar />
      <Container
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          // borderRadius: '9.6px',
          // border: '2px solid red',
        }}
      >
        <Box
          sx={{
            // display: 'flex',
            minWidth: '30%',
            width: '60%',
            height: '650px',
            // borderRadius: '9.6px',
            // border: '2px solid red',
            padding: '10px',
            margin: '10px',
            // marginTop: '60px',
          }}
        >
          <Calendar onDateChange={handleDateChange} />
        </Box>
        <Box
          sx={{
            flex: '29',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '650px',
            width: '30%',
            // borderRadius: '9.6px',
            // border: '2px solid red',
          }}
        >
          <a
            href="./form1"
            target="_self"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <ColorButton
              sx={{
                display: 'flex',
                width: '400px',
                height: '55px',
                marginTop: '10px',
                // background: '#D9D9D9',
                borderRadius: '10px',
                // backgroundColor: '#fa4616',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              Request Approval
            </ColorButton>
          </a>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              padding: '10px',
              marginTop: '20px',
            }}
          >
            <Notes />
          </Box>
        </Box>
      </Container>

      <a
        href="./approval"
        target="_self"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <ColorButton
          sx={{
            width: '100px',
            height: '40px',
            margin: '0 10px',
            background: '#fa4616',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Approval Page
        </ColorButton>
      </a>
    </div>
  )
}
