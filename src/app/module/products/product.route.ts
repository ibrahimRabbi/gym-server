import { Router } from "express";
import { deleteProductController, getProductController, getSingleProductController, productController } from "./product.controller";


export const productsRoute = Router()


productsRoute.post('/addproduct',productController)

productsRoute.get('/get-product', getProductController)

productsRoute.get('/single-product/:id', getSingleProductController)

productsRoute.delete('/delete-product/:id', deleteProductController)