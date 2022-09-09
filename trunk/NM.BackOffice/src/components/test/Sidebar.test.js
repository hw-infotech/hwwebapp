import {
  fireEvent,
  getAllByRole,
  getByTestId,
  getByText,
  render,
  screen,
  within,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Sidebar from "../Sidebar";

describe("Sidebar testing", () => {
  test("Sidebar snapshot testing", () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
