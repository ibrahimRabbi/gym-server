import { model, Schema } from "mongoose";
import { Tsignup } from "./user.interface";
 


const signupSchema = new Schema<Tsignup>({
    name: { type: String, required: true, maxlength: 35 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, enum: ['user', 'admin'], required:true},
    profile: { type: String, trim: true, default:'https://i.ibb.co/jz5bg13/image.jpg'},
    isDeleted: { type: Boolean, default: false },
},{timestamps:true})

export const signupModel = model<Tsignup>('users', signupSchema)