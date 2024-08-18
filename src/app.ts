import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import envData from './app/config/config';
import { productsRoute } from './app/module/products/product.route';
import { globalError } from './app/middleware/globalErrorHandle';
import { cartRoute } from './app/module/cart/cart.route';
import { userRoute } from './app/module/users/user.route';

const app = express()


app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())


//route
app.use('/api/product', productsRoute)
app.use('/api/cart', cartRoute)
app.use('/api/user',userRoute)


//error handler
app.use(globalError)







async function main() {
    await mongoose.connect(envData.databaseUrl as string);

    app.listen(envData.port, () => {
         console.log('server is run on 5000 port')
    })
    
}

main()


