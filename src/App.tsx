import { Route, BrowserRouter, Routes, Outlet, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Signin from "./pages/Signin";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import NoMatch from "./pages/NoMatch";
import { Localization } from "./config/translate/localization";
import Layout from "./component/Layout";

const App = () => {
  const store: any = useSelector((state: RootState) => state);

  // set language on language change and on init
  const currentFlag = Localization.getLanguage();
  const storedFlag = store.LanguageReducer.flag;

  if (currentFlag !== storedFlag) {
    if (store.LanguageReducer.flag === "fr") {
      Localization.setLanguage("fr");
    } else {
      Localization.setLanguage("en");
    }
  }

  return (
    // our routes
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="signin" element={<Signin />} />
            <Route path="/" element={<Navigate replace to="/signin" />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
  );
};

export default App;
