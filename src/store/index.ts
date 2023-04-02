import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducers';
export const store = configureStore({
  reducer
})

//to know type of store
export type RootState = ReturnType<typeof store.getState>;
//to konw type of dispatch
export type AppDispatch = typeof store.dispatch;


















/*import { createStore } from "redux";
 const getAllProducts=(payload:any)=>({type:'get',payload:payload});
 const getTopProducts=(payload:any)=>({type:'getTopProduct',payload})
 const getAllGetogry=(payload:any)=>({type:'getAllGetogry',payload})

 const reduce=(state:any=[],action:any)=>{
  switch(action.type){
    case 'get':{ return action.payload }
    case 'getTopProduct':{return [...state,action.payload]}
    case 'getAllGetogry':{return [...state,action.payload]}

    default: return state
  }
 }
const store=createStore(reduce)
export{
  store,getAllProducts,getTopProducts,getAllGetogry
}*/