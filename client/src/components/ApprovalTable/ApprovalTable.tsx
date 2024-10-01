// import * as React from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

function createData(data: string, value: string) {
  return { data, value }
}

const rows = [
  createData('Contact Name', 'Hunter Field'),
  createData('Vendor Name', 'Hack the Future'),
  createData('Street', 'State Street'),
  createData('City', 'Lafayette'),
  createData('State', 'Indiana'),
  createData('Zip', '12345'),
  createData('Email', 'boso@purdue.edu'),
  createData('Phone', '000-000-0000'),
  createData(
    'Description',
    'We love YWCA so much that we will write a long description'
  ),
  createData('Monthly Hours', '20'),
  createData('Dry Storage', '1'),
  createData('Num Fridges', '2'),
  createData('Num Freezers', '1'),
  createData('Num Attendees', '15'),
  createData('Insurance', 'Allstate'),
  createData('January', '1'),
  createData('February', '0'),
  createData('March', '0'),
  createData('April', '0'),
  createData('May', '1'),
  createData('June', '0'),
  createData('July', '0'),
  createData('August', '0'),
  createData('September', '0'),
  createData('October', '1'),
  createData('November', '1'),
  createData('December', '1'),
  createData('Signature', 'Hunter Field'),
  createData('Date Signed', '01/01/2024'),
]

export default function ApprovalTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ border: 1, borderRadius: 1, borderColor: 'black' }}
    >
      <Table sx={{ width: 552 }} size="small" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.data}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell size="small" width="200px" component="th" scope="row">
                {row.data}
              </TableCell>
              <TableCell size="small" align="left">
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
