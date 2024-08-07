import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import envData from './app/config/config';

const app = express()


app.use(cors({origin:'localhost://5000',credentials:true}))
app.use(express.json())



async function main() {
    await mongoose.connect(envData.databaseUrl as string);

    app.listen(envData.port, () => {
         console.log('server is run on 5000 port')
    })
    
}

main()


