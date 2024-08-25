import { model, Schema } from "mongoose";
import { Tpayment } from "./payment.interface";

const paymentSchema = new Schema<Tpayment>({
    price: { type: Number, required: true, trim: true }
})


export const paymentModel = model<Tpayment>('payment', paymentSchema)