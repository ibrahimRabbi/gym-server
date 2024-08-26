import { model, Schema } from "mongoose";
import { Tproduct } from "./product.interface";

const productSchema = new Schema<Tproduct>({
    title: { type: String, required: true, maxlength:30, trim: true },
    description: { type: String, required: true, trim: true, default: 'hello world' },
    price: { type: Number, required: true, trim: true },
    image: { type: String, required: true, trim: true},
    category: { type: String, required: true, trim: true, enum: ['bike', 'cable-machine', 'dumbbell', 'treadmill'] },
    stock: { type: Number, required: true, trim: true, min:10 },
    rating: { type: Number, max: 5, default: 3 },
    isdeleted: { type: Boolean, default: false }
},
    { timestamps: true }
)

export const productModel = model<Tproduct>('products', productSchema)