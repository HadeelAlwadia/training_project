import { IUser, IUserState } from "../../@types";
import { AuthActionsName } from "../constances/authActionsName";

 let user:IUserState={
     loading: false,
     error: "",
     user: {}
 }
 export const authReducer=(userData:IUserState=user,action:any)=>{
switch (action.type) {
    case AuthActionsName.START_SIGNIN:return{...userData,loading:true,error:''}
    case AuthActionsName.SUCCESS_SIGNIN:return{...userData,loading:false,user:action.payload}
    case AuthActionsName.FAIL_SIGNIN:return{...userData,loading:false,error:action.payload}
    case AuthActionsName.START_SIGNUP:return{...userData,loading:true,error:''}
    case AuthActionsName.SUCCESS_SIGNUP:return{...userData,loading:false,user:action.payload}
    case AuthActionsName.FAIL_SIGNUP:return{...userData,loading:false,error:action.payload}
    case AuthActionsName.SIGNOUT:return{...userData,loading:false,user:{},error:''}

    default:return userData
}
}