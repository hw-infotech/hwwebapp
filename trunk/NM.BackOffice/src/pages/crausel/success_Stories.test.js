import {
  fireEvent,
  getAllByRole,
  getByTestId,
  getByText,
  render,
  screen,
  within,
  cleanup,
} from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import Success_Stories from "./success_Stories";
import userEvent from "@testing-library/user-event";
import Enzyme from "enzyme";
import { shallow, configure, mount, EnzymeAdapter } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });
describe("render the success story", () => {
  it("button checker", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Success_Stories></Success_Stories>, div);
  });
  afterEach(cleanup);
  // it("render button correnctly", () => {
  //   const { getByTestId } = render(<Success_Stories />);
  //   expect(getByTestId("butoon1").toHaveTextContent("Edit"));
  // });
  afterEach(cleanup);
  it("render all", () => {
    const tree = renderer.create(<Success_Stories />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

//describe("Expand body button", () => {
// it("should render OrderModuleBody when clicked", () => {
//   render(<Success_Stories />);
//   const button = screen.getByTestId("butoon1");
//   userEvent.click(button);
//   expect(screen.getByText("Edit")).toBeInTheDocument();
// });

//   configure({ adapter: new Adapter() });
//   test("message box", () => {
//     const wrapper = mount(
//       <div id="root">
//         <Success_Stories />
//       </div>
//     );
//     const { portal } = wrapper.find(ReactModal).first();
//     const wrapper1 = getPortalWrapper({ isOpen: true });
//     expect(wrapper1.find(".my-modal-window").exists()).toEqual(true);
//     return new ReactWrapper(portal, true);
//   });
// });
