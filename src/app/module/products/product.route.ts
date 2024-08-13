import { Router } from "express";
import { getProductController, productController } from "./product.controller";


export const productsRoute = Router()


productsRoute.post('/upload',productController)

productsRoute.get('/get-product',getProductController)