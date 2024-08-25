import env from 'dotenv'
import path from 'path'

env.config({path:path.join(process.cwd(),'.env')})


const envData = {
    databaseUrl: process.env.DATABASE_URL,
    port: process.env.PORT,
    secretKey: process.env.SECRET_KEY,
    storeId: process.env.STORE_ID,
    storePassword: process.env.STORE_PASSWORD
}


export default envData