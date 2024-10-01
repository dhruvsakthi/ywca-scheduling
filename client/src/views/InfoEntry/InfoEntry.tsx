import {
  Alert,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { createVendor } from 'api/vendor'
import Appbar from 'components/Appbar'
import ColorButton from 'components/ColorButton'

import type { SyntheticEvent } from 'react'

const initialFormData = {
  name: '',
  businessName: '',
  street: '',
  city: '',
  state: '',
  zip: null,
  email: '',
  phone: '',
  description: '',
  numAttendees: '',
  insurance: '',
}

const InfoEntry = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState(() => {
    const savedData = sessionStorage.getItem('formData')
    return savedData ? JSON.parse(savedData) : initialFormData
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
    setFormData((prevFormData: any) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: value,
      }
      sessionStorage.setItem('formData', JSON.stringify(updatedFormData))
      return updatedFormData
    })
  }

  const handlePhone = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    // Replace non-numeric characters with an empty string
    const numericValue = value.replace(/\D/g, '')
    // Limit phone number to 10 characters
    const limitedValue = numericValue.slice(0, 10)
    // Apply phone number formatting
    const formattedValue = formatPhoneNumber(limitedValue)
    setFormData((prevFormData: any) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: formattedValue,
      }
      sessionStorage.setItem('formData', JSON.stringify(updatedFormData))
      return updatedFormData
    })
  }

  const formatPhoneNumber = (phoneNumber: string) => {
    // Use regular expression to split phone number into groups
    const phoneNumberRegex = /^(\d{0,3})(\d{0,3})(\d{0,4})$/
    const match = phoneNumberRegex.exec(phoneNumber)
    // If no match, return empty string
    if (match) {
      return (
        match[1] +
        (match[2] ? '-' : '') +
        match[2] +
        (match[3] ? '-' : '') +
        match[3]
      )
    }
    return phoneNumber
  }

  const handleNext = (event: { preventDefault: () => void }) => {
    // Create a vendor with the given 'name' and 'businessName'
    event.preventDefault()

    const unfilledFields = Object.keys(formData).filter(
      (field) => !formData[field]
    )
    console.log('fields', unfilledFields)
    if (unfilledFields.length > 0) {
      showAlert()
    } else {
      navigate('/form2')
    }
  }

  const divStyle = {
    padding: '20px',
    marginLeft: '60px', // Add left margin
    marginRight: '60px', // Add right margin
  }

  const buttonsDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    paddingBottom: '20px', // Add padding to the bottom
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
          Please fill in all fields.
        </Alert>
      </Snackbar>
      <Appbar />
      <div style={divStyle}>
        <Typography variant="h5" align="center" padding={5}>
          YWCA Greater Lafayette Kitchen Rental Contract
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          gutterBottom
          style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}
        >
          * for required fields
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              color="warning"
              required
              fullWidth
              onChange={handleChange}
              value={formData.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Business Name"
              name="businessName"
              color="warning"
              required
              fullWidth
              onChange={handleChange}
              value={formData.businessName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Street Address"
              color="warning"
              name="street"
              required
              fullWidth
              onChange={handleChange}
              value={formData.street}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              fullWidth
              name="city"
              onChange={handleChange}
              color="warning"
              required
              value={formData.city}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="State"
              fullWidth
              name="state"
              onChange={handleChange}
              color="warning"
              required
              value={formData.state}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Zip Code"
              fullWidth
              name="zip"
              onChange={handleChange}
              color="warning"
              required
              value={formData.zip}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              fullWidth
              name="email"
              onChange={handleChange}
              color="warning"
              required
              value={formData.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              color="warning"
              required
              name="phone"
              fullWidth
              onChange={handlePhone}
              value={formData.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description of Kitchen Rental"
              fullWidth
              required
              name="description"
              multiline
              color="warning"
              rows={4}
              onChange={handleChange}
              value={formData.description}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Number of Attendees"
              color="warning"
              required
              name="numAttendees"
              fullWidth
              onChange={handleChange}
              value={formData.numAttendees}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Insurance Carrier Information"
              color="warning"
              name="insurance"
              required
              fullWidth
              onChange={handleChange}
              value={formData.insurance}
            />
          </Grid>
        </Grid>
      </div>
      <div style={buttonsDivStyle}>
        <a
          href="./calendar"
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
            onClick={handleNext}
          >
            Next
          </ColorButton>
        </a>
      </div>
    </div>
  )
}

export default InfoEntry
