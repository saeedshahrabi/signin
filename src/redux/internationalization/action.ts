import { LangType } from "./types";
import {TInternationalization} from './../../config/setup'

export function actionChangeAppFlag(internationalization: TInternationalization) {
  return {
    type: LangType.CHANGE_APP_FLAG,
    payload: internationalization
  }
}

