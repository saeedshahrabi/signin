import { toast } from "react-toastify";
import { AppDispatch } from "../store";
import { SigninModel } from "./model";
import { signinService } from "./service";
import { signin } from "./types";

export const signinAction = (data: SigninModel) => async (dispatch:AppDispatch) => {
  //at first we dispatch request and loading is true
  dispatch({ type: signin.SIGNIN_REQUEST });
  try {
    //then api will be called and if it will be success, dispatch signin succes and we get response and loading will be false 
    const response = await signinService.login(data);
    dispatch({ type: signin.SIGNIN_SUCCESS, payload: response.data });
  } catch (error:any ) {
    //if our request faild we wil dispatch SIGNIN_FAILURE and error shows with toast then loading will be flase 
    dispatch({ type: signin.SIGNIN_FAILURE, payload: error });
    toast.error(error.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};
