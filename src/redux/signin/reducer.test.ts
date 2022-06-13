import { signinReducer } from "./reducer";
import { signin } from "./types";

describe("signin reduer", () => {
  it("when the request is send", () => {
    const action = { type: signin.SIGNIN_REQUEST };
    const expectedState = { loading: true, signin: [], error: "" };
    expect(signinReducer(undefined, action)).toEqual(expectedState);
  });
  it("when the request is success", () => {
    const action = { type: signin.SIGNIN_SUCCESS };
    const expectedState = {
      loading: false,
      signin: undefined,
      error: "",
    };
    expect(signinReducer(undefined, action)).toEqual(expectedState);
  });
  it("when the request is faild", () => {
    const action = { type: signin.SIGNIN_FAILURE };
    const expectedState = {
      loading: false,
      signin: [],
      error: undefined,
    };
    expect(signinReducer(undefined, action)).toEqual(expectedState);
  });
});
describe("snapshot testing for reducer", () => {
  test("get snap shot of signin reducer", () => {
    const action = { type: signin };
    expect(signinReducer(undefined, action)).toMatchSnapshot();
  });
});
