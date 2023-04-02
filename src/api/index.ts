
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