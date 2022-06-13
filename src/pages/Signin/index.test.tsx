import Signin from ".";
import { create } from "react-test-renderer";
jest.mock("./index.tsx", () => jest.fn());

describe("signin component", () => {
    const renderComponent = () => create(<Signin />);
    it("renders correctly", () => {
        const component = renderComponent().toJSON();
        expect(component).toMatchSnapshot()
  });

});
