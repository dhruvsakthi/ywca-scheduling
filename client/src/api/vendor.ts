import axios from 'axios'

type IdParam = { id: string }
type UserParam = { firstName: string; lastName?: string }
type VendorParam = {
  contactName: string
  vendorName: string
  city: string
  street: string
  state: string
  zip: string
  email: string
  phone: string
  description: string
  dryStorage: string
  numFridges: string
  numFreezers: string
  numAttendees: string
  insurance: string
  tier: number
  january: string
  february: string
  march: string
  april: string
  may: string
  june: string
  july: string
  august: string
  september: string
  october: string
  november: string
  december: string
  signature: string
}

type UserData = { user: IUser }

const VendorInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/vendor`,
  timeout: 5000,
})

export const createVendor = ({
  contactName,
  vendorName,
  city,
  street,
  state,
  zip,
  email,
  phone,
  description,
  dryStorage,
  numFridges,
  numFreezers,
  numAttendees,
  insurance,
  tier,
  january,
  february,
  march,
  april,
  may,
  june,
  july,
  august,
  september,
  october,
  november,
  december,
  signature,
}: VendorParam) =>
  VendorInstance.post('/create', {
    contactName,
    vendorName,
    city,
    street,
    state,
    zip,
    email,
    phone,
    description,
    dryStorage,
    numFridges,
    numFreezers,
    numAttendees,
    insurance,
    tier,
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
    september,
    october,
    november,
    december,
    signature,
  })

export const fetchVendors = async () => {
  try {
    const response = await VendorInstance.get('/getVendors')
    if (!response.data) {
      throw new Error('No vendors found')
    }
    console.log('Vendors:', response.data.vendors)
    return response.data.vendors
  } catch (error: any) {
    console.error('Error fetching vendors:', error.message)
    throw error
  }
}

export const fetchApprovedVendors = async () => {
  try {
    const response = await VendorInstance.get('/getApproved')
    if (!response.data) {
      throw new Error('No approved vendors')
    }
    console.log('Approved vendors:', response.data.vendors)
    return response.data.vendors
  } catch (error: any) {
    console.error('Error fetching approved vendors:', error.message)
    throw error
  }
}

export const approveVendor = async (approvalData: any) => {
  const response = await VendorInstance.patch('approve', approvalData)
  if (!response.data) {
    throw new Error('vendor was not found')
  }
  console.log('vendor modified')
  return response.data.vendors
}
