import envData from "../../config/config";
import { Tsignup } from "./user.interface";
import { signupModel } from "./user.model";
import jwt from 'jsonwebtoken';


export const createUserService = async (data: Tsignup) => {
    const finaldata = {...data, role:'user'}
    const creating = await signupModel.create(finaldata)
    
    if (creating){
        const accessToken = jwt.sign(finaldata, envData.secretKey as string, { expiresIn: '1h' });
        return accessToken
   }
    
     
}