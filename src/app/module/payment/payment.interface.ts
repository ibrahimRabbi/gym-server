import { Types } from "mongoose"

export type Tpayment = {
    user: Types.ObjectId,
    email: string
    amount: number,
    products?: Array<object>,
   
}