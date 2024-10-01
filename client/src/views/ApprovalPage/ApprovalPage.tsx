import DeleteIcon from '@mui/icons-material/Delete'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Grid,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'

import { approveVendor, fetchApprovedVendors, fetchVendors } from 'api/vendor'
import ApprovalTable from 'components/ApprovalTable'
import ColorButton from 'components/ColorButton'

export default function ApprovalPage() {
  const getVendors = async () => {
    try {
      const vendors = await fetchVendors()
      console.log('Retrieved: ', vendors)
      return vendors
    } catch (error) {
      console.log(error)
    }
  }

  const approve = async () => {
    const day = new Date()
    const data = {
      id: '661c6fe4a9fc2a53943ef08b',
      approvalOne: day,
      approvalTwo: day,
      approvalNameOne: 'name one',
      approvalNameTwo: 'name two',
    }
    const vendor = await approveVendor(data)
    console.log('Modified: ', vendor)
    return vendor
  }

  const getApprovedVendors = async () => {
    try {
      const vendors = await fetchApprovedVendors()
      console.log('Retrieved: ', vendors)
      return vendors
    } catch (error) {
      console.log(error)
    }
  }

  const [admin1Approved, setAdmin1Approved] = useState<boolean>(false)
  const [admin2Approved, setAdmin2Approved] = useState<boolean>(false)

  const handleAdmin1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin1Approved(event.target.checked)
  }

  const handleAdmin2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin2Approved(event.target.checked)
  }

  const isAllApproved = admin1Approved && admin2Approved

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>YWCA Kitchen Rental Approval</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Accordion
          sx={{
            width: 1000,
            align: 'center',
            border: 1,
            borderColor: isAllApproved ? 'success.main' : 'warning',
          }}
          defaultExpanded
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{
              backgroundColor: isAllApproved ? '#a2e1a2' : '#f2a65a',
            }}
          >
            Vendor 1
          </AccordionSummary>
          <AccordionDetails>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <ApprovalTable />
              </Grid>
              <Grid item xs={5}>
                <div
                  style={{
                    marginBottom: '10px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  Final Approval
                </div>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item>
                    <Grid
                      container
                      justifyContent="flex-end"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item>
                        <Checkbox
                          color="warning"
                          checked={admin1Approved}
                          onChange={handleAdmin1Change}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          label="Admin 1"
                          variant="outlined"
                          fullWidth
                          color="warning"
                          InputProps={{
                            style: {
                              backgroundColor: 'white',
                              width: '200px',
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justifyContent="flex-end"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item>
                        <Checkbox
                          color="warning"
                          checked={admin2Approved}
                          onChange={handleAdmin2Change}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          label="Admin 2"
                          variant="outlined"
                          fullWidth
                          color="warning"
                          InputProps={{
                            style: {
                              backgroundColor: 'white',
                              width: '200px',
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <div
                  style={{
                    marginBottom: '10px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  <br />
                  <br />
                  Delete Vendor
                </div>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="flex-end"
                  >
                    <Button
                      onClick={() => {
                        window.location.reload()
                      }}
                      sx={{
                        color: 'black',
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}
