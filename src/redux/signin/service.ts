import { getinstance } from "../../services";
import { SigninModel } from "./model";

export const signinService = {
  login: (data: SigninModel) =>
  //post method
    getinstance()({
      method: "POST",
      url: "/login",
      data,
    }),
    // get method
    // getAirLinesById: () =>
    // getinstance()({
    //   method: "GET",
    //   url: `/login`,

    // }),
};
