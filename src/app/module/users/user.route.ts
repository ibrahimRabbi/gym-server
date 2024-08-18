import { Router } from "express";
import { createUserController, getUserController } from "./user.controller";
import { authValidate } from "../../middleware/authValidate";


export const userRoute = Router()


userRoute.post('/create-user', createUserController)

userRoute.get('/get-user',authValidate, getUserController)