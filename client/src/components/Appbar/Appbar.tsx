import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

import ColorButton from 'components/ColorButton'

import ColorLogo from './ywca-colorlogo.jpg'
import Logo from './ywca-logo.jpg'

const navItems = [
  {
    name: 'WHO WE ARE',
    subLinks: [
      { name: 'WHO WE ARE', url: 'https://www.ywcalafayette.org/who-we-are' },
      {
        name: 'YWCA FOUNDATION',
        url: 'https://www.ywcalafayette.org/ywca-foundation',
      },
      { name: 'HISTORY', url: 'https://www.ywcalafayette.org/history' },
    ],
  },
  {
    name: 'WHAT WE DO',
    subLinks: [
      { name: 'WHAT WE DO', url: 'https://www.ywcalafayette.org/what-we-do' },
      {
        name: 'VIOLENCE PREVENTION',
        url: 'https://www.ywcalafayette.org/violence-prevention',
      },
      {
        name: "WOMEN'S WELLNESS",
        url: 'https://www.ywcalafayette.org/womens-wellness',
      },
      {
        name: 'RACIAL AND SOCIAL JUSTICE',
        url: 'https://www.ywcalafayette.org/racial-social-justice',
      },
      {
        name: 'Y-DANCE',
        url: 'https://www.ywcalafayette.org/what-were-doing/programs/dance',
      },
      {
        name: 'FACILITIES',
        url: 'https://www.ywcalafayette.org/facilities-recreation',
      },
      {
        name: 'SHARED KITCHEN',
        url: 'https://www.ywcalafayette.org/facilities-recreation-1-1',
      },
    ],
  },
  {
    name: 'GET INVOLVED',
    subLinks: [
      { name: 'DONATE', url: 'https://www.ywcalafayette.org/new-page' },
      { name: 'WYSE ONES', url: 'https://www.ywcalafayette.org/new-page-1' },
      { name: 'VOLUNTEER', url: 'https://www.ywcalafayette.org/volunteer' },
      {
        name: 'ASSOCIATION & SHELTER NEEDS',
        url: 'https://www.ywcalafayette.org/association-shelter-needs',
      },
      {
        name: 'COMMUNITY PARTNERS',
        url: 'https://www.ywcalafayette.org/community',
      },
      {
        name: 'CAREERS THAT MAKE A DIFFERENCE',
        url: 'https://www.ywcalafayette.org/careers-that-make-a-difference',
      },
    ],
  },
  {
    name: 'EVENTS',
    subLinks: [
      { name: 'UPCOMING EVENTS', url: 'https://www.ywcalafayette.org/events' },
      { name: 'CLAY BOWL', url: 'https://www.ywcalafayette.org/clay-bowl' },
      {
        name: 'SALUTE TO WOMEN',
        url: 'https://www.ywcalafayette.org/salute-to-women',
      },
    ],
  },
  {
    name: 'NEWS',
    subLinks: [
      { name: 'CONNECT', url: 'https://www.ywcalafayette.org/connect' },
      { name: 'BLOG', url: 'https://www.ywcalafayette.org/all-blogs' },
    ],
  },
  {
    name: 'GET HELP',
    subLinks: [
      {
        name: 'RESOURCES',
        url: 'https://www.ywcalafayette.org/survivor-services',
      },
    ],
  },
]

export default function Appbar() {
  const [anchorEl, setAnchorEl] = useState<Record<string, HTMLElement | null>>(
    {}
  )

  const handleMenuItemClick = (url: string) => {
    window.location.href = url
  }

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    itemName: string
  ) => {
    setAnchorEl((prevAnchorEl) => ({
      ...prevAnchorEl,
      [itemName]: event.currentTarget,
    }))
  }

  const handleMenuClose = (itemName: string) => {
    setAnchorEl((prevAnchorEl) => ({
      ...prevAnchorEl,
      [itemName]: null,
    }))
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: 'white', height: '120%' }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
            }}
          >
            <a href="https://www.ywcalafayette.org">
              <img
                src={ColorLogo}
                alt="YWCA logo"
                style={{
                  maxHeight: '70px',
                  verticalAlign: 'middle',
                  margin: '20px',
                }}
              />
            </a>
          </Typography>
          {navItems.map((item) => (
            <div
              key={item.name}
              style={{
                position: 'relative',
                display: 'inline-block',
                marginLeft: '20px',
              }}
            >
              <Button
                aria-controls={item.name}
                aria-haspopup="true"
                onClick={(event) => handleMenuOpen(event, item.name)}
                sx={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}
              >
                {item.name}
              </Button>
              <Menu
                id={item.name}
                anchorEl={anchorEl[item.name]}
                open={Boolean(anchorEl[item.name])}
                onClose={() => handleMenuClose(item.name)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                {item.subLinks.map((subLink) => (
                  <MenuItem
                    key={subLink.name}
                    onClick={() => handleMenuItemClick(subLink.url)}
                  >
                    {subLink.name}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ))}
          <a
            href="https://app.etapestry.com/onlineforms/YWCAofGreaterLafayette/donate.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <ColorButton
              sx={{
                display: 'flex',
                width: '150px',
                height: '55px',
                marginLeft: '20px',
                background: '#D9D9D9',
                borderRadius: '10px',
                backgroundColor: '#fa4616',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              DONATE
            </ColorButton>
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
