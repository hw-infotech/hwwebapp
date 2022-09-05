import { getAllByRole, render, screen, within } from "@testing-library/react";
import Success_Stories from "./success_Stories";

describe("This is the success story component", () => {
  test("Checkinput field", () => {
   render(<Success_Stories/>);
    const testfield = "ganeshsharma";
    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
  });
});
