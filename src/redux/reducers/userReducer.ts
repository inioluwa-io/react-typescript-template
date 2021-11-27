import { Reducer } from 'react'
import { FETCH_USER } from '../types'

type State = {
  firstName: string
}

const initialState: State = {
  firstName: '',
}

type ActionType = {
  /* eslint no-global-assign: "error" */
  readonly type: typeof FETCH_USER
  readonly payload: any
}

const resourceReducer: Reducer<State, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        firstName: action.payload,
      }
    default:
      return state
  }
}
export default resourceReducer
