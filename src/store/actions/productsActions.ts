 import { productsActionsName } from "../constances/productsactionsName";
import { API } from "../../api";
import { IAddReview, ICategories, IErrorAction, IGetCategoriesAction, IGetProductAction, IGetProductsAction, IGetTopProductsAction, IProduct, IProducts, IReview, IStartAction, stringValue,  } from "../../@types";
import { AppDispatch } from "..";

export const productsAction = {
  startGetAllProduct: ():IStartAction => ({
    type: productsActionsName.START_GET_ALL_PRODUCTS,
  }),
  successGetAllProduct: (payload: IProducts) :IGetProductsAction=> ({
    type: productsActionsName.SUCCESS_GET_ALL_PRODUCTS,
    payload,
  }),

  failGetAllProduct: (payload:string):IErrorAction => ({
    type: productsActionsName.FAIL_GET_ALL_PRODUCTS,
    payload
  }),
 startGetAllGategories: ():IStartAction => ({
    type: productsActionsName.START_GET_ALL_GATERGORIES,
  }),
   successGetAllGategories: (payload: ICategories):IGetCategoriesAction => ({
    type: productsActionsName.SUCCESS_GET_ALL_GATERGORIES,
    payload
  }),
  failGetAllGategories: (payload:stringValue):IErrorAction => ({
    type: productsActionsName.FAIL_GET_ALL_GATERGORIES,
    payload
  }),

  startGetTopProducts: ():IStartAction => ({
    type: productsActionsName.START_GET_TOP_PRODUCTS,
  }),
  successGetTopProducts: (payload: IProducts):IGetTopProductsAction => ({
    type: productsActionsName.SUCCESS_GET_TOP_PRODUCTS,
    payload,
  }),
  failGetTopProducts: (payload:stringValue):IErrorAction => ({
    type: productsActionsName.FAIL_GET_TOP_PRODUCTS,
    payload
  }),

  startGetSpecificProductById: ():IStartAction => ({
    type: productsActionsName.START_GET_SPECIFIC_PRODUCT_BY_ID,
  }),
  successGetSpecificProductById: (payload: IProduct):IGetProductAction => ({
    type: productsActionsName.SUCCESS_GET_SPECIFIC_PRODUCT_BY_ID,
    payload,
  }),
  failGetSpecificProductById: (payload:stringValue):IErrorAction => ({
    type: productsActionsName.FAIL_GET_SPECIFIC_PRODUCT_BY_ID,
    payload
  }),

  startGetSpecificGategoryByName: ():IStartAction => ({
    type: productsActionsName.START_GET_SPECIFIC_GATEGORY_BY_NAME,
  }),
  successGetSpecificGategoryByName: (payload:IProducts) => ({
    type: productsActionsName.SUCCESS_GET_SPECIFIC_GATEGORY_BY_NAME,
    payload
  }),
  failGetSpecificGategoryByName: (payload:stringValue) :IErrorAction=> ({
    type: productsActionsName.FAIL_GET_SPECIFIC_GATEGORY_BY_NAME,
    payload
  }),

  startAddSpecificProductReview: () :IStartAction=> ({
    type: productsActionsName.START_ADD_PRODUCT_REVIEW,
  }),
  successAddSpecificProductReview: (payload:IProduct):IGetProductAction => ({
    type: productsActionsName.SUCCESS_ADD_PRODUCT_REVIEW,
    payload
  }),
  failAddSpecificProductReview: (payload:stringValue):IErrorAction => ({
    type: productsActionsName.FAIL_ADD_PRODUCT_REVIEW,
    payload
  }),
};

export const productsMethods = {
  getAllProduct: (dispatch: AppDispatch) => {
    try {
      dispatch(productsAction.startGetAllProduct());
      API.get(`products`).then((res) =>
        dispatch(productsAction.successGetAllProduct(res.data.products))
      ).catch(error=> dispatch(productsAction.failGetAllProduct(error.response.data.message))
      );
  
  }catch(error:any){

  }},
  getTopProduct: (dispatch: AppDispatch) => {
    try {
      dispatch(productsAction.startGetTopProducts());
      API.get(`products/top`).then((res) =>
        dispatch(productsAction.successGetTopProducts(res.data))
      );
    } catch (error:any) {
      dispatch(productsAction.failGetTopProducts(error?.response?.data?.message));
    }
  },
  getAllGategories: (dispatch: AppDispatch) => {
    try {
      dispatch(productsAction.startGetAllGategories());
      API.get(`products/category/all`).then((res) =>
        dispatch(productsAction.successGetAllGategories(res.data.categories))
      );
    } catch (error:any) {
      dispatch(productsAction.failGetAllGategories(error.response.data.message));
    }
  },
  addProductReview: (dispatch: AppDispatch, id: string, dataOfProduct:IAddReview) => {
    try {
      dispatch(productsAction.startAddSpecificProductReview());
      API.post(`products/${id}/reviews`, dataOfProduct).catch(error=>{dispatch(productsAction.failAddSpecificProductReview(error?.response?.data?.message )); console.log(error)} );
    } catch (error) {
    }
  },
  getDataOfProduct: (dispatch: AppDispatch, id: string) => {
    try {
      dispatch(productsAction.startGetAllGategories());
      API.get(`products/${id}`).then((res) =>
        dispatch(productsAction.successGetSpecificProductById(res.data))
      );
    } catch (error:any) {
      dispatch(productsAction.failGetSpecificProductById(error.response.data.message))

    }
  },
  getProductsOfGatergory: async (dispatch: AppDispatch, nameOfCategory: string) => {
    try {
      dispatch(productsAction.startGetSpecificGategoryByName());
      let response = await API.get(`products/category/${nameOfCategory}`);
      dispatch(productsAction.successGetSpecificGategoryByName(response.data));
    } catch (error:any) {
      console.log(error.message)
    }
  }
  

}



