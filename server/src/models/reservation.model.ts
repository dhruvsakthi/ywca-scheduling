import { timeStamp } from 'console'
import mongoose from 'mongoose'
const { Schema, model } = mongoose

const reservationSchema = new Schema(
  {
    approvalOne: Date,
    approvalNameOne: String,
    approvalTwo: Date,
    approvalNameTwo: String,
    validReservation: Boolean,
    kitchenNum: Number,
    startTime: String,
    endTime: String,
    notes: String,
    contactName: String,
    vendorName: String,
    street: String,
    city: String,
    state: String,
    zip: Number,
    email: String,
    phone: Number,
    day: Number,
    month: Number,
    year: Number,
    monthlyHours: Number,
    dryStorage: Number,
    numFridges: Number,
    numFreezers: Number,
    numAttendees: Number,
    insurance: String,
    level: Number,
    january: Boolean,
    february: Boolean,
    march: Boolean,
    april: Boolean,
    may: Boolean,
    june: Boolean,
    july: Boolean,
    august: Boolean,
    september: Boolean,
    october: Boolean,
    november: Boolean,
    december: Boolean,
  },
  { collection: 'reservations' }
)

const Reservation = model('Reservation', reservationSchema)
export default Reservation
