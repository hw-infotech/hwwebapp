import {
  fireEvent,
  getAllByRole,
  getByTestId,
  getByText,
  render,
  screen,
  within,
} from "@testing-library/react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import renderer from "react-test-renderer";
import  CapitalizeFirstLetter  from "../first_letter_capital";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
describe("capitalletter", () => {
  //const captilize = jest.fn();
  //   test("First letter", () => {
  //     render();
  //     const myMock1 = jest.fn();
  //     const a = new myMock1();
  //   });
  test("Should render character name", () => {
    const capitalize=CapitalizeFirstLetter("this is the third react app of my life whatever ,i learned from this test is absolutly great")
    // let component = shallow(<CapitalizeFirstLetter />).getInstance();
    // //let tree = component.CapitalizeFirstLetter("the us");
    expect(capitalize).toBe("This is the third react app of my life whatever ,i learned from this test is absolutly great");
  });
});
