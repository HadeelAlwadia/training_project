interface IReview {
    _id: string;
    name: string;
    rating: number;
    comment: string;
    user: string;
    createdAt: string;
    updatedAt: string;
  }
  interface IAddReview{
    rating: number;
    comment: string;
  }
  interface IProduct {
    images: string[];
    colors: string[];
    categories: string[];
    rating: number;
    numReviews: number;
    price: number;
    discount: number;
    countInStock: number;
    _id: string;
    name: string;
    description: string;
    brand: string;
    user: string;
    reviews: IReview[];
    __v: number;
    createdAt: string;
    updatedAt: string;
  }
  interface ICategory {
    name: string;
    image: string;
  }
   interface IProducts {
    products: IProduct[];
    page: number;
    pages: number;
  }
type ICategories=ICategory[]
  
  interface IStateOfProduct {
    loading: boolean;
    error: string;
    products: IProducts;
    categories: ICategory[];
    topProducts: IProduct[];
    Product?: IProduct | undefined;
    ProductsOfCategory: IProducts;
  }
  
type stringValue=string;

  interface IGetProductsAction{
    type:string,
    payload:IProducts
  }
  interface IGetTopProductsAction{
    type:string,
    payload:IProducts
  }
  interface IGetProductAction{
    type:string,
    payload:IProduct
  }
  interface IGetProductsOfCategoryAction{
    type:string,
    payload:IProducts
  }
  interface IGetCategoriesAction{
    type:string,
    payload:ICategories
  }
  interface IAddProductRviewAction{
    type:string,
    payload:IProduct
  }
  interface IErrorAction{
    type:string,
    payload:string
  }
  interface IStartAction{
    type:string
  }
  type actionsType=IGetProductsAction|IStartAction|IErrorAction|IGetTopProductsAction|IAddProductRviewAction|IGetCategoriesAction|IGetProductsOfCategoryAction|IGetCategoriesAction|IGetProductsAction;


  interface ICart{

  }
   interface IUser{
    _id: stringValue
    firstName: stringValue
    lastName: stringValue
    profileImage: stringValue
    dateOfBirth: stringValue
    email: stringValue
    isAdmin:boolean ,
    cart: ICart,
    token:stringValue 
  }
  interface IUserState{
    loading:boolean,
    error:string,
    user:{}|IUser
  }
interface ISignUp{
  firstName: stringValue,
  lastName: stringValue,
  email: stringValue,
  password: stringValue,
  passwordConfirmation: stringValue
}
interface ISignIn{
  email:stringValue,
  password:stringValue
}

interface ISignInAction{
  type:string,
  payload:IUser
}
interface ISignUpAction{
  type:string,
  payload:IUser
}
interface ISignOutAction {}
interface IUserInformation{
  firstName?:stringValue,
  lastName?:stringValue,
  email:stringValue,
  password:stringValue,
  passwordConfirmation?:stringValue
}
interface IDeleteProduct {message:string}

interface IDeleteUser extends IDeleteProduct{}

interface IShippingAddress {
  address: stringValue,
  city: stringValue,
  postalCode:stringValue ,
  country:stringValue
}
interface IOrderItem  {
  _id: stringValue,
  product: IProduct[]
  qty: number,
  itemTotalPrice: number
}
interface IOrder{
  shippingAddress: IShippingAddress,
  taxPrice:number,
  shippingPrice: number,
  totalPrice: number,
  isPaid: boolean,
  isDelivered: boolean,
  _id: stringValue,
  user:IUser
  orderItems:IOrderItem []
  paymentMethod: stringValue,
  createdAt: stringValue,
  updatedAt: stringValue,
  __v: 0,
  clientSecret: stringValue
  paidAt: stringValue
  deliveredAt:stringValue
}

type IOrders=IOrder[]

interface ItemOfCart{
  productId: "string",
  qty: 0
}

interface IDetailesOfOrder{
  clientSecret:stringValue
  order:IOrder
  message: stringValue
}

  export type {
  
    IReview,IAddProductRviewAction,IGetProductAction,IGetCategoriesAction,IStartAction,IGetProductsAction,IGetTopProductsAction,
    actionsType,IErrorAction,IStateOfProduct,stringValue,IProducts,ICategory,ICategories,IProduct,IAddReview,
    IUser,
    ICart,
    ISignIn,
    ISignUp,
    ISignInAction,
    ISignUpAction,
    IUserState,
    IUserInformation,
    ISignOutAction,
    IDeleteProduct,
    IDeleteUser,
    IOrders,
    IOrder,
    ItemOfCart,
    IDetailesOfOrder
}
