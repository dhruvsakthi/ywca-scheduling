import Vendor from '../models/vendor.model'
import { IVendor } from '@/types/types'
import to from 'await-to-js'
import type { Request, Response } from 'express'
import { sep } from 'path'

/**
 * .lean() returns an object rather than the mongoose document
 * this makes queries faster, but you cannot modify the returned result
 *
 * use .exec() to make query return a promise to use with to()
 */

export const getVendors = async (req: Request, res: Response) => {
  const [error, vendors] = await to(Vendor.find({}).lean().exec())
  if (error) return res.status(500).send({ error })
  return res.json({ vendors })
}

export const getApprovedVendors = async (req: Request, res: Response) => {
  try {
    // Calculate the date one year ago
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

    // Query vendors with approval dates less than a year old
    const [error, vendors] = await to(
      Vendor.find({
        $and: [
          { approvalOne: { $ne: null, $gte: oneYearAgo } }, // approval1 exists and is >= oneYearAgo
          { approvalTwo: { $ne: null, $gte: oneYearAgo } }, // approval2 exists and is >= oneYearAgo
        ],
      })
        .lean()
        .exec()
    )

    if (error) {
      return res.status(500).send({ error })
    }

    return res.json({ vendors })
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
}

export const getVendor = async (req: Request, res: Response) => {
  const { id } = req.params
  const [error, user] = await to(Vendor.findById(id).lean().exec())
  if (error) return res.status(500).send({ error })
  return res.json({ user })
}

export const createVendor = async (req: Request, res: Response) => {
  const {
    contactName,
    vendorName,
    street,
    city,
    state,
    zip,
    email,
    phone,
    description,
    dryStorage,
    numAttendees,
    insurance,
    numFridges,
    numFreezers,
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
  } = req.body
  if (!vendorName)
    return res.status(400).send({ error: new Error('vendorName required') })

  const vendorData: Partial<IVendor> = {
    contactName: contactName,
    vendorName: vendorName,
    street: street,
    city: city,
    state: state,
    zip: zip,
    email: email,
    phone: phone,
    description: description,
    dryStorage: dryStorage,
    numFridges: numFridges,
    numFreezers: numFreezers,
    numAttendees: numAttendees,
    insurance: insurance,
    tier: tier,
    january: january,
    february: february,
    march: march,
    april: april,
    may: may,
    june: june,
    july: july,
    august: august,
    september: september,
    october: october,
    november: november,
    december: december,
    signature: signature,
  }
  const [error, vendor] = await to(Vendor.create(vendorData))
  vendor?.save()
  if (error) return res.status(500).send({ error })
  return res.json({ vendor })
}

export const approveVendor = async (req: Request, res: Response) => {
  const { id, approvalOne, approvalTwo, approvalNameOne, approvalNameTwo } = req.body
  const [error, vendor] = await to(
    Vendor.findByIdAndUpdate(
      id,
      { approvalOne, approvalTwo, approvalNameOne, approvalNameTwo },
      { returnDocument: 'after' }
    )
      .lean()
      .exec()
  )
  if (error) return res.status(500).send({ error })
  return res.json({ vendor })
}

export const deleteVendor = async (req: Request, res: Response) => {
  const { id } = req.params
  const [error, user] = await to(Vendor.findByIdAndDelete(id).lean().exec())
  if (error) return res.status(500).send({ error })
  return res.json({ user })
}
