import { IProduce } from "immer/dist/internal";
import { AppDispatch } from "..";
import { ItemOfCart, IUser, stringValue } from "../../@types";
import { API } from "../../api";
import { userActionsName } from "./../constances/userActionsName";

export const userActions = {
  startGetProfileUser: () => ({
    type: userActionsName.START_GET_USER_PROFILE,
  }),
  successGetProfileUser: (payload: any) => ({
    type: userActionsName.SUCCESS_GET_USER_PROFILE,
    payload,
  }),
  failGetProfileUser: (payload: stringValue) => ({
    type: userActionsName.FAIL_GET_USER_PROFILE,
    payload,
  }),
  startUpdateProfileUser: () => ({
    type: userActionsName.START_GET_USER_PROFILE,
  }),
  successUpdateProfileUser: (payload: any) => ({
    type: userActionsName.SUCCESS_GET_USER_PROFILE,
    payload,
  }),
  failUpdateProfileUser: (payload: stringValue) => ({
    type: userActionsName.FAIL_GET_USER_PROFILE,
    payload,
  }),

  startUpdateUserCart: () => ({ type: userActionsName.START_UPDATE_USER_CART }),
  successUpdateUserCart: (payload: any) => ({
    type: userActionsName.SUCCESS_UPDATE_USER_CART,
    payload,
  }),
  failUpdateUserCart: (payload: stringValue) => ({
    type: userActionsName.FAIL_UPDATE_USER_CART,
    payload,
  }),

  startDeleteItemOfCart: () => ({
    type: userActionsName.START_DELETE_USER_CART,
  }),
  successDeleteItemOfCart: (payload: any) => ({
    type: userActionsName.SUCCESS_DELETE_USER_CART,
    payload,
  }),
  failDeleteItemOfCart: (payload: stringValue) => ({
    type: userActionsName.FAIL_DELETE_USER_CART,
    payload,
  }),
};

export const userMethoads = {
  getProfileUser: (dispatch: AppDispatch) => {
    try {
      dispatch(userActions.startGetProfileUser());
      API.get("users/profile")
        .then((res) =>
          dispatch(userActions.successGetProfileUser(res.data))
        )
        .catch((error) =>
          dispatch(userActions.failGetProfileUser(error.response.data.message))
        );
    } catch (error: any) {}
  },

  updateProfileUser: (dispatch: AppDispatch, profile: IUser) => {
    try {
      dispatch(userActions.startGetProfileUser());
      API.put("users/profile", profile)
        .then((res) =>
          dispatch(userActions.successUpdateProfileUser(res.data.users))
        )
        .catch((error) =>
          dispatch(
            userActions.failUpdateProfileUser(error.response.data.message)
          )
        );
    } catch (error: any) {}
  },
  updateUserCart: (dispatch: AppDispatch, itemOfcart: ItemOfCart) => {
    try {
      dispatch(userActions.startGetProfileUser());
      API.put("users/profile/cart", itemOfcart)
        .then((res) =>
          dispatch(userActions.successUpdateUserCart(res.data))
        )
        .catch((error) =>
          dispatch(userActions.failUpdateUserCart(error.response.data.message))
        );
    } catch (error: any) {}
  },
  deleteItemOfCart: (dispatch: AppDispatch, id: stringValue) => {
    try {
      dispatch(userActions.startGetProfileUser());
      API.delete(`users/profile/cart?productId=${id}`)
        .then((res) =>
          dispatch(userActions.successDeleteItemOfCart(res.data))
        )
        .catch((error) =>
          dispatch(
            userActions.failDeleteItemOfCart(error.response.data.message)
          )
        );
    } catch (error: any) {
      
    }
  },
};
