import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

import { fr } from "./fr";
import { en } from "./en";
import { Setup } from "../setup";


interface ILocalization extends LocalizedStringsMethods {
  //The words that we used in our app 
  Email:string;
  Password :string;
  Remember_me:string;
  Submit:string;
  Forget_your_password:string;
  Dont_have_an_account:string;
  Sign_up:string;
  Sign_in:string;
  Resend_email_confirmation:string;
  Please_enter_your_email:string;
  Please_enter_your_password:string;
  Your_email_is_not_correct:string;
}

//create our languages
export const Localization: ILocalization = new LocalizedStrings({
  fr: fr,
  en: en,
});
//defulat language
Localization.setLanguage(Setup.internationalization.flag);
