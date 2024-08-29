import { Router } from "express";
import { addCartController, deleteCartController, getCartdataController } from "./cart.controller";

export const cartRoute = Router()

cartRoute.post('/addcart', addCartController)
cartRoute.get('/getcart', getCartdataController)
cartRoute.delete('/delete-cart/:id',deleteCartController)