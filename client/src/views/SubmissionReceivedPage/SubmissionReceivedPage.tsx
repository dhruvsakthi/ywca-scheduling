import React from 'react'

import Appbar from 'components/Appbar'
import ColorButton from 'components/ColorButton'

import Logo from './ywca-logo.jpg'

export default function SubmissionReceivedPage() {
  return (
    <div>
      <Appbar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingLeft: 250,
          paddingRight: 250,
          textAlign: 'center',
        }}
      >
        <h1>YWCA Greater Lafayette Kitchen Rental Contract</h1>
        <p>
          Thank you for your submission! We will contact you if your application
          is approved. Once approved, you will gain the ability to add
          reservation times to the calendar. Please contact us with any more
          questions.
        </p>
        <a
          href="./calendar"
          target="_self"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <ColorButton
            sx={{
              width: '200px',
              height: '40px',
              margin: '10px',
              background: '#fa4616',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Return to Calendar
          </ColorButton>
        </a>
        <img
          src={Logo}
          alt="YWCA logo"
          style={{
            maxHeight: '100px',
            verticalAlign: 'middle',
            margin: '20px',
          }}
        />
      </div>
    </div>
  )
}
