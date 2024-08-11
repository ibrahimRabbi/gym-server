import { Router } from "express";
import { productController } from "./product.controller";


export const productsRoute = Router()


productsRoute.post('/upload',productController)

