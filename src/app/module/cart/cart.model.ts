import { model, Schema } from "mongoose";
import { Tcart } from "./cart.interface";
import { required } from "joi";

const cartSchema = new Schema<Tcart>({
    quentity: { type: Number, required: true, max: 10, default: 1 },
    productId: { type: Schema.Types.ObjectId, ref: 'products', required: true },
    userEmail:{type:String,required:true}
},
    { timestamps: true }
)


export const cartModel = model<Tcart>('cart', cartSchema)