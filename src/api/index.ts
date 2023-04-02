/*import axios from "axios"
import { getAllGetogry, getAllProducts, getTopProducts } from "../store";
const baseUrl='https://prohop-express.herokuapp.com/api/';
interface I{

}

type stringValue=string
interface IBodyUserRespone{
    _id: number,
    firstName: string,
    lastName: string,
    profileImage: "",
    dateOfBirth: string,
    email: string,
    isAdmin: boolean,
    cart: {
      items: any[],
      totalQty: number,
      totalPrice: number
    },
    token: string
  }

  




interface IBodyNewUser{
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
    passwordConfirmation: "string"
  }
  interface IProfileUser{
    _id: "string",
    firstName: "string",
    lastName: "string",
    profileImage: "string",
    dateOfBirth: "string",
    email: "string",
    isAdmin: true,
    cart: {},
    token: "string"
  }

  interface IInformationUser{
    email: "string",
    password: "string"
  }

  interface IUserCart{
    productId: "string",
    qty: 0
  }






class ApiMethod{
    constructor(){
     
    }

    createUser=(user:IBodyNewUser,dispatch:any)=>{
     axios.post(baseUrl,user).then(res=>{       
             dispatch(res)
    })
    }
    
    getInformationOfUser= (user:IInformationUser,dispatch:any)=>{
         axios.post(`${baseUrl}`,user).then(res=>{
            dispatch(res)
       })
    }
    
    getAllProducts=(dispatch:any)=>{
        axios.get(`${baseUrl}`).then(res=>dispatch(getAllProducts(res.data.categories)))
    }

    getTopProduct=(dispatch:any)=>{
        axios.get(baseUrl).then(res=>dispatch(getTopProducts(res)))
    }
    getAllCatergories=(dispatch:any)=>{
        axios.get(`${baseUrl}products/category/all`).then(res=>dispatch(getAllGetogry(res)))

    }
    getSpcficCatrorybyName=(nameOfCategory:stringValue)=>{
        axios.get(baseUrl)
    }
    getSpcficProductbyId=(id:stringValue)=>{
        axios.get(baseUrl)
    }
    getReviewaForProduct=(id:stringValue)=>{
        axios.get(baseUrl)
    }

    deleteItemOfCart=(id:stringValue)=>{
     axios.delete(baseUrl)
    }
    getOrders=()=>{
        axios.get(baseUrl)

    }
    getSpcficOrdersForAdmain=()=>{
     axios.get(baseUrl)
    }
    getSpesficOrderById=(id:stringValue)=>{
      axios.get(baseUrl)
    }
    getUserProfile=()=>{
    axios.get(baseUrl)
    }
    addUserProfile=(userProfile:IProfileUser)=>{
           axios.put(baseUrl)
    }
     addUserCart=(cart:IUserCart)=>{
      axios.put(baseUrl)
     }

     deleteItemOfUserCart=(id:stringValue)=>{
       axios.delete(baseUrl)
     }


     uploadFile=()=>{
         axios.post(baseUrl)
     }
    getAllUserOFAdmin=()=>{

    }
    getSpecficIserOFAdmin=()=>{

    }
    deleteUserOfAdmin=()=>{

    }
    addNewProducts=()=>{

    }
    deleteItemOfProduct=()=>{

    }
    getOrderOfAdmin=()=>{

    }
    putDeliverOrderofAdmin=()=>{
        
    }
       




}






export{ApiMethod}*/
import axios from 'axios';


const FetchData= axios.create({
  baseURL: 'https://prohop-express.herokuapp.com/api/'
});
const { token } = JSON.parse(localStorage.getItem('user')||JSON.stringify({ token: "" }));  

FetchData.interceptors.request.use((config)=>{

  if(token){
    config.headers={
      Authorization: `Bearer ${token}`,
  
    }
  }
  return config
},()=>{

})
export const API={

  get:async (url:string)=>{
    return await FetchData.get(url)
  },
  put:async (url:string,body:any)=>{
    return await FetchData.put(url,body)
  },
 post:async (url:string,body:any)=>{
  return await FetchData.post(url,body)
},
delete:async (url:string)=>{
  return await FetchData.delete(url)
},
} 