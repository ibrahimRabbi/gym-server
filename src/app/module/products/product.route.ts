import { Router } from "express";
import { getProductController, getSingleProductController, productController } from "./product.controller";


export const productsRoute = Router()


productsRoute.post('/upload',productController)

productsRoute.get('/get-product', getProductController)

productsRoute.get('/single-product/:id' , getSingleProductController)