import {
  fireEvent,
  getAllByRole,
  getByTestId,
  getByText,
  render,
  screen,
  within,
} from "@testing-library/react";
import Success_Stories from "./success_Stories";
import userEvent from "@testing-library/user-event";

describe("Expand body button", () => {
  it("should render OrderModuleBody when clicked", () => {
    render(<Success_Stories />);
    const button = screen.getByTestId("butoon1");
    userEvent.click(button);
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });
});
