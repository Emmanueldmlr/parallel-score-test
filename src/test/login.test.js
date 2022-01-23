
import { render, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';

describe("login describe statement", ()=>{
  test("login form should be in the document", () => {
    const component = render(<Login/>);
    const inputNode = component.getByText("Email")
    expect(inputNode).toBeInTheDocument()
  })
 
  test("email input should accept text", () => {
    const component = render(<Login/>);
    const emailInputNode = component.getByLabelText("Email")
    expect(emailInputNode.value).toMatch("")
    fireEvent.change(emailInputNode, {target: {value: 'testing'}})
    expect(emailInputNode.value).toMatch("testing")
    const errorMessageNode = component.getByText("Email is required and must be valid.")
    expect(errorMessageNode).toBeInTheDocument()
    fireEvent.change(emailInputNode, {target: {value: 'testing@gmailcom'}})
    expect(errorMessageNode).not.toBeInTheDocument()
  })

  test("Password input should accept text", () => {
    const component = render(<Login/>);
    const passwordInputNode = component.getByLabelText("Password")
    expect(passwordInputNode.value).toMatch("")
    fireEvent.change(passwordInputNode, {target: {value: ''}})
    expect(passwordInputNode.value).toMatch("")
    const errorMessageNode = component.getByText("Password is required.")
    expect(errorMessageNode).toBeInTheDocument()
    fireEvent.change(passwordInputNode, {target: {value: 'testing'}})
    expect(errorMessageNode).not.toBeInTheDocument()
  })

})