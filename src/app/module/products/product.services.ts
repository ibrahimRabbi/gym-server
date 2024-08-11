import { Tproduct } from "./product.interface";
import { productModel } from "./product.model";

export const productPostServices = async (payload: Tproduct) => {
        const inserting = await productModel.create(payload)
        return inserting    
}