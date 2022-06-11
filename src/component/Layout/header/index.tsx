import { useDispatch, useSelector } from "react-redux";
import { actionChangeAppFlag } from "../../../redux/internationalization/action";
import { RootState } from "../../../redux/store";

const Header: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const store:any = useSelector((state: RootState) => state);


  const changeLang = (language: String) => {
    const storedFlag = store.LanguageReducer.flag;
    if(storedFlag ===language ) return;
    if (language === "en") {
      dispatch(actionChangeAppFlag({ language: "english", flag: "en" }));
    } else {
      dispatch(actionChangeAppFlag({ language: "french", flag: "fr" }));
    }
  };
  return (
    <header className="">
      <nav>
        <div className="language">
          <span onClick={() => changeLang("en")}>En </span>
          <span> / </span>
          <span onClick={() => changeLang("fr")}> Fr</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
