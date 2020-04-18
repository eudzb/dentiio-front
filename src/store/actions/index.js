import axios from 'axios'

const CLINICAL_CASES = 'http://localhost/api/clinical_cases'

export const LOG_USER = 'LOG_USER'
export const REGISTER_USER = 'REGISTER_USER'
export const CASES_LIST = 'CASES_LIST'

export const CARD_STATE = 'CARD_STATE'

export const cardCheck = (card) => {
  const action = {
    type: CARD_STATE,
    cardstate: card.status,
  }

  return action
}

export const logUser = (logger) => {
  const action = {
    type: LOG_USER,
    pseudo: logger.pseudo,
    password: logger.password
  }

  return action
}

export const registerUser = (register) => {
  const action = {
    type: REGISTER_USER,
    username: register.pseudo,
    email: register.email,
    password: register.password,
    function: register.function
  }

  return action
}

export const getCases = () => {
  return (dispatch) => {
    return axios.get(CLINICAL_CASES)
      .then(res => {
        dispatch({ type: CASES_LIST, datas: res.data['hydra:member'] })
      })
      .catch(err => err)
  }
}
