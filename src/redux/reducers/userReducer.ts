import { Reducer } from 'react'
import { SET_USER } from '../types'

export type UserState = {
  firstName: string
}

const initialState: UserState = {
  firstName: '',
}

type ActionType = {
  /* eslint no-global-assign: "error" */
  readonly type: typeof SET_USER
  readonly payload: any
}

const resourceReducer: Reducer<UserState, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
export default resourceReducer
