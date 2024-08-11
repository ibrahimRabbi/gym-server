import { NextFunction, Request, Response } from "express";
import { productPostServices } from "./product.services";



export const productController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await productPostServices(req.body)
        res.status(200).json({ status: true, data: response })
    } catch (err: any) {
        next(err)
    }
}