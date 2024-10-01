import type { Document, PassportLocalDocument } from 'mongoose'

type Session = string

interface IUser extends Document {
  firstName: string
  lastName?: string
}

interface IUserAuth extends PassportLocalDocument {
  email: string
  password: string
  refreshTokens: Session[]
}

interface IVendor {
  approvalOne: Date
  approvalNameOne: String
  approvalTwo: Date
  approvalNameTwo: String
  contactName: String
  vendorName: String
  street: String
  city: String
  state: String
  zip: Number
  email: String
  phone: Number
  description: String
  monthlyHours: Number
  dryStorage: Number
  numFridges: Number
  numFreezers: Number
  numAttendees: Number
  insurance: String
  tier: Number
  january: Boolean
  february: Boolean
  march: Boolean
  april: Boolean
  may: Boolean
  june: Boolean
  july: Boolean
  august: Boolean
  september: Boolean
  october: Boolean
  november: Boolean
  december: Boolean
  signature: String
  dateSigned: Date
}
