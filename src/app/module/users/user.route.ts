import { Router } from "express";
import { createUserController, getUserController, signinUserController } from "./user.controller";
import { authValidate } from "../../middleware/authValidate";


export const userRoute = Router()


userRoute.post('/create-user', createUserController)

userRoute.post('/sign-in', signinUserController)

userRoute.get('/get-user',authValidate, getUserController)