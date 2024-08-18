import { Router } from "express";
import { addCartController, getCartdataController } from "./cart.controller";

export const cartRoute = Router()

cartRoute.post('/addcart', addCartController)
cartRoute.get('/getcart',getCartdataController)