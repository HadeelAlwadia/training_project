import { IDetailesOfOrder, IOrder, IOrders } from "../../@types";
import { orderActionsName } from "../constances/orderActionsName";

interface IOrdersData {
  error: string;
  loading: boolean;
  orders: IOrders;
  order: IOrder|{};
}
const ordersData: IOrdersData = {
  error: "",
  loading: false,
  orders: [],
  order: {}
};
export const ordersReducer = (
  orderState = ordersData,
  action: any
): IOrdersData => {
  switch (action.type) {
    case orderActionsName.START_ADD_ORDER:
      return { ...orderState, loading: true, error: "" };
    case orderActionsName.SUCCESS_ADD_ORDER:
      return { ...orderState, order: action.payload };
    case orderActionsName.FAIL_ADD_ORDER:
      return { ...orderState, loading: false, error: action.payload };

    case orderActionsName.START_GET_SPESIFIC_ORDER:
      return { ...orderState, loading: true, error: "" };
    case orderActionsName.SUCCESS_GET_SPESIFIC_ORDER:
      return { ...orderState, order: action.payload };
    case orderActionsName.FAIL_GET_SPESIFIC_ORDER:
      return { ...orderState, loading: false, error: action.payload };

    case orderActionsName.START_GET_USER_ORDERS:
      return { ...orderState, loading: true, error: "" };
    case orderActionsName.SUCCESS_USER_ORDERS:
      return { ...orderState, orders: action.payload };
    case orderActionsName.FAIL_USER_ORDERS:
      return { ...orderState, loading: false, error: action.payload };

    default:
      return orderState
   }
};
