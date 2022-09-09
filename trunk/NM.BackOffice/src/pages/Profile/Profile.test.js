import {
  fireEvent,
  getAllByRole,
  getByTestId,
  getByText,
  render,
  screen,
  within,
} from "@testing-library/react";
import Profile from "./Profile";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

describe("Profile testing", () => {
  test("testing the UI of Profile", () => {
    const profile = renderer
      .create(
        <Provider>
          <Profile />
        </Provider>
      )
      .toJSON();
    expect(profile).toMatchSnapshot();
  });
});
