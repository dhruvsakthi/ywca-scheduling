import { Alert, Box, Snackbar, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { createVendor } from 'api/vendor'
import Appbar from 'components/Appbar'
import ColorButton from 'components/ColorButton'
import DateFieldValue from 'components/DateField'

import type { SyntheticEvent } from 'react'

const containerStyle = {
  backgroundColor: '#f2f2f2', // Gray background
  padding: '20px', // Add some padding
  margin: '0 auto', // Center the container horizontally
  maxWidth: '1400px', // Limit the width of the container change to 1400
}

const containerStyle2 = {
  backgroundColor: '#FFFFFF', // Gray background
  padding: '20px', // Add some padding
  margin: '0 auto', // Center the container horizontally
  maxWidth: '1400px', // Limit the width of the container
}

const DivPadding = {
  padding: '60px', // Add padding to the first div
}

const buttonsDivStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  paddingBottom: '20px', // Add padding to the bottom
}

const FinePrintPage: React.FC = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    signature: '',
  })

  const [open, setOpen] = React.useState(false)

  const showAlert = () => {
    setOpen(true)
  }

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setData((prevData: any) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      }
      return updatedData
    })
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (data.signature.length > 0) {
      const formData = sessionStorage.getItem('formData')
      const tierData = sessionStorage.getItem('tierData')
      const form = formData ? JSON.parse(formData) : ''
      const tier = tierData ? JSON.parse(tierData) : ''
      const vendorData = {
        contactName: form.name,
        vendorName: form.businessName,
        street: form.street,
        city: form.city,
        state: form.state,
        zip: form.zip,
        email: form.email,
        phone: form.phone,
        description: form.description,
        numAttendees: form.numAttendees,
        insurance: form.insurance,
        dryStorage: tier.dryStorage,
        numFridges: tier.numFridges,
        numFreezers: tier.numFreezers,
        tier: tier.tier,
        january: tier.months.January,
        february: tier.months.February,
        march: tier.months.March,
        april: tier.months.April,
        may: tier.months.May,
        june: tier.months.June,
        july: tier.months.July,
        august: tier.months.August,
        september: tier.months.September,
        october: tier.months.October,
        november: tier.months.November,
        december: tier.months.December,
        signature: data.signature,
      }
      sessionStorage.clear()
      createVendor(vendorData)
      navigate('/Page')
    } else {
      showAlert()
    }
  }

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="standard"
          sx={{ width: '100%' }}
        >
          Please enter a digital signature beforing submitting.
        </Alert>
      </Snackbar>
      <Appbar />
      <div style={DivPadding}>
        <h1 style={{ textAlign: 'center' }}>
          YWCA Greater Lafayette Kitchen Rental Contract
        </h1>
        <div style={containerStyle}>
          <p>
            <strong>1. PAYMENT TERMS: </strong>
            Payments are due at the beginning of each month. Payments may be
            made by Cash, Check, or Credit Card. Online payments are available
            as invoices will be sent out via email by our Finance Department at
            the beginning of each month. The due date is typically the 15th of
            each month. If the final balance is not paid in an acceptable amount
            of time, this contract may be deemed breached, and your spot may be
            forfeited due to default of payment.
          </p>
          <p>
            <strong>2. SECURITY/SAFETY: </strong>
            YWCA Greater Lafayette is a locked and secured building. While
            utilizing the facility, it is the renter’s responsibility to uphold
            this security. All doors must remain locked and not propped open at
            any time. All levels of vendors are required to schedule rental time
            in the kitchen prior to use. Level 1 vendors will need to enter
            through the front doors and will not be issued a key fob. Level 2
            and 3 vendors will be able to enter the building through the
            culinary doors via a key fob issued to them or through the front
            doors during regular business hours.
          </p>
          <p>
            <strong>3. PROMOTING: </strong>
            The Renting Group may not imply in its advertising that YWCA
            sponsors the Renting Group. Any fliers or advertisements on which
            YWCA name appears must be approved by YWCA prior to circulation.
            Violation of this clause could result in cancellation of this
            contract.
          </p>
          <p>
            <strong>4. INSPECTION AND LIABILITY: </strong>
            YWCA assumes neither responsibility nor liability for any illnesses
            or injuries to persons or property which may result from the use of
            YWCA facilities by the Renting Group. The Renting Group agrees to be
            fully responsible and to indemnify and hold harmless YWCA from any
            claim or judgment for any loss, damage, and reasonable costs,
            attorney’s fees, and expenses which YWCA may suffer or sustain by
            reason of the use of YWCA facilities by the Renting Group.
          </p>
          <p>
            <strong>5. CLEAN UP: </strong>
            The Renting Group must be respectful of the spaces provided to them,
            keeping in mind that YWCA staff, donors and other vendors will be
            using and/or viewing these spaces. When totaling the needed kitchen
            hours, the renter must include time needed to clean up all areas
            used. The kitchen spaces must be swept, mopped and all surfaces
            wiped down in order for it to be ready to use by the next vendor.
            Trash and recycling must be bagged and placed in the appropriate
            receptacles outside.
          </p>
          <p>
            <strong>6. MISCELLANEOUS: </strong>
            This contract shall be binding on the parties and their respective
            heirs, personal representatives and assigns. This Contract shall be
            interpreted in accordance with the laws of the State of Indiana. Any
            legal or equitable action arising out of this contract shall be
            brought in any court of competent subject matter jurisdiction in
            Tippecanoe County, Indiana, and the parties hereby agree to submit
            to the personal jurisdiction and venue of said court. Rental groups
            signing this annual contract will be responsible for the balance of
            this signed agreement, even if they choose to not utilize the space
            for the remainder of the contract.
          </p>
          <p>
            <strong>7. EQUIPMENT: </strong>
            YWCA facilities are provided to the Renting Group on an as-available
            basis. Equipment shall be provided to the Renting Group at the sole
            discretion of YWCA. No promise is made that any specific equipment
            will be available on the date and time requested by the Renting
            Group. YWCA reserves the right to make any scheduling changes
            reasonably necessary to insure the safe and efficient operations of
            the YWCA facility. YWCA also reserves the right to end this
            agreement for any reason. YWCA will provide the renting group with a
            written notice at least 45 days before ending this agreement.
          </p>
        </div>
        <div style={containerStyle2}>
          <p>
            IN WITNESS WHEREOF the parties hereto have executed this agreement
            by their duly authorized representatives and have caused this
            agreement to become effective as of the date first above written.
          </p>
          <p>
            USER AGREES BY HIS/HER SIGNATURE ON THE FACE HEREOF THAT HE/SHE HAS
            READ AND IS AWARE OF THE TERMS AND CONDITIONS CONCERNING THE USE OF
            THE FACILITY AND ACCEPTS FULL RESPONSIBILITY HEREIN.
          </p>
          <p>
            Signature by YWCA or YWCA authorized representatives shall be
            regarded as acceptance by YWCA of the above reservation for the
            User’s function.
          </p>
          <p>
            <br />
            <strong> YWCA Greater Lafayette </strong>
          </p>
          <p> By: Lindsey Mickler, YWCA</p>
        </div>
        <div style={containerStyle2}>
          <Box
            component="form"
            sx={{
              backgroundColor: '#ffffff',
              maxWidth: '200px',
            }}
            noValidate
            autoComplete="off"
          >
            <DateFieldValue />
          </Box>
          <Box
            component="form"
            sx={{
              backgroundColor: '#ffffff',
              margin: '0',
              marginTop: '20px',
              maxWidth: '200px',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Signature"
              variant="outlined"
              fullWidth
              required
              name="signature"
              color="warning"
              value={data.signature}
              onChange={handleChange}
              InputProps={{
                style: {
                  backgroundColor: 'white',
                  width: '200px',
                },
              }}
            />
          </Box>
        </div>
      </div>
      <div style={buttonsDivStyle}>
        <a
          href="./form2"
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
            Back
          </ColorButton>
        </a>
        <a
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
            onClick={handleSubmit}
          >
            Next
          </ColorButton>
        </a>
      </div>
    </div>
  )
}

export default FinePrintPage
