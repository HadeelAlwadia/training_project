import { AppDispatch } from "..";
import { IDeleteProduct, IDeleteUser, IOrder, IOrders, IProduct, IUser, stringValue } from "../../@types";
import { API } from "../../api";
import { adminActionsName } from "../constances/adminActionsName";


export const adminActions = {

    startGetUsers:()=>({
        type:adminActionsName.START_GET_USERS
    }),
    successGetUsers:(payload:IUser[])=>({
        type:adminActionsName.SUCCESS_GET_USERS,
        payload
    }),
    failGetUsers:(payload:stringValue)=>({
        type:adminActionsName.FAIL_GET_USERS,
        payload   

    }),
    startGetSpesificUser:()=>({
        type:adminActionsName.START_GET_SPESIFIC_USER

    }),
    successGetSpesificUser:(payload:IUser)=>({
        type:adminActionsName.SUCCESS_GET_SPESIFIC_USER,
        payload

    }),
    failGetSpesificUser:(payload:stringValue)=>({
        type:adminActionsName.FAIL_GET_SPESIFIC_USER,
        payload

    }),
    startUpdateDetailesSpesificUser:()=>({
        type:adminActionsName.START_UPDATE_DETAILES_SPESIFIC_USER

    }),
    successUpdateDetailesSpesificUser:(payload:IUser)=>({
        type:adminActionsName.SUCCESS_UPDATE_DETAILES_SPESIFIC_USER,
        payload

    }),
    failUpdateDetailesSpesificUser:(payload:stringValue)=>({
        type:adminActionsName.FAIL_UPDATE_DETAILES_SPESIFIC_USER,
        payload

    }),
    startDeleteSpesificProduct:()=>({
        type:adminActionsName.START_DELETE_SPESIFIC_PRODUCT

    }),
    successDeleteSpesificProduct:(payload:IDeleteProduct)=>({
        type:adminActionsName.SUCCESS_DELETE_SPESIFIC_PRODUCT,
        payload

    }),
    failDeleteSpesificProduct:(payload:stringValue)=>({
        type:adminActionsName.FAIL_DELETE_SPESIFIC_PRODUCT,
        payload

    }),
    startAddNewProduct:()=>({
        type:adminActionsName.START_ADD_NEW_PRODUCT

    }),
    successAddNewProduct:(payload:IProduct)=>({
        type:adminActionsName.SUCCESS_ADD_NEW_PRODUCT,
        payload

    }),
    failAddNewProduct:(payload:stringValue)=>({
        type:adminActionsName.FAIL_ADD_NEW_PRODUCT,
        payload

    }),
    startDeleteSpesificUser:()=>({
        type:adminActionsName.START_DELETE_SPESIFIC_USER

    }),
    successDeleteSpesificUser:(payload:IDeleteUser)=>({
        type:adminActionsName.SUCCESS_DELETE_SPESIFIC_USER,
        payload

    }),
    failDeleteSpesificUser:(payload:stringValue)=>({
        type:adminActionsName.FAIL_DELETE_SPESIFIC_USER,
        payload

    }),
    startUpdateDetailesSpesificProduct:()=>({
        type:adminActionsName.START_UPDATE_DETAILES_SPESIFIC_PRODUCT

    }),
    successUpdateDetailesSpesificProduct:(payload:IProduct)=>({
        type:adminActionsName.SUCCESS_DELETE_SPESIFIC_PRODUCT,
        payload

    }),
    failUpdateDetailesSpesificProduct:(payload:stringValue)=>({
        type:adminActionsName.FAIL_UPDATE_DETAILES_SPESIFIC_ORDER,
        payload

    }),
    startGetOrders:()=>({
        type:adminActionsName.START_GET_ORDERS

    }),
    successGetOrders:(payload:IOrders)=>({
        type:adminActionsName.SUCCESS_GET_ORDERS,
        
        payload

    }),
    failGetOrders:(payload:stringValue)=>({
        type:adminActionsName.FAIL_GET_ORDERS

    }),
    startUpdateDetailesSpesificOrder:()=>({
        type:adminActionsName.START_UPDATE_DETAILES_SPESIFIC_ORDER

    }),
    successUpdateDetailesSpesificOrder:(payload: IOrders)=>({
        type:adminActionsName.START_UPDATE_DETAILES_SPESIFIC_ORDER,
        
        payload

    }),
    failUpdateDetailesSpesificOrder:(payload:stringValue)=>({
        type:adminActionsName.FAIL_UPDATE_DETAILES_SPESIFIC_ORDER,
        payload

    }),
















  
};

