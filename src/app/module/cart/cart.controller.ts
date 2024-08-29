import { NextFunction, Request, Response } from "express";
import { addcartService, getCartDataService } from "./cart.services";
import { cartModel } from "./cart.model";


export const addCartController = async (req: Request, res: Response, next: NextFunction) => {
   
    try {
        const inserted = await addcartService(req.body)
        res.status(200).json({ status: true, data: inserted })
    } catch (err: any) {
        next(err)
    }
}



export const getCartdataController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await getCartDataService(req.query.email as string)
        res.status(200).json({ status: true, data })
    } catch (err: any) {
        next(err)
    }
}



export const deleteCartController = async (req: Request, res: Response, next: NextFunction) => {
     
    try {
        const data = await cartModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ status: true, data })
    } catch (err: any) {
        next(err)
    }
}