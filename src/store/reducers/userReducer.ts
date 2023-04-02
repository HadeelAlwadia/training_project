import { userActionsName } from '../constances/userActionsName';

const userData={
  user:{
    _id: '',
    firstName: '',
    lastName: '',
    profileImage: '',
    dateOfBirth: '',
    email: '',
    isAdmin: false,
    cart: [],
    token: ''
},
error:'',
loading:false
}
export const userReducer=(userState=userData,action:any)=>{
    switch (action.type) {
        case userActionsName.START_GET_USER_PROFILE:return{...userState,loading:true,error:''}
        case userActionsName.SUCCESS_GET_USER_PROFILE:return{...userState,loading:false, user:action.payload}
        case userActionsName.FAIL_GET_USER_PROFILE:return{...userState,loading:false,error:action.payload}   
        
        case userActionsName.START_DELETE_USER_CART:return{...userState,loading:true,error:''}
        case userActionsName.SUCCESS_DELETE_USER_CART:return{...userState,loading:false,user:action.payload}
        case userActionsName.FAIL_DELETE_USER_CART:return{...userState,loading:false,error:action.payload}   
        
        case userActionsName.START_UPDATE_USER_CART:return{...userState,loading:true,error:''}
        case userActionsName.SUCCESS_UPDATE_USER_CART:return{...userState,loading:false,user:action.payload}
        case userActionsName.FAIL_UPDATE_USER_CART:return{...userState,loading:false,error:action.payload}   
        
        case userActionsName.START_UPDATE_USER_PROFILE:return{...userState,loading:true,error:''}
        case userActionsName.SUCCESS_UPDATE_USER_PROFILE:return{...userState,loading:false,user:action.payload}
        case userActionsName.FAIL_UPDATE_USER_PROFILE:return{...userState,loading:false,error:action.payload}   
        
    

       
        default:return userState
    }
}