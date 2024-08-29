import { NextFunction, Request, Response } from "express";
import { getProductServices, getSingleProductServices, productPostServices } from "./product.services";
import { productModel } from "./product.model";



export const productController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await productPostServices(req.body)
        res.status(200).json({ status: true, data: response })
    } catch (err: any) {
        next(err)
    }
}

export const getProductController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const response = await getProductServices(req.query)
        res.status(200).json({ status: true, data: response })
    } catch (err: any) {
        next(err)
    }
}



export const getSingleProductController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const response = await getSingleProductServices(req.params.id as string)
        res.status(200).json({ status: true, data: response })
    } catch (err: any) {
        next(err)
    }
}




export const deleteProductController = async (req: Request, res: Response, next: NextFunction) => {
 
    try {
        const deleted = await productModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ status: true, data: deleted })
    } catch (err: any) {
        next(err)
    }
}



export const updateProductController = async (req: Request, res: Response, next: NextFunction) => {
 
    try {
        const updating = await productModel.findByIdAndUpdate({ _id: req.params.id }, req?.body)
        res.status(200).json({ status: true, data: updating })
    } catch (err: any) {
        next(err)
    }
}