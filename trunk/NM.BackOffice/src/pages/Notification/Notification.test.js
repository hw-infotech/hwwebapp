import {
  fireEvent,
  getAllByRole,
  getByTestId,
  getByText,
  render,
  screen,
  within,
} from "@testing-library/react";
import Notification from "./notification";
import renderer from "react-test-renderer";

describe("Testing the Notification", () => {
  test("Notification", () => {
    render(<Notification />);
    const items = screen.findAllByRole("button");
  });
  it("render all", () => {
    const tree = renderer.create(<Notification />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
