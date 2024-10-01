import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Appbar from 'components/Appbar'
import ColorButton from 'components/ColorButton'

import type { SyntheticEvent } from 'react'

const buttonsDivStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  paddingBottom: '20px', // Add padding to the bottom
}

const initialTierData = {
  dryStorage: '',
  numFridges: '',
  numFreezers: '',
  tier: 0,
  months: {
    January: false,
    February: false,
    March: false,
    April: false,
    May: false,
    June: false,
    July: false,
    August: false,
    September: false,
    October: false,
    November: false,
    December: false,
  },
}

export default function LevelSelect() {
  const navigate = useNavigate()
  useEffect(() => {
    handleButtonClick(tierData.tier)
    Object.keys(tierData.months).forEach((month) => {
      handleCheckboxLvl2Change(month, tierData.months[month])
    })
  }, [])

  const [open, setOpen] = React.useState(false)
  const [alertMessage, setAlertMessage] = React.useState('')

  const showAlert = (message: string) => {
    setAlertMessage(message)
    setOpen(true)
  }

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const [boxOneClickable, setBoxOneClickable] = useState(false)
  const [boxTwoClickable, setBoxTwoClickable] = useState(false)
  const [boxThreeClickable, setBoxThreeClickable] = useState(false)

  const [tierData, setTierData] = useState(() => {
    const savedData = sessionStorage.getItem('tierData')
    return savedData ? JSON.parse(savedData) : initialTierData
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setTierData((prevTierData: any) => {
      const updatedTierData = {
        ...prevTierData,
        [name]: value,
      }
      sessionStorage.setItem('tierData', JSON.stringify(updatedTierData))
      return updatedTierData
    })
  }

  const handleCheckbox = (e: { target: { name: string; value: boolean } }) => {
    const { name, value } = e.target
    setTierData((prevTierData: any) => {
      const updatedTierData = {
        ...prevTierData,
        months: {
          ...prevTierData.months,
          [name]: value,
        },
      }
      sessionStorage.setItem('tierData', JSON.stringify(updatedTierData))
      return updatedTierData
    })
  }
  const handleNext = (event: { preventDefault: () => void }) => {
    // Create a vendor with the given 'name' and 'businessName'
    event.preventDefault()

    const unfilledFields = Object.keys(tierData).filter(
      (field) => !tierData[field]
    )
    console.log('fields', unfilledFields)
    if (unfilledFields.length > 0) {
      showAlert('Please fill in all fields.')
    } else {
      navigate('/form3')
    }
  }

  // level 2 checkboxes for monthly off-season storage
  const [checkboxLvl2JanChecked, setCheckboxLvl2JanChecked] = useState(false)
  const [checkboxLvl2FebChecked, setCheckboxLvl2FebChecked] = useState(false)
  const [checkboxLvl2MarChecked, setCheckboxLvl2MarChecked] = useState(false)
  const [checkboxLvl2AprChecked, setCheckboxLvl2AprChecked] = useState(false)
  const [checkboxLvl2MayChecked, setCheckboxLvl2MayChecked] = useState(false)
  const [checkboxLvl2JunChecked, setCheckboxLvl2JunChecked] = useState(false)
  const [checkboxLvl2JulChecked, setCheckboxLvl2JulChecked] = useState(false)
  const [checkboxLvl2AugChecked, setCheckboxLvl2AugChecked] = useState(false)
  const [checkboxLvl2SepChecked, setCheckboxLvl2SepChecked] = useState(false)
  const [checkboxLvl2OctChecked, setCheckboxLvl2OctChecked] = useState(false)
  const [checkboxLvl2NovChecked, setCheckboxLvl2NovChecked] = useState(false)
  const [checkboxLvl2DecChecked, setCheckboxLvl2DecChecked] = useState(false)

  // level 3 checkboxes for monthly off-season storage
  const [checkboxLvl3JanChecked, setCheckboxLvl3JanChecked] = useState(false)
  const [checkboxLvl3FebChecked, setCheckboxLvl3FebChecked] = useState(false)
  const [checkboxLvl3MarChecked, setCheckboxLvl3MarChecked] = useState(false)
  const [checkboxLvl3AprChecked, setCheckboxLvl3AprChecked] = useState(false)
  const [checkboxLvl3MayChecked, setCheckboxLvl3MayChecked] = useState(false)
  const [checkboxLvl3JunChecked, setCheckboxLvl3JunChecked] = useState(false)
  const [checkboxLvl3JulChecked, setCheckboxLvl3JulChecked] = useState(false)
  const [checkboxLvl3AugChecked, setCheckboxLvl3AugChecked] = useState(false)
  const [checkboxLvl3SepChecked, setCheckboxLvl3SepChecked] = useState(false)
  const [checkboxLvl3OctChecked, setCheckboxLvl3OctChecked] = useState(false)
  const [checkboxLvl3NovChecked, setCheckboxLvl3NovChecked] = useState(false)
  const [checkboxLvl3DecChecked, setCheckboxLvl3DecChecked] = useState(false)

  const handleButtonClick = (boxNumber: number) => {
    // disable the other two boxes when the button is clicked
    const value = {
      target: {
        name: 'tier',
        value: boxNumber,
      },
    }
    handleChange(value)
    if (boxNumber === 1) {
      setBoxOneClickable(true)
      setBoxTwoClickable(false)
      setBoxThreeClickable(false)
    } else if (boxNumber === 2) {
      setBoxOneClickable(false)
      setBoxTwoClickable(true)
      setBoxThreeClickable(false)
    } else if (boxNumber === 3) {
      setBoxOneClickable(false)
      setBoxTwoClickable(false)
      setBoxThreeClickable(true)
    }
  }

  const handleCheckboxLvl2Change = (month: string, checked: boolean) => {
    const data = {
      target: {
        name: month,
        value: checked,
      },
    }
    handleCheckbox(data)
    switch (month) {
      case 'January':
        setCheckboxLvl2JanChecked(checked)
        break
      case 'February':
        setCheckboxLvl2FebChecked(checked)
        break
      case 'March':
        setCheckboxLvl2MarChecked(checked)
        break
      case 'April':
        setCheckboxLvl2AprChecked(checked)
        break
      case 'May':
        setCheckboxLvl2MayChecked(checked)
        break
      case 'June':
        setCheckboxLvl2JunChecked(checked)
        break
      case 'July':
        setCheckboxLvl2JulChecked(checked)
        break
      case 'August':
        setCheckboxLvl2AugChecked(checked)
        break
      case 'September':
        setCheckboxLvl2SepChecked(checked)
        break
      case 'October':
        setCheckboxLvl2OctChecked(checked)
        break
      case 'November':
        setCheckboxLvl2NovChecked(checked)
        break
      case 'December':
        setCheckboxLvl2DecChecked(checked)
        break
      default:
        break
    }
  }

  const handleCheckboxLvl3Change = (month: string, checked: boolean) => {
    switch (month) {
      case 'January':
        setCheckboxLvl3JanChecked(checked)
        break
      case 'February':
        setCheckboxLvl3FebChecked(checked)
        break
      case 'March':
        setCheckboxLvl3MarChecked(checked)
        break
      case 'April':
        setCheckboxLvl3AprChecked(checked)
        break
      case 'May':
        setCheckboxLvl3MayChecked(checked)
        break
      case 'June':
        setCheckboxLvl3JunChecked(checked)
        break
      case 'July':
        setCheckboxLvl3JulChecked(checked)
        break
      case 'August':
        setCheckboxLvl3AugChecked(checked)
        break
      case 'September':
        setCheckboxLvl3SepChecked(checked)
        break
      case 'October':
        setCheckboxLvl3OctChecked(checked)
        break
      case 'November':
        setCheckboxLvl3NovChecked(checked)
        break
      case 'December':
        setCheckboxLvl3DecChecked(checked)
        break
      default:
        break
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
          {alertMessage}
        </Alert>
      </Snackbar>
      <Appbar />
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" align="center" style={{ fontSize: '1.5rem' }}>
          Select a Level Below
        </Typography>
        <div style={{ marginTop: '40px' }}>
          <Button
            variant="contained"
            onClick={() => handleButtonClick(1)}
            style={{
              marginLeft: '160px',
              marginRight: '300px',
              backgroundColor: '#E8542F',
            }}
          >
            Level 1
          </Button>
          <Button
            variant="contained"
            onClick={() => handleButtonClick(2)}
            style={{ marginRight: '295px', backgroundColor: '#E8542F' }}
          >
            Level 2
          </Button>
          <Button
            variant="contained"
            onClick={() => handleButtonClick(3)}
            style={{ marginRight: '8px', backgroundColor: '#E8542F' }}
          >
            Level 3
          </Button>
        </div>
        <div style={{ marginTop: '10px', display: 'flex' }}>
          <Typography
            variant="h5"
            style={{ fontSize: '0.9rem', marginLeft: '525px' }}
          >
            ($100 Savings)
          </Typography>
          <Typography
            variant="h5"
            style={{ fontSize: '0.9rem', marginLeft: '280px' }}
          >
            ($200 Savings)
          </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            bgcolor={boxOneClickable ? 'grey.200' : 'grey.400'} // Light gray color
            width="360px"
            height="650px"
            margin={3}
            display="inline-block"
            onClick={() => boxOneClickable}
            style={{ cursor: boxOneClickable ? 'pointer' : 'not-allowed' }}
          >
            <div>
              <ul
                style={{
                  listStyleType: 'square',
                  paddingLeft: '20px',
                }}
              >
                <li style={{ fontSize: '0.9rem' }}>
                  $20/hour with signed annual contract
                </li>
                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  Kitchen access is from 8:00 a.m. - 4:00 p.m. Monday through
                  Friday only
                </li>
                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  Dry Storage $10/mo. per 10 ft<sup>2</sup>
                  <TextField
                    variant="outlined"
                    color="warning"
                    label="Space needed"
                    margin="normal"
                    fullWidth
                    required
                    name="dryStorage"
                    onChange={handleChange}
                    value={tierData.dryStorage}
                    size="small"
                    disabled={!boxOneClickable}
                    InputLabelProps={{
                      style: { fontSize: '0.5rem', marginBottom: '12px' },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: 'white',
                        fontSize: '0.5rem',
                        width: '150px',
                      },
                    }}
                  />
                </li>

                <li style={{ fontSize: '0.9rem', marginTop: '8px' }}>
                  Refrigerator (vendor's) $25/mo. per unit
                  <TextField
                    variant="outlined"
                    color="warning"
                    label="# units needed"
                    margin="normal"
                    fullWidth
                    required
                    name="numFridges"
                    onChange={handleChange}
                    value={tierData.numFridges}
                    size="small"
                    disabled={!boxOneClickable}
                    InputLabelProps={{
                      style: { fontSize: '0.5rem' },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: 'white',
                        fontSize: '0.5rem',
                        width: '150px',
                      },
                    }}
                  />
                </li>
                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  Freezer (vendor's) $25/mo. per unit
                  <TextField
                    label="# units needed"
                    margin="normal"
                    variant="outlined"
                    color="warning"
                    fullWidth
                    required
                    name="numFreezers"
                    onChange={handleChange}
                    value={tierData.numFreezers}
                    size="small"
                    disabled={!boxOneClickable}
                    InputLabelProps={{
                      style: { fontSize: '0.5rem' },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: 'white',
                        fontSize: '0.5rem',
                        width: '150px',
                      },
                    }}
                  />
                </li>
                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  No off-season storage
                </li>
              </ul>
            </div>
          </Box>
          <Box
            bgcolor={boxTwoClickable ? 'grey.200' : 'grey.400'} // Change background color based on boxClickable state
            width="360px"
            height="650px"
            margin={3}
            display="inline-block"
            onClick={() => boxTwoClickable} // Display alert only if box is clickable
            style={{ cursor: boxTwoClickable ? 'pointer' : 'not-allowed' }} // Change cursor based on boxClickable state
          >
            <div>
              <ul
                style={{
                  listStyleType: 'square',
                  paddingLeft: '20px',
                }}
              >
                <li style={{ fontSize: '0.9rem' }}>
                  $300/month with signed annual contract
                </li>
                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  Max of 30 hrs./mo. $10/hr. for additional time
                </li>
                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  24-hour kitchen access
                </li>
                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  Dry Storage $10/mo. per 10 ft<sup>2</sup>
                  <TextField
                    label="Space needed"
                    margin="normal"
                    variant="outlined"
                    color="warning"
                    fullWidth
                    required
                    name="dryStorage"
                    value={tierData.dryStorage}
                    onChange={handleChange}
                    size="small"
                    disabled={!boxTwoClickable}
                    InputLabelProps={{
                      style: { fontSize: '0.5rem' },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: 'white',
                        fontSize: '0.5rem',
                        width: '150px',
                        borderColor: '#FFA500',
                      },
                    }}
                  />
                </li>

                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  Refrigerator (vendor's) $25/mo. per unit
                  <TextField
                    label="# units needed"
                    margin="normal"
                    variant="outlined"
                    color="warning"
                    fullWidth
                    required
                    name="numFridges"
                    onChange={handleChange}
                    value={tierData.numFridges}
                    size="small"
                    disabled={!boxTwoClickable}
                    InputLabelProps={{
                      style: { fontSize: '0.5rem' },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: 'white',
                        fontSize: '0.5rem',
                        width: '150px',
                      },
                    }}
                  />
                </li>
                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  Freezer (vendor's) $25/mo. per unit
                  <TextField
                    label="# units needed"
                    margin="normal"
                    variant="outlined"
                    color="warning"
                    fullWidth
                    required
                    name="numFreezers"
                    onChange={handleChange}
                    value={tierData.numFreezers}
                    size="small"
                    disabled={!boxTwoClickable}
                    InputLabelProps={{
                      style: { fontSize: '0.5rem' },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: 'white',
                        fontSize: '0.5rem',
                        width: '150px',
                      },
                    }}
                  />
                </li>
                <li
                  style={{
                    fontSize: '0.9rem',
                    marginTop: '12px',
                  }}
                >
                  $50/month off-season storage
                  <div style={{ display: 'flex', marginTop: '12px' }}>
                    <div style={{ marginRight: '20px' }}>
                      <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>
                          <Checkbox
                            size="small"
                            color="warning"
                            checked={checkboxLvl2JanChecked}
                            onChange={(e) =>
                              handleCheckboxLvl2Change(
                                'January',
                                e.target.checked
                              )
                            }
                            disabled={!boxTwoClickable}
                          />
                          January
                        </li>
                        <li style={{ marginTop: '-12px' }}>
                          <Checkbox
                            size="small"
                            color="warning"
                            checked={checkboxLvl2FebChecked}
                            onChange={(e) =>
                              handleCheckboxLvl2Change(
                                'February',
                                e.target.checked
                              )
                            }
                            disabled={!boxTwoClickable}
                          />
                          February
                        </li>
                        <li style={{ marginTop: '-12px' }}>
                          <Checkbox
                            size="small"
                            color="warning"
                            checked={checkboxLvl2MarChecked}
                            onChange={(e) =>
                              handleCheckboxLvl2Change(
                                'March',
                                e.target.checked
                              )
                            }
                            disabled={!boxTwoClickable}
                          />
                          March
                        </li>
                        <li style={{ marginTop: '-12px' }}>
                          <Checkbox
                            size="small"
                            color="warning"
                            checked={checkboxLvl2AprChecked}
                            onChange={(e) =>
                              handleCheckboxLvl2Change(
                                'April',
                                e.target.checked
                              )
                            }
                            disabled={!boxTwoClickable}
                          />
                          April
                        </li>
                        <li style={{ marginTop: '-12px' }}>
                          <Checkbox
                            size="small"
                            color="warning"
                            checked={checkboxLvl2MayChecked}
                            onChange={(e) =>
                              handleCheckboxLvl2Change('May', e.target.checked)
                            }
                            disabled={!boxTwoClickable}
                          />
                          May
                        </li>
                        <li style={{ marginTop: '-12px' }}>
                          <Checkbox
                            size="small"
                            color="warning"
                            checked={checkboxLvl2JunChecked}
                            onChange={(e) =>
                              handleCheckboxLvl2Change('June', e.target.checked)
                            }
                            disabled={!boxTwoClickable}
                          />
                          June
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>
                          <Checkbox
                            size="small"
                            color="warning"
                            checked={checkboxLvl2JulChecked}
                            onChange={(e) =>
                              handleCheckboxLvl2Change('July', e.target.checked)
                            }
                            disabled={!boxTwoClickable}
                          />
                          July
                        </li>
                        <li style={{ marginTop: '-12px' }}>
                          <Checkbox
                            size="small"
                            color="warning"
                            checked={checkboxLvl2AugChecked}
                            onChange={(e) =>
                              handleCheckboxLvl2Change(
                                'August',
                                e.target.checked
                              )
                            }
                            disabled={!boxTwoClickable}
                          />
                          August
                        </li>
                        <li style={{ marginTop: '-12px' }}>
                          <Checkbox
                            size="small"
                            color="warning"
                            checked={checkboxLvl2SepChecked}
                            onChange={(e) =>
                              handleCheckboxLvl2Change(
                                'September',
                                e.target.checked
                              )
                            }
                            disabled={!boxTwoClickable}
                          />
                          September
                        </li>
                        <li style={{ marginTop: '-12px' }}>
                          <Checkbox
                            size="small"
                            color="warning"
                            checked={checkboxLvl2OctChecked}
                            onChange={(e) =>
                              handleCheckboxLvl2Change(
                                'October',
                                e.target.checked
                              )
                            }
                            disabled={!boxTwoClickable}
                          />
                          October
                        </li>
                        <li style={{ marginTop: '-12px' }}>
                          <Checkbox
                            size="small"
                            color="warning"
                            checked={checkboxLvl2NovChecked}
                            onChange={(e) =>
                              handleCheckboxLvl2Change(
                                'November',
                                e.target.checked
                              )
                            }
                            disabled={!boxTwoClickable}
                          />
                          November
                        </li>
                        <li style={{ marginTop: '-12px' }}>
                          <Checkbox
                            size="small"
                            color="warning"
                            checked={checkboxLvl2DecChecked}
                            onChange={(e) =>
                              handleCheckboxLvl2Change(
                                'December',
                                e.target.checked
                              )
                            }
                            disabled={!boxTwoClickable}
                          />
                          December
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Box>
          <Box
            bgcolor={boxThreeClickable ? 'grey.200' : 'grey.400'} // Change background color based on boxClickable state
            width="360px"
            height="650px"
            margin={3}
            display="inline-block"
            onClick={() => boxThreeClickable} // Display alert only if box is clickable
            style={{ cursor: boxThreeClickable ? 'pointer' : 'not-allowed' }} // Change cursor based on boxClickable state
          >
            <div>
              <ul
                style={{
                  listStyleType: 'square',
                  paddingLeft: '20px',
                }}
              >
                <li style={{ fontSize: '0.9rem' }}>
                  $400/month with signed annual contract
                </li>
                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  Max of 50 hrs./mo. $8/hr. for additional time
                </li>
                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  24-hour kitchen access
                </li>
                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  Dry Storage $10/mo. per 10 ft<sup>2</sup>
                  <TextField
                    label="Space needed"
                    margin="normal"
                    variant="outlined"
                    color="warning"
                    fullWidth
                    name="dryStorage"
                    value={tierData.dryStorage}
                    onChange={handleChange}
                    required
                    size="small"
                    disabled={!boxThreeClickable}
                    InputLabelProps={{
                      style: { fontSize: '0.5rem' },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: 'white',
                        fontSize: '0.5rem',
                        width: '150px',
                      },
                    }}
                  />
                </li>
                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  Refrigerator (vendor's) $25/mo. per unit
                  <TextField
                    label="# units needed"
                    margin="normal"
                    variant="outlined"
                    color="warning"
                    fullWidth
                    required
                    name="numFridges"
                    onChange={handleChange}
                    value={tierData.numFridges}
                    size="small"
                    disabled={!boxThreeClickable}
                    InputLabelProps={{
                      style: { fontSize: '0.5rem' },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: 'white',
                        fontSize: '0.5rem',
                        width: '150px',
                      },
                    }}
                  />
                </li>
                <li style={{ fontSize: '0.9rem', marginTop: '12px' }}>
                  Freezer (vendor's) $25/mo. per unit
                  <TextField
                    label="# units needed"
                    margin="normal"
                    variant="outlined"
                    color="warning"
                    fullWidth
                    required
                    name="numFreezers"
                    onChange={handleChange}
                    value={tierData.numFreezers}
                    size="small"
                    disabled={!boxThreeClickable}
                    InputLabelProps={{
                      style: { fontSize: '0.5rem' },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: 'white',
                        fontSize: '0.5rem',
                        width: '150px',
                      },
                    }}
                  />
                </li>
                <li
                  style={{
                    fontSize: '0.9rem',
                    marginTop: '12px',
                    marginBottom: '12px',
                  }}
                >
                  $50/month off-season storage
                </li>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '20px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      <li>
                        <Checkbox
                          size="small"
                          color="warning"
                          checked={checkboxLvl3JanChecked}
                          onChange={(e) =>
                            handleCheckboxLvl3Change(
                              'January',
                              e.target.checked
                            )
                          }
                          disabled={!boxThreeClickable}
                        />
                        January
                      </li>
                      <li style={{ marginTop: '-12px' }}>
                        <Checkbox
                          size="small"
                          color="warning"
                          checked={checkboxLvl3FebChecked}
                          onChange={(e) =>
                            handleCheckboxLvl3Change(
                              'February',
                              e.target.checked
                            )
                          }
                          disabled={!boxThreeClickable}
                        />
                        February
                      </li>
                      <li style={{ marginTop: '-12px' }}>
                        <Checkbox
                          size="small"
                          color="warning"
                          checked={checkboxLvl3MarChecked}
                          onChange={(e) =>
                            handleCheckboxLvl3Change('March', e.target.checked)
                          }
                          disabled={!boxThreeClickable}
                        />
                        March
                      </li>
                      <li style={{ marginTop: '-12px' }}>
                        <Checkbox
                          size="small"
                          color="warning"
                          checked={checkboxLvl3AprChecked}
                          onChange={(e) =>
                            handleCheckboxLvl3Change('April', e.target.checked)
                          }
                          disabled={!boxThreeClickable}
                        />
                        April
                      </li>
                      <li style={{ marginTop: '-12px' }}>
                        <Checkbox
                          size="small"
                          color="warning"
                          checked={checkboxLvl3MayChecked}
                          onChange={(e) =>
                            handleCheckboxLvl3Change('May', e.target.checked)
                          }
                          disabled={!boxThreeClickable}
                        />
                        May
                      </li>
                      <li style={{ marginTop: '-12px' }}>
                        <Checkbox
                          size="small"
                          color="warning"
                          checked={checkboxLvl3JunChecked}
                          onChange={(e) =>
                            handleCheckboxLvl3Change('June', e.target.checked)
                          }
                          disabled={!boxThreeClickable}
                        />
                        June
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      <li>
                        <Checkbox
                          size="small"
                          color="warning"
                          checked={checkboxLvl3JulChecked}
                          onChange={(e) =>
                            handleCheckboxLvl3Change('July', e.target.checked)
                          }
                          disabled={!boxThreeClickable}
                        />
                        July
                      </li>
                      <li style={{ marginTop: '-12px' }}>
                        <Checkbox
                          size="small"
                          color="warning"
                          checked={checkboxLvl3AugChecked}
                          onChange={(e) =>
                            handleCheckboxLvl3Change('August', e.target.checked)
                          }
                          disabled={!boxThreeClickable}
                        />
                        August
                      </li>
                      <li style={{ marginTop: '-12px' }}>
                        <Checkbox
                          size="small"
                          color="warning"
                          checked={checkboxLvl3SepChecked}
                          onChange={(e) =>
                            handleCheckboxLvl3Change(
                              'September',
                              e.target.checked
                            )
                          }
                          disabled={!boxThreeClickable}
                        />
                        September
                      </li>
                      <li style={{ marginTop: '-12px' }}>
                        <Checkbox
                          size="small"
                          color="warning"
                          checked={checkboxLvl3OctChecked}
                          onChange={(e) =>
                            handleCheckboxLvl3Change(
                              'October',
                              e.target.checked
                            )
                          }
                          disabled={!boxThreeClickable}
                        />
                        October
                      </li>
                      <li style={{ marginTop: '-12px' }}>
                        <Checkbox
                          size="small"
                          color="warning"
                          checked={checkboxLvl3NovChecked}
                          onChange={(e) =>
                            handleCheckboxLvl3Change(
                              'November',
                              e.target.checked
                            )
                          }
                          disabled={!boxThreeClickable}
                        />
                        November
                      </li>
                      <li style={{ marginTop: '-12px' }}>
                        <Checkbox
                          size="small"
                          color="warning"
                          checked={checkboxLvl3DecChecked}
                          onChange={(e) =>
                            handleCheckboxLvl3Change(
                              'December',
                              e.target.checked
                            )
                          }
                          disabled={!boxThreeClickable}
                        />
                        December
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </Box>
        </div>
      </Container>
      <div style={buttonsDivStyle}>
        <a
          href="./form1"
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
