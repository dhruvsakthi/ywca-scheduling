import { Router } from 'express'
import {
  createVendor,
  deleteVendor,
  getVendor,
  getVendors,
  approveVendor,
  getApprovedVendors,
} from '../controllers/vendor.controller'

const vendorRouter = Router()

vendorRouter.get('/getVendors', getVendors)
vendorRouter.post('/create', createVendor)
vendorRouter.delete('/:id', deleteVendor)
vendorRouter.get('/getApproved', getApprovedVendors)
// here we use patch instead of put
// patch allows modification of fields whereas put overrides the object entirely
vendorRouter.patch('/:id', approveVendor)

export default vendorRouter
