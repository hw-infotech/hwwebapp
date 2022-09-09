import Enzyme from "enzyme";
import {
  fireEvent,
  getAllByRole,
  getByTestId,
  getByText,
  render,
  screen,
  within,
} from "@testing-library/react";
import { Input } from "../commoninputfield";

describe("Commoninput field test", () => {
  test("test the field", () => {
    render(<Input />);
    const intutt = screen.getByTestId("input-field");
    expect(intutt).toBe("dkdkd");
  });
});
