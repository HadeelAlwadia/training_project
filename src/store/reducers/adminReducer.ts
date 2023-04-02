import { IOrder, IOrders, IProduct, IUser } from '../../@types';
import { adminActionsName } from './../constances/adminActionsName';
interface IAdmin{
users:IUser[]
orders:IOrder[]
}
const adminData:IAdmin={
    orders: [],
    users: [],
}
export const adminReducer=(adminState=adminData,action:any)=>{
    switch (action.type) {
        case adminActionsName.START_GET_USERS:return{...adminState,loading:true,error:''}
        case adminActionsName.SUCCESS_GET_USERS:return{...adminState,loading:false,users:action.payload}
        case adminActionsName.FAIL_GET_USERS:return{...adminState,loading:false,error:action.payload}   
        
        case adminActionsName.START_ADD_NEW_PRODUCT:return{...adminState,loading:true,error:''}
        case adminActionsName.SUCCESS_ADD_NEW_PRODUCT:return{...adminState,loading:false}
        case adminActionsName.FAIL_ADD_NEW_PRODUCT:return{...adminState,loading:false,error:action.payload}     

        case adminActionsName.START_DELETE_SPESIFIC_PRODUCT:return{...adminState,loading:true,error:''}
        case adminActionsName.SUCCESS_DELETE_SPESIFIC_PRODUCT:return{...adminState,loading:false}
        case adminActionsName.FAIL_DELETE_SPESIFIC_PRODUCT:return{...adminState,loading:false,error:action.payload}     

        case adminActionsName.START_DELETE_SPESIFIC_USER:return{...adminState,loading:true,error:''}
        case adminActionsName.SUCCESS_DELETE_SPESIFIC_USER:return{...adminState,loading:false,users:action.payload}
        case adminActionsName.FAIL_DELETE_SPESIFIC_USER:return{...adminState,loading:false,error:action.payload}  

        case adminActionsName.START_UPDATE_DETAILES_SPESIFIC_ORDER:return{...adminState,loading:true,error:''}
        case adminActionsName.SUCCESS_UPDATE_DETAILES_SPESIFIC_ORDER:return{...adminState,loading:false,orders:action.payload}
        case adminActionsName.FAIL_UPDATE_DETAILES_SPESIFIC_ORDER:return{...adminState,loading:false,error:action.payload}   

        case adminActionsName.START_UPDATE_DETAILES_SPESIFIC_PRODUCT:return{...adminState,loading:true,error:''}
        case adminActionsName.SUCCESS_UPDATE_DETAILES_SPESIFIC_PRODUCT:return{...adminState,loading:false}
        case adminActionsName.FAIL_UPDATE_DETAILES_SPESIFIC_PRODUCT:return{...adminState,loading:false,error:action.payload}     

        case adminActionsName.START_UPDATE_DETAILES_SPESIFIC_USER:return{...adminState,loading:true,error:''}
        case adminActionsName.SUCCESS_UPDATE_DETAILES_SPESIFIC_USER:return{...adminState,loading:false,users:action.payload}
        case adminActionsName.FAIL_UPDATE_DETAILES_SPESIFIC_USER:return{...adminState,loading:false,error:action.payload}     

        case adminActionsName.START_GET_ORDERS:return{...adminState,loading:true,error:''}
        case adminActionsName.SUCCESS_GET_ORDERS:return{...adminState,loading:false,orders:action.payload}
        case adminActionsName.FAIL_GET_ORDERS:return{...adminState,loading:false,error:action.payload}     

        default:return adminState
    }
}