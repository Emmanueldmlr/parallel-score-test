import { render, fireEvent } from '@testing-library/react';
import FormDetails from '../components/elements/FormDetails';

describe("form details describe statement", ()=>{

  test("Form title should be in the document", () => {
    const component = render(<FormDetails title="Login"/>);
    const titleNode = component.getByText("Login")
    expect(titleNode).toBeInTheDocument()
  })

  test("Form sub title should be in the document", () => {
    const component = render(<FormDetails title="Kindly login to your account"/>);
    const subTitleNode = component.getByText("Kindly login to your account")
    expect(subTitleNode).toBeInTheDocument()
  })

  test("should be able to submit form", () => {
    const mockFn = jest.fn()
    const {getByRole} = render(<FormDetails onSubmit={mockFn}/>)
    const buttonNode = getByRole("button")
    fireEvent.click(buttonNode)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

})