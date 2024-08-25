import { NextFunction, Request, Response } from "express";
import { createUserService, getUserServices, signinUserService } from "./user.services";
import { signupModel } from "./user.model";



export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const inserted = await createUserService(req.body)
        res.status(200).json({ status: true, token: inserted })
    } catch (err: any) {
        next(err)
    }

}


export const signinUserController = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const inserted = await signinUserService(req.body)
        res.status(200).json({ status: true, token: inserted })
    } catch (err: any) {
        next(err)
    }

}



export const getUserController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const findUser = await getUserServices(req.user)
        res.status(200).json({ status: true, data:findUser })
    } catch (err: any) {
        next(err)
    }

}