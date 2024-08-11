import { model, Schema } from "mongoose";
import { Tproduct } from "./product.interface";

const productSchema = new Schema<Tproduct>({
    title: { type: String, required: true, maxlength: 15, unique: true, trim: true },
    description: { type: String, required: true, maxlength: 25, trim: true, default: 'hello world' },
    price: { type: Number, required: true, trim: true },
    image: { type: String, required: true, trim: true, unique: true },
    isdeleted: { type: Boolean, default: false }
},
    { timestamps: true }
)

export const productModel = model<Tproduct>('products', productSchema)