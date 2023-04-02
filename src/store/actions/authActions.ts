import { AppDispatch } from "..";
import {
  IErrorAction,
  ISignInAction,
  ISignOutAction,
  ISignUpAction,
  IStartAction,
  IUser,
  IUserInformation,
} from "../../@types";
import { API } from "../../api";
import { AuthActionsName } from "../constances/authActionsName";

export const authActions = {
  startSignIn: () => ({
    type: AuthActionsName.START_SIGNIN,
  }),
  successSignIn: (payload: IUser): ISignInAction => ({
    type: AuthActionsName.SUCCESS_SIGNIN,
    payload,
  }),
  failSignIn: (payload: string): IErrorAction => ({
    type: AuthActionsName.FAIL_SIGNIN,
    payload,
  }),
  startSignUp: () => ({
    type: AuthActionsName.START_SIGNUP,
  }),
  successSignUp: (payload: IUser): ISignUpAction => ({
    type: AuthActionsName.SUCCESS_SIGNUP,
    payload,
  }),
  failSignUp: (payload: string): IErrorAction => ({
    type: AuthActionsName.FAIL_SIGNUP,
    payload,
  }),
  SignOut: () => ({
    type: AuthActionsName.SIGNOUT,
  }),
};
export const authMethoad = {
  singIn: (dispatch: AppDispatch, userInformation: IUserInformation) => {
    try {
      dispatch(authActions.startSignIn());
      API.post("users/login", userInformation)
        .then((res) => dispatch(authActions.successSignIn(res.data)))
        .catch((error) =>
          dispatch(authActions.failSignIn(error.response.data.message))
        );
    } catch (error: any) {}
  },
  singUp: (dispatch: AppDispatch, userInformation: IUserInformation) => {
    try {
      dispatch(authActions.startSignIn());
      API.post("users/signup", userInformation)
        .then((res) => dispatch(authActions.successSignIn(res.data)))
        .catch((error) =>
          dispatch(authActions.failSignIn(error.response.data.message))
        );
    } catch (error: any) {}
  },
  signOut:(dispatch: AppDispatch, )=>{
  dispatch(authActions.SignOut())
  }
};
