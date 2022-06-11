import { signin } from "./types";

const initialState = {
  loading: false,
  signin: [],
  error: "",
};

export const signinReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case signin.SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case signin.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        signin: action.payload,
      };
    case signin.SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
