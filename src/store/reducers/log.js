import { LOG_USER, REGISTER_USER } from '../actions'
import { loginCheck } from '../../services/LoginCheck'
import jwt_decode from 'jwt-decode'

const INIT_STATE = ''

export const User = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOG_USER :
      var tokenUser = loginCheck(action.pseudo, action.password)
console.log('TEST :', tokenUser)
      if (tokenUser !== '') {
        var details = jwt_decode(tokenUser)

        return {
          details: details,
          connected: true
        }
      } else {
        return {
          connected: false
        }
      }

    case REGISTER_USER :
      return {
        username: action.username,
        email: action.email,
        password: action.password,
        function: action.function,
        cgu: action.cgu,
        connected: false
      }

    default :
      return state
  }
}
