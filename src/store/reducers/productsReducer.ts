import { actionsType, IStateOfProduct } from "../../@types";
import { productsMethods } from "../../api/productsMethod";
import { adminActionsName } from "../constances/adminActionsName";
import { productsActionsName } from "../constances/productsactionsName";

const productsData: IStateOfProduct = {
  loading: false,
  error: "",
  products: { products: [], page: 0, pages: 0 },
  categories: [],
  topProducts: [],
  Product: undefined,
  ProductsOfCategory: { products: [], page: 0, pages: 0 },
};
export const ProductsReducer = (
  stateOfProduct = productsData,
  action: any
): IStateOfProduct => {
  switch (action.type) {
    case productsActionsName.START_GET_ALL_PRODUCTS:
      return { ...stateOfProduct, loading: true };
    case productsActionsName.SUCCESS_GET_ALL_PRODUCTS:
      return { ...stateOfProduct, products: action.payload, loading: false };
    case productsActionsName.FAIL_GET_ALL_PRODUCTS:
      return { ...stateOfProduct, error: action.payload, loading: false };
    case productsActionsName.START_GET_TOP_PRODUCTS:
      return { ...stateOfProduct, loading: true };
    case productsActionsName.SUCCESS_GET_TOP_PRODUCTS:
      return { ...stateOfProduct, topProducts: action.payload, loading: false };
    case productsActionsName.FAIL_GET_TOP_PRODUCTS:
      return { ...stateOfProduct, error: action.payload, loading: false };
    case productsActionsName.START_GET_ALL_GATERGORIES:
      return { ...stateOfProduct, loading: true };
    case productsActionsName.SUCCESS_GET_ALL_GATERGORIES:
      return { ...stateOfProduct, categories:action.payload, loading: false };
    case productsActionsName.FAIL_GET_ALL_GATERGORIES:
      return { ...stateOfProduct,  error: action.payload, loading: false };
    case productsActionsName.SUCCESS_GET_SPECIFIC_PRODUCT_BY_ID:
      return { ...stateOfProduct, Product: action.payload };
    case productsActionsName.FAIL_GET_SPECIFIC_PRODUCT_BY_ID:
      return { ...stateOfProduct, error: action.payload,loading: false };
    case productsActionsName.START_GET_SPECIFIC_GATEGORY_BY_NAME:
      return { ...stateOfProduct, loading: true };
    case productsActionsName.SUCCESS_GET_SPECIFIC_GATEGORY_BY_NAME:
      return { ...stateOfProduct, ProductsOfCategory: action.payload };
    case productsActionsName.FAIL_GET_SPECIFIC_GATEGORY_BY_NAME:
      return { ...stateOfProduct, error: action.payload ,loading: false};
    case productsActionsName.START_ADD_PRODUCT_REVIEW:
      return { ...stateOfProduct, loading: true };
    case productsActionsName.SUCCESS_ADD_PRODUCT_REVIEW:
      return { ...stateOfProduct, Product: action.payload };
    case productsActionsName.FAIL_ADD_PRODUCT_REVIEW:
      return { ...stateOfProduct, error: action.payload,loading: false };
      
   

    default:
      return stateOfProduct;
  }
}
