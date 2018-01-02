const TESTING = 'TESTING'
const BASIC_AUTH = 'BASIC_AUTH'

export function testingActionCreator () {
  return {
    type: TESTING
  }
}
export function authAction (bool) {
  return {
    type: BASIC_AUTH,
    auth: bool
  }
}

const initialState = {
  isAuth: false
}
export function application (state = initialState, action) {
  switch (action.type) {
    case TESTING:
      return {
        ...state,
        testing: true
      }
    case BASIC_AUTH:
      return {
        ...state,
        isAuth: action.auth
      }
    default:
      return state
  }
}
