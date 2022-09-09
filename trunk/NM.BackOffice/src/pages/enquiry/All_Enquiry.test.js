import {
  fireEvent,
  getAllByRole,
  getByTestId,
  getByText,
  render,
  screen,
  within,
} from "@testing-library/react";
import All_Enquiry from './All_Enquiry'

describe("All enquiry", () => {
  //  it("Check button",()=>{
  //        const {getByTestId}=render(<All_Enquiry/>);
  //        const button=getByTestId('input-field')
  //        expect(button).toBeTruthy()
  //  })
  test("renders three buttons", async () => {
    render(<All_Enquiry />);
    const items = await screen.findAllByRole("button");
    expect(items).toHaveLength(10);
  });
  test("Test the Modal", () => {
    const handleClose = jest.fn();
    const { container } = render(<All_Enquiry />);
    container.querySelector(".modal");
    //expect(container.firstChild).toMatchSnapshot();
    // expect(screen.getByText("tell me")).toBeInTheDocument();
    // fireEvent.click(getByText(/tell me/i));
  });
});
// describe("This is the success story component", () => {
//     test("Checkinput field", () => {
//       render(<Success_Stories />);
//       const testfield = "ganeshsharma";
//       expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
//     });
//   });
