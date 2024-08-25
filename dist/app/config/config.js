"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
const envData = {
    databaseUrl: process.env.DATABASE_URL,
    port: process.env.PORT,
    secretKey: process.env.SECRET_KEY,
    storeId: process.env.STORE_ID,
    storePassword: process.env.STORE_PASSWORD
};
exports.default = envData;