export const adminMethoad = {
   
    getUsers: (dispatch: AppDispatch) => {
    try {
      dispatch(adminActions.startGetUsers());
      API.get("users")
        .then((res) => dispatch(adminActions.successGetUsers(res.data.users)))
        .catch((error) =>
          dispatch(adminActions.failGetUsers(error.response.data.message))
        );
    } catch (error: any) {

    }
  },
  getSpesificUser: (dispatch: AppDispatch,id:stringValue) => {
    try {
      dispatch(adminActions.startGetSpesificUser());
      API.get(`users/${id}`)
        .then((res) => dispatch(adminActions.successGetSpesificUser(res.data)))
        .catch((error) =>
          dispatch(adminActions.failGetSpesificUser(error.response.data.message))
        );
    } catch (error: any) {
        
    }
  },
  updateDetailesSpesificUser: (dispatch: AppDispatch,user:IUser,id:stringValue) => {
    try {
      dispatch(adminActions.startUpdateDetailesSpesificUser());
      API.put(`users/${id}`,user)
        .then((res) => dispatch(adminActions.successUpdateDetailesSpesificUser(res.data)))
        .catch((error) =>
          dispatch(adminActions.failUpdateDetailesSpesificUser(error.response.data.message))
        );
    } catch (error: any) {
        
    }
  },
  deleteSpesificUser: (dispatch: AppDispatch,id:stringValue) => {
    try {
      dispatch(adminActions.startDeleteSpesificUser());
      API.delete(`users/${id}`)
        .then((res) => dispatch(adminActions.successDeleteSpesificUser(res.data)))
        .catch((error) =>
          dispatch(adminActions.failDeleteSpesificUser(error.response.data.message))
        );
    } catch (error: any) {
        
    }
  },
  addNewProduct: (dispatch: AppDispatch,product:IProduct) => {
    try {
      dispatch(adminActions.startAddNewProduct());
      API.post("products",product)
        .then((res) => dispatch(adminActions.successAddNewProduct(res.data))).then(res=>alert('create product seccess'))
        .catch((error) =>
          dispatch(adminActions.failAddNewProduct(error.response.data.message))
        );
    } catch (error: any) {
        
    }
  },
  updateDetailesSpesificProduct: (dispatch: AppDispatch,product:IProduct,id:stringValue) => {
    try {
      dispatch(adminActions.startUpdateDetailesSpesificProduct());
      API.put(`products/${id}`,product)
        .then((res) => dispatch(adminActions.successUpdateDetailesSpesificProduct(res.data)))
        .catch((error) =>
          dispatch(adminActions.failUpdateDetailesSpesificProduct(error.response.data.message))
        );
    } catch (error: any) {
        
    }
  },
  deleteSpesificProduct: (dispatch: AppDispatch,id:stringValue) => {
    try {
      dispatch(adminActions.startDeleteSpesificProduct());
      API.delete(`products/${id}`)
        .then((res) => dispatch(adminActions.successDeleteSpesificProduct(res.data)))
        .catch((error) =>
          dispatch(adminActions.failDeleteSpesificProduct(error.response.data.message))
        );
    } catch (error: any) {
        
    }
  },
  getOrders: (dispatch: AppDispatch) => {
    try {
      dispatch(adminActions.startGetOrders());
      API.get("orders")
        .then((res) => dispatch(adminActions.successGetOrders(res.data)))
        .catch((error) =>
          dispatch(adminActions.failGetOrders(error.response.data.message))
        );
    } catch (error: any) {
        
    }
  },
  updateDetailesSpesificOrder: (dispatch: AppDispatch,order:IOrder,id:stringValue) => {
    try {
      dispatch(adminActions.startUpdateDetailesSpesificOrder());
      API.put(`orders/${id}`,order)
        .then((res) => dispatch(adminActions.successUpdateDetailesSpesificOrder(res.data)))
        .catch((error) =>
          dispatch(adminActions.failUpdateDetailesSpesificOrder(error.response.data.message))
        );
    } catch (error: any) {
        
    }
  }

};



