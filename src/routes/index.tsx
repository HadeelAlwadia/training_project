
import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Orders from '../screens/admain/Orders';
import CreateProduct from '../screens/admain/Products/CreateProduct';
import Users from '../screens/admain/Users';
import { DetailesOfUsers } from '../screens/admain/Users/DetailesOfUsers';
import Allproducts from '../screens/Allproducts';
import ForgetPassword from '../screens/auth/ForgetPassword';
import SignUp from '../screens/auth/SignUp';
import SingIn from '../screens/auth/SingIn';
import Cart from '../screens/Cart';
import { EmptyCart } from '../screens/EmptyCart';
import Error from '../screens/Error';
import Home from '../screens/Home';
import { Payment } from '../screens/Payment';
import Product from '../screens/Product';
import Search from '../screens/Search';
import SuccessPayment from '../screens/SuccessPayment';

const screensPath = [
{ path: '/', element: <Home /> },
{ path: '*', element: <Error /> },
{ path: '/auth/login', element: <SingIn /> },
 { path: '/auth/forgot-password', element: <ForgetPassword /> },
{ path: '/auth/signup', element: <SignUp /> },
{ path: 'products/:id', element: <Product /> },
{ path: '/products/new', element: <CreateProduct /> },
{ path: '/orders', element: <Orders /> },
 { path: '/users/:id', element: < DetailesOfUsers/> },
{ path: '/users', element: <Users /> },
{ path: '/products', element: <Allproducts /> },
{ path: '/search/:keyword', element: <Search /> },
{ path: '/shopping-cart', element: <Cart /> }, 
{ path: '/empty-cart', element: <EmptyCart /> }, 

{path:'/payment',element:<Payment/>},{
    path:'payment-success',element:<SuccessPayment/>  
}



]

const routers = createBrowserRouter(screensPath);

export default routers;

