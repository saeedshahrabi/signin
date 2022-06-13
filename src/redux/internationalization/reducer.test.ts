import * as React from "react";
import { LanguageReducer } from "./reducer";
import { LangType } from "./types";
describe("signin reduer", () => {

  it("when the request is send", () => {
    const action = {
      type: LangType.CHANGE_APP_FLAG,
      paylaod: { language: "english", flag: "en" },
    };
    const expectedState = { language: "english", flag: "en" };
    expect(
      LanguageReducer(
        { language: "english", flag: "en" },
        action.paylaod as any
      )
    ).toEqual(expectedState);
  });
});
