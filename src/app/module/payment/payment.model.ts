import { model, Schema } from "mongoose";
import { Tpayment } from "./payment.interface";

const paymentSchema = new Schema<Tpayment>({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    email: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, trim: true },
    products: { type: Array<Object>, required: true },  
})


export const paymentModel = model<Tpayment>('payment', paymentSchema)