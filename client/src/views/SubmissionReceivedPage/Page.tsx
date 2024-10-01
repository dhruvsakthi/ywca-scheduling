import React from 'react'

import Logo from './ywca-logo.jpg'

const KitchenRentalContract: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = '../Calendar' // Redirects to the calendar page
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>YWCA Greater Lafayette Kitchen Rental Contract</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              text-align: center;
            }
            .container {
              margin-top: 100px;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            #submitBtn {
              padding: 12px 24px;
              font-size: 16px;
              background-color: #ff4d07;
              color: white;
              border: none;
              border-radius: 20px;
              cursor: pointer;
              margin-top: 50px;
              margin-bottom: 20px;
            }
            #submitBtn:hover {
              background-color: #ff4d07;
            }
            h1 {
              margin-bottom: 200px;
            }
            #logo {
              width: 50px;
              height: 20px;
              margin-top: 20px;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <h1>YWCA Greater Lafayette Kitchen Rental Contract</h1>
          <p>
            Thank you for your submission! Please contact us for any more
            questions.
          </p>
          <button type="button" id="submitBtn" onClick={handleButtonClick}>
            Return to Calendar
          </button>
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
      </body>
    </html>
  )
}

export default KitchenRentalContract
