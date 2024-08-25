import envData from "../../config/config";
import { Tsignin } from "../authentication/auth.interface";
import { Tsignup } from "./user.interface";
import { signupModel } from "./user.model";
import jwt, { JwtPayload } from 'jsonwebtoken';


export const createUserService = async (data: Tsignup) => {
    const finaldata = { ...data, role: 'user' }
    const findeBefore = await signupModel.findOne({ email: data.email })

    if (findeBefore) {
        throw new Error('this user Already exist')
    }

    const creating = await signupModel.create(finaldata)
    
    if (creating){
        const accessToken = jwt.sign(finaldata, envData.secretKey as string, { expiresIn: '1h' });
        return accessToken
   }
    
     
}




export const signinUserService = async (data: Tsignin) => {
     const finaldata = { ...data, role: 'user' }
    const findeBefore = await signupModel.findOne({ email: data.email }).select('email password role isDeleted')
 
    if (!findeBefore) {
        throw new Error('invalid email')
    }

    if (findeBefore?.password !== data.password) {
        throw new Error('wrong password')
    }
     
    if (findeBefore.isDeleted) {
        throw new Error('forbidden user')
    }
    
    const accessToken = jwt.sign(finaldata, envData.secretKey as string, { expiresIn: '1h' })
    
    return accessToken
     

}









export const getUserServices = async (user:JwtPayload) => {
    const data = await signupModel.findOne({ email: user.email }) 
     
    if (!data) {
        throw new Error('unauthorized user')
    }

    return data
}