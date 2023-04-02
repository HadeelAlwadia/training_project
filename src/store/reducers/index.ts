import { userReducer } from './userReducer';
import { adminReducer } from './adminReducer';
import { authReducer } from "./authReducer";
import { ProductsReducer } from "./productsReducer";
import { themeReducer } from "./themeReducer";
import { ordersReducer } from './ordersReducer';


export const reducer={
    products:ProductsReducer,
    user:authReducer,
    admin:adminReducer,
    theme:themeReducer,
    userData:userReducer,
    orders:ordersReducer
};