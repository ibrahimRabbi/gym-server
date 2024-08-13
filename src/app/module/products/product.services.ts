import { Tproduct } from "./product.interface";
import { productModel } from "./product.model";

export const productPostServices = async (payload: Tproduct) => {
        const inserting = await productModel.create(payload)
        return inserting    
}


export const getProductServices = async (query: Record<string, unknown>) => {
        
        let findQuery = {}
        let limit: number = 0
        

        if (query?.rating) {
                findQuery = { rating: { $gte: query.rating } }      
        }

        if (query?.limit) {
                limit = query.limit as number
        }



        const inserting = await productModel.find(findQuery).limit(limit)
        return inserting
       
}