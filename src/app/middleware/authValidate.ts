import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import envData from "../config/config";

export const authValidate = async (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers?.authorization

    try {

        if (!token) {
            throw new Error('unauthorized user')
        }
        
        const decoded = jwt.verify(token as string, envData.secretKey as string);
        req.user = decoded as JwtPayload
        next()
    } catch (err: any) {
        next(err)
    }
}