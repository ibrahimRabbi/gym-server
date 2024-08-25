import { Router } from "express";
import { paymentController, paymentSuccessController } from "./payment.controller";


export const paymentRoute = Router()

paymentRoute.post("/payment", paymentController)

paymentRoute.post(`payment/success/:id`,paymentSuccessController)