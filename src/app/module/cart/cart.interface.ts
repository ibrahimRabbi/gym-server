import { Types } from "mongoose"

export type Tcart = {
    quentity: number,
    productId: Types.ObjectId,
    userEmail:string
}