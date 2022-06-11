
import { combineReducers } from "redux";
import { LanguageReducer } from "./internationalization/reducer";
import { signinReducer } from "./signin/reducer";


export const RootReducer = combineReducers({
  signinReducer,
  LanguageReducer
});
