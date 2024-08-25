import { model, Schema } from "mongoose";
import { Tsignin } from "./auth.interface";
 



// const signupSchema = new Schema<Tsignin>({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true, trim: true },     
// })

// export const signupModel = model<Tsignin>('users', signupSchema)