import { NextFunction, Request, Response } from "express"
import envData from "../../config/config"
import { paymentModel } from "./payment.model"
import { cartModel } from "../cart/cart.model"
import { Tpayment } from "./payment.interface"
const SSLCommerzPayment = require('sslcommerz-lts')




export const paymentController = async (req: Request, res: Response, next: NextFunction) => {
 
    
    const is_live = false
    const transaction = Math.random().toString()

    const data = {
        total_amount: req.body?.amount,
        currency: req.body?.currency,
        tran_id: 'REF123', // use unique tran_id for each api call
        success_url: `http://localhost:5000/api/payment/success/${transaction}?email=${req.body.user.email}`,
        fail_url: 'http://localhost:3030/fail',
        cancel_url: 'http://localhost:3030/cancel',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'customer@example.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };


    try {
        const sslcz = new SSLCommerzPayment(envData.storeId, envData.storePassword, is_live)
        sslcz.init(data).then((apiResponse: any) => {
            let GatewayPageURL = apiResponse.GatewayPageURL
            res.status(200).json({ status: true, url: GatewayPageURL })
        });

        const orderSummery:Tpayment = {
            user: req.body.user._id,
            email: req.body.user.email,
            amount: req.body.amount,
            products: req.body.products
        }
 
        const createOrder = await paymentModel.create(orderSummery)
        
        if (!createOrder) {
            throw new Error('create order faild')
        }

    } catch (err: any) {
        next(err)
    }
}


export const paymentSuccessController = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const deleteCartData = await cartModel.deleteMany({ userEmail: req.query.email })

        if (!deleteCartData) {
throw new Error('plz input a valid OTP')
        }

        if (deleteCartData.deletedCount > 0) {
            res.redirect('http://localhost:5173')
        }

    } catch (err: any) {
        next(err)
    }
   
   
}