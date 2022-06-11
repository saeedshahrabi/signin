import { IInternationalizationAction, LangType } from "./types";
import { Setup, TInternationalization } from "../../config/setup";

export function LanguageReducer(state: TInternationalization,action: IInternationalizationAction): TInternationalization {
  switch (action.type) {
    case LangType.CHANGE_APP_FLAG:
      return action.payload;
  }
  if (state) {
    return state;
  }
  return Setup.internationalization;
}
