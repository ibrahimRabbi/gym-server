import { Tproduct } from "./product.interface";
import { productModel } from "./product.model";



export const productPostServices = async (payload: Tproduct) => {
        const inserting = await productModel.create(payload)
        return inserting
}


export const getProductServices = async (query: Record<string, unknown>) => {

        let findQuery = {}
        let limit: number = 0

        if (query?.rating !== 'undefined') {
                findQuery = { rating: { $gte: query.rating } }
        }

        if (query?.limit !== 'undefined') {
                limit = query.limit as number
        }


        const inserting = await productModel.find(findQuery).limit(limit)
        return inserting

}



export const getSingleProductServices = async (id:string) => {
        const inserting = await productModel.findById(id)
        return inserting
}