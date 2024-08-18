import { Tcart } from "./cart.interface";
import { cartModel } from "./cart.model";


export const addcartService = async (data: Tcart) => {
    
    try {
        const findDataExistancy = await cartModel.findOne({ id: data.id })

        if (findDataExistancy) {
            throw new Error('this item already added')
        }

        const inserting = await cartModel.create(data)
        return inserting
    } catch (err: any) {
        throw new Error(err)
    }

}


export const getCartDataService = async () => {
    const data = await cartModel.find().populate('id')
    return data
}