import { Container } from '@mui/material'
import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Appbar from 'components/Appbar'
import Calendar from 'components/Calendar'
import ApprovalPage from 'views/ApprovalPage'
import LayoutPage from 'views/Calendar/LayoutPage'
import FinePrintPage from 'views/FinePrint'
import InfoEntry from 'views/InfoEntry'
import LevelSelect from 'views/LevelSelect'
import Main from 'views/Main'
import Page from 'views/SubmissionReceivedPage'

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />

        <Route path="appbar" element={<Appbar />} />
        <Route path="calendar" element={<LayoutPage />} />
        <Route path="form1" element={<InfoEntry />} />
        <Route path="form2" element={<LevelSelect />} />
        <Route path="form3" element={<FinePrintPage />} />
        <Route path="approval" element={<ApprovalPage />} />
        <Route path="Page" element={<Page />} />
        <Route
          path="*"
          element={<Container sx={{ p: 5 }}>Error 404</Container>}
        />
      </Routes>
    </BrowserRouter>
  )
}
