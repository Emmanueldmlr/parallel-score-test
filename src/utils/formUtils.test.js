import {validateEmailInput} from './formUtils'

describe("validateEmailInput describe statement", ()=>{
  test("validateEmailInput function should pass on correct input", ()=> {
      const email = 'joe@joe.com'
      expect(validateEmailInput(email)).toBe(true)
  })
  test("validateEmailInput function should fail on incorrect input", ()=> {
      const email = 'joe'
      expect(validateEmailInput(email)).not.toBe(true)
  })
})