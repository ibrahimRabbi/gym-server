import { NextFunction, Request, Response } from "express";

export const globalError = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log('hello')
   return res.json({status:false,error:err})
}