"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./app/config/config"));
const product_route_1 = require("./app/module/products/product.route");
const globalErrorHandle_1 = require("./app/middleware/globalErrorHandle");
const cart_route_1 = require("./app/module/cart/cart.route");
const user_route_1 = require("./app/module/users/user.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: 'http://localhost:5173', credentials: true }));
app.use(express_1.default.json());
//route
app.use('/api/product', product_route_1.productsRoute);
app.use('/api/cart', cart_route_1.cartRoute);
app.use('/api/user', user_route_1.userRoute);
//error handler
app.use(globalErrorHandle_1.globalError);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(config_1.default.databaseUrl);
        app.listen(config_1.default.port, () => {
            console.log('server is run on 5000 port');
        });
    });
}
main();
