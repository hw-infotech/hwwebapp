import {
  fireEvent,
  getAllByRole,
  getByTestId,
  getByText,
  render,
  screen,
  within,
} from "@testing-library/react";
import renderer from "react-test-renderer";
import Job_Preview from "../job_preview";

describe("testing preview job", () => {
  test("Testing on Job preview", () => {
    const tree = renderer.create(<Job_Preview />);
    expect(tree).toMatchSnapshot();
  });
});

