import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import {
  APP_FORM_CONTROL,
  FormControl,
} from "../../component/Formik/FormControl/FormControl";
import * as Yup from "yup";
import { Regex } from "../../assets/regex";
import { ToastContainer } from "react-toastify";
import { signinAction } from "../../redux/signin/action";
import { useSelector } from "react-redux";
import Loading from "../../component/Loading";
import { AppDispatch, RootState } from "../../redux/store";
import { SigninModel } from "../../redux/signin/model";
import { Localization } from "../../config/translate/localization";

const Signin: React.FunctionComponent = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  //these are initial value of elements of our form
  const signInValue = {
    email: "",
    password: "",
    remember: false,
  };

  // Validation part for our form
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .required(Localization.Please_enter_your_email)
      .matches(Regex.email, Localization.Your_email_is_not_correct),
    password: Yup.string().required(Localization.Please_enter_your_password),
  });

  //sending form and check API
  const submitForm = (e: SigninModel) => {
    dispatch(signinAction(e));
  };
  return (
    <section className="signin">
      <div className="signin_container">
        <div className="signin_content">
          <h1>{Localization.Sign_in}</h1>
          <Formik
            initialValues={signInValue}
            onSubmit={(e) => submitForm(e)}
            validationSchema={SignupSchema}
          >
            {() => (
              <Form method="post">
                <FormControl
                  control={APP_FORM_CONTROL.INPUT}
                  label={Localization.Email}
                  name="email"
                />
                <FormControl
                  control={APP_FORM_CONTROL.INPUT}
                  label={Localization.Password}
                  name="password"
                  type="password"
                  autoComplete="on"
                />
                <FormControl
                  control={APP_FORM_CONTROL.CHECKBOX}
                  label={`${Localization.Remember_me}?`}
                  name="remember"
                  data-testid="checkbox-input"
                />
                <button
                  data-testid="submit-button"
                  type="submit"
                >
                  {state.signinReducer.loading ? (
                    <Loading />
                  ) : (
                    Localization.Submit
                  )}
                </button>
              </Form>
            )}
          </Formik>
          <div className="signin_links">
            <div>
              <strong>{Localization.Forget_your_password}</strong>
            </div>
            <div>
              {Localization.Dont_have_an_account}?{" "}
              <strong>{Localization.Sign_up}</strong>
            </div>
            <div>
              <strong>{Localization.Resend_email_confirmation}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* for showing notification */}
      <ToastContainer autoClose={50000} />
    </section>
  );
};

export default Signin;
