import { IVendor } from '@/types/types'
import { timeStamp } from 'console'
import mongoose from 'mongoose'
const { Schema, model } = mongoose

const vendorSchema = new Schema<IVendor>(
  {
    approvalOne: {
      type: Date,
    },
    approvalTwo: {
      type: Date,
    },
    approvalNameOne: {
      type: String,
    },
    approvalNameTwo: {
      type: String,
    },
    contactName: {
      type: String,
      required: true,
    },
    vendorName: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    numAttendees: {
      type: Number,
      required: true,
    },
    insurance: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tier: {
      type: Number,
      required: true,
    },
    numFridges: {
      type: Number,
      required: true,
    },
    numFreezers: {
      type: Number,
      required: true,
    },
    signature: {
      type: String,
      required: true,
    },
    january: {
      type: Boolean,
    },
    february: {
      type: Boolean,
    },
    march: {
      type: Boolean,
    },
    april: {
      type: Boolean,
    },
    may: {
      type: Boolean,
    },
    june: {
      type: Boolean,
    },
    july: {
      type: Boolean,
    },
    august: {
      type: Boolean,
    },
    september: {
      type: Boolean,
    },
    october: {
      type: Boolean,
    },
    november: {
      type: Boolean,
    },
    december: {
      type: Boolean,
    },
  },
  { collection: 'vendors' }
)

const Vendor = model('Vendor', vendorSchema)
export default Vendor
