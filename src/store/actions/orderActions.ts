import { AppDispatch } from "./../index";
import { IOrder, IOrders, stringValue } from "../../@types";
import { orderActionsName } from "../constances/orderActionsName";
import { API } from "../../api";

const orderActions = {
  startAddOrder: () => ({ type: orderActionsName }),
  successAddOrder: (payload: IOrders) => ({ type: orderActionsName, payload }),
  failAddOrder: (payload: stringValue) => ({ type: orderActionsName, payload }),

  startGetUserOrders: () => ({ type: orderActionsName.START_GET_USER_ORDERS }),
  successGetUserOrders: (payload: IOrders) => ({
    type: orderActionsName.SUCCESS_USER_ORDERS,
    payload,
  }),
  failGetUserOrders: (payload: stringValue) => ({
    type: orderActionsName.FAIL_USER_ORDERS,
    payload,
  }),

  startGetSpesificOrder: () => ({
    type: orderActionsName.START_GET_SPESIFIC_ORDER,
  }),
  successGetSpesificOrder: (payload: IOrder) => ({
    type: orderActionsName.SUCCESS_GET_SPESIFIC_ORDER,
    payload,
  }),
  failGetSpesificOrder: (payload: stringValue) => ({
    type: orderActionsName.FAIL_GET_SPESIFIC_ORDER,
    payload,
  }),
};

export const orderMethoad = {
  AddOrder: (dispatch: AppDispatch, order: IOrder) => {
    try {
      orderActions.startAddOrder();
      API.post(`orders`, order)
        .then((res) => orderActions.successAddOrder(res.data))
        .catch((error) =>
          orderActions.failAddOrder(error.response.data.massege)
        );
    } catch (error) {}
  },

  getUserOrders: (dispatch: AppDispatch) => {
    try {
      orderActions.startAddOrder();
      API.get("orders/myorders")
        .then((res) => orderActions.successGetUserOrders(res.data))
        .catch((error) =>
          orderActions.failGetUserOrders(error.response.data.massege)
        );
    } catch (error) {}
  },
  getSpesificOrder: (dispatch: AppDispatch, id: stringValue) => {
    try {
      orderActions.startGetSpesificOrder();
      API.get(`api/orders/${id}`)
        .then((res) => orderActions.successGetSpesificOrder(res.data))
        .catch((error) =>
          orderActions.failGetSpesificOrder(error.response.data.massege)
        );
    } catch (error) {}
  }
};
