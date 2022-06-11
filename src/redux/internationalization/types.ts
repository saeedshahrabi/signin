import { Action } from "redux";
import { TInternationalization } from "../../config/setup";


export enum LangType {
  CHANGE_APP_FLAG="CHANGE_APP_FLAG"
}

export interface IInternationalizationAction extends Action {
  payload: TInternationalization;
}