import { model, Schema } from "mongoose";
import { Tcart } from "./cart.interface";

const cartSchema = new Schema<Tcart>({
    quentity: { type: Number, required: true, max: 10, default: 1 },
    id: { type: Schema.Types.ObjectId, ref: 'products', required: true }
},
    { timestamps: true }
)


export const cartModel = model<Tcart>('cart', cartSchema)