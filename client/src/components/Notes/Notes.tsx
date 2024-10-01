import AddIcon from '@mui/icons-material/Add'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Stack from '@mui/material/Stack'
import { useState } from 'react'

import ColorButton from 'components/ColorButton'

function Notes() {
  const [accordions, setAccordions] = useState([
    {
      id: 1,
      label: 'Note',
      vendor: '',
      kitchen: '',
      content: '',
      stime: '',
      etime: '',
      editMode: true,
    },
  ])

  const addAccordion = () => {
    setAccordions([
      ...accordions,
      {
        id: Date.now(),
        label: 'Note',
        vendor: '',
        kitchen: '',
        content: '',
        stime: '',
        etime: '',
        editMode: true,
      },
    ])
  }

  const removeAccordion = (id: number) => {
    setAccordions(accordions.filter((accordion) => accordion.id !== id))
  }

  const handleLabelChange = (id: number, label: string) => {
    setAccordions(
      accordions.map((accordion) =>
        accordion.id === id ? { ...accordion, label } : accordion
      )
    )
  }

  const handleContentChange = (id: number, content: string) => {
    setAccordions(
      accordions.map((accordion) =>
        accordion.id === id ? { ...accordion, content } : accordion
      )
    )
  }

  const handleVendorChange = (id: number, vendor: string) => {
    setAccordions(
      accordions.map((accordion) =>
        accordion.id === id ? { ...accordion, vendor } : accordion
      )
    )
  }

  const handleKitchenChange = (id: number, kitchen: string) => {
    setAccordions(
      accordions.map((accordion) =>
        accordion.id === id ? { ...accordion, kitchen } : accordion
      )
    )
  }

  const handleSTimeChange = (id: number, stime: string) => {
    setAccordions(
      accordions.map((accordion) =>
        accordion.id === id ? { ...accordion, stime } : accordion
      )
    )
  }

  const handleETimeChange = (id: number, etime: string) => {
    setAccordions(
      accordions.map((accordion) =>
        accordion.id === id ? { ...accordion, etime } : accordion
      )
    )
  }

  const toggleEditMode = (id: number) => {
    setAccordions(
      accordions.map((accordion) =>
        accordion.id === id
          ? { ...accordion, editMode: !accordion.editMode }
          : accordion
      )
    )
  }

  const handleSave = (id: number) => {
    setAccordions(
      accordions.map((accordion) =>
        accordion.id === id ? { ...accordion, editMode: false } : accordion
      )
    )
  }
  return (
    <Stack
      height="100%"
      width="100%"
      direction="column"
      bgcolor="lightgray"
      minHeight="595px"
      padding={2}
    >
      <Typography
        variant="h6"
        align="center"
        marginBottom={2}
        style={{ fontSize: '35px' }}
      >
        <strong>Reservations</strong>
      </Typography>
      {accordions.map((accordion) => (
        <Accordion key={accordion.id}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>{accordion.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction="column" spacing={2} width="100%">
              <FormControl fullWidth color="warning">
                <InputLabel id={`vendor-label-${accordion.id}`}>
                  Vendor
                </InputLabel>
                <Select
                  labelId={`vendor-label-${accordion.id}`}
                  id={`vendor-${accordion.id}`}
                  value={accordion.vendor}
                  label="Vendor"
                  onChange={(e) =>
                    handleVendorChange(accordion.id, e.target.value as string)
                  }
                  disabled={!accordion.editMode}
                >
                  <MenuItem value={10}>Vendor 1</MenuItem>
                  <MenuItem value={20}>Vendor 2</MenuItem>
                  <MenuItem value={30}>Vendor 3</MenuItem>
                </Select>
              </FormControl>
              <FormControl color="warning" fullWidth>
                <InputLabel id={`kitchen-label-${accordion.id}`}>
                  Kitchen
                </InputLabel>
                <Select
                  labelId={`kitchen-label-${accordion.id}`}
                  id={`kitchen-${accordion.id}`}
                  value={accordion.kitchen}
                  label="Kitchen"
                  onChange={(e) =>
                    handleKitchenChange(accordion.id, e.target.value as string)
                  }
                  disabled={!accordion.editMode}
                >
                  <MenuItem value={10}>Kitchen 1</MenuItem>
                  <MenuItem value={20}>Kitchen 2</MenuItem>
                  <MenuItem value={30}>Kitchen 3</MenuItem>
                </Select>
              </FormControl>
              <FormControl color="warning" fullWidth>
                <Grid container spacing={5}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Start Time:</Typography>
                    <Select
                      labelId={`StartTime-label-${accordion.id}`}
                      id={`StartTime-${accordion.id}`}
                      value={accordion.stime}
                      label="Start Time"
                      onChange={(e) =>
                        handleSTimeChange(
                          accordion.id,
                          e.target.value as string
                        )
                      }
                      disabled={!accordion.editMode}
                      MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
                    >
                      <MenuItem value={10}>8:00 AM</MenuItem>
                      <MenuItem value={20}>8:30 AM</MenuItem>
                      <MenuItem value={30}>9:00 AM</MenuItem>
                      <MenuItem value={40}>9:30 AM</MenuItem>
                      <MenuItem value={50}>10:00 AM</MenuItem>
                      <MenuItem value={60}>10:30 AM</MenuItem>
                      <MenuItem value={70}>11:00 AM</MenuItem>
                      <MenuItem value={80}>11:30 AM</MenuItem>
                      <MenuItem value={90}>12:00 PM</MenuItem>
                      <MenuItem value={100}>12:30 PM</MenuItem>
                      <MenuItem value={110}>1:00 PM</MenuItem>
                      <MenuItem value={120}>1:30 PM</MenuItem>
                      <MenuItem value={130}>2:00 PM</MenuItem>
                      <MenuItem value={140}>2:30 PM</MenuItem>
                      <MenuItem value={150}>3:00 PM</MenuItem>
                      <MenuItem value={160}>3:30 PM</MenuItem>
                      <MenuItem value={170}>4:00 PM</MenuItem>
                      <MenuItem value={180}>4:30 PM</MenuItem>
                      <MenuItem value={190}>5:00 PM</MenuItem>
                      <MenuItem value={200}>5:30 PM</MenuItem>
                      <MenuItem value={210}>6:00 PM</MenuItem>
                      <MenuItem value={220}>6:30 PM</MenuItem>
                      <MenuItem value={230}>7:00 PM</MenuItem>
                      <MenuItem value={240}>7:30 PM</MenuItem>
                      <MenuItem value={250}>8:00 PM</MenuItem>
                      <MenuItem value={260}>8:30 PM</MenuItem>
                      <MenuItem value={270}>9:00 PM</MenuItem>
                      <MenuItem value={280}>9:30 PM</MenuItem>
                      <MenuItem value={290}>10:00 PM</MenuItem>
                      <MenuItem value={300}>10:30 PM</MenuItem>
                      <MenuItem value={310}>11:00 PM</MenuItem>
                      <MenuItem value={320}>11:30 PM</MenuItem>
                      <MenuItem value={330}>12:00 AM</MenuItem>
                      <MenuItem value={340}>12:30 AM</MenuItem>
                      <MenuItem value={350}>1:00 AM</MenuItem>
                      <MenuItem value={360}>1:30 AM</MenuItem>
                      <MenuItem value={370}>2:00 AM</MenuItem>
                      <MenuItem value={380}>2:30 AM</MenuItem>
                      <MenuItem value={390}>3:00 AM</MenuItem>
                      <MenuItem value={400}>3:30 AM</MenuItem>
                      <MenuItem value={410}>4:00 AM</MenuItem>
                      <MenuItem value={420}>4:30 AM</MenuItem>
                      <MenuItem value={430}>5:00 AM</MenuItem>
                      <MenuItem value={440}>5:30 AM</MenuItem>
                      <MenuItem value={450}>6:00 AM</MenuItem>
                      <MenuItem value={460}>6:30 AM</MenuItem>
                      <MenuItem value={470}>7:00 AM</MenuItem>
                      <MenuItem value={480}>7:30 AM</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="subtitle1">End Time:</Typography>
                    <Select
                      labelId={`EndTime-label-${accordion.id}`}
                      id={`EndTime-${accordion.id}`}
                      value={accordion.etime}
                      label="End Time"
                      onChange={(e) =>
                        handleETimeChange(
                          accordion.id,
                          e.target.value as string
                        )
                      }
                      disabled={!accordion.editMode}
                      MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
                    >
                      <MenuItem value={10}>8:00 AM</MenuItem>
                      <MenuItem value={20}>8:30 AM</MenuItem>
                      <MenuItem value={30}>9:00 AM</MenuItem>
                      <MenuItem value={40}>9:30 AM</MenuItem>
                      <MenuItem value={50}>10:00 AM</MenuItem>
                      <MenuItem value={60}>10:30 AM</MenuItem>
                      <MenuItem value={70}>11:00 AM</MenuItem>
                      <MenuItem value={80}>11:30 AM</MenuItem>
                      <MenuItem value={90}>12:00 PM</MenuItem>
                      <MenuItem value={100}>12:30 PM</MenuItem>
                      <MenuItem value={110}>1:00 PM</MenuItem>
                      <MenuItem value={120}>1:30 PM</MenuItem>
                      <MenuItem value={130}>2:00 PM</MenuItem>
                      <MenuItem value={140}>2:30 PM</MenuItem>
                      <MenuItem value={150}>3:00 PM</MenuItem>
                      <MenuItem value={160}>3:30 PM</MenuItem>
                      <MenuItem value={170}>4:00 PM</MenuItem>
                      <MenuItem value={180}>4:30 PM</MenuItem>
                      <MenuItem value={190}>5:00 PM</MenuItem>
                      <MenuItem value={200}>5:30 PM</MenuItem>
                      <MenuItem value={210}>6:00 PM</MenuItem>
                      <MenuItem value={220}>6:30 PM</MenuItem>
                      <MenuItem value={230}>7:00 PM</MenuItem>
                      <MenuItem value={240}>7:30 PM</MenuItem>
                      <MenuItem value={250}>8:00 PM</MenuItem>
                      <MenuItem value={260}>8:30 PM</MenuItem>
                      <MenuItem value={270}>9:00 PM</MenuItem>
                      <MenuItem value={280}>9:30 PM</MenuItem>
                      <MenuItem value={290}>10:00 PM</MenuItem>
                      <MenuItem value={300}>10:30 PM</MenuItem>
                      <MenuItem value={310}>11:00 PM</MenuItem>
                      <MenuItem value={320}>11:30 PM</MenuItem>
                      <MenuItem value={330}>12:00 AM</MenuItem>
                      <MenuItem value={340}>12:30 AM</MenuItem>
                      <MenuItem value={350}>1:00 AM</MenuItem>
                      <MenuItem value={360}>1:30 AM</MenuItem>
                      <MenuItem value={370}>2:00 AM</MenuItem>
                      <MenuItem value={380}>2:30 AM</MenuItem>
                      <MenuItem value={390}>3:00 AM</MenuItem>
                      <MenuItem value={400}>3:30 AM</MenuItem>
                      <MenuItem value={410}>4:00 AM</MenuItem>
                      <MenuItem value={420}>4:30 AM</MenuItem>
                      <MenuItem value={430}>5:00 AM</MenuItem>
                      <MenuItem value={440}>5:30 AM</MenuItem>
                      <MenuItem value={450}>6:00 AM</MenuItem>
                      <MenuItem value={460}>6:30 AM</MenuItem>
                      <MenuItem value={470}>7:00 AM</MenuItem>
                      <MenuItem value={480}>7:30 AM</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </FormControl>
              {!accordion.editMode && (
                <Typography variant="subtitle1" fontWeight="bold">
                  Additional Notes:
                </Typography>
              )}
              {accordion.editMode ? (
                <TextField
                  id={`content-${accordion.id}`}
                  label="Additional Notes"
                  variant="outlined"
                  color="warning"
                  value={accordion.content}
                  onChange={(e) =>
                    handleContentChange(accordion.id, e.target.value)
                  }
                  multiline
                  rows={4}
                />
              ) : (
                <Typography>
                  {accordion.content}
                  <br />
                  <br />
                </Typography>
              )}
              <Box width="100%" display="flex" justifyContent="space-between">
                {accordion.editMode ? (
                  <ColorButton
                    onClick={() => handleSave(accordion.id)}
                    sx={{ fontWeight: 'bold' }}
                  >
                    Save
                  </ColorButton>
                ) : (
                  <ColorButton
                    onClick={() => toggleEditMode(accordion.id)}
                    sx={{ fontWeight: 'bold' }}
                  >
                    Edit
                  </ColorButton>
                )}
                <ColorButton
                  onClick={() => removeAccordion(accordion.id)}
                  sx={{ padding: '12px 12px' }}
                >
                  <DeleteIcon />
                </ColorButton>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
      <br />
      <Box width="100%" display="flex" justifyContent="center">
        <ColorButton onClick={addAccordion} sx={{ borderRadius: 30 }}>
          <AddIcon sx={{ color: 'white' }} />
        </ColorButton>
      </Box>
    </Stack>
  )
}

export default Notes
