import { NextFunction, Request, Response } from "express";
import { createUserService } from "./user.services";
import { signupModel } from "./user.model";



export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const inserted = await createUserService(req.body)
        res.status(200).json({ status: true, token: inserted })
    } catch (err: any) {
        next(err)
    }

}



export const getUserController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const data = await signupModel.findOne({ email: req.user.email }).select('email name')
        res.status(200).json({ status: true, data })
    } catch (err: any) {
        next(err)
    }

}